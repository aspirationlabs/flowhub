'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';
import { getAllConnectors } from '../../../../connectors/registry';
import { connectorsStore } from '../../../../state/connectors-store';
import { MCPClient } from '../../../../connectors/claudecode/mcp-client';
import { DailyResponseSchema } from '../../../../connectors/claudecode/schema';
import { z } from 'zod';
import { createKeyValueStore } from '../../../../storage/local/keyValueStore';
import { LocalStorageKey } from '../../../../storage/local/keys';

export function ClaudeCodeAnalyticsWidget() {
  const [lastSynced, setLastSynced] = useState<string | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    void checkAndSync();
  }, []);

  const calculateDateRange = () => {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const formatDate = (date: Date): string => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}${month}${day}`;
    };

    return {
      since: formatDate(thirtyDaysAgo),
      until: formatDate(today),
    };
  };

  const fetchUsageData = async (dateRange: { since: string; until: string }) => {
    const client = new MCPClient();
    const rawData = await client.getDailyUsage(dateRange.since, dateRange.until);
    const data = DailyResponseSchema.parse(rawData);

    return {
      data,
      syncedAt: new Date().toISOString(),
    };
  };

  const checkAndSync = async () => {
    const connector = getAllConnectors().find((c) => c.id === 'claudecode');

    if (!connector?.syncPeriodMs) {
      setError('claudecode connector missing syncPeriodMs');
      return;
    }

    const CachedClaudeDailySchema = z.object({
      lastSyncedAt: z.string(),
      data: DailyResponseSchema,
    });
    type CachedClaudeDaily = z.infer<typeof CachedClaudeDailySchema>;

    const store = createKeyValueStore<CachedClaudeDaily>(
      LocalStorageKey.CLAUDE_CODE_DAILY_RESPONSE,
    );
    const cached = await store.get(CachedClaudeDailySchema);

    const isStale = () => {
      if (!cached) return true;
      const last = new Date(cached.lastSyncedAt).getTime();
      return Date.now() - last > connector.syncPeriodMs!;
    };

    if (isStale()) {
      setSyncing(true);
      setError(null);

      try {
        connectorsStore.updateSyncStatus('claudecode', 'syncing');

        const dateRange = calculateDateRange();
        const { data, syncedAt } = await fetchUsageData(dateRange);
        await store.set({ lastSyncedAt: syncedAt, data });
        setLastSynced(syncedAt);
        connectorsStore.updateSyncStatus('claudecode', 'idle');
        connectorsStore.updateLastSyncedAt('claudecode', syncedAt);
      } catch (err: any) {
        setError(err.message);
        connectorsStore.updateSyncStatus('claudecode', 'error', err.message);
      } finally {
        setSyncing(false);
      }
    } else {
      if (cached) {
        setLastSynced(cached.lastSyncedAt);
      }
    }
  };

  return (
    <Card className="bg-card/30 border-card/50 backdrop-blur-md text-foreground">
      <CardHeader>
        <CardTitle>Claude Code Usage</CardTitle>
      </CardHeader>
      <CardContent className="text-foreground">
        {syncing && (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin text-foreground" />
            <span className="text-sm font-medium">Syncing Claude Code usage...</span>
          </div>
        )}

        {error && (
          <div className="space-y-2 text-sm text-foreground">
            <div className="text-red-400 font-medium">Error: {error}</div>
            <Button
              onClick={checkAndSync}
              size="sm"
              variant="outline"
              className="text-foreground"
            >
              Retry
            </Button>
          </div>
        )}

        {!syncing && !error && (
          <div className="text-sm font-medium text-foreground">
            Data last synced at{' '}
            {lastSynced ? new Date(lastSynced).toLocaleString() : 'Never'}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

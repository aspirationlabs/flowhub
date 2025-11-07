import type { LucideIcon } from 'lucide-react';

export type ConnectorId = 'claudecode' | 'test';

export type MetricKind = 'cost' | 'count';

export type ConnectorStatus = 'connected' | 'disconnected' | 'error';

export interface ConnectorDescriptor {
  id: ConnectorId;
  displayName: string;
  description: string;
  setupInstructions: string;
  icon?: LucideIcon;
  iconUrl?: string;
  requiresApiKey: boolean;
  metrics: MetricKind[];
  facets: string[];
  syncPeriodMs?: number;
}

export interface ConnectorState {
  id: ConnectorId;
  status: ConnectorStatus;
  connectedAt?: number;
  apiKey?: string;
  lastSyncedAt?: string;
  syncStatus?: 'idle' | 'syncing' | 'error';
  syncError?: string;
}

export interface UserConnectionsData {
  connections: Partial<Record<ConnectorId, ConnectorState>>;
  lastUpdated: number;
}

import type { ConnectorId, ConnectorState } from '../types/connectors';
import {
  getAllConnectorStates,
  setConnectorState,
  removeConnectorState,
} from '../storage/connectors/userConnections';

type Listener = () => void;

class ConnectorsStore {
  private listeners = new Set<Listener>();
  private cachedSnapshot: Partial<Record<ConnectorId, ConnectorState>> | null = null;

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    // Invalidate cache before notifying listeners to ensure fresh data
    this.cachedSnapshot = null;
    this.listeners.forEach((listener) => listener());
  }

  getSnapshot(): Partial<Record<ConnectorId, ConnectorState>> {
    // Return cached snapshot if available to maintain referential stability
    if (this.cachedSnapshot === null) {
      this.cachedSnapshot = getAllConnectorStates();
    }
    return this.cachedSnapshot;
  }

  connect(connectorId: ConnectorId, apiKey?: string): void {
    // Preserve existing sync metadata when connecting
    const existing = this.getSnapshot()[connectorId];
    const state: ConnectorState = {
      id: connectorId,
      status: 'connected',
      connectedAt: Date.now(),
      apiKey,
      // Preserve sync metadata if it exists
      lastSyncedAt: existing?.lastSyncedAt,
      syncStatus: existing?.syncStatus,
      syncError: existing?.syncError,
    };
    setConnectorState(state);
    this.notify();
  }

  disconnect(connectorId: ConnectorId): void {
    removeConnectorState(connectorId);
    this.notify();
  }

  updateSyncStatus(
    connectorId: ConnectorId,
    status: 'idle' | 'syncing' | 'error',
    error?: string,
  ): void {
    const existing = this.getSnapshot()[connectorId];
    if (!existing) return;

    const updated: ConnectorState = {
      ...existing,
      syncStatus: status,
      syncError: error,
    };
    setConnectorState(updated);
    this.notify();
  }

  updateLastSyncedAt(connectorId: ConnectorId, timestamp: string): void {
    const existing = this.getSnapshot()[connectorId];
    if (!existing) return;

    const updated: ConnectorState = {
      ...existing,
      lastSyncedAt: timestamp,
    };
    setConnectorState(updated);
    this.notify();
  }
}

export const connectorsStore = new ConnectorsStore();

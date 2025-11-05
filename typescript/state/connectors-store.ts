import type { ConnectorId, ConnectorState } from '../types/connectors';
import {
  getAllConnectorStates,
  setConnectorState,
  removeConnectorState,
  getConnectedCount,
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
    const state: ConnectorState = {
      id: connectorId,
      status: 'connected',
      connectedAt: Date.now(),
      apiKey,
    };
    setConnectorState(state);
    this.notify();
  }

  disconnect(connectorId: ConnectorId): void {
    removeConnectorState(connectorId);
    this.notify();
  }

  getConnectedCount(): number {
    return getConnectedCount();
  }
}

export const connectorsStore = new ConnectorsStore();

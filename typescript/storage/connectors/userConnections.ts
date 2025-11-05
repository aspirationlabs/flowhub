import type {
  ConnectorId,
  ConnectorState,
  UserConnectionsData,
} from '../../types/connectors';

const STORAGE_KEY = 'flowhub-user-connections';

function getStorageData(): UserConnectionsData {
  if (typeof window === 'undefined') {
    return { connections: {}, lastUpdated: Date.now() };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { connections: {}, lastUpdated: Date.now() };
    }
    return JSON.parse(stored) as UserConnectionsData;
  } catch (error) {
    console.error('Failed to parse user connections from localStorage:', error);
    return { connections: {}, lastUpdated: Date.now() };
  }
}

function setStorageData(data: UserConnectionsData): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save user connections to localStorage:', error);
  }
}

export function getConnectorState(connectorId: ConnectorId): ConnectorState | null {
  const data = getStorageData();
  return data.connections[connectorId] || null;
}

export function setConnectorState(state: ConnectorState): void {
  const data = getStorageData();
  data.connections[state.id] = state;
  data.lastUpdated = Date.now();
  setStorageData(data);
}

export function removeConnectorState(connectorId: ConnectorId): void {
  const data = getStorageData();
  delete data.connections[connectorId];
  data.lastUpdated = Date.now();
  setStorageData(data);
}

export function getAllConnectorStates(): Partial<Record<ConnectorId, ConnectorState>> {
  const data = getStorageData();
  return data.connections;
}

export function isConnectorConnected(connectorId: ConnectorId): boolean {
  const state = getConnectorState(connectorId);
  return state?.status === 'connected';
}

export function getConnectedCount(): number {
  const states = getAllConnectorStates();
  return Object.values(states).filter((s) => s.status === 'connected').length;
}

export function clearAllConnections(): void {
  setStorageData({ connections: {}, lastUpdated: Date.now() });
}

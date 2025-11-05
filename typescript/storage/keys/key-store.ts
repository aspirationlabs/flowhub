import type { ConnectorId } from '../../types/connectors';

export interface KeyStore {
  getKey(connectorId: ConnectorId): string | null;
  setKey(connectorId: ConnectorId, key: string): void;
  removeKey(connectorId: ConnectorId): void;
  hasKey(connectorId: ConnectorId): boolean;
  clear(): void;
}

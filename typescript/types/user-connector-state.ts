import type { ConnectorId, ConnectorDescriptor, ConnectorState } from './connectors';

export class UserConnectorState {
  constructor(
    private connectorStates: Partial<Record<ConnectorId, ConnectorState>>,
    private allConnectors: ConnectorDescriptor[],
    private connectFn: (connectorId: ConnectorId, apiKey?: string) => void,
    private disconnectFn: (connectorId: ConnectorId) => void,
  ) {}

  isConnectorConnected(id: ConnectorId): boolean {
    return this.connectorStates[id]?.status === 'connected';
  }

  getAllConnectors(): ConnectorDescriptor[] {
    return this.allConnectors.sort((a, b) => a.id.localeCompare(b.id));
  }

  getConnectorStates(): Partial<Record<ConnectorId, ConnectorState>> {
    return this.connectorStates;
  }

  connect(connectorId: ConnectorId, apiKey?: string): void {
    this.connectFn(connectorId, apiKey);
  }

  disconnect(connectorId: ConnectorId): void {
    this.disconnectFn(connectorId);
  }
}

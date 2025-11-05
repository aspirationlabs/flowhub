import type { ConnectorId, ConnectorDescriptor } from '../types/connectors';
import { CONNECTOR_CONFIG } from '../config/connectors';

const connectors = new Map<ConnectorId, ConnectorDescriptor>();

export function registerConnector(descriptor: ConnectorDescriptor): void {
  const config = CONNECTOR_CONFIG[descriptor.id];
  const merged: ConnectorDescriptor = {
    ...descriptor,
    ...config,
  };
  connectors.set(descriptor.id, merged);
}

export function getConnector(id: ConnectorId): ConnectorDescriptor | undefined {
  return connectors.get(id);
}

export function getAllConnectors(): ConnectorDescriptor[] {
  return Array.from(connectors.values());
}

export function hasConnector(id: ConnectorId): boolean {
  return connectors.has(id);
}

export function getConnectorCount(): number {
  return connectors.size;
}

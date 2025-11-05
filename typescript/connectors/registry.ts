import type { ConnectorDescriptor } from '../types/connectors';
import { exampleConnector } from './example';

const connectors: ConnectorDescriptor[] = [exampleConnector];

export function getAllConnectors(): ConnectorDescriptor[] {
  return connectors;
}

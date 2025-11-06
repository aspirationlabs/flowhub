import type { ConnectorDescriptor } from '../types/connectors';
import { exampleConnector } from './example';
import { claudecodeConnector } from './claudecode';

const connectors: ConnectorDescriptor[] = [exampleConnector, claudecodeConnector];

export function getAllConnectors(): ConnectorDescriptor[] {
  return connectors;
}

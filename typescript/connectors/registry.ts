import type { ConnectorDescriptor } from '../types/connectors';
import { claudecodeConnector } from './claudecode';

const connectors: ConnectorDescriptor[] = [claudecodeConnector];

export function getAllConnectors(): ConnectorDescriptor[] {
  return connectors;
}

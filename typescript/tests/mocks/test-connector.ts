import type { ConnectorDescriptor } from '../../types/connectors';

export const testConnector: ConnectorDescriptor = {
  id: 'test',
  displayName: 'Test Connector',
  description: 'A mock connector for testing purposes',
  setupInstructions: '/instructions/test.md',
  requiresApiKey: true,
  metrics: ['cost', 'count'],
  facets: ['model', 'tag'],
  syncPeriodMs: 5000,
};

export interface TestConnectorOverrides {
  displayName?: string;
  description?: string;
  requiresApiKey?: boolean;
  metrics?: ('cost' | 'count')[];
  facets?: string[];
  syncPeriodMs?: number;
}

export function createTestConnector(
  overrides?: TestConnectorOverrides,
): ConnectorDescriptor {
  return {
    ...testConnector,
    ...overrides,
  };
}

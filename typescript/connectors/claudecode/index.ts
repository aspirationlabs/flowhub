import type { ConnectorDescriptor } from '../../types/connectors';

export const claudecodeConnector: ConnectorDescriptor = {
  id: 'claudecode',
  displayName: 'Claude Code',
  description:
    'Uses ccusage local MCP server to pull Claude Code usage on the local machine',
  setupInstructions: 'instructions/claudecode.md',
  iconUrl: 'https://ccusage.com/logo.svg',
  requiresApiKey: false,
  metrics: ['cost', 'count'],
  facets: ['local-only'],
  syncPeriodMs: 600000, // 10 minutes
};

import { Bot } from 'lucide-react';
import type { ConnectorDescriptor } from '../../types/connectors';

export const exampleConnector: ConnectorDescriptor = {
  id: 'example',
  displayName: 'Example',
  description: 'Example connector for demonstration purposes',
  setupInstructions: 'instructions/example.md',
  icon: Bot,
  requiresApiKey: false,
  metrics: [],
  facets: [],
};

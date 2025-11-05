import { Bot } from 'lucide-react';
import type { ConnectorDescriptor } from '../../types/connectors';
import { registerConnector } from '../registry';

export const exampleConnector: ConnectorDescriptor = {
  id: 'example',
  displayName: 'Example',
  description: 'Example connector for demonstration purposes',
  setupInstructions: [
    'Toggle the switch to connect',
    'No API key required for this example connector',
  ],
  icon: Bot,
  requiresApiKey: false,
  metrics: [],
  facets: [],
};

registerConnector(exampleConnector);

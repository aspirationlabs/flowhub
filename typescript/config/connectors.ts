import type { ConnectorDescriptor } from '../types/connectors';

export const CONNECTOR_CONFIG: Record<string, Partial<ConnectorDescriptor>> = {
  example: {
    description: 'Example connector for demonstration purposes',
    setupInstructions: [
      'Toggle the switch to connect',
      'No API key required for this example connector',
    ],
    requiresApiKey: false,
    metrics: [],
    facets: [],
  },
  anthropic: {
    description: 'Claude API costs and usage breakdown',
    setupInstructions: [
      'Go to console.anthropic.com',
      'Navigate to Settings > API Keys',
      'Create a new API key with admin permissions',
      'Copy the API key and paste it below',
    ],
    requiresApiKey: true,
    metrics: ['cost', 'count'],
    facets: [],
  },
  openai: {
    description: 'GPT API costs and usage breakdown',
    setupInstructions: [
      'Go to platform.openai.com',
      'Navigate to API Keys section',
      'Create a new API key',
      'Copy the API key and paste it below',
    ],
    requiresApiKey: true,
    metrics: ['cost', 'count'],
    facets: [],
  },
  openrouter: {
    description: 'OpenRouter API costs and usage breakdown',
    setupInstructions: [
      'Go to openrouter.ai',
      'Navigate to API Keys',
      'Create a new API key',
      'Copy the API key and paste it below',
    ],
    requiresApiKey: true,
    metrics: ['cost', 'count'],
    facets: [],
  },
};

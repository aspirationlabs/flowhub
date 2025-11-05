import type { LucideIcon } from 'lucide-react';

export type ConnectorId = 'anthropic' | 'openai' | 'openrouter' | 'example';

export type MetricKind = 'cost' | 'count';

export type ConnectorStatus = 'connected' | 'disconnected' | 'error';

export interface ConnectorDescriptor {
  id: ConnectorId;
  displayName: string;
  description: string;
  setupInstructions: string;
  icon: LucideIcon;
  requiresApiKey: boolean;
  metrics: MetricKind[];
  facets: string[];
}

export interface ConnectorState {
  id: ConnectorId;
  status: ConnectorStatus;
  connectedAt?: number;
  apiKey?: string;
}

export interface UserConnectionsData {
  connections: Partial<Record<ConnectorId, ConnectorState>>;
  lastUpdated: number;
}

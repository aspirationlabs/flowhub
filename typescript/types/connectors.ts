import type { LucideIcon } from 'lucide-react';

export type ConnectorId = 'anthropic' | 'openai' | 'openrouter' | 'example';

export type MetricKind = 'cost' | 'count';

export type ConnectorStatus = 'connected' | 'disconnected' | 'error';

export interface ConnectorMetrics {
  totalCost?: number;
  requestCount?: number;
  lastUsed?: Date;
}

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

export interface ConnectorConnectionEvent {
  connectorId: ConnectorId;
  action: 'connect' | 'disconnect';
  timestamp: number;
}

export interface UserConnectionsData {
  connections: Partial<Record<ConnectorId, ConnectorState>>;
  lastUpdated: number;
}

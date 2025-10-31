export type MetricKind = 'cost' | 'count';

export interface ConnectorDescriptor {
  id: string;
  displayName: string;
  metrics: MetricKind[];
  facets: string[];
}

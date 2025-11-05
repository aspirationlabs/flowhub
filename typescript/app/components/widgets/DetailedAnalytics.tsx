'use client';

import { useConnectors } from '../../../hooks/useConnectors';
import { ExampleDetailWidget } from './connectors/ExampleDetailWidget';

export function DetailedAnalytics() {
  const { allConnectors, isConnected } = useConnectors();

  const connectedConnectors = allConnectors.filter((c) => isConnected(c.id));

  if (connectedConnectors.length === 0) {
    return null;
  }

  return (
    <div className="w-full px-6 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Detailed Analytics</h2>
        </div>

        <div className="space-y-6">
          {connectedConnectors.map((connector) => (
            <div key={connector.id}>
              {connector.id === 'example' && <ExampleDetailWidget />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useConnectors } from '../../../hooks/useConnectors';
import { ClaudeCodeAnalyticsWidget } from './connectors/ClaudeCodeAnalyticsWidget';

export function DetailedAnalytics() {
  const connectorState = useConnectors();

  const connectedConnectors = connectorState
    .getAllConnectors()
    .filter((c) => connectorState.isConnectorConnected(c.id));

  if (connectedConnectors.length === 0) {
    return null;
  }

  /* Sort all connectors by connector.id in alphabetical order */
  return (
    <div className="w-full px-6 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-6">
          {connectedConnectors.map((connector) => (
            <div key={connector.id}>
              {connector.id === 'claudecode' && <ClaudeCodeAnalyticsWidget />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

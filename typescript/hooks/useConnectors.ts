import { useSyncExternalStore, useMemo } from 'react';
import type { ConnectorId, ConnectorState } from '../types/connectors';
import { connectorsStore } from '../state/connectors-store';
import { getAllConnectors } from '../connectors/registry';
import { UserConnectorState } from '../types/user-connector-state';

// Cached server snapshot to prevent infinite hydration loops
// Must return stable reference for React's useSyncExternalStore
const SERVER_SNAPSHOT: Partial<Record<ConnectorId, ConnectorState>> = {};
const getServerSnapshot = () => SERVER_SNAPSHOT;

export function useConnectors(): UserConnectorState {
  const subscribe = useMemo(() => connectorsStore.subscribe.bind(connectorsStore), []);
  const getSnapshot = useMemo(
    () => connectorsStore.getSnapshot.bind(connectorsStore),
    [],
  );

  const connectorStates = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const allConnectors = useMemo(() => getAllConnectors(), []);

  const connect = useMemo(
    () => (connectorId: ConnectorId, apiKey?: string) => {
      connectorsStore.connect(connectorId, apiKey);
    },
    [],
  );

  const disconnect = useMemo(
    () => (connectorId: ConnectorId) => {
      connectorsStore.disconnect(connectorId);
    },
    [],
  );

  return useMemo(
    () => new UserConnectorState(connectorStates, allConnectors, connect, disconnect),
    [connectorStates, allConnectors, connect, disconnect],
  );
}

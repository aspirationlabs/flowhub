import { useSyncExternalStore, useMemo } from 'react';
import type { ConnectorId, ConnectorState } from '../types/connectors';
import { connectorsStore } from '../state/connectors-store';
import { getAllConnectors } from '../connectors/registry';

// Cached server snapshot to prevent infinite hydration loops
// Must return stable reference for React's useSyncExternalStore
const SERVER_SNAPSHOT: Partial<Record<ConnectorId, ConnectorState>> = {};
const getServerSnapshot = () => SERVER_SNAPSHOT;

export function useConnectors() {
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

  const isConnected = useMemo(
    () =>
      (connectorId: ConnectorId): boolean => {
        return connectorStates[connectorId]?.status === 'connected';
      },
    [connectorStates],
  );

  return useMemo(
    () => ({
      allConnectors,
      connectorStates,
      connect,
      disconnect,
      isConnected,
    }),
    [allConnectors, connectorStates, connect, disconnect, isConnected],
  );
}

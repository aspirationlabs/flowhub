import {
  setConnectorState,
  removeConnectorState,
  getAllConnectorStates,
  getConnectedCount,
  clearAllConnections,
} from '../../../storage/connectors/userConnections';
import type { ConnectorState, ConnectorId } from '../../../types/connectors';

describe('userConnections', () => {
  const testConnectorId: ConnectorId = 'test';

  beforeEach(() => {
    localStorage.clear();
  });

  describe('setConnectorState', () => {
    it('should store connector state', () => {
      const state: ConnectorState = {
        id: testConnectorId,
        status: 'connected',
        connectedAt: Date.now(),
      };

      setConnectorState(state);
      const allStates = getAllConnectorStates();

      expect(allStates['test']).toEqual(state);
    });

    it('should update existing connector state', () => {
      const state1: ConnectorState = {
        id: testConnectorId,
        status: 'disconnected',
      };
      setConnectorState(state1);

      const state2: ConnectorState = {
        id: testConnectorId,
        status: 'connected',
        connectedAt: Date.now(),
      };
      setConnectorState(state2);

      const allStates = getAllConnectorStates();
      expect(allStates['test']).toEqual(state2);
    });
  });

  describe('removeConnectorState', () => {
    it('should remove connector state', () => {
      const state: ConnectorState = {
        id: testConnectorId,
        status: 'connected',
        connectedAt: Date.now(),
      };

      setConnectorState(state);
      expect(getAllConnectorStates()['test']).toEqual(state);

      removeConnectorState(testConnectorId);
      expect(getAllConnectorStates()['test']).toBeUndefined();
    });

    it('should not throw when removing non-existent connector', () => {
      expect(() => removeConnectorState('claudecode')).not.toThrow();
    });
  });

  describe('getAllConnectorStates', () => {
    it('should return empty object when no states exist', () => {
      const states = getAllConnectorStates();
      expect(states).toEqual({});
    });

    it('should return all connector states', () => {
      const state1: ConnectorState = {
        id: testConnectorId,
        status: 'connected',
        connectedAt: Date.now(),
      };
      const state2: ConnectorState = {
        id: 'claudecode',
        status: 'disconnected',
      };

      setConnectorState(state1);
      setConnectorState(state2);

      const states = getAllConnectorStates();
      expect(states).toEqual({
        test: state1,
        claudecode: state2,
      });
    });
  });

  describe('getConnectedCount', () => {
    it('should return 0 when no connectors are connected', () => {
      expect(getConnectedCount()).toBe(0);
    });

    it('should count only connected connectors', () => {
      setConnectorState({
        id: testConnectorId,
        status: 'connected',
        connectedAt: Date.now(),
      });
      setConnectorState({
        id: 'claudecode',
        status: 'disconnected',
      });

      expect(getConnectedCount()).toBe(1);
    });
  });

  describe('clearAllConnections', () => {
    it('should remove all connector states', () => {
      setConnectorState({
        id: testConnectorId,
        status: 'connected',
        connectedAt: Date.now(),
      });
      setConnectorState({
        id: 'claudecode',
        status: 'connected',
        connectedAt: Date.now(),
      });

      expect(getConnectedCount()).toBe(2);

      clearAllConnections();

      expect(getConnectedCount()).toBe(0);
      expect(getAllConnectorStates()).toEqual({});
    });
  });

  describe('localStorage persistence', () => {
    it('should persist data across function calls', () => {
      const state: ConnectorState = {
        id: testConnectorId,
        status: 'connected',
        connectedAt: 12345,
      };

      setConnectorState(state);

      const rawData = localStorage.getItem('flowhub-user-connections');
      expect(rawData).toBeTruthy();

      const parsed = JSON.parse(rawData!);
      expect(parsed.connections.test).toEqual(state);
    });
  });
});

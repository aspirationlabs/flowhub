import { connectorsStore } from '../../../state/connectors-store';
import { clearAllConnections } from '../../../storage/connectors/userConnections';
import type { ConnectorId } from '../../../types/connectors';

describe('ConnectorsStore', () => {
  const testConnectorId: ConnectorId = 'test';

  beforeEach(() => {
    clearAllConnections();
  });

  describe('subscribe and notify', () => {
    it('should notify subscribers when connecting', () => {
      const listener = jest.fn();
      const unsubscribe = connectorsStore.subscribe(listener);

      connectorsStore.connect(testConnectorId);

      expect(listener).toHaveBeenCalled();
      unsubscribe();
    });

    it('should notify subscribers when disconnecting', () => {
      connectorsStore.connect(testConnectorId);

      const listener = jest.fn();
      const unsubscribe = connectorsStore.subscribe(listener);

      connectorsStore.disconnect(testConnectorId);

      expect(listener).toHaveBeenCalled();
      unsubscribe();
    });

    it('should not notify after unsubscribe', () => {
      const listener = jest.fn();
      const unsubscribe = connectorsStore.subscribe(listener);

      unsubscribe();
      listener.mockClear();

      connectorsStore.connect(testConnectorId);

      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe('connect', () => {
    it('should connect a connector without API key', () => {
      connectorsStore.connect(testConnectorId);

      const snapshot = connectorsStore.getSnapshot();
      expect(snapshot.test).toBeDefined();
      expect(snapshot.test?.status).toBe('connected');
      expect(snapshot.test?.id).toBe('test');
    });

    it('should connect a connector with API key', () => {
      const apiKey = 'test-api-key-123';
      connectorsStore.connect('claudecode', apiKey);

      const snapshot = connectorsStore.getSnapshot();
      expect(snapshot.claudecode).toBeDefined();
      expect(snapshot.claudecode?.apiKey).toBe(apiKey);
    });

    it('should set connectedAt timestamp', () => {
      const before = Date.now();
      connectorsStore.connect(testConnectorId);
      const after = Date.now();

      const snapshot = connectorsStore.getSnapshot();
      expect(snapshot.test?.connectedAt).toBeGreaterThanOrEqual(before);
      expect(snapshot.test?.connectedAt).toBeLessThanOrEqual(after);
    });
  });

  describe('disconnect', () => {
    it('should disconnect a connected connector', () => {
      connectorsStore.connect(testConnectorId);
      expect(connectorsStore.getSnapshot().test).toBeDefined();

      connectorsStore.disconnect(testConnectorId);
      expect(connectorsStore.getSnapshot().test).toBeUndefined();
    });

    it('should not throw when disconnecting non-existent connector', () => {
      expect(() => connectorsStore.disconnect('claudecode')).not.toThrow();
    });
  });

  describe('getSnapshot', () => {
    it('should return current state of all connectors', () => {
      connectorsStore.connect(testConnectorId);
      connectorsStore.connect('claudecode', 'key1');

      const snapshot = connectorsStore.getSnapshot();

      expect(Object.keys(snapshot)).toContain('test');
      expect(Object.keys(snapshot)).toContain('claudecode');
    });

    it('should return stable reference when data unchanged', () => {
      connectorsStore.connect(testConnectorId);

      const snapshot1 = connectorsStore.getSnapshot();
      const snapshot2 = connectorsStore.getSnapshot();

      expect(snapshot1).toBe(snapshot2);
    });

    it('should return new reference after connect', () => {
      const snapshot1 = connectorsStore.getSnapshot();

      connectorsStore.connect(testConnectorId);

      const snapshot2 = connectorsStore.getSnapshot();

      expect(snapshot1).not.toBe(snapshot2);
    });

    it('should return new reference after disconnect', () => {
      connectorsStore.connect(testConnectorId);
      const snapshot1 = connectorsStore.getSnapshot();

      connectorsStore.disconnect(testConnectorId);

      const snapshot2 = connectorsStore.getSnapshot();

      expect(snapshot1).not.toBe(snapshot2);
    });

    it('should notify all subscribers once per change', () => {
      const listener1 = jest.fn();
      const listener2 = jest.fn();
      const listener3 = jest.fn();

      connectorsStore.subscribe(listener1);
      connectorsStore.subscribe(listener2);
      connectorsStore.subscribe(listener3);

      listener1.mockClear();
      listener2.mockClear();
      listener3.mockClear();

      connectorsStore.connect(testConnectorId);

      expect(listener1).toHaveBeenCalledTimes(1);
      expect(listener2).toHaveBeenCalledTimes(1);
      expect(listener3).toHaveBeenCalledTimes(1);
    });
  });
});

import { connectorsStore } from '../../../state/connectors-store';
import { clearAllConnections } from '../../../storage/connectors/userConnections';

describe('ConnectorsStore', () => {
  beforeEach(() => {
    clearAllConnections();
  });

  describe('subscribe and notify', () => {
    it('should notify subscribers when connecting', () => {
      const listener = jest.fn();
      const unsubscribe = connectorsStore.subscribe(listener);

      connectorsStore.connect('example');

      expect(listener).toHaveBeenCalled();
      unsubscribe();
    });

    it('should notify subscribers when disconnecting', () => {
      connectorsStore.connect('example');

      const listener = jest.fn();
      const unsubscribe = connectorsStore.subscribe(listener);

      connectorsStore.disconnect('example');

      expect(listener).toHaveBeenCalled();
      unsubscribe();
    });

    it('should not notify after unsubscribe', () => {
      const listener = jest.fn();
      const unsubscribe = connectorsStore.subscribe(listener);

      unsubscribe();
      listener.mockClear();

      connectorsStore.connect('example');

      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe('connect', () => {
    it('should connect a connector without API key', () => {
      connectorsStore.connect('example');

      const snapshot = connectorsStore.getSnapshot();
      expect(snapshot.example).toBeDefined();
      expect(snapshot.example?.status).toBe('connected');
      expect(snapshot.example?.id).toBe('example');
    });

    it('should connect a connector with API key', () => {
      const apiKey = 'test-api-key-123';
      connectorsStore.connect('anthropic', apiKey);

      const snapshot = connectorsStore.getSnapshot();
      expect(snapshot.anthropic).toBeDefined();
      expect(snapshot.anthropic?.apiKey).toBe(apiKey);
    });

    it('should set connectedAt timestamp', () => {
      const before = Date.now();
      connectorsStore.connect('example');
      const after = Date.now();

      const snapshot = connectorsStore.getSnapshot();
      expect(snapshot.example?.connectedAt).toBeGreaterThanOrEqual(before);
      expect(snapshot.example?.connectedAt).toBeLessThanOrEqual(after);
    });
  });

  describe('disconnect', () => {
    it('should disconnect a connected connector', () => {
      connectorsStore.connect('example');
      expect(connectorsStore.getSnapshot().example).toBeDefined();

      connectorsStore.disconnect('example');
      expect(connectorsStore.getSnapshot().example).toBeUndefined();
    });

    it('should not throw when disconnecting non-existent connector', () => {
      expect(() => connectorsStore.disconnect('anthropic')).not.toThrow();
    });
  });

  describe('getSnapshot', () => {
    it('should return current state of all connectors', () => {
      connectorsStore.connect('example');
      connectorsStore.connect('anthropic', 'key1');

      const snapshot = connectorsStore.getSnapshot();

      expect(Object.keys(snapshot)).toContain('example');
      expect(Object.keys(snapshot)).toContain('anthropic');
    });

    it('should return stable reference when data unchanged', () => {
      connectorsStore.connect('example');

      const snapshot1 = connectorsStore.getSnapshot();
      const snapshot2 = connectorsStore.getSnapshot();

      expect(snapshot1).toBe(snapshot2);
    });

    it('should return new reference after connect', () => {
      const snapshot1 = connectorsStore.getSnapshot();

      connectorsStore.connect('example');

      const snapshot2 = connectorsStore.getSnapshot();

      expect(snapshot1).not.toBe(snapshot2);
    });

    it('should return new reference after disconnect', () => {
      connectorsStore.connect('example');
      const snapshot1 = connectorsStore.getSnapshot();

      connectorsStore.disconnect('example');

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

      connectorsStore.connect('example');

      expect(listener1).toHaveBeenCalledTimes(1);
      expect(listener2).toHaveBeenCalledTimes(1);
      expect(listener3).toHaveBeenCalledTimes(1);
    });
  });
});

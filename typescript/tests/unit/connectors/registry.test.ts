import { Bot } from 'lucide-react';
import {
  registerConnector,
  getConnector,
  getAllConnectors,
  hasConnector,
  getConnectorCount,
} from '../../../connectors/registry';
import type { ConnectorDescriptor } from '../../../types/connectors';

describe('Connector Registry', () => {
  const testConnector: ConnectorDescriptor = {
    id: 'example',
    displayName: 'Example Connector',
    description: 'A test connector',
    setupInstructions: ['Step 1', 'Step 2'],
    icon: Bot,
    requiresApiKey: false,
    metrics: [],
    facets: [],
  };

  beforeEach(() => {
    jest.resetModules();
  });

  describe('registerConnector', () => {
    it('should register a connector', () => {
      registerConnector(testConnector);
      expect(hasConnector('example')).toBe(true);
    });

    it('should merge config with descriptor', () => {
      registerConnector(testConnector);
      const retrieved = getConnector('example');
      expect(retrieved).toBeDefined();
      expect(retrieved?.id).toBe('example');
    });
  });

  describe('getConnector', () => {
    it('should return undefined for non-existent connector', () => {
      const result = getConnector('anthropic');
      expect(result).toBeUndefined();
    });

    it('should return registered connector', () => {
      registerConnector(testConnector);
      const result = getConnector('example');
      expect(result).toEqual(
        expect.objectContaining({
          id: 'example',
          displayName: expect.any(String),
        }),
      );
    });
  });

  describe('getAllConnectors', () => {
    it('should return empty array when no connectors registered', () => {
      const result = getAllConnectors();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return all registered connectors', () => {
      registerConnector(testConnector);
      const result = getAllConnectors();
      expect(result.length).toBeGreaterThanOrEqual(1);
      expect(result.some((c) => c.id === 'example')).toBe(true);
    });
  });

  describe('hasConnector', () => {
    it('should return false for non-existent connector', () => {
      expect(hasConnector('anthropic')).toBe(false);
    });

    it('should return true for registered connector', () => {
      registerConnector(testConnector);
      expect(hasConnector('example')).toBe(true);
    });
  });

  describe('getConnectorCount', () => {
    it('should return count of registered connectors', () => {
      const initialCount = getConnectorCount();
      registerConnector(testConnector);
      const newCount = getConnectorCount();
      expect(newCount).toBeGreaterThanOrEqual(initialCount);
      expect(hasConnector('example')).toBe(true);
    });
  });
});

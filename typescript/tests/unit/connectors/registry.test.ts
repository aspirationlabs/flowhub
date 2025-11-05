import { getAllConnectors } from '../../../connectors/registry';

describe('Connector Registry', () => {
  describe('getAllConnectors', () => {
    it('should return an array of connectors', () => {
      const result = getAllConnectors();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should include the example connector', () => {
      const result = getAllConnectors();
      expect(result.length).toBeGreaterThanOrEqual(1);
      expect(result.some((c) => c.id === 'example')).toBe(true);
    });

    it('should return connectors with required properties', () => {
      const result = getAllConnectors();
      result.forEach((connector) => {
        expect(connector).toHaveProperty('id');
        expect(connector).toHaveProperty('displayName');
        expect(connector).toHaveProperty('description');
        expect(connector).toHaveProperty('setupInstructions');
        expect(connector).toHaveProperty('icon');
        expect(connector).toHaveProperty('requiresApiKey');
      });
    });
  });
});

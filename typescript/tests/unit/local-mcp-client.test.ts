/**
 * Unit tests for LocalMCPClient
 */

import { LocalMCPClient } from '../../lib/mcp/local-mcp-client';

describe('LocalMCPClient', () => {
  let originalChrome: any;

  beforeEach(() => {
    originalChrome = (global as any).chrome;
    global.fetch = jest.fn();
  });

  afterEach(() => {
    (global as any).chrome = originalChrome;
    jest.resetAllMocks();
  });

  describe('Environment Detection', () => {
    it('should use proxy endpoint in web environment', () => {
      delete (global.chrome as any).runtime.id;

      const client = new LocalMCPClient(8080);
      expect(client.getEndpoint()).toBe('/api/mcp?port=8080');
    });

    it('should use direct localhost in extension environment', () => {
      (global.chrome as any).runtime.id = 'test-extension-id';

      const client = new LocalMCPClient(8080);
      expect(client.getEndpoint()).toBe('http://localhost:8080');
    });

    it('should handle different ports', () => {
      delete (global.chrome as any).runtime.id;

      const client1 = new LocalMCPClient(9000);
      expect(client1.getEndpoint()).toBe('/api/mcp?port=9000');

      const client2 = new LocalMCPClient(3001);
      expect(client2.getEndpoint()).toBe('/api/mcp?port=3001');
    });
  });

  describe('JSON-RPC Calls', () => {
    it('should make successful JSON-RPC call', async () => {
      const mockResponse = {
        jsonrpc: '2.0',
        id: 1,
        result: { data: 'test' },
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        headers: {
          get: (name: string) => (name === 'Content-Type' ? 'application/json' : null),
        },
        json: async () => mockResponse,
      });

      const client = new LocalMCPClient(8080);
      const result = await client.call('test_method', { param: 'value' });

      expect(result).toEqual({ data: 'test' });
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/mcp?port=8080',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json, text/event-stream',
          },
          body: expect.stringContaining('"method":"test_method"'),
        }),
      );
    });

    it('should handle JSON-RPC errors', async () => {
      const mockResponse = {
        jsonrpc: '2.0',
        id: 1,
        error: {
          code: -32601,
          message: 'Method not found',
        },
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        headers: {
          get: (name: string) => (name === 'Content-Type' ? 'application/json' : null),
        },
        json: async () => mockResponse,
      });

      const client = new LocalMCPClient(8080);

      await expect(client.call('invalid_method')).rejects.toThrow(
        'MCP JSON-RPC error: Method not found',
      );
    });

    it('should handle HTTP errors', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });

      const client = new LocalMCPClient(8080);

      await expect(client.call('test_method')).rejects.toThrow(
        'MCP server request failed: 500 Internal Server Error',
      );
    });

    it('should handle missing result field', async () => {
      const mockResponse = {
        jsonrpc: '2.0',
        id: 1,
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        headers: {
          get: (name: string) => (name === 'Content-Type' ? 'application/json' : null),
        },
        json: async () => mockResponse,
      });

      const client = new LocalMCPClient(8080);

      await expect(client.call('test_method')).rejects.toThrow(
        'MCP response missing result field',
      );
    });

    it('should handle network errors', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      const client = new LocalMCPClient(8080);

      await expect(client.call('test_method')).rejects.toThrow(
        'LocalMCPClient call failed: Network error',
      );
    });

    it('should increment request IDs', async () => {
      const mockResponse = {
        jsonrpc: '2.0',
        id: 1,
        result: 'ok',
      };

      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        headers: {
          get: (name: string) => (name === 'Content-Type' ? 'application/json' : null),
        },
        json: async () => mockResponse,
      });

      const client = new LocalMCPClient(8080);

      await client.call('method1');
      await client.call('method2');

      const calls = (global.fetch as jest.Mock).mock.calls;
      const body1 = JSON.parse(calls[0][1].body);
      const body2 = JSON.parse(calls[1][1].body);

      expect(body1.id).toBe(1);
      expect(body2.id).toBe(2);
    });
  });
});

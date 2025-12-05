import { MCPClient } from '../../../../connectors/claudecode/mcp-client';

describe('MCPClient', () => {
  let originalChrome: typeof chrome;
  let fetchMock: jest.Mock;

  beforeAll(() => {
    originalChrome = global.chrome;
  });

  beforeEach(() => {
    // Create fresh chrome object for each test to ensure isolation
    global.chrome = {
      ...originalChrome,
      runtime: {
        id: undefined,
        lastError: undefined,
      },
    } as unknown as typeof chrome;

    // Mock fetch for each test
    fetchMock = jest.fn();
    global.fetch = fetchMock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    global.chrome = originalChrome;
  });

  describe('Initialization', () => {
    it('should initialize with default baseUrl', () => {
      const client = new MCPClient();
      expect(client).toBeInstanceOf(MCPClient);
    });

    it('should initialize with custom baseUrl', () => {
      const client = new MCPClient('/custom/endpoint');
      expect(client).toBeInstanceOf(MCPClient);
    });

    it('should send initialize request on first call', async () => {
      fetchMock.mockResolvedValueOnce({
        ok: true,
        headers: {
          get: () => 'application/json',
        },
        json: async () => ({
          jsonrpc: '2.0',
          id: 1,
          result: {
            protocolVersion: '2024-11-05',
            capabilities: {},
            serverInfo: {
              name: 'ccusage',
              version: '1.0.0',
            },
          },
        }),
      });

      const client = new MCPClient('/api/mcp');
      await client.initialize();

      expect(fetchMock).toHaveBeenCalledWith('/api/mcp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/event-stream',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'initialize',
          params: {
            protocolVersion: '2024-11-05',
            capabilities: {},
            clientInfo: {
              name: 'flowhub-claudecode',
              version: '1.0.0',
            },
          },
        }),
      });
    });

    it('should only initialize once', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
        headers: {
          get: () => 'application/json',
        },
        json: async () => ({
          jsonrpc: '2.0',
          id: 1,
          result: {},
        }),
      });

      const client = new MCPClient('/api/mcp');
      await client.initialize();
      await client.initialize();

      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('getDailyUsage', () => {
    it('should fetch daily usage successfully', async () => {
      const mockUsageData = {
        total_tokens: 1000,
        total_cost: 0.05,
      };

      fetchMock
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({ jsonrpc: '2.0', id: 1, result: {} }),
        })
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({
            jsonrpc: '2.0',
            id: 2,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(mockUsageData),
                },
              ],
              isError: false,
            },
          }),
        });

      const client = new MCPClient('/api/mcp');
      const result = await client.getDailyUsage('2024-01-01', '2024-01-02');

      expect(result).toEqual(mockUsageData);
    });

    it('should handle SSE response format', async () => {
      const mockUsageData = { total_tokens: 500 };

      fetchMock
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({ jsonrpc: '2.0', id: 1, result: {} }),
        })
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'text/event-stream' },
          text: async () =>
            `data: ${JSON.stringify({
              jsonrpc: '2.0',
              id: 2,
              result: {
                content: [{ type: 'text', text: JSON.stringify(mockUsageData) }],
                isError: false,
              },
            })}\n\n`,
        });

      const client = new MCPClient('/api/mcp');
      const result = await client.getDailyUsage('2024-01-01', '2024-01-02');

      expect(result).toEqual(mockUsageData);
    });

    it('should throw error when result is missing', async () => {
      fetchMock
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({ jsonrpc: '2.0', id: 1, result: {} }),
        })
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({
            jsonrpc: '2.0',
            id: 2,
          }),
        });

      const client = new MCPClient('/api/mcp');
      await expect(client.getDailyUsage('2024-01-01', '2024-01-02')).rejects.toThrow(
        'MCP response missing result payload',
      );
    });

    it('should throw error when tool returns error', async () => {
      fetchMock
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({ jsonrpc: '2.0', id: 1, result: {} }),
        })
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({
            jsonrpc: '2.0',
            id: 2,
            result: {
              content: [{ type: 'text', text: 'Database connection failed' }],
              isError: true,
            },
          }),
        });

      const client = new MCPClient('/api/mcp');
      await expect(client.getDailyUsage('2024-01-01', '2024-01-02')).rejects.toThrow(
        'Database connection failed',
      );
    });

    it('should throw error when response format is unexpected', async () => {
      fetchMock
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({ jsonrpc: '2.0', id: 1, result: {} }),
        })
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({
            jsonrpc: '2.0',
            id: 2,
            result: {
              content: [{ type: 'image', data: 'base64data' }],
              isError: false,
            },
          }),
        });

      const client = new MCPClient('/api/mcp');
      await expect(client.getDailyUsage('2024-01-01', '2024-01-02')).rejects.toThrow(
        'Unexpected response format from MCP',
      );
    });

    it('should throw error when JSON parsing fails', async () => {
      fetchMock
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({ jsonrpc: '2.0', id: 1, result: {} }),
        })
        .mockResolvedValueOnce({
          ok: true,
          headers: { get: () => 'application/json' },
          json: async () => ({
            jsonrpc: '2.0',
            id: 2,
            result: {
              content: [{ type: 'text', text: 'not valid json' }],
              isError: false,
            },
          }),
        });

      const client = new MCPClient('/api/mcp');
      await expect(client.getDailyUsage('2024-01-01', '2024-01-02')).rejects.toThrow(
        'Failed to parse MCP response as JSON',
      );
    });
  });

  describe('HTTP Error Handling', () => {
    it('should throw error on HTTP failure', async () => {
      fetchMock.mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });

      const client = new MCPClient('/api/mcp');
      await expect(client.initialize()).rejects.toThrow(
        'HTTP 500: Internal Server Error',
      );
    });

    it('should throw error on MCP error response', async () => {
      fetchMock.mockResolvedValueOnce({
        ok: true,
        headers: { get: () => 'application/json' },
        json: async () => ({
          jsonrpc: '2.0',
          id: 1,
          error: {
            code: -32600,
            message: 'Invalid Request',
          },
        }),
      });

      const client = new MCPClient('/api/mcp');
      await expect(client.initialize()).rejects.toThrow(
        'MCP Error -32600: Invalid Request',
      );
    });

    it('should throw error on unexpected content type', async () => {
      fetchMock.mockResolvedValueOnce({
        ok: true,
        headers: { get: () => 'text/html' },
      });

      const client = new MCPClient('/api/mcp');
      await expect(client.initialize()).rejects.toThrow(
        'Unexpected content type: text/html',
      );
    });
  });

  describe('SSE Response Parsing', () => {
    it('should parse SSE response with multiple data lines', async () => {
      fetchMock.mockResolvedValueOnce({
        ok: true,
        headers: { get: () => 'text/event-stream' },
        text: async () =>
          `
: comment line
data: {"jsonrpc":"2.0","id":1,"result":{"test":"value"}}

data: invalid line without json

`.trim(),
      });

      const client = new MCPClient('/api/mcp');
      await client.initialize();

      expect(fetchMock).toHaveBeenCalled();
    });

    it('should skip empty lines and comments in SSE', async () => {
      fetchMock.mockResolvedValueOnce({
        ok: true,
        headers: { get: () => 'text/event-stream' },
        text: async () => `

: this is a comment
data: {"jsonrpc":"2.0","id":1,"result":{}}

`,
      });

      const client = new MCPClient('/api/mcp');
      await client.initialize();

      expect(fetchMock).toHaveBeenCalled();
    });

    it('should throw error when no valid response in SSE stream', async () => {
      fetchMock.mockResolvedValueOnce({
        ok: true,
        headers: { get: () => 'text/event-stream' },
        text: async () => `
: just comments
data: not json

`,
      });

      const client = new MCPClient('/api/mcp');
      await expect(client.initialize()).rejects.toThrow(
        'No valid response found in SSE stream',
      );
    });
  });

  describe('Environment Detection Pattern (Example)', () => {
    // These tests demonstrate the proper chrome stubbing pattern for environment detection
    // This pattern should be used when implementing environment-specific behavior

    function setExtensionContext(isExtension: boolean) {
      if (isExtension) {
        (global.chrome as any).runtime.id = 'test-extension-id';
      } else {
        delete (global.chrome as any).runtime.id;
      }
    }

    it('should demonstrate web environment pattern', () => {
      setExtensionContext(false);
      expect((global.chrome as any).runtime.id).toBeUndefined();
    });

    it('should demonstrate extension environment pattern', () => {
      setExtensionContext(true);
      expect((global.chrome as any).runtime.id).toBe('test-extension-id');
    });

    it('should isolate chrome state between tests', () => {
      // This test verifies that chrome state is properly reset
      // It should have a fresh chrome object from beforeEach
      expect((global.chrome as any).runtime.id).toBeUndefined();
    });
  });
});

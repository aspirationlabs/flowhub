/**
 * MCP (Model Context Protocol) client for interacting with ccusage server
 * Implements JSON-RPC 2.0 over HTTP with SSE response handling
 */

interface JsonRpcRequest {
  jsonrpc: '2.0';
  id: number;
  method: string;
  params?: any;
}

type ToolContent =
  | {
      type: 'text';
      text: string;
    }
  | {
      type: string;
      text?: string;
    };

interface ToolCallResult {
  content: ToolContent[];
  isError?: boolean;
}

interface JsonRpcResponse<Result> {
  jsonrpc: '2.0';
  id: number;
  result?: Result;
  error?: {
    code: number;
    message: string;
  };
}

export class MCPClient {
  private baseUrl: string;
  private requestId = 0;
  private initialized = false;

  constructor(baseUrl = '/api/mcp') {
    this.baseUrl = baseUrl;
  }

  async initialize(): Promise<void> {
    if (this.initialized) return;

    await this.sendRequest('initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: {
        name: 'flowhub-claudecode',
        version: '1.0.0',
      },
    });

    this.initialized = true;
  }

  async getDailyUsage<T = unknown>(since: string, until: string): Promise<T> {
    await this.initialize();

    const response = await this.sendRequest<ToolCallResult>('tools/call', {
      name: 'daily',
      arguments: {
        since,
        until,
        mode: 'auto',
      },
    });

    const result = response.result;
    if (!result) {
      throw new Error('MCP response missing result payload');
    }

    // Parse the tool result
    if (result.isError) {
      throw new Error(result.content[0]?.text || 'Unknown error from MCP tool');
    }

    // Extract the actual data from the content
    const content = result.content?.[0];
    if (!content || content.type !== 'text' || typeof content.text !== 'string') {
      throw new Error('Unexpected response format from MCP');
    }

    // Parse the JSON from the text content
    try {
      return JSON.parse(content.text) as T;
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'Unknown parser error';
      throw new Error(`Failed to parse MCP response as JSON: ${reason}`);
    }
  }

  private async sendRequest<Result = unknown>(
    method: string,
    params?: any,
  ): Promise<JsonRpcResponse<Result>> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      id: ++this.requestId,
      method,
      params,
    };

    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/event-stream',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const contentType = response.headers.get('Content-Type');

    if (contentType?.includes('text/event-stream')) {
      // Handle SSE response
      return this.parseSSEResponse<Result>(response);
    } else if (contentType?.includes('application/json')) {
      // Handle regular JSON response
      const data = (await response.json()) as JsonRpcResponse<Result>;

      if (data.error) {
        throw new Error(`MCP Error ${data.error.code}: ${data.error.message}`);
      }

      return data;
    }

    throw new Error(`Unexpected content type: ${contentType}`);
  }

  private async parseSSEResponse<Result>(
    response: Response,
  ): Promise<JsonRpcResponse<Result>> {
    const text = await response.text();
    const lines = text.split('\n');

    for (const line of lines) {
      // Skip empty lines and comments
      if (!line.trim() || line.startsWith(':')) continue;

      // Parse SSE data lines
      if (line.startsWith('data: ')) {
        const data = line.slice(6);

        // Skip non-JSON data
        if (!data.startsWith('{')) continue;

        try {
          const parsed = JSON.parse(data) as JsonRpcResponse<Result>;

          if (parsed.error) {
            throw new Error(`MCP Error ${parsed.error.code}: ${parsed.error.message}`);
          }

          return parsed;
        } catch (error) {
          console.error('Failed to parse SSE data:', data, error);
        }
      }
    }

    throw new Error('No valid response found in SSE stream');
  }
}

// TODO: Add connection health check
// TODO: Add retry logic with exponential backoff
// TODO: Handle streaming responses for large datasets

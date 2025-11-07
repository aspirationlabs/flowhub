/**
 * Generic client for communicating with local MCP servers.
 * Automatically handles routing based on environment:
 * - Browser extension: direct connection to localhost
 * - Web app: proxies through Next.js API route
 */

interface JSONRPCRequest {
  jsonrpc: '2.0';
  method: string;
  params?: unknown;
  id: number | string;
}

interface JSONRPCResponse<T = unknown> {
  jsonrpc: '2.0';
  result?: T;
  error?: {
    code: number;
    message: string;
    data?: unknown;
  };
  id: number | string;
}

export class LocalMCPClient {
  private readonly endpoint: string;
  private requestIdCounter = 0;

  constructor(port: number) {
    // Detect extension environment using chrome.runtime.id (only exists in extensions)
    const isExtension =
      typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id !== undefined;

    this.endpoint = isExtension ? `http://localhost:${port}` : `/api/mcp?port=${port}`;
  }

  /**
   * Make a JSON-RPC 2.0 call to the MCP server.
   */
  async call<T = unknown>(method: string, params?: unknown): Promise<T> {
    const id = ++this.requestIdCounter;

    const request: JSONRPCRequest = {
      jsonrpc: '2.0',
      method,
      params,
      id,
    };

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/event-stream',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(
          `MCP server request failed: ${response.status} ${response.statusText}`,
        );
      }

      const contentType = response.headers.get('Content-Type');

      let jsonResponse: JSONRPCResponse<T>;

      if (contentType?.includes('text/event-stream')) {
        // Handle SSE response
        jsonResponse = await this.parseSSEResponse<T>(response);
      } else if (contentType?.includes('application/json')) {
        // Handle regular JSON response
        jsonResponse = await response.json();
      } else {
        throw new Error(`Unexpected content type: ${contentType}`);
      }

      if (jsonResponse.error) {
        throw new Error(
          `MCP JSON-RPC error: ${jsonResponse.error.message} (code: ${jsonResponse.error.code})`,
        );
      }

      if (jsonResponse.result === undefined) {
        throw new Error('MCP response missing result field');
      }

      return jsonResponse.result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`LocalMCPClient call failed: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Parse Server-Sent Events (SSE) response format.
   */
  private async parseSSEResponse<T>(response: Response): Promise<JSONRPCResponse<T>> {
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
          const parsed = JSON.parse(data) as JSONRPCResponse<T>;
          return parsed;
        } catch (error) {
          console.error('Failed to parse SSE data:', data, error);
        }
      }
    }

    throw new Error('No valid response found in SSE stream');
  }

  /**
   * Get the endpoint URL being used (for debugging/testing).
   */
  getEndpoint(): string {
    return this.endpoint;
  }
}

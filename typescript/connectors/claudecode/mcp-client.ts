/**
 * MCP client for ClaudeCode connector
 * Uses LocalMCPClient for environment-aware routing
 */

import { LocalMCPClient } from '../../lib/mcp/local-mcp-client';

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

export class MCPClient {
  private client: LocalMCPClient;
  private initialized = false;

  constructor() {
    this.client = new LocalMCPClient(8080);
  }

  async initialize(): Promise<void> {
    if (this.initialized) return;

    await this.client.call('initialize', {
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

    const result = await this.client.call<ToolCallResult>('tools/call', {
      name: 'daily',
      arguments: {
        since,
        until,
        mode: 'auto',
      },
    });

    if (!result) {
      throw new Error('MCP response missing result payload');
    }

    if (result.isError) {
      throw new Error(result.content[0]?.text || 'Unknown error from MCP tool');
    }

    const content = result.content?.[0];
    if (!content || content.type !== 'text' || typeof content.text !== 'string') {
      throw new Error('Unexpected response format from MCP');
    }

    try {
      return JSON.parse(content.text) as T;
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'Unknown parser error';
      throw new Error(`Failed to parse MCP response as JSON: ${reason}`);
    }
  }
}

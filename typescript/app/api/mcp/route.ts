import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Forward the request to the MCP server with proper headers
    const response = await fetch('http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/event-stream',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('MCP server error:', response.status, errorText);
      throw new Error(`MCP server responded with ${response.status}: ${errorText}`);
    }

    const contentType = response.headers.get('content-type');

    // Handle SSE (Server-Sent Events) response
    if (contentType?.includes('text/event-stream')) {
      // For SSE, we need to stream the response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      if (!reader) {
        throw new Error('No response body');
      }

      // Read the stream
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
      }

      // Parse SSE data (look for data: lines)
      const lines = buffer.split('\n');
      let result = null;

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          result = JSON.parse(line.slice(6));
        }
      }

      if (result) {
        return NextResponse.json(result);
      }
    } else {
      // Regular JSON response
      const data = await response.json();
      return NextResponse.json(data);
    }

    throw new Error('No valid response from MCP server');
  } catch (error) {
    console.error('MCP proxy error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to connect to MCP server',
      },
      { status: 500 },
    );
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, { status: 200 });
}

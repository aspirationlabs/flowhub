import { NextRequest, NextResponse } from 'next/server';

/**
 * API route that proxies requests to a local MCP server.
 * This bypasses CORS restrictions for web app requests.
 *
 * Usage: POST to /api/mcp?port=8080 with JSON-RPC 2.0 body
 */
export async function POST(request: NextRequest) {
  try {
    // Extract and validate port parameter
    const port = request.nextUrl.searchParams.get('port');

    if (!port) {
      return NextResponse.json(
        { error: 'Missing port query parameter' },
        { status: 400 },
      );
    }

    const portNum = parseInt(port, 10);

    if (isNaN(portNum) || portNum < 1024 || portNum > 65535) {
      return NextResponse.json(
        { error: 'Invalid port number (must be between 1024-65535)' },
        { status: 400 },
      );
    }

    // Read the request body
    const body = await request.text();

    // Forward request to local MCP server
    const mcpUrl = `http://localhost:${portNum}`;

    const response = await fetch(mcpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/event-stream',
      },
      body,
    });

    // Get response body (handle streaming)
    const responseBody = response.body;

    if (!responseBody) {
      return NextResponse.json(
        { error: 'Empty response from MCP server' },
        { status: 502 },
      );
    }

    // Create response with CORS headers and preserve original status/headers
    return new NextResponse(responseBody, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('MCP proxy error:', error);

    return NextResponse.json(
      {
        error: 'Failed to proxy request to MCP server',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 502 },
    );
  }
}

/**
 * Handle OPTIONS preflight requests for CORS
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

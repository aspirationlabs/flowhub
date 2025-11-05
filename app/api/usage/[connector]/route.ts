import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 0;

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ connector: string }> },
) {
  const isStaticExport = process.env.NEXT_EXPORT === 'true';

  if (isStaticExport) {
    return NextResponse.json(
      {
        success: false,
        error:
          'Usage data is unavailable during static export. Launch Flowhub locally to sync.',
      },
      { status: 503 },
    );
  }

  const { connector } = await context.params;
  console.log('API Route - Connector param:', connector);

  // Only handle claudecode for now
  if (connector !== 'claudecode') {
    return NextResponse.json(
      { success: false, error: 'Connector not supported' },
      { status: 404 },
    );
  }

  try {
    // Dynamically import the MCP client and schema
    const { MCPClient } = await import(
      '../../../../typescript/connectors/claudecode/mcp-client'
    );
    const { DailyResponseSchema } = await import(
      '../../../../typescript/connectors/claudecode/schema'
    );

    // Calculate date range: 30 days ago to today
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Format dates as YYYYMMDD
    const formatDate = (date: Date): string => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}${month}${day}`;
    };

    const since = formatDate(thirtyDaysAgo);
    const until = formatDate(today);

    // Create MCP client and fetch data
    const client = new MCPClient();
    const rawData = await client.getDailyUsage(since, until);

    // Validate response schema
    const validatedData = DailyResponseSchema.parse(rawData);

    // Return success response with wrapped data
    return NextResponse.json({
      success: true,
      data: validatedData,
      syncedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error fetching claudecode usage:', error);

    // Check if it's a connection error (MCP server not running)
    if (
      error.message?.includes('ECONNREFUSED') ||
      error.message?.includes('fetch failed')
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            'MCP server unavailable. Please ensure ccusage server is running on port 8080.',
        },
        { status: 503 },
      );
    }

    // Return generic error
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch usage data',
      },
      { status: 500 },
    );
  }
}

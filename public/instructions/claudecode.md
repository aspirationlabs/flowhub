# Claude Code Setup

This connector only works when the dashboard runs locally on your machine.

## Prerequisites

Claude Code must be installed and configured on your machine. The connector reads usage data from your local Claude Code configuration.

## Setup Instructions

Run the ccusage MCP server locally:

```bash
npx @ccusage/mcp@latest --type http --port 8080
```

Keep the server running in a terminal window for usage data to sync.

## How it Works

- The connector syncs your Claude Code usage data every 10 minutes
- Data is fetched from the last 30 days
- No API key is required since it reads local data
- The MCP server must be running for data to sync

## Troubleshooting

If data is not syncing:

1. Ensure the MCP server is running on port 8080
2. Check that Claude Code is installed and has usage data
3. Verify the dashboard is running locally (not remotely)
4. Check the browser console for error messages
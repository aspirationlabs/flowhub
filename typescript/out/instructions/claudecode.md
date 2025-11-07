# Claude Code Setup

This connector relies on [ccusage](https://github.com/ryoppippi/ccusage) to sync Claude Code usage from your local machine to Flowhub.

## Prerequisites

You'll need `npx` or `bunx` to run the [MCP server](https://ccusage.com/guide/mcp-server) in the background.

## Setup Instructions

Start the ccusage MCP server in HTTP mode with either `npx` or `bunx`. Keep the server running to sync usage data regularly.

```bash
bunx @ccusage/mcp@latest --type http --port 8080
npx @ccusage/mcp@latest --type http --port 8080
```
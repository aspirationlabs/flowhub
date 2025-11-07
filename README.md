# FlowHub

A TypeScript/Next.js dashboard application for tracking AI model usage across multiple providers.

## Project Structure

This is a monorepo using pnpm workspaces. The main application code is in the `typescript/` directory.

## Quick Start

```bash
# Install dependencies (run from root)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Type check
pnpm typecheck
```

## Available Scripts

All commands should be run from the repository root:

- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build for production (web and extension)
- `pnpm build:web` - Build web version only
- `pnpm build:extension` - Build browser extension
- `pnpm test` - Run unit tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:e2e` - Run end-to-end tests
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format` - Check code formatting with Prettier
- `pnpm export-extension` - Export as browser extension
- `pnpm generate-icons` - Generate extension icons
- `pnpm fetch-backgrounds` - Fetch background images

## Project Layout

```
flowhub/
├── typescript/              # Main TypeScript/Next.js application
│   ├── app/                # Next.js App Router
│   ├── components/         # React components
│   ├── connectors/         # AI provider connectors
│   ├── scripts/            # Build and utility scripts
│   ├── tests/              # Test files
│   └── package.json        # TypeScript package configuration
├── pnpm-workspace.yaml     # Workspace configuration
├── package.json            # Root package with scripts
└── README.md               # This file
```

## Development

The project uses:
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/UI** for components
- **pnpm** for package management
- **Jest** for unit testing
- **Playwright** for E2E testing

See [typescript/README.md](typescript/README.md) for detailed documentation about the TypeScript application.

## Contributing

1. Install dependencies: `pnpm install`
2. Create a feature branch
3. Make your changes
4. Run tests: `pnpm test`
5. Submit a pull request

Pre-commit hooks will run TypeScript, ESLint, and Prettier checks automatically.
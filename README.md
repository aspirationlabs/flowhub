# FlowHub

FlowHub is a serverless, TypeScript-driven dashboard that surfaces per-connector usage and aggregated daily activity, designed as a browser new-tab experience.

## Monorepo Structure

This repository is organized as a monorepo with clear separation between language domains:

```
flowhub/
├── typescript/          # TypeScript/Next.js frontend application
│   ├── app/            # Next.js App Router pages and components
│   ├── connectors/     # API connector implementations (Anthropic, OpenAI, etc.)
│   ├── storage/        # Storage adapters (keys, cache)
│   ├── scripts/        # Build and development scripts
│   ├── tests/          # Jest unit/integration tests, Playwright e2e tests
│   ├── package.json    # Frontend dependencies and scripts
│   └── ...             # All frontend config files (tsconfig, next.config, etc.)
├── python/             # Future Python backend services (placeholder)
├── dist/               # Browser extension build output
├── public/             # Static assets (backgrounds, instructions)
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10.20.0

### Development

All development commands should be run from the `typescript/` directory:

```bash
cd typescript

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run linter
pnpm lint

# Run type checking
pnpm typecheck

# Run tests
pnpm test

# Build for production
pnpm build
```

### Pre-commit Hooks

This repository uses pre-commit hooks to ensure code quality. The hooks automatically:
- Run TypeScript type checking
- Lint code with ESLint
- Format code with Prettier

Pre-commit hooks are configured at the repository root but execute within the `typescript/` directory.

### CI/CD

GitHub Actions workflows are configured to:
1. Install dependencies from `typescript/`
2. Run linting and type checking
3. Execute unit tests
4. Build the application
5. Run end-to-end tests with Playwright

## Project Architecture

### TypeScript Domain

The `typescript/` directory contains a complete Next.js application with:

- **Serverless-first approach**: Relies on Next.js serverless routes and browser storage
- **Composable connectors**: Each connector (Anthropic, OpenAI, OpenRouter) owns its API client, schema validation, and transformers
- **Swappable storage**: Key and cache storage live behind interfaces for easy replacement
- **Shadcn UI components**: Modern, accessible UI components
- **Modern TypeScript**: ES2024 target with strict type checking

### Future Python Backend

The `python/` directory is reserved for future backend services. When implemented, backend services will handle:
- Connector API clients (migrated from TypeScript)
- Data transformation pipelines
- Advanced caching and storage

## Key Commands

### From Repository Root

```bash
# Pre-commit checks (runs automatically on git commit)
pre-commit run --all-files
```

### From typescript/ Directory

```bash
# Development
pnpm dev                    # Start Next.js dev server
pnpm build                  # Build for production
pnpm lint                   # Run ESLint
pnpm typecheck              # Run TypeScript compiler
pnpm format                 # Check code formatting

# Testing
pnpm test                   # Run Jest unit tests
pnpm test:watch             # Run tests in watch mode
pnpm test:e2e               # Run Playwright e2e tests

# Scripts
pnpm run generate-icons     # Generate extension icons
pnpm run export-extension   # Export browser extension
pnpm run fetch-backgrounds  # Fetch background images
```

## Contributing

1. Make your changes in the appropriate directory (`typescript/` for frontend)
2. Ensure all tests pass: `cd typescript && pnpm test`
3. Ensure type checking passes: `cd typescript && pnpm typecheck`
4. Ensure linting passes: `cd typescript && pnpm lint`
5. Commit your changes (pre-commit hooks will run automatically)
6. Push to your branch and create a pull request

## Documentation

- [Agent Brief](./AGENTS.md) - Detailed architecture and development guidelines
- [Claude Instructions](./CLAUDE.md) - AI assistant configuration

## License

Private - All rights reserved

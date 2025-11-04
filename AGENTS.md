# Flowhub Agent Brief

## Mission & Scope

- Deliver a serverless, TypeScript-driven dashboard that surfaces per-connector usage and an aggregated summary for a user's daily activity.
- Start as a browser new-tab experience powered by Next.js (App Router), Shadcn UI, and pnpm-managed dependencies. Try to piece together all components using Shadcn components.
- Support Anthropic, OpenAI, and OpenRouter connectors with extensible abstractions for credentials, data fetching, caching, and presentation.
- Prepare for future polyglot expansion (e.g., Python backend services) without restructuring the existing TypeScript code.

## Guiding Principles

- **Separation of concerns:** keep connector domain logic, storage adapters, and UI layers decoupled to enable future backend rewrites.
- **Composable connectors:** each connector owns its API client, schema validation, and transformation pipeline, but plugs into shared registries and UI shells.
- **Swappable storage:** key and cache storage live behind interfaces so session storage can be replaced with encrypted or remote storage later.
- **Testable data flows:** aggregate metrics and transformations reside in plain TypeScript modules to ease unit/integration testing.
- **Serverless first:** rely on Next.js serverless routes and browser storage; defer backend services until needed.
- **Explicit modules:** prefer relative imports for internal code and avoid wildcard re-exports; expose named members directly.

## Code Style Expectations

- Target modern runtimes (ES2023, Node 20+) with `moduleResolution` set to `NodeNext`.
- Keep imports relative to the consuming module unless a shared alias is deliberately introduced.
- Export named functions, types, or objects; avoid `export *` barrels.
- Follow ESLint + Prettier defaults (single quotes, trailing commas) and rely on strict TypeScript checking.

## Repository Structure (TypeScript Domain)

```
flowhub/
├─ typescript/
│  ├─ app/
│  │  ├─ layout.tsx                  # App Router root layout (global styles, metadata)
│  │  ├─ page.tsx                    # Dashboard shell (server component) that renders widgets
│  │  ├─ globals.css                 # Global styles imported by layout
│  │  ├─ components/
│  │  │  ├─ widgets/                 # Individual dashboard widgets (Time, Date, etc.)
│  │  │  ├─ layout/                  # Grid/composition primitives for arranging widgets
│  │  │  ├─ ui/                      # Shadcn UI primitives customized for FlowHub
│  │  │  └─ providers/               # Client providers (theme, telemetry, preferences)
│  │  ├─ (dashboard)/
│  │  │  ├─ page.tsx                 # Server component entry for the dashboard route
│  │  │  └─ components/
│  │  │     ├─ core/                 # Shared cards, tables, filters, summary UI
│  │  │     └─ connectors/           # Per-connector widgets surfaced on the dashboard
│  │  ├─ (connectors)/
│  │  │  ├─ page.tsx                 # Connector discovery and setup surface
│  │  │  └─ components/
│  │  │     ├─ ConnectorList.tsx
│  │  │     ├─ ConnectorModal.tsx
│  │  │     └─ ConnectorStatus.tsx
│  │  └─ api/
│  │     └─ usage/
│  │        └─ route.ts              # Serverless route that proxies connector usage metrics
│  ├─ connectors/
│  │  ├─ registry.ts                 # Connector metadata (id, label, capabilities)
│  │  ├─ anthropic/
│  │  │  ├─ client.ts
│  │  │  ├─ schema.ts
│  │  │  ├─ transformers.ts
│  │  │  └─ index.ts
│  │  ├─ openai/
│  │  └─ openrouter/
│  ├─ storage/
│  │  ├─ keys/
│  │  │  ├─ key-store.ts             # KeyStore contract and adapters
│  │  │  └─ local-session.ts         # Session storage implementation of KeyStore
│  │  ├─ cache/
│  │  │  ├─ cache-store.ts
│  │  │  └─ browser-cache.ts
│  │  └─ adapters/
│  │     └─ index.ts                 # Export surface for swappable storage adapters
│  ├─ config/
│  │  └─ connectors.ts               # Declarative connector configuration
│  ├─ state/
│  │  └─ connectors-store.ts         # Zustand/React state for connector status and keys
│  ├─ lib/
│  │  ├─ http/
│  │  │  └─ fetcher.ts               # Shared fetch wrapper with retries/auth
│  │  └─ telemetry/
│  │     └─ logging.ts
│  ├─ assets/
│  │  ├─ main/                       # Source design assets (e.g., FlowHubIcon.png)
│  │  └─ icons/                      # Generated extension icon sizes
│  ├─ types/
│  │  ├─ dashboard.ts
│  │  ├─ connectors.ts
│  │  └─ api.ts
│  ├─ utils/
│  │  ├─ date.ts
│  │  ├─ formatting.ts
│  │  └─ aggregation.ts
│  ├─ tests/
│  │  ├─ unit/                       # Jest unit specs for utilities, connectors, storage
│  │  ├─ integration/                # Jest integration tests across connector pipelines
│  │  └─ e2e/                        # Playwright end-to-end scenarios
│  └─ scripts/
│     ├─ generate-connector.ts
│     ├─ generate-icons.mjs
│     └─ export-extension.mjs
├─ python/
│  └─ api/                         # Placeholder for future backend endpoints
└─ (root configs: package.json, pnpm-lock.yaml, next.config.ts, tsconfig.json,
   tailwind.config.ts, components.json, .eslintrc.json, .prettierrc, .env.example, README.md)
```

## Key Modules & Responsibilities

- **`typescript/app/layout.tsx`** – wraps every route, injects global CSS, and wires top-level providers.
- **`typescript/app/page.tsx`** – server component that selects dashboard state and renders the client shell.
- **`typescript/app/components/widgets/*`** – Shadcn-based widgets (time, summaries, charts) that populate the dashboard grid.
- **`typescript/app/components/layout/*`** – grid primitives and layout helpers that arrange widgets responsively.
- **`typescript/app/components/providers/*`** – React providers for theme, telemetry, connector state hydration, etc.
- **`typescript/app/(dashboard)`** – Next.js route group that composes per-connector widgets and summary cards.
- **`typescript/app/(connectors)`** – discovery/setup surface with `ConnectorList`, `ConnectorModal`, and status UI.
- **`typescript/app/api/usage/route.ts`** – serverless endpoint that fetches connector usage metrics via shared clients.
- **`typescript/connectors/*`** – connector-specific clients, schema validation, transformers, and registries powering the UI.
- **`typescript/storage/keys`** – KeyStore interface plus `local-session` adapter for storing credentials.
- **`typescript/storage/cache`** – cache contracts and browser-backed implementations for raw connector payloads.
- **`typescript/config/connectors.ts`** – declarative connector metadata (facets, defaults, capabilities) consumed by UI + registry.
- **`typescript/state/connectors-store.ts`** – shared state (Zustand/React) exposing connector connection status and key presence.
- **`typescript/lib/http/fetcher.ts`** – Fetch wrapper that injects auth headers, retries, and normalizes responses.
- **`typescript/lib/telemetry/logging.ts`** – centralized logging hooks for connector/client observability.
- **`typescript/assets`** – source and generated icon assets used by the browser extension packaging flow.
- **`typescript/types`** – DTOs and shared types for connectors, dashboard summaries, and API responses.
- **`typescript/utils`** – formatting, aggregation, and date utilities reused across connectors and UI.
- **`typescript/tests`** – Jest-powered unit/integration suites plus Playwright e2e specs covering connectors, storage, and UI flows.
- **`typescript/scripts/*`** – developer tooling for connector scaffolding, icon generation, and extension export.

## Tooling & Validation

- **Package management:** pnpm with pinned version (`packageManager` field) and committed `pnpm-lock.yaml`.
- **Static analysis:** ESLint (`pnpm lint`), Prettier, optional Stylelint if CSS emerges.
- **Typing:** `pnpm typecheck` (strict TypeScript, `tsc --noEmit`).
- **Testing:** Jest for unit/integration (`pnpm test`), Playwright reserved for `tests/e2e`.
- **Pre-commit validation (lint-staged or CI mirror):**
  - `pnpm typecheck` → `tsc --noEmit`
  - `pnpm lint` → `eslint . --ext .ts,.tsx`
  - `pnpm format` → `prettier --write .`
- **CI pipeline (GitHub Actions):**
  1. `pnpm install --frozen-lockfile`
  2. `pnpm lint`
  3. `pnpm typecheck`
  4. `pnpm test --coverage`
  5. `pnpm build`
- **Pre-commit workflow:** lint-staged (ESLint, Prettier, optional focused Jest runs). Commit hooks may be added later via preferred tooling (e.g., lefthook or npm scripts; `.husky/` intentionally omitted).

## Operational Playbooks

- **Adding a connector:**
  1. Run `pnpm ts-node typescript/scripts/generate-connector.ts <name>`.
  2. Implement `client.ts`, `schema.ts`, `transformers.ts`, and connector UI components.
  3. Register connector in `typescript/connectors/registry.ts` and `typescript/config/connectors.ts`.
  4. Update summary logic if new metrics should appear there.
  5. Add unit tests in `typescript/tests/connectors/<name>.test.ts`.
- **Managing API keys:**
  - UI calls `KeyStore` methods for get/set/status.
  - Session storage holds plaintext keys for now; encryption or remote storage can replace `local-session.ts`.
- **Fetching usage data:**
  - UI triggers Next.js route handlers under `app/api/usage`.
  - Route uses connector `client` + `transformers`, persists raw data via cache adapter, and returns normalized DTOs.
  - Dashboard consumes DTOs via hooks/state store, enabling filtering and aggregation.

## Future Considerations

- **Backend evolution:** `python/api/` placeholder indicates eventual migration of connector clients to server-side services without touching TypeScript UI.
- **Security:** plan for encrypting keys at rest, secrets rotation, and possibly multi-user key storage once remote storage is introduced.
- **Caching strategy:** explore revalidation tags, IndexedDB, or remote KV if session storage proves insufficient.
- **Design system:** Shadcn UI components live under `app/.../components/core`; consider promoting them to `typescript/components/ui` if a full design system emerges.
- **Analytics & telemetry:** hook shared logging utilities into connector clients for error/latency tracking.

## Key Design Benefits

- **Serverless-ready:** client-first architecture with local/session storage and Next.js route handlers requires no dedicated backend.
- **Future-proof:** explicit `typescript/` domain keeps frontend isolated, easing later backend extraction (e.g., `python/api`).
- **Scalable connectors:** registry-driven pattern makes adding new providers straightforward without touching core UI.
- **Secure posture:** key storage abstraction prepares for encryption or remote secret management when needed.
- **Maintainable layers:** clear separation between UI, connector domain logic, and storage adapters.
- **Developer-friendly:** generator scripts, consistent validation commands, and documented patterns accelerate onboarding.

## Open Questions

- What TTLs and eviction strategies should caching use per connector?
- Should we adopt Conventional Commits or another commit policy before automation is added?
- How should connector errors surface in the summary (silent fail vs. degraded UI)?
- When the Python backend arrives, which modules migrate first (connectors’ clients vs. transformers)?

Use this brief as the baseline when spinning up new tasks or agents so folder layout, tooling, and responsibilities stay consistent across contributors.

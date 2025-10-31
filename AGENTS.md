# Flowhub Agent Brief

## Mission & Scope
- Deliver a serverless, TypeScript-driven dashboard that surfaces per-connector usage and an aggregated summary for a user's daily activity.
- Start as a browser new-tab experience powered by Next.js (App Router), Shadcn UI, and pnpm-managed dependencies.
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
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ globals.css
│  │  ├─ (dashboard)/
│  │  │  ├─ page.tsx
│  │  │  └─ components/
│  │  │     ├─ core/                # shared cards, tables, filters, summary UI
│  │  │     └─ connectors/
│  │  │        ├─ anthropic/
│  │  │        ├─ openai/
│  │  │        └─ openrouter/
│  │  ├─ (connectors)/
│  │  │  ├─ page.tsx
│  │  │  └─ components/
│  │  │     ├─ ConnectorList.tsx
│  │  │     ├─ ConnectorModal.tsx
│  │  │     └─ ConnectorStatus.tsx
│  │  └─ api/
│  │     └─ usage/
│  │        └─ route.ts
│  ├─ connectors/
│  │  ├─ registry.ts
│  │  ├─ anthropic/
│  │  │  ├─ client.ts
│  │  │  ├─ schema.ts
│  │  │  ├─ transformers.ts
│  │  │  └─ index.ts
│  │  ├─ openai/…
│  │  └─ openrouter/…
│  ├─ storage/
│  │  ├─ keys/
│  │  │  ├─ key-store.ts
│  │  │  └─ local-session.ts
│  │  ├─ cache/
│  │  │  ├─ cache-store.ts
│  │  │  └─ browser-cache.ts
│  │  └─ adapters/
│  │     └─ index.ts
│  ├─ config/
│  │  └─ connectors.ts
│  ├─ types/
│  │  ├─ dashboard.ts
│  │  ├─ connectors.ts
│  │  └─ api.ts
│  ├─ utils/
│  │  ├─ date.ts
│  │  ├─ formatting.ts
│  │  └─ aggregation.ts
│  ├─ state/
│  │  └─ connectors-store.ts
│  ├─ lib/
│  │  ├─ http/fetcher.ts
│  │  └─ telemetry/logging.ts
│  ├─ tests/
│  │  ├─ unit/
│  │  ├─ integration/
│  │  └─ e2e/
│  └─ scripts/
│     └─ generate-connector.ts
├─ python/
│  └─ api/                         # placeholder for future backend endpoints
└─ (root configs: package.json, pnpm-lock.yaml, next.config.js, tsconfig.json,
   tailwind.config.ts, components.json, .eslintrc.json, .prettierrc, .env.example, README.md)
```

## Key Modules & Responsibilities
- **`typescript/app/(dashboard)`** – renders the primary dashboard view. Consumes summary metrics and per-connector components supplied by the registry.
- **`typescript/app/(connectors)`** – manages connector discovery, setup modals, and connection status display.
- **`typescript/connectors/*`** – implements per-connector API clients, data schemas (zod), transformation logic, and exports typed functions for UI consumption.
- **`typescript/connectors/registry.ts`** – central catalog describing connector metadata (id, label, metrics, facets, UI factory pointers) used by dashboard summaries and connectors list.
- **`typescript/storage/keys`** – provides the `KeyStore` interface (`getKey`, `setKey`, `getStatus`) with a `local-session` implementation. Future encrypted or remote stores can replace this module without touching UI.
- **`typescript/storage/cache`** – caches raw API responses with pluggable adapters; initial implementation wraps browser session/local storage.
- **`typescript/config/connectors.ts`** – declarative configuration for facets, default timeframes, and dashboard capabilities per connector.
- **`typescript/types`** – shared DTOs for summary metrics, connector facets, API response shapes, and transformation outputs.
- **`typescript/utils`** – formatting, aggregation, and date utilities reused across connectors.
- **`typescript/state/connectors-store.ts`** – manages connector statuses and key presence via Zustand or React context.
- **`typescript/lib/http/fetcher.ts`** – wraps `fetch` with retries, auth header injection, and response normalization per connector needs.
- **`typescript/tests`** – holds unit (transformations, key-store), integration (connector pipelines), and future e2e specs (Playwright).
- **`typescript/scripts/generate-connector.ts`** – scaffolds new connector modules with boilerplate client/schema/transformer/UI files.

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

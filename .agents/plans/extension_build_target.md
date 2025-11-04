# Plan — extension_build_target

## Context
- Reviewer flagged that `typescript/scripts/export-extension.mjs` copied `.next/` instead of the static export bundle, omitting `index.html`.
- Review follow-ups added Playwright guardrails and highlighted lint noise from generated assets plus Chrome’s reserved filename constraint.

## Plan
1. Capture context and solidify the validation approach so we know which behaviours to lock down in tests.
2. Drive a Jest unit test (adding lightweight scaffolding if needed) that fails until the export script bundles from the directory produced by a fresh Next build/export.
3. Refactor the export script to stage the static output, remove Chrome-reserved files, and keep manifest/icons intact.
4. Execute lint/type/test commands (or focused subsets) to verify the change set.
5. Perform a self-review, ensure temporary assets are cleaned, and summarize work/residual risks.

## Test Strategy
- Jest unit test in `typescript/tests/unit` exercising the bundling workflow with a stubbed export runner (protecting export-dir selection and reserved filename removal).
- `pnpm test -- export-extension` (focused path) or `pnpm test` if per-file filtering is unavailable.
- `pnpm lint`, `pnpm typecheck` for static verification.
- Manual `pnpm run build` (outside the sandbox) to produce a production bundle before packaging the browser extension.

## Status
- [x] Context captured and assumptions logged for export script behaviour.
- [x] Jest regression test authored to protect export-output usage.
- [x] Export script refactored to run `next build`, stage artifacts, and strip Chrome-reserved files; Playwright config ensures `dist/` exists.
- [x] ESLint ignore globs expanded so generated directories (nested `.next`, `dist`, `out`, etc.) stay out of lint scans.
- [x] Browser extension polish: new-tab title reset to `New Tab` and CSP relaxed (`'unsafe-inline'`) so Next’s inline bootstraps hydrate correctly.
- [x] Validation: `COREPACK_ENABLE_STRICT=0 pnpm lint`, `COREPACK_ENABLE_STRICT=0 pnpm typecheck`, and `COREPACK_ENABLE_STRICT=0 pnpm test -- export-extension`.
- [ ] Manual `pnpm run build` smoke test (still recommended outside the restricted environment; Turbopack cannot bind to a port here).

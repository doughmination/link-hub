# AGENTS.md

Guidance for LLMs and coding agents working in this repository.

## Required skills

Before doing any work in this repo, load these two skills and follow them for the whole session:

- **`i-have-adhd`** — shape all output for an ADHD reader: lead with concrete next actions, number multi-step work, keep it brief, suppress tangents, and make progress visible.
- **`dyslexia-friendly-code`** — shape all generated and reformatted code for a dyslexic reader: favour vertical layout (one item per line), keep names visually distinct, and align consistently.

These apply to every response, including casual conversation, not just code changes.

## What this is

A personal portal for my collection of sites, served on a rotating set of `is-a.dev` subdomains.

The subdomain list lives in `src/data/subdomains.ts` — that file is the single source of truth. Edit it there, not in components or here.

## Stack

- **Next.js 16** (App Router) + **React 19**, built as a static export (`output: "export"` in `next.config.ts`).
- **TypeScript** everywhere. TypeScript is the preferred language for this project.
- **Vanilla Extract** for styling: `.css.ts` files compiled to static CSS at build time (zero runtime). Do not add a runtime CSS-in-JS library.
- **Turbopack** for dev/build; **Bun** as the package manager.
- **doodle-icons** for every icon: `<DoodleIcon name="home" />` from `@app/DoodleIcon`. SVGs live as strings in `src/data/doodle-icons.ts`; the downloaded pack in `icons/` is gitignored. Don't add another icon pack.
- **Deployed on Cloudflare Pages.** The `./out` static export is served by Pages.

## Layout

```
src/app/       App Router pages + small components
src/data/      Editable content: portal.ts (name/tagline), subdomains.ts, sites.ts, doodle-icons.ts
src/styles/    Vanilla Extract stylesheets (.css.ts)
```

## Conventions

- Every source file carries the DASL-1.0 licence header — keep it on new files.
- Path aliases are configured in `tsconfig.json` (`@app`, `@data`, `@styles`). Use them.
- Styling goes in a matching `.css.ts` file under `src/styles/`, not inline or in a runtime library. Import order in `layout.tsx` **is** the cascade order — preserve it.
- Colours come from the blood red palette in `src/styles/theme.css.ts`. Use the `vars` tokens; don't hard-code hex values in components.
- English only. No i18n or translation layer — write display text directly.
- Static export has no request host, so anything that reads the current subdomain must run client-side (see `src/app/useArrival.ts`).
- ESLint is pinned to v9: `eslint-plugin-react` crashes under ESLint 10.

## Common commands

```bash
bun install
bun dev          # dev server, Turbopack
bun run build    # static export to ./out
bun run lint     # ESLint
```

## Before finishing

Run `bun run lint` and confirm a clean `bun run build` (static export) after non-trivial changes.

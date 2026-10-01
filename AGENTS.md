# AGENTS.md

Guidance for LLMs and coding agents working in this repository.

## Required skills

Before doing any work in this repo, load these two skills and follow them for the whole session:

- **`i-have-adhd`** — shape all output for an ADHD reader: lead with concrete next actions, number multi-step work, keep it brief, suppress tangents, and make progress visible.
- **`dyslexia-friendly-code`** — shape all generated and reformatted code for a dyslexic reader: favour vertical layout (one item per line), keep names visually distinct, and align consistently.

These apply to every response, including casual conversation, not just code changes.

## What this is

A personal portal for my collection of sites, served on a rotating set of `is-a.dev` subdomains.

The subdomain list lives in `src/lib/data/subdomains.ts` — that file is the single source of truth. Edit it there, not in components or here.

## Stack

- **SvelteKit 2** + **Svelte 5** (runes mode forced in `vite.config.ts`).
- **TypeScript** everywhere. TypeScript is the preferred language for this project.
- **Plain CSS** in `src/lib/css/`, imported globally from `src/routes/+layout.svelte`. No CSS-in-JS.
- **Vite** for dev/build; **Bun** as the package manager.
- **@lucide/svelte** for every icon. Don't add another icon pack.
- **Deployed on Cloudflare Pages** via `@sveltejs/adapter-cloudflare`. Every page is prerendered (`prerender = true` in `src/routes/+layout.ts`).

## Layout

```
src/routes/          Pages and the root layout
src/lib/components/  Small Svelte components
src/lib/app/         Client-side state (arrival.svelte.ts)
src/lib/data/        Editable content: portal.ts (name/tagline), subdomains.ts, sites.ts
src/lib/css/         Stylesheets: app.css (tokens), main.css (base), home.css, devtools.css
```

## Conventions

- Every source file carries the DASL-1.0 licence header — keep it on new files.
- Use the `$lib` alias for imports.
- Styles go in a stylesheet under `src/lib/css/`. Import order in `+layout.svelte` **is** the cascade order — preserve it.
- Colours come from the blood red palette tokens in `src/lib/css/app.css`. Use the `var(--color-*)` tokens; don't hard-code hex values in rules.
- English only. No i18n or translation layer — write display text directly.
- Pages are prerendered, so there is no request host. Anything that reads the current subdomain or referrer must run client-side (see `src/lib/app/arrival.svelte.ts`).

## Common commands

```bash
bun install
bun run dev      # dev server
bun run build    # prerendered build to .svelte-kit/cloudflare
bun run check    # svelte-check
bun run lint     # Prettier + ESLint
bun run format   # Prettier --write
```

## Before finishing

Run `bun run lint` and `bun run check`, and confirm a clean `bun run build` after non-trivial changes.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

AstroWind-based static site: **Astro v6 + Tailwind CSS v4 + TypeScript**, `output: 'static'`. Requires **Node.js >= 22.12.0**.

See [AGENTS.md](./AGENTS.md) for additional detail and `.agents/skills/` for step-by-step recipes: `add-page.md`, `add-blog-post.md`, `add-component.md`, `styling.md`.

## Commands

| Command           | Purpose                                       |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Dev server at localhost:4321                  |
| `npm run build`   | Production build to `./dist/`                 |
| `npm run preview` | Preview the production build                  |
| `npm run check`   | All checks: `astro check` + ESLint + Prettier |
| `npm run fix`     | Auto-fix ESLint + Prettier                    |

Individual checks: `npm run check:astro`, `npm run check:eslint`, `npm run check:prettier`.

There is no test suite. Verification = `npm run build` succeeds + `npm run check` passes, then visual check in browser (homepage, blog, dark mode, mobile menu).

## Architecture

### Configuration system (the non-obvious part)

Site configuration lives in `src/config.yaml`. The custom Astro integration in `vendor/integration/` loads it at build time and:

1. Exposes it as the Vite virtual module **`astrowind:config`**, imported throughout the codebase as `import { SITE, I18N, METADATA, APP_BLOG, UI, ANALYTICS } from 'astrowind:config'`.
2. Sets Astro's `site`, `base`, and `trailingSlash` from the yaml (don't set these in `astro.config.ts`).
3. After build, injects the sitemap URL into `dist/robots.txt`.

So behavior like blog permalinks, pagination size, SEO defaults, and analytics is driven by `config.yaml`, not code. `configBuilder.ts` in `vendor/integration/utils/` defines defaults merged under the yaml values.

### Path alias

`~/` maps to `src/` (defined in `astro.config.ts` and `tsconfig.json`).

### Component hierarchy

Pages compose widgets; widgets compose UI primitives:

- `src/components/ui/` — primitives (`Button`, `Headline`, `WidgetWrapper`, `ItemGrid`, ...)
- `src/components/widgets/` — page sections (`Hero`, `Features`, `Pricing`, `Header`, `Footer`, ...)
- `src/components/common/` — shared infrastructure (`Image`, `Metadata`, analytics, `ToggleTheme`)
- `src/pages/` — file-based routes that assemble widgets inside `src/layouts/PageLayout.astro`

Widget pattern: props typed via interfaces in `src/types.d.ts` (extend the `Widget` base interface), wrap content in `WidgetWrapper` (spacing + dark mode + `bg` slot), render titles with `Headline`, accept a `classes` prop merged with `twMerge()` (tailwind-merge v3), support named slots (`title`, `subtitle`, `bg`).

### Blog

- Posts: `.md`/`.mdx` files in `src/data/post/`, loaded via the Content Layer `glob()` collection in `src/content.config.ts`.
- Routing: catch-all routes in `src/pages/[...blog]/` (post page, paginated list, category, tag). URLs are generated from the permalink patterns in `config.yaml` (`%slug%`, `%category%`, `%year%`, ...) by `src/utils/permalinks.ts`; post fetching/pagination logic is in `src/utils/blog.ts`.
- The blog requires prerendering (`prerender = true`); the site is static output.
- Reading time is computed by `readingTimeRemarkPlugin`, and responsive tables by `responsiveTablesRehypePlugin`, both in `src/utils/frontmatter.ts`, wired into `markdown.processor` in `astro.config.ts`.

### Styling (Tailwind v4, CSS-first — no tailwind.config.js)

- All Tailwind configuration is in `src/assets/styles/tailwind.css`: `@theme` tokens, `@utility` custom utilities (`bg-page`, `btn`, `btn-primary`, ...), `@plugin "@tailwindcss/typography"`.
- Theme tokens map to CSS variables (`--aw-color-*`) defined with light/dark values in `src/components/CustomStyles.astro` — change colors/fonts there.
- Dark mode is class-based (`.dark` on `<html>`), registered via `@variant dark`.
- Tailwind is wired as the Vite plugin `@tailwindcss/vite` in `astro.config.ts`, not as an Astro integration.
- Scroll animations use the custom `intersect` variant (e.g. `intersect-once motion-safe:md:intersect:animate-fade`).

### Images

`src/components/common/Image.astro` routes local images through `astro:assets`/Sharp and most remote CDN images through Unpic (served CDN-side, never downloaded). Remote hosts Unpic can't detect must be listed in `image.domains` in `astro.config.ts` (currently `cdn.pixabay.com`). Icons come from `astro-icon` (`tabler:*` and a whitelist of `flat-color-icons`).

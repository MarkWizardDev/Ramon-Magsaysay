---
name: ramon-magsaysay-site
description: Use this skill when working on the Ramon Magsaysay landing page, updating content, styling, or React/Vite implementation details.
---

# Ramon Magsaysay Site Maintenance

Use this skill for tasks involving the landing page for Ramon Magsaysay, including content updates, section changes, visual polish, theme behavior, and front-end fixes.

## Project context

This project is a Vite + React + TypeScript site with Tailwind-based styling. The main app entry is in `src/App.tsx`, and the site is organized into reusable components under `src/components/` with supporting constants and context in `src/constants/` and `src/context/`.

## Working conventions

- Prefer small, focused edits inside the relevant section component or data file instead of rewriting the entire page.
- Keep copy updates consistent with the brand voice and historical tone of the Ramon Magsaysay story.
- For content-heavy sections, prefer updating data/constants rather than hard-coding text directly inside large component trees when a data source already exists.
- Preserve the existing dark/light theme behavior through `ThemeContext` and the component styling patterns already in use.
- Keep accessibility in mind: correct heading hierarchy, semantic structure, alt text, and readable contrast.

## Common files

- `src/App.tsx` — overall page composition and section ordering
- `src/components/` — section and UI components
- `src/constants/` — shared text, FAQ entries, and asset metadata
- `src/context/ThemeContext.tsx` — theme state and toggle behavior
- `src/types.ts` — shared TypeScript types
- `src/index.css` — global styling

## Development workflow

1. Read the relevant component and any nearby data source before editing.
2. Make the smallest possible change that satisfies the request.
3. Keep imports, props, and component structure aligned with the current project patterns.
4. Validate the result with the project checks available for this repo.
5. If adding new UI or features, maintain consistent spacing, typography, and animation patterns used by the site.

## Verification

Before concluding work, run the project validation command for this repo and confirm it succeeds.

```bash
npm run build
```

If a task is specifically about TypeScript correctness, also use:

```bash
npm run lint
```

## Do not

- Do not introduce unnecessary libraries or frameworks for minor UI changes.
- Do not break the existing theme flow or section ordering without a clear reason.
- Do not duplicate content across files when a centralized constant source already exists.
- Do not make large visual rewrites unless the request specifically calls for a redesign.

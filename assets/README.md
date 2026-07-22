# Assets — Design System

Assets that are **reused across components and docs**. Stable, versioned, part of the system.

If an asset is only needed for one specific flow or prototype, it goes in `dev/prototypes/[flow-name]/assets/` instead.

```
assets/
  brand/           ← Logo mark, wordmark, favicon
  icons/           ← Custom SVG icons (check Phosphor first)
  illustrations/   ← Reusable UI art: empty states, onboarding illustrations
```

## How components use assets

Components never hardcode asset paths. They accept paths as properties:

```html
<la-sidebar
  logo-src="../assets/brand/logo-mark.svg"
  wordmark-src="../assets/brand/wordmark.svg"
></la-sidebar>
```

Paths are relative to the page URL (served root is `dev/`). From a docs draft at
`dev/docs-drafts/`, use `../assets/...`. From a prototype at `dev/prototypes/[name]/`,
use `../../assets/...`.

## What does NOT go here

- One-time banner images for a specific screen → `dev/prototypes/[flow]/assets/`
- Article or editorial graphics → same
- Anything that only appears in one place

# Brand assets

Add the following files here:

| File | What it is | Used in |
|------|-----------|---------|
| `logo-mark.svg` | Square icon mark (the symbol only) | `la-sidebar` logo-src |
| `wordmark.svg` | Horizontal text logo | `la-sidebar` wordmark-src |
| `favicon.svg` | Favicon | Preview page `<link rel="icon">` |

## Usage in la-sidebar

```html
<la-sidebar
  logo-src="../assets/brand/logo-mark.svg"
  wordmark-src="../assets/brand/wordmark.svg"
></la-sidebar>
```

Until assets are added, the sidebar falls back to the "LA" text mark.

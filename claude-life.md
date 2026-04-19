# ~/life Page Architecture

The life page is a personal logbook — movies, books, trips, fitness, building entries — each as a teaser card that opens a full MDX blog post.

---

## How It Works

```
/content/life/*.mdx          → MDX files with frontmatter + markdown content
        ↓
/lib/life.js                 → Reads, parses, sorts, groups entries
        ↓
/app/life/page.tsx           → Server component, calls lib/life.js
        ↓
/components/LifePageClient   → Client component: year filter, month grid, cards
        ↓
/app/life/[slug]/page.tsx    → Server component with generateStaticParams
        ↓
/components/LifeEntryMDX     → Client component: renders MDX via next-mdx-remote
```

---

## Adding a New Entry

1. Create a new `.mdx` file in `/content/life/`:

```
/content/life/my-new-entry.mdx
```

2. Add frontmatter at the top:

```yaml
---
id: my-new-entry
year: 2025
month: 6
monthLabel: June
date: Jun 15, 2025
category: Trip
title: "My Trip Title"
hook: "One-line teaser shown on the card."
coverImage: null
coverEmoji: "🏔️"
---
```

3. Write markdown content below the frontmatter.

4. Run `npm run build` — the new entry is automatically picked up.

**That's it.** No other files need editing.

---

## Frontmatter Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique slug, used in URL `/life/[id]` |
| `year` | number | Entry year, for grouping/filtering |
| `month` | number | 1-12, for month grouping |
| `monthLabel` | string | Display name: "January", "February", etc. |
| `date` | string | Display date: "Jun 15, 2025" or "Jun 2025" |
| `category` | string | One of: Movie, Book, Trip, Cricket, Fitness, Building |
| `title` | string | Entry title |
| `hook` | string | 1-line teaser shown on card |
| `coverImage` | string/null | Path to cover image (e.g. `/life/my-entry/cover.jpg`) or null |
| `coverEmoji` | string | Fallback emoji if no coverImage |

---

## Categories & Colors

| Category | Background | Text |
|----------|-----------|------|
| Movie | #FAECE7 | #993C1D |
| Book | #FAEEDA | #854F0B |
| Trip | #E6F1FB | #185FA5 |
| Cricket | #E1F5EE | #0F6E56 |
| Fitness | #FAECE7 | #993C1D |
| Building | #EEEDFE | #534AB7 |

To add a new category: update `categoryColors` in both `LifePageClient.tsx` and `LifeEntryMDX.tsx`.

---

## File Reference

| File | Role |
|------|------|
| `content/life/*.mdx` | Entry content (frontmatter + markdown) |
| `lib/life.js` | Utility: `getAllEntries()`, `getEntryBySlug()`, `getAllYears()`, `getEntriesByYear()` |
| `app/life/page.tsx` | Server page → passes data to LifePageClient |
| `app/life/[slug]/page.tsx` | Server page with `generateStaticParams` → passes to LifeEntryMDX |
| `components/LifePageClient.tsx` | Client: year pills, month grid, entry cards |
| `components/LifeEntryMDX.tsx` | Client: MDX rendering, back links, cover, meta |
| `app/globals.css` | `.life-prose` styles for rendered markdown |

---

## Images

For cover images:
1. Put photos in `/public/life/[slug]/cover.jpg`
2. Set `coverImage: "/life/[slug]/cover.jpg"` in frontmatter
3. If `coverImage` is null, `coverEmoji` is shown instead

---

## MDX Prose Styles (`.life-prose`)

Defined in `app/globals.css`:
- **h2**: 18px, weight 600, color #e2e8f0, margin-top 2rem
- **h3**: 15px, weight 500, color #e2e8f0
- **p**: 15px, line-height 1.8, color #94a3b8
- **ul/li**: disc list, same muted color
- **blockquote**: 3px left border #1D9E75, italic, muted
- **strong**: #e2e8f0, weight 600
- **a**: #1D9E75, underline on hover
- **img**: full width, border-radius 8px

---

## Dependencies

- `next-mdx-remote` — renders MDX in Next.js (serialize + MDXRemote)
- `gray-matter` — parses YAML frontmatter from .mdx files
- `reading-time` — calculates read time from content length
- `@tailwindcss/typography` — Tailwind prose plugin (used in tailwind.config.ts)

---

## Static Export

Since the project uses `output: 'export'`:
- `app/life/[slug]/page.tsx` exports `generateStaticParams()` returning all slugs
- At build time, Next.js pre-renders one HTML page per entry
- New entries require a rebuild (`npm run build`)

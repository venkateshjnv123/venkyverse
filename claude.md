# Project Documentation - Venkatesh Portfolio

> Split into 3 files for maintainability:
> - **claude.md** (this file) — Project overview, structure, config, guidelines
> - **claude-sessions.md** — Full session history
> - **claude-life.md** — ~/life page architecture & MDX content system

---

## Project Overview

Personal portfolio website for a backend engineer. Built with Next.js 14 (App Router, static export) and deployed on Firebase Hosting.

**Owner**: Venkatesh Patnala (IIT Jodhpur - Mechanical Engineering)
**GitHub**: venkateshjnv123/venkyverse
**Live URL**: https://my-website-9842b.web.app
**Firebase Project**: my-website-9842b

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14.1.0 (App Router, `output: 'export'`) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4.1, `@tailwindcss/typography` |
| Animation | Framer Motion 12.34.1 |
| MDX | `next-mdx-remote`, `gray-matter`, `reading-time` |
| Deployment | Firebase Hosting (static) |
| Linting | ESLint, PostCSS, Autoprefixer |

---

## Project Structure

```
windsurf-project/
├── app/
│   ├── layout.tsx                # Root layout: Navbar, Footer, SpotlightCursor, SocialSidebar
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles + .life-prose MDX styles
│   ├── about/page.tsx            # About (3 prose paragraphs + tech grid + AI section)
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual blog post
│   ├── connect/page.tsx          # Contact page
│   ├── journey/page.tsx          # Work experience + projects (collapsible)
│   ├── life/
│   │   ├── page.tsx              # Life logbook (server → LifePageClient)
│   │   └── [slug]/page.tsx       # Individual life entry (server → LifeEntryMDX)
│   ├── projects/page.tsx         # Projects showcase
│   ├── resume/page.tsx           # Resume
│   └── writing/page.tsx          # Writing/blog listing
│
├── components/
│   ├── Navbar.tsx                # Nav: about, work (/journey), writing, life
│   ├── Footer.tsx                # SVG icons: Email→/connect, GitHub, LinkedIn, Instagram
│   ├── SpotlightCursor.tsx       # Custom cursor effect
│   ├── SocialSidebar.tsx         # Fixed sidebar with social SVG icons
│   ├── AnimatedLayout.tsx        # Page transition wrapper
│   ├── CollapsibleProjects.tsx   # Toggle "Earlier work (2022-23)" in journey
│   ├── LifePageClient.tsx        # Client component: year filter, month grid, entry cards
│   ├── LifeEntryMDX.tsx          # Client component: MDX rendering via next-mdx-remote
│   ├── LifeEntryContent.tsx      # (Legacy — from old JS data approach, can be removed)
│   └── home/                     # Home page sub-components
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── BlogPreview.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ContactForm.tsx
│       └── SystemBackground.tsx  # (Removed from all pages — grid now via CSS)
│
├── content/life/                 # MDX files for ~/life entries
│   ├── almanack-naval-ravikant.mdx
│   └── dhurandhar-2-2025.mdx
│
├── data/
│   ├── posts.ts                  # Blog posts (TypeScript ContentBlock[])
│   └── lifeEntries.js            # (Legacy — replaced by /content/life/ MDX)
│
├── lib/
│   └── life.js                   # MDX utilities: getAllEntries, getEntryBySlug, etc.
│
├── public/                       # Static assets (images, fonts)
├── out/                          # Build output
├── firebase.json                 # Firebase config (cleanUrls: true, no rewrites)
├── next.config.js                # output: 'export', images: { unoptimized: true }
├── tailwind.config.ts            # Theme colors + @tailwindcss/typography plugin
└── package.json
```

---

## Navigation

```
Navbar:  about → /about
         work  → /journey
         writing → /writing
         life  → /life

Footer:  Email icon → /connect (internal Link)
         GitHub  → https://github.com/venkateshjnv123
         LinkedIn → https://linkedin.com/in/venkatesh-patnala-927a521b0
         Instagram → https://www.instagram.com/venkatesh.patnala_07/?hl=en
```

---

## Key Configuration

### next.config.js
```js
{ reactStrictMode: true, output: 'export', images: { unoptimized: true } }
```

### firebase.json
```json
{ "hosting": { "public": "out", "cleanUrls": true } }
```
**Never add rewrite rules** — `cleanUrls` handles routing.

### tailwind.config.ts
- Custom colors: `primary-bg`, `secondary-bg`, `accent-green` (#00ff41), `text-primary`, etc.
- Plugin: `@tailwindcss/typography`
- Font: Monaco monospace

---

## Visual Design Decisions

- **Background**: Solid `#080c08` with subtle CSS grid overlay (24px cells, white at 1.8% opacity)
- **Grid**: `body::before` pseudo-element, no JS animation (SystemBackground removed)
- **Typography**: h1/h2/h3 → `font-weight: 700`, body/p → `font-weight: 400`
- **Accent color**: `#1D9E75` (green) for metrics, links, active states, category pills
- **Experience metrics**: Inline styled spans with `color: #1D9E75; font-weight: 700; font-size: 1.05em`
- **Category tag colors** (life entries):
  - Movie: coral (#FAECE7 / #993C1D)
  - Book: amber (#FAEEDA / #854F0B)
  - Trip: blue (#E6F1FB / #185FA5)
  - Cricket: green (#E1F5EE / #0F6E56)
  - Fitness: coral (#FAECE7 / #993C1D)
  - Building: purple (#EEEDFE / #534AB7)

---

## Blog System

Posts in `/data/posts.ts` using structured `ContentBlock[]` (text, heading, image, code, list). Dynamic routes via `/app/blog/[slug]/page.tsx`.

**Current posts**: Redis Sorted Sets, Seat Blocking, Queues, System Design Interviews.

---

## Deployment

```bash
npm run build     # Static export → out/
firebase deploy   # Deploy to Firebase Hosting
```

---

## Code Style

- TypeScript for all components
- Tailwind for styling, no inline styles (except metrics spans in journey data)
- `&apos;` for apostrophes in JSX
- PascalCase components, kebab-case routes
- `@tailwind`/`@apply` lint warnings in globals.css are IDE false positives

---

## Common Issues

| Issue | Solution |
|-------|----------|
| Page refresh → home | Remove rewrites, use `cleanUrls: true` |
| ESLint apostrophe | Use `&apos;` in JSX |
| `next export` deprecated | Use `output: 'export'` in next.config.js |
| Dynamic routes + static export | Must export `generateStaticParams()` |

---

## Things to Remember

1. Never add rewrite rules to firebase.json
2. Blog posts: edit `/data/posts.ts`
3. Life entries: create `.mdx` in `/content/life/`
4. Static export = no API routes, ISR, or SSR
5. Images must be unoptimized for static export
6. Always test page refreshes after routing changes
7. `data/lifeEntries.js` is legacy — MDX system in `/content/life/` is canonical

---

## Notes for AI Assistants

1. Check `claude.md`, `claude-sessions.md`, `claude-life.md` for full context
2. Update relevant doc after significant changes
3. Follow established code style
4. Test with `npm run build` before deploying
5. Document new issues in this file

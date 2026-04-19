# Session History

---

## Session 1: Initial Setup & Deployment (Feb 27, 2026)

**Tasks**:
- Fixed ESLint apostrophe warning in `HeroSection.tsx`
- Set up Firebase deployment
- Updated `next.config.js` for static export (`output: 'export'`)
- Deployed to Firebase Hosting

**Key Learning**: Next.js 14 uses `output: 'export'` instead of deprecated `next export` command.

---

## Session 2: Routing Fix (Mar 28, 2026)

**Issue**: Page refreshes redirecting to home page.
**Root Cause**: Firebase `rewrites` rule catching all routes.
**Fix**: Removed `rewrites` from `firebase.json`, added `cleanUrls: true`.

**Files Modified**: `firebase.json`, `claude.md`

---

## Session 3: Visual Refactor (Mar 28, 2026)

4 focused visual changes — no content/layout/functionality changes.

### Change 1 — Remove animated background
- Removed `SystemBackground` import/usage from all 5 pages: `page.tsx`, `about/page.tsx`, `writing/page.tsx`, `connect/page.tsx`, `journey/page.tsx`
- Set `background-color: #080c08` globally in `globals.css`
- Removed `body::before` grid overlay CSS
- Later restored grid with smaller 24px cells and subtle white lines (1.8% opacity)

### Change 2 — Typography contrast
- Added to `globals.css` `@layer base`: h1/h2/h3 → `font-weight: 700 !important`, body/p → `font-weight: 400`

### Change 3 — Footer with social icons
- Rewrote `components/Footer.tsx` with SVG icons (Email, GitHub, LinkedIn, Instagram)
- Email icon links to `/connect` via Next.js `Link` (internal navigation)
- Other icons open externally with `target="_blank"`
- Footer added to `app/layout.tsx` (renders globally)
- Removed per-page `<Footer />` from about, writing, journey pages

### Change 4 — Update nav links
- Updated `components/Navbar.tsx` navLinks:
  - `about` → `/about` (unchanged)
  - `work` → `/journey` (label changed from "Journey")
  - `writing` → `/writing` (unchanged)
  - `life` → `/life` (replaced "Connect", new blank page created)
- Created `app/life/page.tsx` with "Coming soon" placeholder

---

## Session 4: Content & Structure Changes (Mar 28, 2026)

### Change 0 — Footer email → /connect
- Changed email icon `href` from `mailto:` to `/connect` using Next.js `Link`

### Change 1 — Rewrite ~/about "Who Am I"
- Replaced 3 bullet points with 3 prose paragraphs (origin, what I do, who I am)
- File: `app/about/page.tsx` lines 36-48

### Change 2 — Collapsible old projects
- Created `components/CollapsibleProjects.tsx` (client component with `useState`)
- Toggle button: "Earlier work (2022–23) ↓", collapsed by default
- Replaced inline project cards in `app/journey/page.tsx` with `<CollapsibleProjects />`

### Change 3 — WIP project placeholder
- Added "Something in progress" card with dashed border (`border-dashed border-slate-700`)
- Tag: 🔧 Building
- Placed above collapsible section in journey page

### Change 4 — Styled metrics in experience cards
- Replaced all `<span class="font-semibold text-white">` with `style="color:#1D9E75;font-weight:700;font-size:1.05em"`
- Applied across all 4 experience cards: CARS24, Sprinklr, Cogoport, Aspiro

---

## Session 5: ~/life Page with MDX (Mar 28, 2026)

Built the full ~/life logbook system using MDX files.

### Step 1 — Dependencies
- Installed `next-mdx-remote`, `gray-matter`, `reading-time`

### Step 2 — MDX content files
- Created `content/life/almanack-naval-ravikant.mdx` (Book entry)
- Created `content/life/dhurandhar-2-2025.mdx` (Movie entry)
- Frontmatter: id, year, month, monthLabel, date, category, title, hook, coverImage, coverEmoji

### Step 3 — MDX utility file
- Created `lib/life.js` with 4 functions:
  - `getAllEntries()` — reads all .mdx, parses frontmatter + reading-time, sorted newest first
  - `getEntryBySlug(slug)` — returns { frontmatter, content } for one entry
  - `getAllYears()` — unique years DESC
  - `getEntriesByYear(year)` — grouped by month DESC

### Step 4 — Life listing page
- Rewrote `app/life/page.tsx` as server component (reads MDX data, passes to client)
- Created `components/LifePageClient.tsx` (client component):
  - Year filter pills (solid green active, muted inactive)
  - 12-month at-a-glance grid (green = has entries, clickable → scroll)
  - Entry cards: 80x80 emoji/image thumbnail, date, category pill, title, hook, readTime, "Read entry →"
  - Category colors: Movie coral, Book amber, Trip blue, Cricket green, Fitness coral, Building purple
  - Empty state: "Nothing logged for [year] yet."

### Step 5 — Individual entry page
- Created `app/life/[slug]/page.tsx` (server component with `generateStaticParams`)
- Created `components/LifeEntryMDX.tsx` (client component):
  - MDX rendered via `next-mdx-remote` (`serialize` + `<MDXRemote>`)
  - Category tag pill, title, date · readTime, cover emoji/image
  - "← Back to ~/life" links at top and bottom
- Added `.life-prose` styles to `globals.css` (h2/h3/p/ul/li/blockquote/strong/a/img)
- Installed `@tailwindcss/typography` plugin, added to `tailwind.config.ts`
- Deleted old `app/life/[id]/` route (replaced by `[slug]`)

### Step 6 — Nav confirmed
- `Navbar.tsx` line 10: `{ href: '/life', label: 'Life' }` — already wired
- Build verified: 18 static pages generated successfully

### Legacy files (can be cleaned up)
- `data/lifeEntries.js` — old JS data file, replaced by MDX system
- `components/LifeEntryContent.tsx` — old client component for JS data approach

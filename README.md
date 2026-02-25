# Backend Engineer Portfolio

A professional portfolio website for backend engineers built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Design Philosophy

This portfolio follows a **dark, system-inspired aesthetic** designed specifically for backend engineers. The design is:

- **Professional & Confident**: No games, flashy animations, or hacker-themed elements
- **Cohesive Dark Theme**: Consistent charcoal/deep gray backgrounds throughout the home page
- **Terminal-Inspired**: Subtle terminal styling in the hero section that blends naturally with the page
- **Reading-Focused**: Blog detail pages use a light theme for optimal readability
- **Minimal Motion**: Subtle hover effects and smooth transitions only

## Features

### Pages
- **Home Page**: Hero section with terminal-style intro, about section, featured projects, and recent blog posts
- **Projects Page**: Comprehensive list of backend engineering projects with technical details
- **Blog Listing**: Collection of technical articles and engineering insights
- **Blog Detail**: Reading-optimized layout with light theme for article content

### Design System
- **Colors**:
  - Primary Background: `#1b1d20` (dark charcoal)
  - Secondary Background: `#202328` (slightly lighter)
  - Tertiary Background: `#252a30` (section layers)
  - Accent Green: `#7c9d96` (muted, terminal-inspired)
  - Text Primary: `#e4e6eb`
  - Text Secondary: `#b8bcc4`

### Technical Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (no UI libraries)
- **Font**: Inter (system font)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind
│   ├── projects/
│   │   ├── page.tsx        # Projects listing
│   │   └── [slug]/
│   │       └── page.tsx    # Individual project detail
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── [slug]/
│           └── page.tsx    # Individual blog post
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── home/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ProjectsSection.tsx
│       └── BlogPreview.tsx
└── public/                 # Static assets
```

## Customization

### Update Personal Information

1. **Name & Branding**: Edit `components/Navbar.tsx` and `components/Footer.tsx`
2. **Hero Section**: Modify `components/home/HeroSection.tsx` to update your tech stack and focus areas
3. **About Content**: Edit `components/home/AboutSection.tsx` with your background and skills
4. **Projects**: Update project data in `app/projects/page.tsx` and create detailed case studies
5. **Blog Posts**: Add your blog posts in `app/blog/page.tsx`

### Colors

All colors are defined in `tailwind.config.ts`. Modify the theme to match your preferences:

```typescript
colors: {
  'primary-bg': '#1b1d20',
  'accent-green': '#7c9d96',
  // ... other colors
}
```

### Content

Replace dummy content with your actual:
- Project descriptions and technical details
- Blog post content
- Contact information
- Resume link

## Design Principles

### What This Portfolio IS:
✅ Professional backend engineer portfolio  
✅ System-inspired, developer-friendly aesthetic  
✅ Dark, cohesive theme with terminal touches  
✅ Focused on technical depth and scalability  
✅ Clean, readable, maintainable code  

### What This Portfolio IS NOT:
❌ Hacker-themed with neon green  
❌ Game-like or playful  
❌ Heavily animated or distracting  
❌ Using white backgrounds on home page  
❌ Using external UI component libraries  

## License

This project is open source and available for personal use.

## Support

For questions or issues, please open an issue in the repository.

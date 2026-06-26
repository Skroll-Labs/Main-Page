# Memory — Blog System Implementation

Last updated: 2026-06-26

## What was built
- Built a static Next.js App Router blog system using file-based JSON data (`lib/blog.ts`, `types/blog.ts`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`).
- Generated 20 JSON posts (5 complete pillar articles, 15 scaffolded placeholders) and 7 unique AI-generated hero images.
- Created all corresponding blog UI components (`ArticleCard`, `ArticleSidebar`, `BlogHero`, `BlogTracker`, `CalloutBox`, `CTABlock`, `FilteredGrid`, `PrevNextNav`, `SocialShare`, `TableOfContents`, `TagChip`).
- Implemented global SEO features: dynamic `sitemap.ts`, `robots.ts`, a JSON Feed 1.1 route (`feed.json`), and comprehensive JSON-LD schemas (Organization, SoftwareApplication, FAQPage, Article).
- Added Google Analytics 4 event tracking for scroll depth and time-on-page via `BlogTracker`.
- Expanded the homepage with a `RecentBlogs` section and added `/blog` to the global `Navbar` and `Footer`.
- Installed the `wshobson/agents@nextjs-app-router-patterns` ecosystem skill.

## Decisions made
- Chose a fully static, file-based JSON architecture over a CMS to maximize performance and simplify the architecture.
- Used `generateStaticParams` to build all routes at compile time.
- Implemented a programmatic filter in `getAllPosts()` to exclude any post with a `"scaffold"` tag. This seamlessly hides the 15 placeholder articles from the production build without deleting their data files.

## Problems solved
- Fixed Tailwind v4 arbitrary variable parsing issues (e.g. `bg-[--color-brand-coral]`) by switching to standard utility classes (`bg-brand-coral`) across all blog components, preventing transparent backgrounds.
- Addressed missing social icons in `lucide-react` by utilizing raw SVGs in the `SocialShare` component.

## Current state
- The blog system is fully functional, visually polished, and heavily optimized for SEO.
- A `npm run build` cleanly compiles the 5 full articles while successfully bypassing the 15 scaffolds.

## Next session starts with
- Adding real tracking IDs (if required) to test the GA4 events.
- Writing full content to replace the remaining 15 scaffold posts stored in `data/posts/`.

## Open questions
- None at this time.

// types/blog.ts
// Shared TypeScript types for the TicketFlow blog system.
// Import in Server Components, lib/blog.ts, and component prop types.

/** A single renderable section within a blog article body */
export type BlogSection = {
  type: "intro" | "h2" | "h3" | "callout" | "conclusion" | "comparison_table";
  /** Optional heading text (used for h2, h3, comparison_table sections) */
  heading?: string;
  /** Primary prose content for this section */
  content?: string;
  /** Structured data for comparison_table sections only */
  tableData?: {
    headers: string[];
    rows: string[][];
  };
};

/** Internal link reference within the article body or sidebar */
export type InternalLink = {
  href: string;
  label: string;
};

/** Top-level blog article data model */
export interface BlogPost {
  /** URL-safe slug — matches the JSON filename and the [slug] route segment */
  slug: string;
  /** H1 display headline — not used as <title> directly */
  title: string;
  /** Browser <title> / OG title — must be ≤ 60 characters */
  metaTitle: string;
  /** Meta description — must be ≤ 155 characters */
  metaDescription: string;
  /** Content cluster number (1–5) — used for filtering on the blog index */
  cluster: 1 | 2 | 3 | 4 | 5;
  /** Human-readable category label */
  category: string;
  /** ISO 8601 publish date string e.g. "2026-07-01T08:00:00+05:30" */
  publishDate: string;
  /** Estimated minutes to read */
  readTimeMinutes: number;
  /** Absolute path from /public e.g. "/blog/article-01-hero.png" */
  heroImage: string;
  /** Array of tag strings — rendered as TagChip components */
  tags: string[];
  /** Short summary for ArticleCard and JSON Feed */
  excerpt: string;
  /** Primary SEO keywords for this article */
  primaryKeywords: string[];
  /** Supporting/secondary SEO keywords */
  secondaryKeywords: string[];
  /** Ordered array of content sections — drives the article body renderer */
  sections: BlogSection[];
  /** Internal links injected at the bottom of the article */
  internalLinks: InternalLink[];
  /** Slugs of related articles — used by getRelatedPosts() */
  relatedSlugs: string[];
}

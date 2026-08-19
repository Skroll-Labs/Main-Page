// app/blog/[slug]/page.tsx — Individual article page
// Server Component — generateStaticParams pre-renders all 20 routes at build time.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import type { BlogPost, BlogSection } from "@/types/blog";
import { ArticleSidebar } from "@/components/blog/ArticleSidebar";
import { PrevNextNav } from "@/components/blog/PrevNextNav";
import { BlogTracker } from "@/components/blog/BlogTracker";
import { SocialShare } from "@/components/blog/SocialShare";
import { CTABlock } from "@/components/blog/CTABlock";
import { CalloutBox } from "@/components/blog/CalloutBox";
import { TagChip, CLUSTER_LABELS } from "@/components/blog/TagChip";
import { Clock, Calendar, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

const SITE_URL = "https://skroll.lk";

// ─── Static generation ────────────────────────────────────────────────────────
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// ─── Per-page metadata ────────────────────────────────────────────────────────
// IMPORTANT: params is a Promise in Next.js 16 — always await it
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [...post.primaryKeywords, ...post.secondaryKeywords],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.publishDate,
      tags: post.tags,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  };
}

// ─── Article JSON-LD ──────────────────────────────────────────────────────────
function ArticleJsonLd({ post }: { post: BlogPost }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.heroImage}`,
    datePublished: post.publishDate,
    url: `${SITE_URL}/blog/${post.slug}`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

// ─── Section Renderer ─────────────────────────────────────────────────────────
function renderSection(section: BlogSection, index: number) {
  const headingId = section.heading
    ? section.heading
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")
    : undefined;

  switch (section.type) {
    case "intro":
      return (
        <p
          key={index}
          className="text-lg text-[--color-text-secondary] leading-relaxed mb-8"
        >
          {section.content}
        </p>
      );

    case "h2":
      return (
        <div key={index} className="mb-8">
          <h2
            id={headingId}
            className="text-2xl md:text-3xl font-bold text-[--color-on-background] mb-4 scroll-mt-24"
          >
            {section.heading}
          </h2>
          {section.content && (
            <p className="text-base text-[--color-text-secondary] leading-relaxed">
              {section.content}
            </p>
          )}
        </div>
      );

    case "h3":
      return (
        <div key={index} className="mb-6">
          <h3
            id={headingId}
            className="text-xl font-bold text-[--color-on-background] mb-3 scroll-mt-24"
          >
            {section.heading}
          </h3>
          {section.content && (
            <p className="text-base text-[--color-text-secondary] leading-relaxed">
              {section.content}
            </p>
          )}
        </div>
      );

    case "callout":
      return (
        <CalloutBox key={index} variant="stat">
          {section.content}
        </CalloutBox>
      );

    case "conclusion":
      return (
        <div
          key={index}
          className="mb-8 p-6 border border-brand-coral/20 bg-surface-bright rounded-3xl"
        >
          <p className="text-base text-[--color-on-background] leading-relaxed font-medium">
            {section.content}
          </p>
        </div>
      );

    case "comparison_table":
      if (!section.tableData) return null;
      return (
        <div key={index} className="mb-8 overflow-x-auto rounded-2xl border border-[--color-glass-border]">
          {section.heading && (
            <div className="px-4 py-3 bg-[--color-surface-bright] border-b border-[--color-glass-border]">
              <p className="text-sm font-bold text-[--color-on-background]">
                {section.heading}
              </p>
            </div>
          )}
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[--color-surface-bright]">
                {section.tableData.headers.map((header, i) => (
                  <th
                    key={i}
                    className="text-left px-4 py-3 text-xs font-semibold text-[--color-text-secondary] uppercase tracking-wide border-b border-[--color-glass-border]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.tableData.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={
                    rowIndex % 2 === 0
                      ? "bg-surface"
                      : "bg-[--color-surface-bright]"
                  }
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-3 text-[--color-on-background] border-b border-[--color-glass-border] last:border-b-0"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.tags.includes("scaffold")) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev = allPosts[currentIndex + 1] ?? null; // older
  const next = allPosts[currentIndex - 1] ?? null; // newer

  const relatedPosts = getRelatedPosts(slug);

  // Extract headings for TableOfContents
  const headings = post.sections
    .filter((s) => s.type === "h2" || s.type === "h3")
    .map((s) => ({
      id: s.heading!.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, ""),
      text: s.heading!,
      level: s.type as "h2" | "h3",
    }));

  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-LK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <ArticleJsonLd post={post} />
      <BlogTracker slug={slug} />
      <Navbar />

      <main className="flex-1 pt-28 md:pt-36 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-[--color-text-secondary] mb-6 md:mb-8">
            <Link href="/" className="hover:text-[--color-brand-coral] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[--color-brand-coral] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[--color-on-background] font-medium line-clamp-1">{post.title}</span>
          </nav>

          {/* Two-column layout: 68% article / 32% sidebar */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* ── Main Article Column ──────────────────────────────── */}
            <article className="w-full lg:w-[68%] min-w-0">

              {/* Article Header */}
              <header className="mb-8">
                {/* Category + cluster */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full bg-[--color-coral-wash] text-[--color-brand-coral] text-xs font-semibold px-3 py-1 tracking-wide">
                    {CLUSTER_LABELS[post.cluster]}
                  </span>
                </div>

                {/* H1 */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[--color-on-background] leading-tight tracking-tight mb-4 text-balance">
                  {post.title}
                </h1>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-[--color-text-secondary] mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formattedDate}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[--color-glass-border]" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTimeMinutes} min read
                  </span>
                </div>

                {/* Hero Image */}
                <div className="rounded-3xl overflow-hidden mb-8">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full object-cover"
                    priority
                  />
                </div>
              </header>

              {/* Article Body */}
              <div className="prose-content">
                {post.sections.map((section, index) => renderSection(section, index))}
              </div>

              {/* Inline CTA Block */}
              <CTABlock variant="inline" />

              {/* Internal Links */}
              {post.internalLinks.length > 0 && (
                <div className="mt-8 p-6 rounded-3xl bg-surface border border-[--color-glass-border]">
                  <p className="text-xs font-semibold text-[--color-text-secondary] uppercase tracking-widest mb-3">
                    Further Reading
                  </p>
                  <ul className="space-y-2">
                    {post.internalLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-[--color-brand-coral] hover:underline flex items-center gap-1.5"
                        >
                          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-8">
                  {post.tags.map((tag) => (
                    <TagChip key={tag} label={tag} />
                  ))}
                </div>
              )}

              {/* Social Share */}
              <SocialShare url={articleUrl} title={post.title} />

              {/* Prev / Next Navigation */}
              <PrevNextNav prev={prev} next={next} />
            </article>

            {/* ── Sidebar Column — sticky on desktop (>1024px) ─────────────── */}
            <aside className="w-full lg:w-[32%] lg:sticky lg:top-28 lg:self-start">
              <ArticleSidebar headings={headings} relatedPosts={relatedPosts} />
            </aside>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

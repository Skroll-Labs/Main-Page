// components/blog/ArticleSidebar.tsx
// Server Component — contains client sub-components (TableOfContents).

import type { BlogPost } from "@/types/blog";
import { TableOfContents } from "./TableOfContents";
import { CTABlock } from "./CTABlock";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: "h2" | "h3";
}

interface ArticleSidebarProps {
  headings: Heading[];
  relatedPosts: BlogPost[];
}

export function ArticleSidebar({ headings, relatedPosts }: ArticleSidebarProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Table of Contents */}
      {headings.length > 0 && (
        <div className="rounded-3xl bg-surface border border-glass-border p-6 shadow-[var(--shadow-card)]">
          <TableOfContents headings={headings} />
        </div>
      )}

      {/* TicketFlow Contact Card */}
      <CTABlock variant="sidebar" />

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="rounded-3xl bg-surface border border-glass-border p-6 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-4">
            Related Articles
          </p>
          <ul className="space-y-4">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex gap-3 items-start group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-on-background leading-snug line-clamp-2 group-hover:text-brand-coral transition-colors duration-200">
                      {post.title}
                    </p>
                    <span className="text-[10px] text-text-secondary flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" /> {post.readTimeMinutes} min read
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

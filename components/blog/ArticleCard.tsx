// components/blog/ArticleCard.tsx
// Server Component — receives BlogPost and renders a card.
import type { BlogPost } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";
import { TagChip, CLUSTER_LABELS } from "./TagChip";

interface ArticleCardProps {
  post: BlogPost;
}

export function ArticleCard({ post }: ArticleCardProps) {
  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-LK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-3xl bg-surface border border-glass-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-hover-card)] h-full"
    >
      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Cluster tag overlay */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-brand-coral text-white text-[10px] font-semibold px-2.5 py-1 tracking-wide">
            {CLUSTER_LABELS[post.cluster]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="text-base font-bold text-on-background leading-snug mb-2 group-hover:text-brand-coral transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
        )}

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-text-secondary pt-4 border-t border-glass-border">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTimeMinutes} min read
          </span>
        </div>
      </div>
    </Link>
  );
}

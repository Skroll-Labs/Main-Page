// components/blog/PrevNextNav.tsx
import type { BlogPost } from "@/types/blog";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PrevNextNavProps {
  prev: BlogPost | null; // older article
  next: BlogPost | null; // newer article
}

export function PrevNextNav({ prev, next }: PrevNextNavProps) {
  return (
    <nav
      aria-label="Article navigation"
      className="mt-12 pt-8 border-t border-glass-border grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {/* Previous (older) */}
      <div>
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="group flex flex-col items-start p-4 rounded-2xl border border-glass-border bg-surface transition-all duration-300 hover:border-brand-coral hover:shadow-[var(--shadow-hover-card)] hover:-translate-y-1 h-full"
          >
            <span className="text-xs text-text-secondary flex items-center gap-1 mb-2">
              <ChevronLeft className="w-3.5 h-3.5" /> Previous
            </span>
            <span className="text-sm font-semibold text-on-background leading-snug line-clamp-2 group-hover:text-brand-coral transition-colors duration-200">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Next (newer) */}
      <div>
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="group flex flex-col items-end text-right p-4 rounded-2xl border border-glass-border bg-surface transition-all duration-300 hover:border-brand-coral hover:shadow-[var(--shadow-hover-card)] hover:-translate-y-1 h-full"
          >
            <span className="text-xs text-text-secondary flex items-center gap-1 mb-2">
              Next <ChevronRight className="w-3.5 h-3.5" />
            </span>
            <span className="text-sm font-semibold text-on-background leading-snug line-clamp-2 group-hover:text-brand-coral transition-colors duration-200">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}

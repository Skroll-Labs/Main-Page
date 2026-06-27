import { getAllPosts } from "@/lib/blog";
import { ArticleCard } from "@/components/blog/ArticleCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RecentBlogs() {
  const recentPosts = getAllPosts().slice(0, 2);

  if (recentPosts.length === 0) return null;

  return (
    <section className="py-16 md:py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="flex-1">
            <SectionHeading
              title="Latest Insights"
              subtitle="Event ticketing guides, industry updates, and expert tips for Sri Lankan organizers."
              align="left"
              className="!mb-0"
            />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-brand-coral hover:text-brand-coral/80 transition-colors"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} compact={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

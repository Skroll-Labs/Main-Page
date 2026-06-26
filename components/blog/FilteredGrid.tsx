"use client";
// components/blog/FilteredGrid.tsx
// Thin client component — holds active cluster filter state.
// Data comes from parent Server Component as a prop (never fetched here).

import { useState } from "react";
import type { BlogPost } from "@/types/blog";
import { ArticleCard } from "./ArticleCard";
import { TagChip, CLUSTER_LABELS } from "./TagChip";

interface FilteredGridProps {
  posts: BlogPost[];
}

const ALL_CLUSTERS = [1, 2, 3, 4, 5] as const;

export function FilteredGrid({ posts }: FilteredGridProps) {
  const [activeCluster, setActiveCluster] = useState<number | null>(null);

  const filtered =
    activeCluster === null
      ? posts
      : posts.filter((p) => p.cluster === activeCluster);

  return (
    <>
      {/* Cluster Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        <TagChip
          label="All Articles"
          active={activeCluster === null}
          onClick={() => setActiveCluster(null)}
        />
        {ALL_CLUSTERS.map((cluster) => (
          <TagChip
            key={cluster}
            label={CLUSTER_LABELS[cluster]}
            active={activeCluster === cluster}
            onClick={() =>
              setActiveCluster(activeCluster === cluster ? null : cluster)
            }
          />
        ))}
      </div>

      {/* Article Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-text-secondary">
          <p className="text-lg font-semibold mb-2">No articles in this category yet</p>
          <p className="text-sm">Check back soon — more guides are on the way.</p>
        </div>
      )}
    </>
  );
}

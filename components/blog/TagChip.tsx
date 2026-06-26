// components/blog/TagChip.tsx
import type { BlogPost } from "@/types/blog";
import Link from "next/link";

interface TagChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function TagChip({ label, active = false, onClick }: TagChipProps) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none";
  const variant = active
    ? "bg-brand-coral text-white"
    : "bg-surface border border-glass-border text-text-secondary hover:border-brand-coral hover:text-brand-coral";

  if (onClick) {
    return (
      <button onClick={onClick} className={`${base} ${variant}`}>
        {label}
      </button>
    );
  }

  return <span className={`${base} ${variant}`}>{label}</span>;
}

// Cluster label mapping
export const CLUSTER_LABELS: Record<number, string> = {
  1: "Platform & Product",
  2: "Event Verticals",
  3: "How-To Guides",
  4: "Local SEO",
  5: "Case Studies",
};

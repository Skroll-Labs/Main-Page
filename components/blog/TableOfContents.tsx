"use client";
// components/blog/TableOfContents.tsx
// Scroll-spy TOC — highlights active heading as user scrolls.
// 'use client' required for IntersectionObserver and useState.

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: "h2" | "h3";
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="mb-6">
      <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-3">
        In This Article
      </p>
      <ul className="space-y-1.5">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setActiveId(id);
              }}
              className={[
                "block text-sm leading-snug transition-colors duration-200",
                level === "h3" ? "pl-3" : "",
                activeId === id
                  ? "text-brand-coral font-semibold"
                  : "text-text-secondary hover:text-on-background",
              ].join(" ")}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";
// components/blog/BlogTracker.tsx
// GA4 event tracking for blog articles.
// 'use client' required — uses window, useEffect, IntersectionObserver.

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface BlogTrackerProps {
  slug: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const SCROLL_THRESHOLDS = [25, 50, 75, 100];

export function BlogTracker({ slug }: BlogTrackerProps) {
  const tracked = useRef(new Set<number>());
  const startTime = useRef(Date.now());
  const pathname = usePathname();

  // ── Scroll depth tracking ──────────────────────────────────────────────────
  useEffect(() => {
    tracked.current = new Set();

    // Create invisible sentinel elements at each scroll percentage
    const sentinels = SCROLL_THRESHOLDS.map((threshold) => {
      const el = document.createElement("div");
      el.setAttribute("aria-hidden", "true");
      el.style.cssText = `position:absolute;top:${threshold}%;height:1px;width:1px;pointer-events:none;left:0;`;
      document.body.appendChild(el);
      return { el, threshold };
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const threshold = Number(
              entry.target.getAttribute("data-threshold")
            );
            if (!tracked.current.has(threshold)) {
              tracked.current.add(threshold);
              window.gtag?.("event", "scroll_depth", {
                event_category: "engagement",
                percent_scrolled: threshold,
                article_slug: slug,
                page_path: pathname,
              });
            }
          }
        });
      },
      { threshold: 0 }
    );

    sentinels.forEach(({ el, threshold }) => {
      el.setAttribute("data-threshold", String(threshold));
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      sentinels.forEach(({ el }) => el.remove());
    };
  }, [slug, pathname]);

  // ── Time on page tracking ──────────────────────────────────────────────────
  useEffect(() => {
    startTime.current = Date.now();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const timeSpentSeconds = Math.round(
          (Date.now() - startTime.current) / 1000
        );
        if (timeSpentSeconds > 3) {
          window.gtag?.("event", "time_on_page", {
            event_category: "engagement",
            time_seconds: timeSpentSeconds,
            article_slug: slug,
            page_path: pathname,
          });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [slug, pathname]);

  // Renders nothing — tracking only
  return null;
}

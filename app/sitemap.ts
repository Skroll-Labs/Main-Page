// app/sitemap.ts — Auto-served at /sitemap.xml
import type { MetadataRoute } from "next";

const SITE_URL = "https://ticketflow.lk";

// All 20 blog slugs with their SEO priority weights
const BLOG_SLUGS: Array<{ slug: string; priority: number }> = [
  { slug: "best-event-ticketing-platform-sri-lanka", priority: 0.9 },
  { slug: "how-to-sell-tickets-online-sri-lanka", priority: 0.9 },
  { slug: "eventbrite-alternative-sri-lanka", priority: 0.8 },
  { slug: "qr-code-tickets-events-sri-lanka", priority: 0.8 },
  { slug: "why-attendees-arent-receiving-tickets", priority: 0.7 },
  { slug: "concert-ticketing-sri-lanka-guide", priority: 0.7 },
  { slug: "corporate-event-ticketing-sri-lanka", priority: 0.7 },
  { slug: "university-school-event-ticketing-sri-lanka", priority: 0.7 },
  { slug: "religious-cultural-event-ticketing-sri-lanka", priority: 0.7 },
  { slug: "charity-fundraiser-event-ticketing-sri-lanka", priority: 0.7 },
  { slug: "how-to-plan-an-event-sri-lanka", priority: 0.9 },
  { slug: "payment-gateway-events-sri-lanka", priority: 0.7 },
  { slug: "digital-tickets-vs-paper-tickets", priority: 0.7 },
  { slug: "real-time-event-analytics-guide", priority: 0.7 },
  { slug: "reduce-event-no-shows-sri-lanka", priority: 0.7 },
  { slug: "corporate-event-venues-colombo-ticketing", priority: 0.7 },
  { slug: "event-organizers-sri-lanka-digital-tools", priority: 0.7 },
  { slug: "sri-lanka-event-industry-going-digital", priority: 0.7 },
  { slug: "case-study-event-ticketing-transformation", priority: 0.8 },
  { slug: "ticketflow-vs-spreadsheets-event-ticketing", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map(
    ({ slug, priority }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    })
  );

  return [...staticPages, ...blogPages];
}

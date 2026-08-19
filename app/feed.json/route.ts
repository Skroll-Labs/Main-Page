// app/feed.json/route.ts — JSON Feed 1.1 served at /feed.json
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://skroll.lk";

export const dynamic = "force-static"; // Cache at build time

export async function GET(): Promise<Response> {
  const posts = getAllPosts();

  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: "Skroll Blog — Event Ticketing Guides for Sri Lanka",
    home_page_url: `${SITE_URL}/blog`,
    feed_url: `${SITE_URL}/feed.json`,
    description:
      "Practical guides and insights for event organizers in Sri Lanka on ticketing, check-in, payment gateways, and event management.",
    language: "en",
    items: posts.map((post) => ({
      id: `${SITE_URL}/blog/${post.slug}`,
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.title,
      content_html: `<p>${post.excerpt}</p>`,
      summary: post.metaDescription,
      image: `${SITE_URL}${post.heroImage}`,
      date_published: post.publishDate,
      date_modified: post.publishDate,
      tags: [...post.primaryKeywords, ...post.tags.slice(0, 2)],
    })),
  };

  // IMPORTANT: Use new Response() — NOT NextResponse.json() or Response.json()
  // Those force application/json. JSON Feed requires application/feed+json.
  return new Response(JSON.stringify(feed, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/feed+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

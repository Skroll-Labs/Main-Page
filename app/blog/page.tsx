// app/blog/page.tsx — Blog listing index page
// Server Component — fetches all posts, renders BlogHero + FilteredGrid.
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogHero } from "@/components/blog/BlogHero";
import { FilteredGrid } from "@/components/blog/FilteredGrid";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Blog — Event Ticketing Guides for Sri Lanka",
  description:
    "Practical guides, how-tos, and expert advice for event organizers in Sri Lanka. Ticketing, check-in, payment gateways, and more.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Event Ticketing Guides for Sri Lanka | Skroll",
    description:
      "Practical guides, how-tos, and expert advice for event organizers in Sri Lanka. Ticketing, check-in, payment gateways, and more.",
    url: "/blog",
    type: "website",
    images: [{ url: "/blog/blog-listing-hero.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Event Ticketing Guides | Skroll",
    description:
      "Practical guides for Sri Lankan event organizers on ticketing, check-in, and event management.",
    images: ["/blog/blog-listing-hero.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <BlogHero postCount={posts.length} />

        <section className="py-16 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <FilteredGrid posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

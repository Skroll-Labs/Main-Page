import "server-only";
// lib/blog.ts — Server-only. Never import in 'use client' components.
// All reads are synchronous fs calls — safe at build time.

import fs from "fs";
import path from "path";
import type { BlogPost } from "@/types/blog";

/** Absolute path to the directory containing per-article JSON files */
const POSTS_DIR = path.join(process.cwd(), "data", "posts");

/**
 * Reads a single post JSON file from disk and parses it.
 * Returns null if the file does not exist or JSON is malformed.
 */
function readPostFile(filename: string): BlogPost | null {
  try {
    const filePath = path.join(POSTS_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as BlogPost;
  } catch (err) {
    console.error("[lib/blog] Failed to read post file:", filename, err);
    return null;
  }
}

/**
 * Returns all blog posts sorted by publishDate descending (newest first).
 * Invalid/unreadable JSON files are silently excluded.
 */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const filenames = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".json"));

  const posts: BlogPost[] = filenames
    .map((filename) => readPostFile(filename))
    .filter((post): post is BlogPost => post !== null && !post.tags.includes("scaffold"));

  return posts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

/**
 * Returns a single BlogPost by slug, or null if not found.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  return readPostFile(`${slug}.json`);
}

/**
 * Returns up to `limit` related posts for a given article slug.
 * Reads relatedSlugs from the source post and looks each one up.
 */
export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];

  return post.relatedSlugs
    .slice(0, limit)
    .map((relatedSlug) => getPostBySlug(relatedSlug))
    .filter((p): p is BlogPost => p !== null);
}

/**
 * Returns all posts belonging to a given content cluster (1–5).
 */
export function getPostsByCluster(cluster: number): BlogPost[] {
  return getAllPosts().filter((post) => post.cluster === cluster);
}

/**
 * Utility: calculates estimated read time in minutes from raw text.
 * Assumes 200 words per minute.
 */
export function calculateReadTime(content: string): number {
  const WORDS_PER_MINUTE = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

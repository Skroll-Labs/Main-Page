# Pre-Launch Status & Audit Summary — Skroll

This document summarizes the current status of the **Skroll** marketing and blog platform, all pre-launch fixes completed, and the remaining deployment/launch checklist.

---

## 1. Project Overview & Current Situation

- **Platform**: Skroll (`https://skroll.lk`)
- **Brand Positioning**: Dual-path platform serving:
  1. **Event Ticketing**: *"Sell Tickets. Send QR Codes. Skip the Headaches."*
  2. **Custom Business Solutions**: *"Software tailored to how your business actually runs."*
- **Tech Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS, GSAP + Lenis smooth scroll, Resend email integration.
- **Build Status**: Verified with `npm run build` and `tsc` — **0 compilation errors**, all 14 routes statically generated with clean SSG.

---

## 2. What Has Been Done

### A. SEO & Metadata Hardening
- **Domain Canonicalization**: Replaced all hardcoded legacy domain references (`ticketflow.lk`) with `https://skroll.lk` in:
  - `app/layout.tsx` (Metadata base, Open Graph, Twitter cards)
  - `app/robots.ts` (Sitemap URL directive)
  - `app/feed.json/route.ts` (JSON feed metadata and item URLs)
  - `app/blog/[slug]/page.tsx` (Article schema & canonical URLs)
- **Dynamic Sitemap (`app/sitemap.ts`)**: Replaced the hardcoded route list with dynamic fetching via `getAllPosts()`. This ensures 0 dead 404 links are published to Google Search Console.
- **Scaffold Protection**: Added a check in `app/blog/[slug]/page.tsx` to return `notFound()` if a user or crawler directly accesses a scaffold/placeholder post slug.
- **Open Graph Asset**: Generated and placed the official 1200x630 Open Graph preview image at `public/og-image.png`.

### B. Comprehensive Rebranding
- **Component Text & Comments**: Replaced all frontend references to "TicketFlow" with "Skroll" across the blog index (`app/blog/page.tsx`) and components (`components/blog/ArticleSidebar.tsx`, `components/blog/CTABlock.tsx`).
- **Blog Content & Comparison Tables**: Bulk-updated all 20 blog JSON files in `data/posts/` (including comparison tables, headings, and metadata) to use official Skroll branding.
- **Scaffold Generator**: Updated `scripts/generate_posts.js` so future generated posts use Skroll branding.

### C. Component Safety & Fallbacks
- **WhatsApp Fallback**: Added a safe fallback string in `components/blog/CTABlock.tsx` to prevent `https://wa.me/undefined` URLs if the `NEXT_PUBLIC_WHATSAPP_NUMBER` environment variable is not immediately set.

---

## 3. What Needs to Be Done (Launch & Deployment)

### 🚀 Step 1: Production Deployment (Vercel / Host)
- Ensure custom domain `skroll.lk` and `www.skroll.lk` are assigned with active SSL certificates.
- Configure environment variables in the hosting dashboard:
  - `RESEND_API_KEY`
  - `CONTACT_TO_EMAIL` (e.g. `hello@skroll.lk`)
  - `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - `NEXT_PUBLIC_PHONE_NUMBER`

### 🔍 Step 2: Google Search Console (GSC) Setup
- Add property `https://skroll.lk` and complete DNS TXT verification.
- Submit `https://skroll.lk/sitemap.xml`.
- Use URL Inspection on `https://skroll.lk` and trigger **Request Indexing**.

### 🧪 Step 3: End-to-End QA
- Submit a test lead through the contact form to confirm email receipt via Resend.
- Test WhatsApp and Call links on a mobile device.
- Verify social link preview card rendering on WhatsApp / LinkedIn / Twitter.

### 📝 Step 4: Post-Launch Growth
- Gradually flesh out and publish the remaining 15 draft articles in `data/posts/`.
- Add real customer quotes / case studies to the landing page as early organizers onboard.

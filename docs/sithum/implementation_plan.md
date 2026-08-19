# Pre-Launch Implementation Plan & Audit — Skroll (formerly TicketFlow)

This implementation plan outlines the required fixes, branding updates, SEO corrections, and production-readiness steps before publishing the website tonight.

---

## 1. Executive Summary & SEO Timeline Answer

### Is it true that Google takes time to apply SEO for a website?
**Yes, absolutely.** Here is what happens under the hood when a new domain is launched:

1. **Discovery & Crawling (Days 1–3):** Googlebot discovers your site once submitted via Google Search Console or discovered via backlinks. It fetches `robots.txt`, parses `sitemap.xml`, and begins crawling discovered URLs.
2. **Indexing (Days 3–7):** Pages are analyzed, rendered with headless Chromium, and placed into Google's search index. Your brand name (`"Skroll Sri Lanka"`, `"Skroll ticketing"`) will typically begin appearing in search results within 3 to 7 days.
3. **Keyword Ranking & Sandbox / Authority Accumulation (Weeks 2–8+):** For competitive non-branded keywords (e.g. *"event ticketing platform Sri Lanka"*, *"how to sell tickets online Sri Lanka"*), Google observes user engagement, bounce rate, load speed (Core Web Vitals), and backlink authority over several weeks.

> [!IMPORTANT]
> **Why launching early is smart, BUT why launching with errors hurts:**
> Getting the domain live and indexed early starts the "domain aging" clock. **However**, if Googlebot crawls broken URLs (404s), conflicting domain canonicals (`ticketflow.lk` vs `skroll.lk`), or thin "scaffold" placeholder text, Google will index low-quality pages and can assign a poor initial domain quality score.
> 
> **To get the full SEO benefit of tonight's launch, we must fix the 5 critical blockers below before publishing.**

---

## 2. Critical Pre-Launch Defects & Findings

### 🔴 Critical Blocker 1: Hardcoded `ticketflow.lk` Domain Across SEO Files
- `app/sitemap.ts` hardcodes `SITE_URL = "https://ticketflow.lk"`.
- `app/robots.ts` declares `sitemap: "https://ticketflow.lk/sitemap.xml"`.
- `app/feed.json/route.ts` hardcodes `SITE_URL = "https://ticketflow.lk"`.
- `app/blog/[slug]/page.tsx` hardcodes `SITE_URL = "https://ticketflow.lk"` for canonicals and Article Schema.org.
- **Impact:** Google Search Console will reject the sitemap if hosted on `skroll.lk` while URLs declare `ticketflow.lk`. Canonicals will point to the wrong domain.

### 🔴 Critical Blocker 2: Sitemap Has 9 Broken 404 Slugs & Missing Real Slugs
- `app/sitemap.ts` has a hardcoded array with slugs that do not exist on disk (e.g., `ticketflow-vs-spreadsheets-event-ticketing`, `religious-cultural-event-ticketing-sri-lanka`, `digital-tickets-vs-paper-tickets`, `real-time-event-analytics-guide`, etc.).
- **Impact:** Googlebot will encounter immediate 404 errors during its very first crawl. `sitemap.ts` should dynamically read from `getAllPosts()` or only include valid published posts.

### 🔴 Critical Blocker 3: 15 "Scaffold" Placeholder Blog Posts Exposed
- 15 out of 20 posts in `data/posts/` contain dummy text (*"Scaffold Article for..."*, *"Scaffold Title | TicketFlow"*, *"This is a scaffold article..."*).
- While `lib/blog.ts` hides them on the `/blog` index, any visitor or search engine crawler hitting `/blog/[slug]` will see the raw placeholder text and TicketFlow metadata.
- **Remedy:** Either fully flesh out these articles, or return 404 / exclude from static generation and sitemap until written, ensuring only high-quality, fully written articles are live.

### 🔴 Critical Blocker 4: Missing Open Graph Image (`/og-image.png`)
- `app/layout.tsx` specifies `/og-image.png` (1200x630), but the file does not exist in `public/`.
- **Impact:** Any link shared on WhatsApp, LinkedIn, Twitter/X, or Facebook will have a broken/empty link preview card.

### 🟡 High Priority 5: TicketFlow Mentions in Blog Articles & Metadata
- Full blog posts (`best-event-ticketing-platform-sri-lanka.json`, `eventbrite-alternative-sri-lanka.json`, `how-to-sell-tickets-online-sri-lanka.json`, `how-to-plan-an-event-sri-lanka.json`) still have comparison headings, table rows, metadata, and copy referencing "TicketFlow".
- `app/blog/page.tsx` Open Graph and Twitter card titles still say `| TicketFlow`.

### 🟡 High Priority 6: Fragile WhatsApp Link Fallbacks
- `components/blog/CTABlock.tsx` uses `process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace("+", "")` without a fallback, which generates `https://wa.me/undefined` if the environment variable is missing.

---

## 3. Proposed Changes (File by File)

### Component: Core App & SEO Configuration

#### [MODIFY] [app/layout.tsx](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/app/layout.tsx)
- Ensure title, description, metadataBase, Open Graph, and Twitter metadata are 100% aligned with Skroll (`https://skroll.lk`).

#### [MODIFY] [app/sitemap.ts](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/app/sitemap.ts)
- Update `SITE_URL` to `https://skroll.lk`.
- Dynamically build blog page URLs from valid published posts (using `getAllPosts()` from `@/lib/blog`) to ensure 0 dead 404 links in Google's sitemap.

#### [MODIFY] [app/robots.ts](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/app/robots.ts)
- Update sitemap URL to `https://skroll.lk/sitemap.xml`.

#### [MODIFY] [app/feed.json/route.ts](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/app/feed.json/route.ts)
- Update `SITE_URL` to `https://skroll.lk`.
- Update feed title to `"Skroll Blog — Event Ticketing & Business Tech Guides"`.

---

### Component: Blog System & Pages

#### [MODIFY] [app/blog/page.tsx](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/app/blog/page.tsx)
- Update Open Graph and Twitter titles to replace `| TicketFlow` with `| Skroll`.

#### [MODIFY] [app/blog/[slug]/page.tsx](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/app/blog/%5Bslug%5D/page.tsx)
- Update `SITE_URL` to `https://skroll.lk`.
- Check if post is scaffold or unpublished and trigger `notFound()` so dummy posts are never rendered or indexed.

#### [MODIFY] [components/blog/ArticleSidebar.tsx](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/components/blog/ArticleSidebar.tsx)
- Clean up outdated TicketFlow comment.

#### [MODIFY] [components/blog/CTABlock.tsx](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/components/blog/CTABlock.tsx)
- Add safe fallback for `process.env.NEXT_PUBLIC_WHATSAPP_NUMBER` (e.g. `"+94770000000"` or matching `Contact.tsx`) to prevent `https://wa.me/undefined`.

---

### Component: Blog Data & Copy Updates

#### [MODIFY] [data/posts/best-event-ticketing-platform-sri-lanka.json](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/data/posts/best-event-ticketing-platform-sri-lanka.json)
- Update `metaTitle` from `... | TicketFlow` to `... | Skroll`.
- Replace table header `"TicketFlow"` with `"Skroll"`.
- Replace section heading `"TicketFlow: Built for Sri Lanka..."` with `"Skroll: Built for Sri Lanka..."`.
- Update body content and labels from "TicketFlow" to "Skroll".

#### [MODIFY] [data/posts/eventbrite-alternative-sri-lanka.json](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/data/posts/eventbrite-alternative-sri-lanka.json)
- Replace heading `"Eventbrite vs TicketFlow: Feature by Feature"` with `"Eventbrite vs Skroll: Feature by Feature"`.
- Replace comparison table header `"TicketFlow"` with `"Skroll"`.
- Replace concluding text mentioning "TicketFlow" with "Skroll".

#### [MODIFY] [data/posts/how-to-sell-tickets-online-sri-lanka.json](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/data/posts/how-to-sell-tickets-online-sri-lanka.json)
- Replace "TicketFlow" mention in conclusion with "Skroll".

#### [MODIFY] [data/posts/how-to-plan-an-event-sri-lanka.json](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/data/posts/how-to-plan-an-event-sri-lanka.json)
- Replace "TicketFlow" mention with "Skroll".

#### [MODIFY] [data/posts/qr-code-tickets-events-sri-lanka.json](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/data/posts/qr-code-tickets-events-sri-lanka.json)
- Verify copy is clean and references Skroll.

#### [MODIFY] [scripts/generate_posts.js](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/scripts/generate_posts.js)
- Update generator script to use Skroll branding throughout.

---

### Component: Static Assets & Branding

#### [NEW] [public/og-image.png](file:///c:/Users/sithu/MyWorks/My%20Softwares/Skroll/Main-Page/public/og-image.png)
- Create or generate the official 1200x630 Open Graph share preview image for Skroll (`Skroll — Event Ticketing Platform & Business Technology Solutions`).

---

## 4. Launch Day Action Checklist (Tonight)

Once the code updates are applied and deployed:

1. **Vercel / Hosting Setup:**
   - [ ] Add Custom Domain: Ensure `skroll.lk` and `www.skroll.lk` are properly assigned with SSL active.
   - [ ] Set Environment Variables in Vercel:
     - `RESEND_API_KEY`
     - `CONTACT_TO_EMAIL` (e.g. `hello@skroll.lk`)
     - `NEXT_PUBLIC_WHATSAPP_NUMBER` (e.g. `+9477xxxxxxx`)
     - `NEXT_PUBLIC_PHONE_NUMBER` (e.g. `+9477xxxxxxx`)
2. **Google Search Console (GSC) Setup:**
   - [ ] Add property: `https://skroll.lk`.
   - [ ] Verify ownership (via DNS TXT record on your registrar/Cloudflare or HTML tag).
   - [ ] Submit sitemap URL: `https://skroll.lk/sitemap.xml`.
   - [ ] Use URL Inspection on `https://skroll.lk` and click **"Request Indexing"**.
3. **Form & Link QA:**
   - [ ] Test the contact form with a test submission to confirm Resend delivery.
   - [ ] Tap the WhatsApp and Call Us buttons on mobile to confirm they open the dialer/chat.
   - [ ] Test social share buttons on a blog article.

---

## 5. Verification Plan

### Automated Checks
- Run `npx tsc --noEmit` to verify type safety.
- Run `npm run build` to verify Next.js static page generation and route compilation across all pages (Home, `/blog`, `/blog/[slug]`, `/feed.json`, `/robots.txt`, `/sitemap.xml`).
- Run `grep -ri "TicketFlow" app/ components/ data/` to confirm zero unintended legacy references.

### Manual Review
- Open `/sitemap.xml` in the browser and confirm all listed URLs return 200 OK and use `https://skroll.lk`.
- Open `/robots.txt` and confirm sitemap directive points to `https://skroll.lk/sitemap.xml`.
- Share `https://skroll.lk` in WhatsApp/Slack test channel to confirm rich Open Graph preview card displays.

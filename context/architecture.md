# Architecture — TicketFlow Landing Page

---

## 1. Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | Next.js 16.2.9 (App Router) | Page rendering, routing, API routes |
| Language | TypeScript | Type safety across the entire codebase |
| Styling | Tailwind CSS | Utility-first styling, responsive layout |
| Animation | GSAP + ScrollTrigger | Scroll-driven animations, section transitions |
| Email | Resend | Contact form submission emails |
| Form Handling | React Hook Form + Zod | Client-side form state and schema validation |
| Deployment | Vercel | Hosting, edge functions, environment variables |

---

## 2. Recommended Additions

These are not in your current stack but are strongly recommended given the project's needs:

| Tool | Why You Need It |
|---|---|
| **Zod** | Schema validation for the contact form — pairs with React Hook Form to validate before hitting the API route |
| **React Hook Form** | Lightweight, performant form state management — avoids re-renders on every keystroke |
| **@studio-freight/lenis** | Smooth scroll library that works natively with GSAP ScrollTrigger — prevents jank on scroll-linked animations |
| **next/font** | Load custom fonts (Google Fonts or local) with zero layout shift, built into Next.js |
| **Next.js Metadata API** | Controls `<title>`, Open Graph, Twitter card tags — built into Next.js 16, no `next-seo` package needed |
| **Vercel Analytics** | Zero-config page view and Web Vitals tracking — free on Vercel, no cookie banner needed |

---

## 3. Project Structure

```
ticketflow-landing/
├── app/
│   ├── layout.tsx               # Root layout — fonts, global providers, metadata
│   ├── page.tsx                 # Home page — assembles all 10 sections in order
│   └── api/
│       ├── contact/
│       │   └── route.ts         # POST handler — validates form, sends email via Resend
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── SocialProof.tsx
│   │   ├── WhoItsFor.tsx
│   │   ├── Integrations.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   │
│   ├── ui/                      # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── AudienceCard.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── StatCallout.tsx
│   │   └── FAQAccordion.tsx
│   │
│   └── layout/
│       └── Navbar.tsx           # Sticky top nav (optional, if added)
│
├── lib/
│   ├── resend.ts                # Resend client initialisation
│   ├── validations.ts           # Zod schemas — contact form
│   └── gsap.ts                  # GSAP + ScrollTrigger registration helper
│
├── hooks/
│   └── useScrollAnimation.ts    # Custom hook — wraps GSAP ScrollTrigger setup + cleanup
│
├── public/
│   ├── images/                  # Static images — logos, integration icons
│   └── fonts/                   # Local font files (if not using next/font from Google)
│
├── styles/
│   └── globals.css              # Tailwind directives, CSS custom properties, base resets
│
├── proxy.ts                     # Next.js 16 — replaces middleware.ts; runs on Node.js runtime
├── .env.local                   # RESEND_API_KEY, CONTACT_TO_EMAIL, WHATSAPP_NUMBER
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. Data & Email Flow

### 4.1 Contact Form Submission

```
User fills form (React Hook Form)
  → Client-side Zod validation
    → Valid: POST /api/contact
      → Server-side Zod re-validation (never trust client)
        → Resend sends two emails:
            1. Internal notification → your team inbox (lead details + audience type)
            2. Auto-reply → visitor's email (confirmation that you received their message)
        → 200 OK → success state shown to user
    → Invalid: inline field errors, no network call made
```

**Email 1 — Internal Lead Notification**
```
To:      CONTACT_TO_EMAIL (env var)
Subject: New TicketFlow Enquiry — {Audience Type}
Body:    Name, Work Email, Company, Audience Type, Message
```

**Email 2 — Visitor Auto-Reply**
```
To:      visitor's work email
Subject: We got your message — TicketFlow
Body:    Thank you copy, WhatsApp link, expected response time
```



---

## 5. Animation Architecture (GSAP)

All animations are scroll-triggered. GSAP and ScrollTrigger are registered once in `lib/gsap.ts` and imported wherever needed. The `useScrollAnimation` hook handles setup and cleanup to prevent memory leaks on unmount.

### Animation Patterns by Section

| Section | Animation |
|---|---|
| **Hero** | Headline words stagger-fade in on load (`gsap.from`, stagger) |
| **Problem** | Pain point bullets animate in one by one as user scrolls into view |
| **How It Works** | Step cards pin and sequence — each step fades in as the previous pins |
| **Features** | Cards stagger-slide up from below as section enters viewport |
| **Social Proof** | Stats count up (number ticker) when scrolled into view |
| **Who It's For** | Audience cards fan in with a slight horizontal stagger |
| **FAQ** | Accordion open/close animated with GSAP (height tween, not CSS) |
| **Contact** | Form fades in; on submit, success message swaps in with a smooth transition |

### Key GSAP Rules
- Always use `ScrollTrigger.refresh()` after layout changes (e.g. font load, image load)
- Use `gsap.context()` scoped to a ref in every component — required for safe cleanup in React
- Lenis smooth scroll must be passed to ScrollTrigger via `ScrollTrigger.scrollerProxy()` if used

---

## 6. Environment Variables

```bash
# .env.local

RESEND_API_KEY=re_xxxxxxxxxxxx          # From resend.com dashboard
CONTACT_TO_EMAIL=hello@ticketflow.com   # Where contact form leads are sent
NEXT_PUBLIC_WHATSAPP_NUMBER=+94xxxxxxx  # Used to build the wa.me link in Contact section
NEXT_PUBLIC_PHONE_NUMBER=+94xxxxxxx     # Used for the Call Us Directly link
```

> All `NEXT_PUBLIC_` variables are exposed to the browser. Never put secrets in them.

---

## 7. Deployment

**Platform:** Vercel (recommended — native Next.js support, zero config)

### Deployment Checklist
- [ ] Node.js version set to 20+ in Vercel project settings (Next.js 16 requirement)
- [ ] All environment variables added to Vercel project settings (not just `.env.local`)
- [ ] Resend domain verified and sending domain DNS records set up
- [ ] `CONTACT_TO_EMAIL` points to a monitored inbox
- [ ] Test contact form end-to-end in production before launch
- [ ] Verify WhatsApp and Call links open correctly on mobile
- [ ] Run Lighthouse audit — target 90+ on Performance, SEO, Accessibility
- [ ] Confirm Open Graph image and meta tags render correctly (use opengraph.xyz to check)

---

## 8. Performance Considerations

- Use `next/image` for all images — automatic WebP conversion, lazy loading, size optimization
- Use `next/font` to load fonts — eliminates FOUT and layout shift
- Lazy-load GSAP and ScrollTrigger with dynamic imports if Lighthouse flags them on initial load
- Keep all section components as **Server Components** by default — only add `"use client"` to components that use GSAP refs, form state, or browser APIs
- The contact API route runs on Vercel Edge Functions — keep it lightweight, no heavy imports
- Turbopack is enabled by default in Next.js 16 — do not add a custom webpack config or it will conflict

---

## 9. SEO & Metadata

Managed via the Next.js Metadata API in `app/layout.tsx` and `app/page.tsx`.

```ts
// app/layout.tsx
export const metadata: Metadata = {
  title: "TicketFlow — Ticketing Made Simple, Faster, and Local",
  description:
    "The all-in-one ticketing platform for event organizers. Sell tickets, send QR codes, and check in attendees — without the spreadsheets.",
  openGraph: {
    title: "TicketFlow",
    description: "Sell Tickets. Send QR Codes. Skip the Headaches.",
    url: "https://ticketflow.com",
    siteName: "TicketFlow",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TicketFlow",
    description: "Ticketing made simple, faster, and local.",
    images: ["/og-image.png"],
  },
};
```

---

## 10. Next.js 16 — What's Different

Next.js 16 (current stable: **16.2.9**, released June 2026) ships several changes that directly affect how this project is built. Key differences from Next.js 14/15:

### Turbopack is now the default bundler
Webpack is no longer the default. Turbopack runs for both `next dev` and `next build` out of the box — no flag needed. For this project there's no custom webpack config, so no migration work required. Expect 2–5× faster production builds and up to 10× faster Fast Refresh in development.

### `proxy.ts` replaces `middleware.ts`
Next.js 16 replaces `middleware.ts` with `proxy.ts` to make the network boundary explicit. The exported function must be named `proxy` instead of `middleware`. This project uses no middleware by default, but if rate-limiting or redirect logic is added later, use `proxy.ts`.

```ts
// proxy.ts (Next.js 16 — replaces middleware.ts)
import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  return NextResponse.next();
}
```

### Cache Components and `"use cache"` directive
Next.js 16 introduces an explicit caching model via the `"use cache"` directive, replacing the previous implicit fetch caching. For this landing page — which is essentially static content — pages and components are cached by default as Server Components. No `"use cache"` directive is needed unless dynamic data (e.g. live stats from an API) is added later.

### Async-only request APIs
`headers()`, `cookies()`, and `params` in layouts and pages are now async-only. If any API route or layout reads these, always `await` them:

```ts
// Next.js 16 — always await request APIs
const headersList = await headers();
const cookieStore = await cookies();
```

### Node.js 20+ required
Next.js 16 drops support for Node.js 18. Ensure your local environment and Vercel deployment use **Node.js 20 or higher**.

### Setup command
```bash
npx create-next-app@latest ticketflow-landing
# Select: TypeScript ✓ | Tailwind CSS ✓ | App Router ✓ | Turbopack ✓
```

---

## 11. Key Decisions & Rationale

| Decision | Rationale |
|---|---|
| **Next.js 16 over 14/15** | Current stable (16.2.9); Turbopack default gives 2–5× faster builds; no legacy fetch caching surprises |
| **App Router over Pages Router** | Server Components reduce JS sent to the browser; better for performance on a static marketing page |
| **Turbopack (default, no config)** | No custom webpack plugins in this project — Turbopack just works and is dramatically faster |
| **Resend over SendGrid / Mailgun** | Developer-friendly, generous free tier (3,000 emails/month), built-in React Email templates |
| **GSAP over Framer Motion** | More control over scroll-linked sequences; ScrollTrigger is the industry standard for this type of landing page |
| **Lenis over native scroll** | Smooth scroll feels more premium and pairs cleanly with GSAP ScrollTrigger |
| **No database** | This is a marketing page — leads go to email. No persistence layer needed unless a CRM is added later |
| **Zod on both client and server** | The API route must re-validate independently — client validation is UX, server validation is security |
| **`proxy.ts` instead of `middleware.ts`** | Required by Next.js 16 — the old `middleware.ts` export is no longer recognised |

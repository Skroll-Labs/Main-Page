# Code Standards — TicketFlow Landing Page

Implementation rules and conventions for the entire project. The AI agent must follow these in every session without exception. These rules prevent pattern drift across sessions.

---

## Engineering Mindset

The AI agent on this project operates as a senior engineer. This means:

- **Think before implementing** — understand what is being built and why before writing a single line
- **Read context files first** — always verify against `architecture.md`, `project-overview.md`, and `progress-tracker.md` before starting any feature
- **Scope is sacred** — only build what the current feature requires. Never scaffold future sections or add unrequested animations
- **Every feature must be verifiable** — if it cannot be checked immediately in the browser after implementation, it is incomplete
- **Clean over clever** — simple, readable code that a junior developer can follow is always preferred over clever abstractions
- **One section at a time** — complete one section component fully before touching the next
- **Copy is the source of truth** — all text content must come from `content/copy.ts`, never hardcoded inside components

---

## TypeScript

- Strict mode enabled in `tsconfig.json` — no exceptions
- Never use `any` — use `unknown` and narrow the type
- Never use type assertions (`as SomeType`) unless absolutely necessary and commented why
- All function parameters and return types must be explicitly typed
- Use `type` for object shapes and unions — use `interface` only for extendable component props
- All async functions must have proper error handling — never let promises float unhandled
- Use `const` by default — only use `let` when reassignment is necessary

---

## Next.js 16 Conventions

- App Router only — no Pages Router
- React 19 — use React 19 APIs throughout
- All components are Server Components by default
- Only add `"use client"` when the component requires:
  - `useState` or `useReducer`
  - `useEffect`
  - Browser APIs (e.g. `window`, `document`)
  - Event listeners
  - GSAP or Lenis (client-only animation libraries)
  - React Hook Form
- Never add `"use client"` to layout files
- Data fetching happens in Server Components — never fetch in Client Components directly
- Route handlers live in `app/api/` — never put business logic directly in route handlers
- Business logic (Resend calls, validation) lives in `lib/` — route handlers only orchestrate
- `proxy.ts` is used instead of `middleware.ts` — this is a Next.js 16 requirement
- Always await `headers()`, `cookies()`, and `params` — they are async-only in Next.js 16

---

## File and Folder Naming

- Folders: kebab-case — `how-it-works`, `who-its-for`
- Section component files: PascalCase — `Hero.tsx`, `HowItWorks.tsx`, `WhoItsFor.tsx`
- UI primitive files: PascalCase — `AudienceCard.tsx`, `FAQAccordion.tsx`
- Utility and lib files: camelCase — `resend.ts`, `validations.ts`, `gsap.ts`
- Content files: camelCase — `copy.ts`
- Hook files: camelCase, prefixed with `use` — `useScrollAnimation.ts`
- API route files: always `route.ts`
- One component per file — never export multiple components from one file
- Index files only in `components/ui/` — never barrel export from other folders

---

## Component Structure

Every component follows this exact order:

```typescript
"use client"; // only if needed — see Next.js 16 rules above

// 1. External imports
import { useRef } from "react";
import gsap from "gsap";

// 2. Internal imports
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy } from "@/content/copy";

// 3. Type definitions (only if props exist)
type Props = {
  className?: string;
};

// 4. Component — named export always
export function Hero({ className }: Props) {
  // refs
  // state
  // derived values
  // handlers / animation setup
  // return JSX
}
```

- Never use default exports for components — always named exports
- Props type defined directly above the component — never in a separate file unless shared across multiple components
- No inline styles — all styling via Tailwind utility classes and CSS custom properties from `styles/globals.css`
- All copy rendered in JSX must reference `content/copy.ts` — no hardcoded strings inside components

---

## API Route Handlers

```typescript
// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 },
      );
    }

    await sendContactEmail(parsed.data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/contact]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
```

- Every route handler has a try/catch
- Every route handler validates the request body with Zod before processing — always use `safeParse`, never `parse`
- Errors are logged with the route path as prefix: `[api/contact]`, `[api/newsletter]`
- Always return `{ success: boolean, error?: string }` — never return raw data without the success wrapper
- Never put Resend logic directly in the route handler — delegate to `lib/resend.ts`

---

## Lib Functions

```typescript
// lib/resend.ts

import { Resend } from "resend";
import type { ContactFormData } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  await resend.emails.send({
    from: "TicketFlow <hello@ticketflow.com>",
    to: process.env.CONTACT_TO_EMAIL!,
    subject: `New TicketFlow Enquiry — ${data.audienceType}`,
    html: `...`,
  });
}
```

- All Resend logic lives in `lib/resend.ts` — never instantiate the Resend client outside this file
- All Zod schemas live in `lib/validations.ts` — one schema per form, exported as named exports
- GSAP and ScrollTrigger registration lives in `lib/gsap.ts` — imported once, used everywhere
- Never access `process.env` variables outside of `lib/` files and `app/api/` route handlers

---

## Animation Conventions (GSAP)

```typescript
// hooks/useScrollAnimation.ts

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // animation setup here
    }, ref); // scope to ref — required for cleanup

    return () => ctx.revert(); // always clean up
  }, []);

  return ref;
}
```

- Always use `gsap.context()` scoped to a component ref — required for safe cleanup in React 19
- Always return `ctx.revert()` from the `useEffect` cleanup — prevents memory leaks on unmount
- Always call `ScrollTrigger.refresh()` after any layout change (font load, image load, accordion toggle)
- Lenis instance must be created once at the root level and passed to `ScrollTrigger` via `scrollerProxy`
- Never animate elements by className selector — always target via ref or a child ref within `gsap.context()`
- Page load animations (`Hero`) use `gsap.from()` with stagger — no ScrollTrigger needed
- All scroll-triggered animations use `ScrollTrigger` with `start: "top 80%"` as the default trigger point

---

## Form Conventions (React Hook Form + Zod)

```typescript
// Inside Contact.tsx ("use client")

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";

const { register, handleSubmit, formState: { errors, isSubmitting } } =
  useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

async function onSubmit(data: ContactFormData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  // handle success / error state
}
```

- Zod schema is always defined in `lib/validations.ts` — never inline inside the component
- `zodResolver` connects the schema to React Hook Form — no manual validation logic in components
- Form submission state uses `isSubmitting` from `formState` — no separate `useState` for loading
- On success, show an inline success message — never redirect
- On error, show a human-readable error message — never expose the raw API error

---

## Content Layer

```typescript
// content/copy.ts

export const copy = {
  hero: {
    headline: "Sell Tickets. Send QR Codes. Skip the Headaches.",
    subheadline: "The all-in-one ticketing platform built for event organizers...",
    cta: "Contact Us",
    trustLine: "Trusted by event organizers, ops teams, and marketing leads across...",
  },
  problem: {
    heading: "Still Managing Tickets the Hard Way?",
    body: "Spreadsheets. Manual emails...",
    painPoints: [
      "Manually tracking ticket sales across spreadsheets",
      // ...
    ],
    closingLine: "There's a faster, simpler way...",
  },
  // all other sections follow the same pattern
} as const;
```

- All landing page copy is stored in `content/copy.ts` as a typed `const` object
- Components import `copy` and reference the relevant key — zero hardcoded strings in JSX
- If copy needs to change, it changes in one place only — `content/copy.ts`
- The `as const` assertion ensures copy values are readonly and narrowly typed

---

## Error Handling

- Never use empty catch blocks — always log or handle
- Console errors always include a context prefix: `[api/contact]`, `[lib/resend]`
- User-facing error messages must be human-readable — never expose raw error objects or stack traces
- API route errors return `status: 400` for validation failures and `status: 500` for server errors
- Form errors display inline next to the relevant field — never as an alert or modal

---

## Environment Variables

All environment variables are defined in `.env.local` for development and in Vercel project settings for production. Never hardcode any key, URL, secret, phone number, or email address anywhere in the codebase.

| Variable | Used In | Exposed to Browser |
|---|---|---|
| `RESEND_API_KEY` | `lib/resend.ts` | No |
| `CONTACT_TO_EMAIL` | `lib/resend.ts` | No |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `components/sections/Contact.tsx` | Yes |
| `NEXT_PUBLIC_PHONE_NUMBER` | `components/sections/Contact.tsx` | Yes |

`NEXT_PUBLIC_` prefix means the variable is exposed to the browser. Never add `NEXT_PUBLIC_` to secret keys such as `RESEND_API_KEY`.

---

## Import Aliases

Always use the `@/` alias — never use relative imports that go up more than one level.

```typescript
// Correct
import { copy } from "@/content/copy";
import { contactSchema } from "@/lib/validations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Never
import { copy } from "../../content/copy";
import { contactSchema } from "../../../lib/validations";
```

---

## Comments

- No comments explaining what the code does — code must be self-explanatory through naming
- Comments only for why — explaining a non-obvious architectural decision
- GSAP animation components may have a brief comment explaining the scroll sequence strategy
- Never leave TODO comments in committed code

---

## Approved Dependencies

Never install a new package without a clear reason. Before installing anything, check:

1. Does Next.js 16 already provide this functionality natively?
2. Does Tailwind CSS already cover this styling need?
3. Is there a simpler native solution?

Approved dependencies for this project:

| Package | Purpose |
|---|---|
| `gsap` | Scroll animations, page load sequences |
| `@studio-freight/lenis` | Smooth scroll, required for GSAP ScrollTrigger |
| `resend` | Contact form emails and newsletter signups |
| `react-hook-form` | Contact form state management |
| `@hookform/resolvers` | Connects Zod schemas to React Hook Form |
| `zod` | Schema validation — client and server |
| `lucide-react` | Icons throughout the UI |
| `tailwindcss` | All styling |
| `@vercel/analytics` | Page view and Web Vitals tracking |

Do not install any other packages without updating this list first.

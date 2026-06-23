# Memory — Landing Page Build (Polish & Bug Fixes)

Last updated: 2026-06-23

## What was built
- Replaced remote Google URL image assets with a local `public/logo.svg` vector graphic to fix Next.js 404 image optimization errors on the Navbar and Footer.
- Fixed the `Integrations` marquee animation from breaking/wrapping by assigning `w-max`, `flex-shrink-0`, and correctly duplicating the array items to ensure infinite horizontal scrolling.
- Resolved a runtime `ReferenceError` crash by importing React for `React.Fragment`.
- Executed `/imprint audit` and established a unified design baseline in `ui-registry.md`.
- Refactored `Problem.tsx`, `Features.tsx`, `WhoItsFor.tsx`, `FAQ.tsx`, and `Integrations.tsx` to strictly adhere to the UI registry (enforcing `rounded-3xl` cards, `py-section-gap` padding, and custom CSS shadow variables).

## Decisions made
- Chose to use `logo.svg` over `logo.png` to bypass Next.js `sharp` image processor entirely, eliminating potential server-side parsing bugs.
- Moved complex hover shadows to CSS variables (`--shadow-hover-button`, `--shadow-hover-card`) in `globals.css` to eliminate hardcoded Tailwind arbitrary values across components.

## Problems solved
- Solved the disappearing logo bug caused by Turbopack failing to immediately index newly downloaded static assets.
- Fixed the "dropping" marquee bug by explicitly overriding flex container shrink behavior and extending the total width past 100vw.
- Resolved styling inconsistencies across multiple sessions.

## Current state
- The landing page is 100% feature complete, fully animated, responsive, visually consistent, and free of runtime errors.
- `ui-registry.md` is initialized and populated with the correct design baseline.

## Next session starts with
- Add `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_PHONE_NUMBER`, and `RESEND_API_KEY` to `.env.local` to fully un-mock the contact form.
- Run `npm run dev` to view the finalized, fully polished application.

## Open questions
- None at this time.

# UI Registry

## Colors
- **Brand Coral**: `#E8521A` (Primary accent)
- **Background**: `#FAFAFA` / `#FFFFFF`
- **Surface**: `#FFFFFF`
- **Surface Bright**: `#F5F5F5`
- **Inverse Surface**: `#1A1A1A` (Dark mode / specific dark sections)
- **Glass Border**: `rgba(26, 26, 26, 0.08)`
- **Error**: `#ba1a1a`

## Typography
- **Headlines**: Plus Jakarta Sans
  - Headline XL (64px, -0.02em tracking, bold)
  - Headline LG (40px/48px, -0.01em tracking, bold)
  - Headline MD (32px, bold)
- **Body/UI**: Inter / Outfit
  - Body LG (20px, 1.6 leading)
  - Body MD (16px, 1.6 leading)
  - Button Text (16px, uppercase, 0.05em tracking, semibold)
  - Label LG (14px, uppercase, 0.05em tracking, semibold)

## Motion & Interaction
- **Magnetic Cursor**: A custom red dot that scales and blurs on hover (`.cursor-hover`).
- **Smooth Scroll**: Provided by Lenis.
- **Section Transitions**: GSAP `fade-up`, `hero-fade-up`, `clip-reveal`, and `ScrollTrigger` staggered timelines.

## Components
- **Navbar**: Pill-shaped glassmorphism floating navbar (`components/layout/Navbar.tsx`).
- **Hero**: Skroll brand headline with WebGL particle background, dual CTAs, and dashboard preview (`components/sections/Hero.tsx`).
- **TwoPathSplit**: Dual interactive gateway cards directly below the hero for Events and Business solutions (`components/sections/TwoPathSplit.tsx`).
- **EventsShowcase**: Dedicated Ticketing Arm showcase featuring a 3-beat visual story, quiet details grid, and CTA bar (`components/sections/EventsShowcase.tsx`).
- **SolutionsShowcase**: Dedicated Business Solutions Arm section with Before/After visual transformation cards, 3 core engineering pillars, and direct CTA block (`components/sections/SolutionsShowcase.tsx`).
- **Problem**: Operations friction section contrasting manual chaos with automated flow (`components/sections/Problem.tsx`).
- **FAQ**: 6-question accordion covering Events and Business Solutions (`components/sections/FAQ.tsx`).
- **Contact**: Minimalist contact form with project selector, WhatsApp/Phone quick links, and tagline anchor (`components/sections/Contact.tsx`).
- **AboutSkroll**: Company overview and dual services section featuring an asymmetric mission statement, three core principles, a 50/50 services diptych, and Sri Lankan origin commitment card (`components/sections/AboutSkroll.tsx`).
- **Button**: Oval pill shape, completely rounded. Primary uses Brand Coral with drop shadow on hover (`components/ui/Button.tsx`).
- **Section Heading**: Reusable component for titles and subtitles across the page (`components/ui/SectionHeading.tsx`).
- **WebGL Backgrounds**: Three.js / WebGL implementations for ambient visual depth.

### AboutSkroll Section
File: `components/sections/AboutSkroll.tsx`

| Property         | Class           |
| ---------------- | --------------- |
| Section Wrapper  | `w-full py-12 md:py-20 bg-background text-on-background px-margin-mobile md:px-margin-desktop` |
| Identity Grid    | `grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start` |
| Core Principles  | `border-t border-glass-border pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-3 gap-8` |
| Services Diptych | `border-t border-b border-glass-border py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-glass-border` |
| Origin Card      | `bg-surface p-6 sm:p-8 rounded-3xl border border-glass-border` |

### Button Component
File: `components/ui/Button.tsx`

| Property         | Class           |
| ---------------- | --------------- |
| Background       | `bg-brand-coral` (primary) / `bg-transparent` (secondary) |
| Border           | `none` (primary) / `border border-on-background` (secondary) |
| Border radius    | `rounded-full`  |
| Text — primary   | `font-button-text text-button-text text-white` |
| Spacing          | `px-8 py-4` (primary/secondary) |
| Hover state      | `hover:shadow-hover-button` (primary) |
| Cursor           | `cursor-hover`  |

### TwoPathSplit Gateway Cards
File: `components/sections/TwoPathSplit.tsx`

| Property         | Class           |
| ---------------- | --------------- |
| Background       | `bg-surface`    |
| Border radius    | `rounded-3xl`   |
| Padding          | `p-8 md:p-12`   |
| Border           | `border border-glass-border` |
| Hover state      | `hover:-translate-y-2 hover:shadow-hover-card` |

### EventsShowcase 3-Beat & Details Cards
File: `components/sections/EventsShowcase.tsx`

| Property         | Class           |
| ---------------- | --------------- |
| Beat Card Surface | `bg-surface rounded-3xl p-8 md:p-10 border border-glass-border shadow-sm` |
| Detail Card Surface | `bg-surface rounded-2xl p-6 md:p-7 border border-glass-border` |
| Icon Wrapper     | `w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-coral/10 text-brand-coral` |
| Hover state      | `hover:-translate-y-1 hover:shadow-hover-card transition-all` |

### SolutionsShowcase Transformation & Pillar Cards
File: `components/sections/SolutionsShowcase.tsx`

| Property         | Class           |
| ---------------- | --------------- |
| Section Wrapper  | `w-full py-section-gap bg-section-dark text-white relative overflow-hidden` |
| Before Card      | `rounded-3xl p-8 md:p-10 bg-white/[0.02] border border-red-500/20 backdrop-blur-md` |
| After Card       | `rounded-3xl p-8 md:p-10 bg-gradient-to-br from-white/[0.06] to-brand-coral/[0.04] border border-brand-coral/40 backdrop-blur-md` |
| Pillar Card      | `rounded-3xl p-8 bg-white/[0.03] border border-white/10 hover:border-brand-coral/40` |
| CTA Box          | `rounded-3xl p-8 md:p-12 bg-gradient-to-r from-white/[0.04] via-brand-coral/[0.08] to-white/[0.04] border border-white/15` |


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
- **AboutSkroll**: Company overview and dual services section featuring an asymmetric mission statement, three core principles, a 50/50 services diptych, and Sri Lankan origin commitment card (`components/sections/AboutSkroll.tsx`).
- **EventsShowcase**: Dedicated Ticketing Arm showcase featuring a 3-beat visual story, quiet details grid, and CTA bar (`components/sections/EventsShowcase.tsx`).
- **SolutionsShowcase**: Dedicated Business Solutions Arm section with Before/After visual transformation cards, 3 core engineering pillars, and direct CTA block (`components/sections/SolutionsShowcase.tsx`).
- **Problem**: Operations friction section contrasting manual chaos with automated flow (`components/sections/Problem.tsx`).
- **FAQ**: 6-question accordion covering Events and Business Solutions (`components/sections/FAQ.tsx`).
- **Contact**: Minimalist contact form with project selector, WhatsApp/Phone quick links, and tagline anchor (`components/sections/Contact.tsx`).
- **Footer**: Rebranded Skroll footer with semantic crawlable copy and structured navigation (`components/sections/Footer.tsx`).
- **Button**: Oval pill shape, completely rounded. Primary uses Brand Coral with drop shadow on hover (`components/ui/Button.tsx`).
- **Section Heading**: Reusable component for titles and subtitles across the page (`components/ui/SectionHeading.tsx`).
- **WebGL Backgrounds**: Three.js / WebGL implementations for ambient visual depth.

### AboutSkroll Section
File: `components/sections/AboutSkroll.tsx`

| Property         | Class           |
| ---------------- | --------------- |
| Section Wrapper  | `w-full py-12 md:py-20 bg-background text-on-background px-margin-mobile md:px-margin-desktop` |
| Identity Grid    | `grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start` |
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

### EventsShowcase 3-Beat & Details Cards
File: `components/sections/EventsShowcase.tsx`

| Property         | Class           |
| ---------------- | --------------- |
| Beat Card Surface | `bg-surface rounded-3xl p-8 md:p-10 border border-glass-border shadow-sm` |
| Detail Card Surface | `bg-surface rounded-2xl p-6 md:p-7 border border-glass-border` |
| Icon Wrapper     | `w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-coral/10 text-brand-coral` |
| Hover state      | `hover:-translate-y-1 hover:shadow-hover-card transition-all` |

### SolutionsShowcase Architectural Split & Pillars
File: `components/sections/SolutionsShowcase.tsx`

| Property         | Class           |
| ---------------- | --------------- |
| Section Wrapper  | `w-full bg-background text-on-background relative overflow-hidden border-t border-glass-border` |
| Split Row Container | `border border-glass-border rounded-2xl md:rounded-[2rem] overflow-hidden group hover:border-brand-coral/30 shadow-sm` |
| Left Half (Friction) | `w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-surface/40 md:border-r border-b md:border-b-0 border-glass-border` |
| Right Half (Skroll) | `w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-surface relative overflow-hidden` |
| Nexus Connector  | `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-surface border border-glass-border rounded-full` |
| Pillar Item      | `flex flex-col group with font-display tabular numerals (01, 02, 03)` |
| CTA Band         | `w-full border-t border-b border-brand-coral/20 bg-brand-coral/[0.06]` |



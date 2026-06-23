# UI Registry

## Colors
- **Brand Coral**: `#E8521A` (Primary accent)
- **Background**: `#FAFAFA`
- **Surface**: `#FFFFFF`
- **Surface Bright**: `#F5F5F5`
- **Inverse Surface**: `#1A1A1A` (Dark mode / specific dark sections)
- **Error**: `#E53935`

## Typography
- **Headlines**: Plus Jakarta Sans
  - Headline XL (64px, -0.02em tracking, medium/bold)
  - Headline LG (48px, -0.01em tracking, medium/bold)
  - Headline MD (32px, medium/bold)
- **Body/UI**: Inter
  - Body LG (20px, 1.6 leading)
  - Body MD (16px, 1.5 leading)
  - Button Text (14px, uppercase, 0.05em tracking, medium)
  - Label LG (12px, uppercase, 0.1em tracking, semibold)

## Motion & Interaction
- **Magnetic Cursor**: A custom red dot that scales and blurs on hover (`.cursor-hover`).
- **Smooth Scroll**: Provided by Lenis.
- **Section Transitions**: GSAP `fade-up` and `clip-reveal` triggers.

## Components
- **Button**: Oval, completely rounded. Primary uses Brand Coral with drop shadow on hover.
- **Section Heading**: Reusable component for titles and subtitles across the page.
- **WebGL Backgrounds**: Two native three.js/webgl implementations (`Hero` particle stars, `Contact` fragment shader gradient).
- **Accordion (FAQ)**: Reusable details/summary element with transition on `expand_more` icon.

### Button Component

File: `components/ui/Button.tsx`
Last updated: 2026-06-23

| Property         | Class           |
| ---------------- | --------------- |
| Background       | `bg-brand-coral` (primary) / `bg-transparent` (secondary) |
| Border           | `none` (primary) / `border border-on-background` (secondary) |
| Border radius    | `rounded-full`  |
| Text — primary   | `font-button-text text-button-text text-white` |
| Spacing          | `px-8 py-4` (primary/secondary) |
| Hover state      | `hover:scale-105 hover:shadow-[0_10px_40px_rgba(232,82,26,0.4)]` (primary) |
| Cursor           | `cursor-hover`  |

**Pattern notes:**
Buttons should consistently use `rounded-full` with uppercase tracking (`font-button-text`). Primary buttons use the brand coral with a highly distinctive drop shadow scaling effect on hover.

### Card Component (Features/Problem/Social Proof)

File: `components/sections/Features.tsx`
Last updated: 2026-06-23

| Property         | Class           |
| ---------------- | --------------- |
| Background       | `bg-surface`    |
| Border radius    | `rounded-[24px]` |
| Padding          | `p-8`           |
| Text — primary   | `text-on-background` |
| Text — secondary | `text-text-secondary`|
| Hover state      | `hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]` |
| Cursor           | `cursor-hover`  |

**Pattern notes:**
Cards across the site (except the dark Enterprise card) use `bg-surface` with `p-8` and a soft translation/shadow hover effect to encourage interactivity. All cards trigger the custom `cursor-hover`.

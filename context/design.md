---
name: TicketFlow Design System
colors:
  background: "#F5F3F0"
  surface: "#FFFFFF"
  surface-bright: "#fcf9f8"
  on-background: "#1c1b1b"
  text-secondary: "#6B6B6B"
  brand-coral: "#E8521A"
  glass-border: "rgba(26, 26, 26, 0.08)"
---

# Design System: TicketFlow

## 1. Visual Theme & Atmosphere
The TicketFlow landing page employs a premium, modern, and highly interactive B2B SaaS aesthetic. It balances a clean, airy foundation—using a warm off-white background (`#F5F3F0`)—with highly energetic, tech-forward accents. The design is deliberately anti-generic, relying heavily on a striking "Vibrant Coral" (`#E8521A`) as the primary brand color to draw attention and guide the user journey.

Interactive micro-animations (like the magnetic custom cursor, staggered fade-ups, and WebGL particle/shader backgrounds in the Hero and Footer) elevate the site from a standard marketing page to an immersive, high-end digital experience. The generous whitespace (160px section gaps) and massive, tightly-tracked typography create a confident, editorial feel that implies reliability and scale without feeling overly corporate.

## 2. Color Palette & Roles

### Primary Foundation
- **Warm Cream (Background)**: `#F5F3F0` — The primary root background color, providing a softer, warmer alternative to stark white.
- **Pure White (Surface)**: `#FFFFFF` — Used for cards, containers, and elevated components to make them pop against the cream background.
- **Glass Border**: `rgba(26, 26, 26, 0.08)` — Used for subtle dividers, card borders, and the navigation bottom border.

### Accent & Interactive
- **Vibrant Coral (Brand Primary)**: `#E8521A` — The core brand color. Used for primary CTAs, active states, key icons, magnetic cursor, and 3D WebGL accents.
- **Coral Wash**: `rgba(232, 82, 26, 0.1)` — A 10% opacity version of the brand coral, used as a soft background for icons and the hover state of the magnetic cursor.

### Typography & Text Hierarchy
- **Charcoal Black (On-Background)**: `#1c1b1b` — Primary text color used for all headings and high-emphasis body copy.
- **Muted Slate (Text-Secondary)**: `#6B6B6B` — Secondary text color used for body paragraphs, descriptions, and supporting text.
- **Pure White**: `#FFFFFF` — Used for text inside primary buttons and on dark/inverse backgrounds (like the footer).

## 3. Typography Rules

### Hierarchy & Weights
The system uses a geometric sans-serif for display/headings and a highly legible humanist sans for body text.

- **Display & Headings**: `Plus Jakarta Sans`
  - **Display Large**: 80px (desktop) / 48px (mobile), Weight: 800 (ExtraBold), Line-height: 1.1, Tracking: -0.04em.
  - **Headline XL**: 64px, Weight: 700 (Bold), Line-height: 1.2, Tracking: -0.02em.
  - **Headline Large**: 40px, Weight: 700 (Bold), Line-height: 1.3.
  - **Headline Medium**: 32px, Weight: 700 (Bold), Line-height: 1.4.
- **Body & UI**: `Inter`
  - **Body Large**: 20px, Weight: 400 (Regular), Line-height: 1.6.
  - **Body Medium**: 16px, Weight: 400 (Regular), Line-height: 1.6.
  - **Button Text**: `Plus Jakarta Sans`, 16px, Weight: 600 (SemiBold), Line-height: 1.
  - **Label Large**: 14px, Weight: 600 (SemiBold), Tracking: 0.05em (Uppercase).

### Spacing Principles
- **Headings**: Extremely tight letter-spacing (`-0.04em` on largest displays) and line-heights (`1.1` to `1.2`) to create punchy, lock-up style typography.
- **Body**: Generous line-height (`1.6`) to maximize readability.
- **Labels**: Wide tracking (`0.05em`) and uppercase formatting for small eyebrow text and meta-information.

## 4. Component Stylings

### Buttons
- **Shape**: Fully rounded (pill-shaped / `border-radius: 9999px`).
- **Padding**: Generous horizontal padding and comfortable vertical padding (e.g., `px-8 py-4` or `px-10 py-5` for hero CTAs).
- **Primary CTA**: Solid Vibrant Coral (`#E8521A`) background with white text.
- **Secondary CTA**: Transparent background with a `1px` Charcoal border (`border-on-background`) and Charcoal text.
- **Hover States**: 
  - Scale up slightly (`hover:scale-105`) with a 300ms-500ms transition.
  - Primary buttons gain a soft, glowing drop shadow (`hover:shadow-[0_10px_40px_rgba(232,82,26,0.4)]`).
  - Secondary buttons invert colors (background becomes Charcoal, text becomes White).

### Cards & Containers
- **Shape**: Soft, friendly corners (`border-radius: 24px` or `3xl`).
- **Surface**: Pure white (`#FFFFFF`) backgrounds resting on the cream body background.
- **Padding**: Uniform internal padding, typically `p-8` (32px).
- **Interaction**: Cards are mostly flat by default but lift on hover (`hover:-translate-y-2`) and cast a diffuse, elegant shadow (`hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]`).
- **Icons**: Icons inside cards are placed in 48x48px (`w-12 h-12`) circular wrappers with a 10% opacity wash of the brand color.

### Navigation
- **Layout**: Fixed to the top, utilizing a glassmorphism effect (`bg-surface/80 backdrop-blur-md`).
- **Border**: A delicate 1px border at the bottom (`border-glass-border`).
- **Typography**: Links are uppercase, wide-tracked, and use the `text-secondary` color, turning `primary` on hover.

### Inputs & Forms (FAQ Accordion)
- **FAQ Pattern**: Uses native `<details>` HTML elements styled as distinct blocks.
- **Shape**: `rounded-2xl` with a 1px `border-glass-border`.
- **Interaction**: The chevron icon rotates 180 degrees when open.

## 5. Layout Principles

### Grid & Structure
- **Max Width**: The main content wrapper is capped at `1280px` (`max-w-container-max`).
- **Grid System**: Relies heavily on CSS Grid for feature lists and pricing cards (`grid-cols-1 md:grid-cols-3` or `md:grid-cols-4`).

### Whitespace Strategy
- **Section Gaps**: Massive vertical padding between major page sections (`py-section-gap`, which is `160px`).
- **Edge Padding**: Generous horizontal padding on desktop (`px-margin-desktop`, `80px`) that scales down gracefully on mobile (`24px`).
- **Internal Spacing**: Consistent spacing between elements (e.g., `mb-16` below section headers).

### Alignment & Visual Balance
- **Section Headers**: Almost exclusively center-aligned to create a strong vertical spine down the page.
- **Card Content**: Left-aligned inside the cards for optimal readability.

### Responsive Behavior & Touch
- **Breakpoints**: Standard mobile-first approach. Grids stack to 1 column on mobile and expand to 3 or 4 columns on desktop (`md:` breakpoint).
- **Typography**: Display text scales dramatically from mobile to desktop (e.g., `48px` to `80px`).

## 6. Design System Notes for Stitch Generation

### Language to Use
When prompting for UI in this style, use keywords like: "Premium B2B SaaS", "generous whitespace", "160px section padding", "pill-shaped buttons with glowing hover states", "tightly tracked heavy display typography", "glassmorphism navigation", and "Vibrant Coral accents against a warm cream background."

### Color References
- **Background**: `#F5F3F0`
- **Surface**: `#FFFFFF`
- **Primary Text**: `#1c1b1b`
- **Secondary Text**: `#6B6B6B`
- **Vibrant Coral (Brand)**: `#E8521A`
- **Glass Border**: `rgba(26, 26, 26, 0.08)`

### Component Prompts
- **Feature Card**: "Create a white feature card with 24px border radius. Include a 48x48px circular icon wrapper with a 10% coral background and a coral icon inside. Use a bold 32px heading and 16px secondary text below it. Add a smooth upward lift and soft shadow on hover."
- **Primary CTA**: "Create a pill-shaped button with a Vibrant Coral background and white text. Give it generous padding (px-8 py-4). On hover, scale it up slightly and add a diffuse coral drop shadow."
- **Section Header**: "Create a center-aligned section header. Use Plus Jakarta Sans ExtraBold at 64px with -0.02em tracking for the title. Below it, add a max-width 2xl paragraph in Inter 20px using the secondary text color."

### Incremental Iteration
When adding new components, always verify that the corner radii remain soft (24px for large containers, full pill for buttons) and that new sections respect the 160px vertical section gaps to maintain the airy, premium feel. Ensure interactive elements leverage the `cursor-hover` class to interact properly with the custom magnetic cursor.

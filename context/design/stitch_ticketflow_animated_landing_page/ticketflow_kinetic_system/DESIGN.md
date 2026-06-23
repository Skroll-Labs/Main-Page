---
name: TicketFlow Kinetic System
colors:
  surface: '#FFFFFF'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5a4139'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8e7067'
  outline-variant: '#e3bfb4'
  surface-tint: '#ad3300'
  primary: '#a93200'
  on-primary: '#ffffff'
  primary-container: '#d24206'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59e'
  secondary: '#5e5e5c'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdc'
  on-secondary-container: '#636360'
  tertiary: '#005f9d'
  on-tertiary: '#ffffff'
  tertiary-container: '#0079c4'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#390b00'
  on-primary-fixed-variant: '#842500'
  secondary-fixed: '#e4e2df'
  secondary-fixed-dim: '#c8c6c3'
  on-secondary-fixed: '#1b1c1a'
  on-secondary-fixed-variant: '#474745'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9ccaff'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#00497a'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  text-secondary: '#6B6B6B'
  glass-border: rgba(26, 26, 26, 0.08)
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button-text:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
  element-gap: 24px
---

## Brand & Style

This design system embodies a **Modern-Minimalist** aesthetic with a high-end, editorial feel typical of award-winning B2B SaaS platforms. It balances corporate reliability with creative energy through the use of high-contrast typography, a warm, sophisticated palette, and dynamic, motion-centric layouts.

The visual narrative is built on the concept of "Seamless Momentum." This is achieved through:
- **Generous Whitespace:** Using space as a functional element to group information and reduce cognitive load.
- **Glassmorphic Accents:** Subtle translucent layers that imply depth without breaking the minimalist plane.
- **Motion-First Philosophy:** Incorporating clip-path reveals for image transitions and magnetic interactions on interactive elements to create a premium, tactile response.
- **Editorial Typography:** Large-scale headlines that command attention, contrasted with highly legible, geometric body text.

## Colors

The color strategy uses a "Warm Tech" approach. The **Primary Coral-Orange** is reserved for high-priority calls to action and key brand moments, providing a vibrant pulse against the organic **Warm Cream** background.

- **Background Strategy:** Use `#F5F3F0` as the primary canvas. This reduces eye strain compared to pure white and gives the product a bespoke, premium feel.
- **Surface Strategy:** Use pure white (`#FFFFFF`) for cards and elevated containers to create a subtle lift from the background.
- **Typography:** The **Charcoal** neutral ensures maximum accessibility, while the **Medium Gray** is used for secondary metadata and helper text to maintain a clear visual hierarchy.

## Typography

The typographic system relies on the interplay between the expressive, geometric personality of **Plus Jakarta Sans** and the functional clarity of **Inter**.

- **Scale:** Large display sizes use aggressive negative letter-spacing to create a "tight" editorial look.
- **Hierarchy:** Headlines should predominantly use the primary Charcoal color. Use the Primary Coral for single-word accents within headlines to draw the eye.
- **Legibility:** All body text utilizes Inter with a generous line height (1.6) to ensure readability during long-form content consumption, such as the FAQ or Feature sections.

## Layout & Spacing

The system follows a **12-column Fluid Grid** for desktop, transitioning to a **4-column grid** for mobile. 

- **Vertical Rhythm:** A strict 8px base unit is used for component-level spacing. For layout-level spacing, use large, purposeful gaps (160px) between major landing page sections to reinforce the minimalist aesthetic.
- **Alignment:** Headlines and primary content should be left-aligned to maintain a strong vertical axis, though testimonials and pricing cards may use centered layouts for visual variety.
- **Safe Zones:** Margins are wide (80px) to push content inward, creating an elegant "frame" around the interface.

## Elevation & Depth

This design system avoids traditional heavy shadows in favor of **Tonal Layering** and **Glassmorphism**.

- **Surface Tiers:** 
  - **Level 0 (Background):** Warm Cream (`#F5F3F0`).
  - **Level 1 (Cards/Sections):** White (`#FFFFFF`) with a 24px corner radius and no shadow, or a very faint 2% opacity neutral glow.
  - **Level 2 (Floating UI):** Semi-transparent white (80% opacity) with a 20px backdrop blur, used for navigation bars and hovering utility elements.
- **Interactions:** Depth is conveyed through scale rather than shadow. Buttons and cards should subtly scale up (1.02x) on hover, accompanied by a magnetic snap effect to the cursor.

## Shapes

The shape language is defined by large, friendly radii and pill-shaped interactive elements.

- **Containers:** Standard cards and section containers use a **24px (1.5rem)** radius, creating a soft, modern silhouette that contrasts with the sharp typography.
- **Interactive Elements:** Buttons and tags must always be **Pill-Shaped** (fully rounded corners).
- **Icons:** Use a consistent 2px stroke weight with rounded terminals to match the font geometry of Plus Jakarta Sans.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary Coral background, White text. Use a magnetic hover effect where the text moves slightly toward the cursor.
- **Secondary:** Pill-shaped, transparent background with a 1px Charcoal border.

### Cards
- **Feature/Pricing Cards:** White background, 24px corner radius. Use a "reveal" animation on scroll where the card content slides up while the card boundary stays fixed.

### Input Fields
- **Styling:** Minimalist bottom-border only or a soft-gray filled style with 12px radius. Focus states should transition the border color to Primary Coral with a subtle glow.

### Chips & Tags
- Used for plan names (e.g., "Most Popular"). These should be small, pill-shaped, and use a low-opacity version of the Primary color (10%) with 100% opacity text for the label.

### Navigation
- A "Sticky Glass" header that appears on scroll-up. It uses a backdrop-blur and a subtle Charcoal outline (8% opacity) on the bottom edge.

### Animations
- **Clip-path reveals:** For the Hero image and Section headers, use a vertical or diagonal clip-path reveal to make the content "grow" into the page.
- **Smooth Scroll:** Implement a custom inertia-based smooth scroll to enhance the high-end feel.
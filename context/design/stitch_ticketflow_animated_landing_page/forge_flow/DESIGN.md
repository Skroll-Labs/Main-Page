---
name: Forge & Flow
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#ffb3ad'
  on-tertiary: '#68000a'
  tertiary-container: '#ff5451'
  on-tertiary-container: '#5c0008'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system is built for high-stakes B2B SaaS environments, merging industrial precision with futuristic energy. The brand personality is **authoritative, visionary, and high-performance**. It targets enterprise decision-makers who value stability but seek a competitive edge through cutting-edge technology.

The visual style is a sophisticated blend of **Dark Mode Minimalism** and **Glassmorphism**. It utilizes a deep, obsidian foundation to allow "forged" elements—vibrant, multi-color gradients and sharp, high-contrast typography—to command attention. The "Forging the Future" narrative is realized through subtle metallic textures, blurred background accents (reminiscent of heat and light), and crystalline interface layers that feel both solid and ethereal.

## Colors

The palette is anchored by a **Deep Dark** neutral scale, providing a low-light environment where color serves as a functional signal and emotional driver.

- **The Forge Gradient:** A signature multi-color blend (Purple to Orange-Yellow) used sparingly for high-impact moments, such as primary headings, logos, and active states.
- **Primary (Purple):** Represents intelligence and the "digital" aspect of the solutions.
- **Secondary (Amber/Orange):** Evokes the heat of a forge and provides high-visibility calls to action.
- **Neutral:** A range of slate and obsidian tones that maintain depth without appearing flat black.

Surface colors should use semi-transparent overlays on top of the neutral base to create the glass effect, allowing background gradients to bleed through subtly.

## Typography

This design system uses **Plus Jakarta Sans** for its geometric clarity and modern B2B feel. The hierarchy is characterized by aggressive scale contrasts—large, bold display types set against clean, readable body text.

- **Display & Headlines:** Use tight letter spacing and heavy weights to create a "solid" presence. The Forge Gradient is applied to the most critical keyword in a headline to draw the eye.
- **Body Text:** Set with generous line height to ensure readability against dark backgrounds.
- **Data & Labels:** **JetBrains Mono** is introduced for technical labels, metadata, and "hiring" badges to emphasize the engineering precision behind the solutions.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high-density vertical rhythm.

- **Grid:** A 12-column system for desktop, collapsing to 4 columns for mobile.
- **Rhythm:** An 8px base unit governs all dimensions. Margins are intentionally wide on desktop (64px+) to create a "premium" sense of space and focus.
- **Structure:** Content is organized into clearly defined sections separated by generous vertical whitespace (120px-160px) to prevent the dark interface from feeling claustrophobic.
- **Safe Areas:** Interactive elements maintain a minimum 44px hit area, even when styled as compact components.

## Elevation & Depth

Depth is achieved through **Glassmorphism** rather than traditional drop shadows.

- **Backdrop Blurs:** Navigation bars and floating cards use a `blur(20px)` effect with a semi-transparent slate fill (`rgba(15, 23, 42, 0.7)`).
- **Surface Tiers:**
    - **L0 (Base):** Solid `#0F172A`.
    - **L1 (Cards):** Slightly lighter fill with a 1px "inner glow" border (`rgba(255, 255, 255, 0.1)`) on the top and left edges to simulate light hitting a glass edge.
    - **L2 (Popovers/Modals):** Increased blur and higher contrast border.
- **Glow Accents:** Low-opacity radial gradients (Forge Colors) are placed behind key components to create a "heated" ambient glow that suggests energy beneath the surface.

## Shapes

The design system utilizes a **Pill-shaped (3)** rounding language for interactive elements to contrast against the rigid, structured grid.

- **Primary Buttons:** Fully pill-shaped to stand out as organic, touchable objects.
- **Cards & Containers:** Use `rounded-xl` (1.5rem / 24px) to soften the professional B2B structure.
- **Badges:** Small pill shapes with mono-type for a "tag" or "label" appearance.
- **Image Containers:** Always use `rounded-lg` or `rounded-xl` to maintain consistency with the UI frame.

## Components

- **Buttons:** 
    - *Primary:* Solid black or gradient background with a pill shape and a small trailing arrow icon (→). 
    - *Secondary:* Ghost style with a "glass" border and high-contrast text.
- **Input Fields:** Dark backgrounds with 1px borders that transition to a Forge Gradient border on focus.
- **Chips/Badges:** Small, monospaced text within high-contrast pill containers (e.g., the "HIRING" badge with a soft red background).
- **Navigation:** A floating "glass" header that blurs the content beneath it as the user scrolls, maintaining a sense of constant presence.
- **Cards:** Utilize the L1 elevation with subtle border highlights. Content within cards should follow the standard typography hierarchy but scaled down.
- **Floating Action Elements:** Chat bubbles or consultation triggers should be solid black with high-contrast white icons to ensure they remain the most legible items on the screen.
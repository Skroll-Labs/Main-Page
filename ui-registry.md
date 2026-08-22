## Baseline — Established 2026-06-23

[Note: This baseline was established via /imprint audit]

| Property         | Correct class |
| ---------------- | ------------- |
| Section padding  | `py-section-gap` |
| Container max    | `max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop` |
| Card background  | `bg-surface` or `bg-background` depending on section background |
| Card border      | `border border-glass-border` (if needed) |
| Card radius      | `rounded-3xl` |
| Card hover       | `hover:-translate-y-2 hover:shadow-hover-card` |
| Button primary   | `bg-brand-coral text-white hover:scale-105 hover:shadow-hover-button` |
| Button secondary | `border border-on-background text-on-background hover:bg-on-background hover:text-white` |
| Text primary     | `text-on-background` |
| Text secondary   | `text-text-secondary` |
| Brand highlights | `text-brand-coral` or `bg-brand-coral` |
| Error highlights | `text-error` or `bg-error/10` |

### Architectural Split Strip
File: components/sections/SolutionsShowcase.tsx
Last updated: 2026-08-22

| Property         | Class           |
| ---------------- | --------------- |
| Background (Left)| bg-surface/40   |
| Background (Right)| bg-surface      |
| Border           | border border-glass-border |
| Border radius    | rounded-2xl md:rounded-[2rem] |
| Text — primary (L) | text-2xl md:text-3xl text-on-background/50 line-through decoration-red-400/30 |
| Text — primary (R) | text-2xl md:text-3xl text-on-background font-bold |
| Text — secondary | text-base md:text-lg text-text-secondary |
| Spacing          | p-8 md:p-12 lg:p-16 |
| Hover state      | group hover:border-brand-coral/30 |
| Shadow           | shadow-sm       |
| Accent usage     | absolute blur-3xl glow (bg-brand-coral/[0.04]), text-brand-coral |

**Pattern notes:**
Use for direct Before/After marketing comparisons. Replaces nested cards. Uses structural border lines (50/50 split on desktop, stacked on mobile). A central absolute positioned node (Nexus Arrow) bridges the two halves. Large typography is mandatory.

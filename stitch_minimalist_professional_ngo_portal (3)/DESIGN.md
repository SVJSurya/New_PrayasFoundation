---
name: Institutional Excellence
colors:
  surface: '#faf9f9'
  surface-dim: '#dadada'
  surface-bright: '#faf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#43474e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f0f0'
  outline: '#74777f'
  outline-variant: '#c3c6d0'
  surface-tint: '#425f8a'
  primary: '#00132c'
  on-primary: '#ffffff'
  primary-container: '#002850'
  on-primary-container: '#7390be'
  inverse-primary: '#aac8f9'
  secondary: '#3c5e98'
  on-secondary: '#ffffff'
  secondary-container: '#9ebfff'
  on-secondary-container: '#294c85'
  tertiary: '#1b1100'
  on-tertiary: '#ffffff'
  tertiary-container: '#352500'
  on-tertiary-container: '#b68700'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#aac8f9'
  on-primary-fixed: '#001c3b'
  on-primary-fixed-variant: '#294871'
  secondary-fixed: '#d7e2ff'
  secondary-fixed-dim: '#abc7ff'
  on-secondary-fixed: '#001b3f'
  on-secondary-fixed-variant: '#21467f'
  tertiary-fixed: '#ffdea0'
  tertiary-fixed-dim: '#f8bd2d'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#faf9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e3e2e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is anchored in the concept of **Institutional Excellence**. It portrays a foundation that is stable, authoritative, and deeply committed to structural empowerment. The brand personality is formal and high-integrity, designed to instill confidence in both institutional donors and community beneficiaries.

The visual style is **refined Minimalism with Corporate rigor**. It utilizes a structured grid, generous whitespace, and a high-contrast palette to communicate clarity and purpose. Elements are intentional, avoiding decorative flourish in favor of functional elegance. The emotional response should be one of "Empowerment through Stability"—a sense that the foundation provides a solid, professional ground for growth and skill acquisition.

## Colors

The color strategy uses a hierarchy of deep navy blues to establish authority, paired with gold accents to signify value, achievement, and optimism.

- **Primary & Secondary Blues:** Used for core branding, headers, and high-importance interactions. They provide the "Institutional" anchor.
- **Primary & Accent Golds:** Reserved for "Call to Action" (CTA) elements, success states, and highlighting key impact metrics. Gold should be used sparingly to maintain its status as a premium accent.
- **Grays & Off-White:** The silver and light grays are used for structural borders and secondary text. The off-white serves as the primary background color, providing a softer, more sophisticated alternative to pure white (#FFFFFF), reducing eye strain and feeling more "established."

## Typography

This design system utilizes **Inter** exclusively to leverage its systematic, utilitarian, and highly legible characteristics. 

- **Headlines:** Use tighter letter-spacing and heavier weights (600-700) in Primary Blue to command attention.
- **Body Text:** Set in weights of 400 for maximum readability. Use the Silver Gray for secondary body copy to create a clear visual hierarchy.
- **Labels:** Small caps or uppercase transformations are encouraged for "Label-LG" roles (like section headers or overlines) to reinforce the institutional, organized feel.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a sense of containment and order, transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid, 1200px max-width, 24px gutters. Content should be centered with wide "safe-area" margins to emphasize the minimalist aesthetic.
- **Tablet:** 8-column grid, 24px margins.
- **Mobile:** 4-column grid, 16px margins. 

The spacing scale is strictly linear, based on a 4px/8px module. For institutional trust, avoid "tight" layouts; ensure that every content block has significant breathing room (MD to LG spacing) to prevent the UI from feeling cluttered or "cheap."

## Elevation & Depth

To maintain a formal and modern tone, depth is communicated through **Tonal Layers and Low-Contrast Outlines** rather than heavy shadows.

- **Surface Levels:** Use the `Off White` as the base. Primary containers (cards/sections) should use a pure white background with a subtle 1px border in `Silver Gray`.
- **Shadows:** When necessary for high-level modals or floating action buttons, use "Ambient Shadows"—extremely soft, diffused shadows (e.g., `box-shadow: 0 4px 20px rgba(0, 40, 80, 0.05)`). The shadow color should be a tinted version of the Primary Blue, never pure black.
- **Interaction:** On hover, elements may slightly lift (move -2px Y-axis) or transition their border color from `Silver Gray` to `Primary Blue`.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding removes the "aggression" of sharp corners while maintaining the structured, professional feel of a formal institution. 

- **Standard Elements:** (Inputs, Buttons, Small Cards) use a 4px corner radius.
- **Large Containers:** (Featured Sections, Large Modals) can use up to 8px (rounded-lg) to feel more approachable.
- **Avoid:** Circular or pill-shaped buttons, as they feel too casual for this specific institutional context.

## Components

- **Buttons:**
  - **Primary:** Background `Primary Gold`, text `Primary Blue`, 4px radius. High contrast is vital.
  - **Secondary:** Outline 1px `Primary Blue`, text `Primary Blue`.
  - **Tertiary:** Text only, bold weight, with an underline on hover.
- **Input Fields:** 1px `Silver Gray` border, `Off White` background on focus, 4px radius. Labels should always be visible above the field in `Label-MD`.
- **Cards:** White background, 1px `Silver Gray` border. Use `md` padding for internal content. Titles within cards should be `Headline-MD`.
- **Progress Bars:** Used for "Goal Tracking" in community projects. Use `Silver Gray` for the track and `Primary Gold` for the fill.
- **Chips/Badges:** Use light tints of `Primary Blue` with dark blue text for categorization (e.g., "Skill Dev", "Healthcare"). Keep edges slightly rounded (4px) to match the system.
- **Lists:** Use `Primary Gold` icons or bullets to draw the eye to key achievements or program benefits.
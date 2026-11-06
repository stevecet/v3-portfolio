---
name: frontend-design
description: Guidelines and design standards for crafting distinctive, production-grade frontend experiences, typography, grid systems, and visual hierarchy.
---

# Frontend Design Standards

This skill guides the design and implementation of distinctive, high-craft web interfaces.

## 1. Visual Identity & Design Philosophy
- **Anti-Generic**: Reject generic AI aesthetics, repetitive rounded card grids, cliché neon glows, and uncurated gradients.
- **Editorial Engineering**: Blend technical precision (monospaced accents, data density, subtle coordinate frames, status metrics) with high-end editorial layout (bold headline hierarchy, curated whitespace, asymmetrical balance).
- **Materiality & Surfaces**: Deep, low-noise dark surfaces (`#090a0f`, `#0d0f17`, zinc/slate tones) or refined light paper tones with razor-sharp borders (`1px solid hsl(var(--border) / 0.8)`).
- **Distinctive Color Accent**: Use intentional, restrained accent colors (e.g., deep cobalt/amber/emerald indicators) rather than ubiquitous rainbow/purple gradients.

## 2. Typography & Hierarchy
- **Primary Body/Display**: Clean sans-serif (Inter/Geist/Outfit) paired with authoritative, deliberate font weights (bold display titles, medium navigation, regular body).
- **Technical Subtext**: Monospace font (Fira Code / JetBrains Mono) for metrics, timestamps, labels, code snippets, metadata, and status badges.
- **Typographic Scale**: Dramatic contrast between display headings (3rem - 5rem) and precision subtext (0.75rem - 0.875rem uppercase tracked labels).

## 3. Spatial System & Layout
- **Grid Discipline**: Modular layout aligned to an 8px / 16px spatial grid.
- **Controlled Density**: Balance expansive editorial hero areas with dense, information-rich engineering cards.
- **Asymmetry**: Avoid boring repetitive 3-column grids. Pair full-width case studies with split telemetry data, interactive demos, or interactive inspector panels.

## 4. Components & Interactive States
- **Micro-Interactions**: Subtle border glows on hover, magnetic buttons, crisp focus rings, interactive tabs, real-time code inspector, copy-to-clipboard feedback.
- **Engineering Authenticity**: Genuine project architecture diagrams, tech stack breakdowns, live demo links, key challenges solved, and testing methodologies.
- **Accessibility & Contrast**: High-contrast text compliance (WCAG AA+), keyboard navigation focus rings, screen reader labels (`sr-only`), reduced motion alternatives.

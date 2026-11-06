---
name: motion-design
description: Standards for performant, purposeful, and accessible animation and interaction design in web applications.
---

# Motion Design Standards

Guidelines for crafting refined, performant, and purposeful interactions.

## 1. Principles of Purposeful Motion
- **Meaning Over Spectacle**: Every animation should communicate state, spatial relationships, hierarchy, or affordance.
- **Physics & Easing**: Use custom cubic bezier curves with natural deceleration (e.g. `[0.16, 1, 0.3, 1]` or `[0.22, 1, 0.36, 1]`) instead of linear or generic ease-in-out.
- **Snappiness**: Enter animations: 200ms–400ms. Micro-interactions (hover, active): 100ms–200ms. Page/Section transitions: 400ms–600ms. Never make the user wait for content to become readable or clickable.

## 2. Technical Performance
- **Hardware Acceleration**: Animate ONLY `transform` (translate, scale) and `opacity`. Avoid animating width, height, margin, padding, or filter blurs continuously on scroll.
- **Scroll Optimization**: Use `whileInView` with `viewport: { once: true, margin: "-80px" }` to prevent repeated layout thrashing.
- **Lightweight Implementation**: Leverage CSS transitions for state hover/focus. Use Framer Motion for complex choreography, staggered entrances, and layout animations.

## 3. Accessibility & Reduced Motion
- **Mandatory Reduced Motion**: Respect `prefers-reduced-motion: reduce`. When active, eliminate movement and fallback to immediate opacity or zero-duration transitions.
- **No Disorienting Shakes**: Avoid camera shake, aggressive parallax, or continuous looping background distractions that cause motion sickness.
- **Touch Device Friendliness**: Ensure hover effects gracefully degrade on touch/mobile devices without sticky states.

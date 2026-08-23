---
name: anti-ai-design
description: Enforces bespoke, editorial, human-grade web design principles and strictly eliminates generic AI-slop UI patterns, boilerplate templates, and fake dashboard tropes.
---

# Anti-AI Web Design Manifesto & Engineering System

A comprehensive design guideline and operational rulebook to produce bespoke, human-grade, high-craft digital experiences. This skill strictly prohibits generic AI defaults ("AI slop") and mandates intentional art direction tailored specifically to each brand.

---

## 1. Core Philosophy: The Anti-Slop Imperative

AI-generated web design frequently produces identical, forgettable, median interfaces. Generic AI outputs default to statistical averages—the same purple-to-blue gradients, Inter font stacks, frosted glassmorphism, floating pill badges, and repetitive 3-card bento grids.

### The Guiding Principle
> ❌ **Never ask:** *"What does a modern web page look like?"*  
> (That produces the statistical median of training data.)
>
> ✅ **Always ask:** *"What unique visual and physical language belongs specifically to THIS brand and audience?"*

---

## 2. Strictly Prohibited AI Patterns ("The Blacklist")

Unless explicitly requested by a strict client brief, the following patterns are **banned**:

### 🚫 Aesthetics & Colors
- **The AI Gradient**: Default purple-to-blue, purple-to-pink, or cyan-on-dark neon glow palettes.
- **Dark-Mode Crypto/SaaS Trope**: Forcing brick-and-mortar, luxury, or industrial businesses into dark cyber dashboards with glowing orbs, blurred neon backdrops, or fake "telemetry" bars.
- **Glassmorphism Overuse**: Frosted glass on every single card, navbar, hero, and container.
- **Gradient Text Headers**: Putting generic rainbow gradients on primary `<h1>` text.
- **Sterile Uniformity**: Flat Tailwind-default blue/gray without intentional brand depth.

### 🚫 Layout & Structure
- **The Repetitive SaaS Stack**: Centered hero $\rightarrow$ 3-stat row $\rightarrow$ 3 identical rounded cards $\rightarrow$ bento grid $\rightarrow$ generic testimonials $\rightarrow$ pricing $\rightarrow$ CTA.
- **The "One-Sided Border" Tell**: A thick colored accent border on just one side (left or top) of an otherwise plain rounded rectangle card.
- **Nested Card Soup**: Cards inside cards inside cards, each with redundant padding, borders, and shadows.
- **Card-as-Default Reflex**: Boxing every piece of text or data inside a floating card container instead of using editorial typography, whitespace, or layout dividers.

### 🚫 Typography & Elements
- **Inter/Geist Monoculture**: Using a single sans-serif font for headings, body, labels, and buttons with no typographic personality or contrast.
- **Floating Badge & Pill Explosion**: Scattering pastel capsule pills and floating status badges arbitrarily across heroes and headers.
- **Floating 3D Blobs & Generic Stock**: Abstract floating iridescent shapes, AI-generated plastic 3D icons, or generic "diverse team smiling at laptop in bright office" photos.
- **Purposeless Micro-Motion**: Bouncing buttons, constantly wiggling icons, glowing borders, or unmotivated spring physics added purely for decoration.

### 🚫 Copywriting Clichés
- **Vague Startup Platitudes**: *"Transform your workflow"*, *"The future of X"*, *"Empower your team"*, *"Your all-in-one platform"*, *"Take your business to the next level"*.

---

## 3. The High-Craft Editorial Standard

### A. Design Before Code
Before writing UI code or CSS, establish the brand identity:
1. **Subject & Audience**: Who is this for, and what is the exact single job of this interface?
2. **Visual Archetype & Geometry**: Sharp/editorial, industrial/technical, soft/organic, or architectural.
3. **Typography Pairings**: Two contrasting, character-rich typefaces suited to the subject.
4. **Color Tokens**: 4–6 named semantic hex colors (primary, secondary, surface, accent, text hierarchy).
5. **Signature Anchor**: One memorable visual or structural element that defines the page.

---

### B. Architecture & Color Palettes (Benchmarks: *Luxury Shutters*, *Makhaswa*)
- **Light-First & Authoritative Solids**:
  - Crisp backgrounds: `#ffffff`, tailored off-white canvas (`#f4f6f8`, `#f8fafc`, or warm alabaster `#fbf9f5`).
  - Deep brand authority: Deep Corporate Maroon (`#8B1A1A`), Deep Navy (`#082d5a`), Forest Emerald (`#1b382b`), or Charcoal Slate (`#181e24`).
  - Refined warm accents: Brushed Gold (`#c0911d`, `#c8a951`), Warm Ochre, Terracotta, or Copper.
- **Full-Width Section Banners (`.section-banner`)**: Use solid, high-contrast brand banners to demarcate content chapters with clear authority.
- **Surface Contrast**: Rely on subtle tonal shifts, material textures, and precise hairline dividers rather than heavy drop shadows.

---

### C. Typography System & Hierarchy
- **Intentional Pairings**:
  - *Editorial & Luxury*: High-contrast Display Serif (`Playfair Display`, `Cormorant`, `Cinzel`) + Clean Geometric Sans (`Montserrat`, `Plus Jakarta Sans`, `Outfit`).
  - *Industrial & Technical*: Bold Condensed Grotesk (`Syne`, `Cabinet Grotesk`, `Oswald`) + Precise Monospace / Clean Neutral Body (`Space Grotesk`, `JetBrains Mono`, `DM Sans`).
  - *Corporate Authority*: Bold tracked Sans (`Montserrat` with `letter-spacing: 1.5px–2px`, uppercase headers) + Crisp readable body (`Inter` is acceptable only when paired with an authoritative display typeface).
- **Fluid Type Scales**: Use CSS `clamp(min, preferred, max)` for hero and section headers.
- **Expressive Structural Hierarchy**: Clear visual differentiation across Display, Section Heading, Subheading, Body, Metadata, and Micro-labels.

---

### D. Shape Language & Geometry
Choose **ONE** dominant geometry per project and execute it consistently:

| Geometric Archetype | Primary Characteristics | Best Suited For |
| :--- | :--- | :--- |
| **Sharp / Editorial** | 0px–4px radius, precise hairline borders, crisp editorial grids | Luxury, Architecture, Fashion, Legal, Publishing |
| **Architectural / Solid** | 4px–8px radius, heavy structure, bold color blocks | Construction, Engineering, Logistics, Corporate |
| **Soft / Polished** | 8px–14px radius, subtle organic curves, generous padding | Modern Consumer Services, Healthcare, Design Studios |
| **Industrial / Technical** | Crisp borders, mono badges, structured data tables, chamfered accents | Manufacturing, Hardware, Analytics, Heavy Industry |

> ⚠️ **Rule:** Do not mix pills, extreme rounded corners (24px+), sharp corners, and organic blobs within the same interface.

---

### E. Glassmorphism & Depth Budget
- **Glass Budget Rule**: Maximum **15–25%** of visible interface area.
- **Purpose-Driven Only**: Use glass exclusively for floating sticky navigation, modal overlays, contextual controls, or an intentional hero backdrop element.
- **Meaningful Backdrop**: Never apply `backdrop-filter: blur()` over a plain solid color—glass must have something visually interesting (texture, photography, subtle mesh) behind it.
- **Physical Depth**: Achieve depth through physical hierarchy—scale, overlap, intentional negative space, layered photography, and delicate borders—not artificial glowing shadows.

---

### F. Layout Diversity & Information Geometry
Break the monotony of uniform card grids:
- **Asymmetry & Editorial Spreads**: Combine oversized typography with offset imagery.
- **Structured Data & Tactile Tables**: Showcase verified project track records, authentic specs, equipment lists, and certified credentials in clean tabular layouts.
- **Alternating Cadence**:
  - *Hero*: Typography-led or high-impact full-bleed photography.
  - *Value Pillars*: Editorial split layout or numbered narrative blocks.
  - *Evidence / Proof*: Data tables, verified client badges, or high-density stat counters.
  - *Showcase*: Asymmetric masonry, oversized visual case study cards, or horizontal timeline.
  - *Conversion*: Full-width solid brand banner with clean single-focus action.

---

### G. Authentic Imagery & Copywriting
- **Real Over Artificial**: Use authentic photography, real product/project captures, technical blueprints, schematics, or customized SVGs over generic 3D illustrations.
- **Specific, Concrete Copy**:
  - Clearly state: What the company does $\rightarrow$ Who it serves $\rightarrow$ The tangible problem solved $\rightarrow$ Verified credentials/track record.
  - Write copy so specific that it would make zero sense if copied to a competitor's website.

---

### H. Purposeful Motion
- Motion must communicate spatial logic, entrance hierarchy, or user feedback.
- Restrict animation to:
  - Subtle entrance fades/reveals (`fade-up` with slight stagger, 0.3s–0.5s ease-out).
  - Tactile button and link hover feedback (subtle transform, background transition).
  - Sticky nav state changes and smooth accordion expansions.
- Ban gratuitous floating elements, continuous pulsating glow animations, and bouncy physics.

---

## 4. The Anti-AI Pre-Flight Audit Checklist

Before delivering or finalizing any web design, run this rapid verification:

```markdown
### 📋 Anti-AI Design Checklist

[ ] Brand Check: Does this design immediately evoke this specific company, or could it be any random SaaS?
[ ] Color Check: Is the palette free of generic purple/blue gradients and fake neon glow?
[ ] Typography Check: Are there 2 distinct, intentional typefaces with clear contrast and fluid scaling?
[ ] Layout Check: Did I avoid repetitive 3-card rows and redundant nested cards?
[ ] Geometry Check: Is there a unified shape language (sharp, solid, or soft) instead of random radii?
[ ] Glass Budget: Is frosted glass / backdrop blur restricted to <25% of the UI with real visual context behind it?
[ ] Card Justification: Is every piece of information in a box necessary, or would it look cleaner open/editorial?
[ ] Copy Specificity: Is the headline concrete and informative rather than a generic startup cliché?
[ ] Signature Element: Does the page have at least ONE memorable signature anchor element?
[ ] The Median Test: If this prompt/brief was run 10 times, is this result distinctly crafted or the statistical median?
```

---

## 5. Core Tenet

> **Craftsmanship over convenience. Specificity over templates. Editorial authority over generic trends.**


According to some sources, these are the **30 things he associates with an “AI/vibe-coded” website**:

1. Harsh gradients
2. Lucide icons
3. Pure white background
4. Rainbow coloring
5. Drop shadows
6. 3 feature cards in a row
7. Emojis
8. Liquid glass
9. Em dashes
10. Inter / Geist / Space Grotesk
11. Colored left stripe
12. Fake testimonials
13. Bento grids
14. Terminal window
15. “It’s not X, it’s Y”
16. Checkmark bullets
17. 3 pricing tiers
18. No real product demos
19. Soft corner radius
20. Purple and black
21. No skeleton loaders
22. Radial orbs
23. Dot grids
24. Sparkle icons
25. Animated arrows
26. No TOS
27. No privacy policy
28. Hover animations
29. Neon colors
30. Basic pastel colors

### What he's really getting at

He's basically arguing that **AI-generated/vibe-coded websites tend to converge on the same visual patterns** rather than looking deliberately designed.

The criticism isn't that *each individual item is bad*. It's the **combination and repetition**:

> gradient + rounded cards + purple/black + Lucide icons + bento grid + sparkle icon + radial gradient + animated arrow + three pricing cards + fake testimonials

That combination has become a recognizable **“AI startup website” aesthetic**.

By contrast, well-designed websites made before the current AI/vibe-coding boom often had more **individual visual identities**. Designers made deliberate choices around typography, spacing, photography, composition, navigation, brand colors, illustrations, and actual product presentation rather than reaching for the same popular UI patterns.

And importantly, some of his list is **deliberately provocative**: things like *em dashes*, *Inter*, *soft corner radius*, or *white backgrounds* aren't inherently signs of AI. He's pointing to the **overuse of recognizable design clichés**.

So the useful takeaway is:

**AI-looking:** “What are the currently popular SaaS design patterns? → combine them.”

**Human/intentional:** “What makes this particular company distinctive? → design around its brand, product, audience and story.”

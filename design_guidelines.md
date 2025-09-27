# PIMUN25 Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium conference websites and luxury brand experiences, with influences from diplomatic institutions and high-end event platforms. The design should feel like a prestigious international summit website.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary** (Main theme):
- Primary Background: `0 0% 7%` (Deep charcoal black)
- Card Backgrounds: `0 0% 11%` (Slightly lighter black)
- Text Primary: `0 0% 98%` (Off-white)
- Gold Accent: `45 65% 60%` (Rich matte gold)
- Gold Hover: `45 75% 70%` (Brighter gold for interactions)

**Supporting Colors**:
- Navy Accent: `220 30% 20%` (Deep diplomatic navy)
- Emerald Accent: `160 40% 25%` (Subtle green for highlights)
- Gray Text: `0 0% 65%` (Secondary text)

### B. Typography
**Font Families**:
- Display/Headings: Playfair Display (elegant serif)
- Body Text: Inter (modern, readable sans-serif)
- Accent Text: Cormorant Garamond (for special emphasis)

**Hierarchy**:
- Hero Title: 3.5rem (56px), Playfair Display, gold color
- Section Headings: 2.5rem (40px), Playfair Display, white
- Subheadings: 1.5rem (24px), Inter medium, white
- Body: 1rem (16px), Inter regular, gray text
- Captions: 0.875rem (14px), Inter, lighter gray

### C. Layout System
**Spacing Units**: Tailwind units of 4, 8, 12, 16, 24 (p-4, m-8, gap-12, etc.)
- Consistent use of these values for margins, padding, and gaps
- Section padding: py-24 (96px) for desktop, py-16 (64px) for mobile
- Container max-width: max-w-7xl with auto margins

### D. Component Library

**Navigation**:
- Fixed header with glassmorphism background
- Gold accent on active nav items
- Smooth scroll to sections

**Cards & Panels**:
- Glassmorphism effect with subtle backdrop blur
- Gold border highlights on hover
- Rounded corners (rounded-xl, 12px)
- Subtle shadow with gold glow on interaction

**Buttons**:
- Primary: Gold background with black text
- Secondary: Outline with gold border, white text
- Buttons on images: Blurred background (backdrop-blur-sm)
- Hover: Subtle scale and glow effects

**Forms**:
- Dark input backgrounds with gold focus rings
- Consistent with overall dark theme
- Gold accent on form validation states

### E. Animations
**Entrance Animations** (Framer Motion):
- Staggered reveals for hero elements
- Fade-up animations for sections on scroll
- Scale-in effects for cards and images

**Hover Effects**:
- Subtle lift (transform: translateY(-4px))
- Gold glow effects on interactive elements
- Smooth transitions (0.3s ease)

**Scroll Interactions**:
- Parallax backgrounds using GSAP
- Smooth scroll with Lenis
- Section reveal animations

## Marketing Page Visual Treatment

**Color Usage**: Bold gold accents against deep black create dramatic contrast and luxury appeal. Use gold strategically for CTAs, highlights, and interactive elements.

**Gradients**: Subtle gold-to-transparent gradients for hero overlays and card highlights. Background gradients from deep black to dark gray for section transitions.

**Background Treatments**: 
- Hero: Animated particle effects or subtle gradient overlays
- Sections: Alternating solid black and dark gray backgrounds
- Cards: Glassmorphism with dark backgrounds and gold accents

## Key Sections (Maximum 5)

1. **Hero Section**: Full-screen with 3D globe, countdown timer, and primary CTAs
2. **Highlights & Features**: Four key value propositions with glassmorphism cards
3. **Committees & Registration**: Combined section showing committees and registration flow
4. **Team & Gallery**: Secretariat preview with past conference imagery
5. **CTA Footer**: Final registration push with sponsor logos

## Images
- **Large Hero Image**: 3D animated globe or conference hall background
- **Committee Icons**: Custom diplomatic symbols for each committee
- **Team Photos**: Professional headshots in circular frames
- **Gallery Images**: High-quality conference photos from previous events
- **Sponsor Logos**: Grayscale with gold hover transitions

## Critical Constraints
- Maximum 5 sections total for focused user experience
- Single-viewport hero section with immediate value proposition
- All interactive elements maintain gold accent consistency
- Mobile-first responsive design with elegant desktop expansion
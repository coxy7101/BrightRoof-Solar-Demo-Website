# IMPLEMENTATION KICKSTART
## BrightRoof Solar Landing Page - Complete Build Plan

**Status:** Ready for Implementation  
**Created:** April 1, 2026  
**Stack:** Next.js 16, React 19, Tailwind CSS, Framer Motion  
**Design Tokens:** `lib/design-tokens.ts`

---

## 📋 PROJECT OVERVIEW

This is a **conversion-focused single-page landing page** for BrightRoof Solar, a UK-based residential solar installation company. All CTAs scroll to a bottom-of-page lead capture form. No navigation, no modal popups, no multi-page routing.

**Key metrics:**
- 1 primary CTA action (scroll to lead form)
- 3+ CTA placements across page (at least 7 total)
- Single-column mobile, multi-column desktop
- Framer Motion scroll animations
- ~30 testimonials + features in data.ts
- 100% SEO/accessibility compliant

---

## 🎨 DESIGN SYSTEM

### Color Palette (5 colors total)
| Token | Color | Usage |
|-------|-------|-------|
| Primary Navy | #0A1F44 | Headings, borders, text, footer |
| Accent Amber | #F59E0B | CTA buttons, highlights, accents |
| White | #FFFFFF | Backgrounds, cards |
| Light Gray | #F3F4F6 | Sections, subtle backgrounds |
| Dark Gray | #6B7280 | Body text, secondary copy |

### Badge Colors
| Type | Background | Text |
|------|-----------|------|
| Customer Service | #EFF6FF | #1D4ED8 |
| Fast/Clean/Hassle-free | #F0FDF4 | #15803D |

### Typography
- **Font Family:** Geist (weights: 400 regular, 600 semibold)
- **Headings:** H1 42px/600, H2 32px/600, H3 24px/600
- **Body:** 16px/400 or 18px/400
- **Line Height:** 1.6 (relaxed)

### Spacing Scale
- **xs:** 4px | **sm:** 8px | **md:** 12px | **lg:** 16px  
- **xl:** 24px | **2xl:** 32px | **3xl:** 48px | **4xl:** 64px

---

## 📁 FILE STRUCTURE & SETUP

### Environment Variables (.env.local)
```
NEXT_PUBLIC_PHONE=0800 123 4567
NEXT_PUBLIC_COMPANY_NAME=BrightRoof Solar
```

### Core Setup Files
- ✅ `lib/design-tokens.ts` - Design system constants (CREATED)
- `lib/utils.ts` - Tailwind cn() utility (pre-existing)
- `app/layout.tsx` - Update fonts, metadata, schema markup
- `app/globals.css` - Update CSS variables for design tokens
- `next.config.mjs` - Enable Framer Motion optimization

### Data Management
- `lib/data.ts` - All testimonials, features, pricing, FAQs, guarantees
- `lib/hooks/useScrollAnimation.ts` - Reusable Framer Motion hook

### Component Architecture
```
components/
├── layout/
│   ├── Header.tsx           (sticky navbar)
│   └── Footer.tsx           (footer section)
├── sections/
│   ├── Hero.tsx             (hero + CTA #1)
│   ├── WhyChoose.tsx        (features grid)
│   ├── Testimonials.tsx     (testimonial grid + social proof)
│   ├── SavingsEstimator.tsx (interactive calculator)
│   ├── Pricing.tsx          (3 pricing cards with CTA #3)
│   ├── Guarantees.tsx       (4 guarantee cards)
│   ├── FAQ.tsx              (accordion with CTA #6)
│   └── LeadCapture.tsx      (form + mobile sticky bar)
├── ui/
│   ├── PricingCard.tsx      (reusable pricing card)
│   ├── TestimonialCard.tsx  (reusable testimonial)
│   ├── FeatureCard.tsx      (reusable feature)
│   ├── GuaranteeCard.tsx    (reusable guarantee)
│   ├── FAQAccordion.tsx     (reusable accordion item)
│   ├── StickyMobileBar.tsx  (mobile fixed CTA)
│   ├── BrightRoofLogo.tsx   (SVG logo component)
│   ├── MCSBadge.tsx         (badge component)
│   ├── TrustedTraderBadge.tsx (badge component)
│   └── CTAButton.tsx        (primary CTA button - reusable)
└── forms/
    └── LeadForm.tsx         (form with validation + success message)

pages/
└── api/
    └── lead-capture.ts      (mock POST endpoint - no real backend)
```

---

## 🚀 BUILD SEQUENCE

### PHASE 1: Foundation Setup
1. **Update `app/layout.tsx`**
   - Import Geist font (weights 400, 600)
   - Add metadata (title, description, Open Graph tags)
   - Add LocalBusiness schema markup
   - Add viewport meta tags
   - Set font CSS variables for Geist

2. **Update `app/globals.css`**
   - Define CSS custom properties from design-tokens.ts
   - Tailwind semantic colors (--background, --foreground, etc.)
   - Custom scroll animation keyframes
   - Body text baseline (line-height: 1.6)

3. **Create `lib/data.ts`**
   - Export testimonials array (name, role, company, quote, rating)
   - Export features array (icon, title, description)
   - Export pricing tiers (name, price, system size, features, popular flag)
   - Export FAQ items (question, answer, open flag)
   - Export guarantees (title, description)

4. **Create `lib/hooks/useScrollAnimation.ts`**
   - Custom hook returning Framer Motion useInView + variants
   - Fade + translate 24px up on viewport entry
   - Card stagger with 100ms delay
   - Hero button pulse animation on load

5. **Create `.env.local`** with phone and company name

---

### PHASE 2: Component Development

#### 2a. Base UI Components (isolated, reusable)
- `CTAButton.tsx` - Primary amber button (280px desktop, full mobile, scroll to form)
- `PricingCard.tsx` - Pricing tier display (Most Popular styling)
- `TestimonialCard.tsx` - Quote + rating display
- `FeatureCard.tsx` - Feature grid item
- `GuaranteeCard.tsx` - Guarantee with left 3px amber border
- `FAQAccordion.tsx` - Single accordion item (exclusive behavior)
- `BrightRoofLogo.tsx` - SVG logo (company name + amber sun icon)
- `MCSBadge.tsx` - HTML/CSS badge component (no external image)
- `TrustedTraderBadge.tsx` - HTML/CSS badge component (no external image)

#### 2b. Layout Components
- `Header.tsx`
  - Sticky navbar: logo, phone number, amber CTA button
  - CTA button scrolls to lead form via ref
  - Logo displays sun icon in amber + "BrightRoof Solar" text

- `Footer.tsx`
  - Dark navy background (#0A1F44)
  - Company name, contact phone, social links
  - Copyright text
  - Trustpilot logo + "4.9★ from 847 reviews"
  - MCS + Which? badges

#### 2c. Section Components (all use useScrollAnimation)

- **`Hero.tsx`** - CTA #1
  - Large headline + subheading
  - Hero CTA button (280px desktop, full width mobile)
  - Subtle pulse animation on load
  - Light gray section background

- **`WhyChoose.tsx`** - Features section
  - "Why Choose BrightRoof?" heading
  - 4-6 feature cards with stagger animation
  - Responsive: 1 col mobile, 2 col tablet, 4 col desktop

- **`Testimonials.tsx`** - Social proof
  - Heading + "1,200+ homes powered" stat
  - Testimonial card grid with stagger
  - "4.9★ from 847 verified reviews" badge
  - Responsive: 1 col mobile, 2 col tablet, 3 col desktop

- **`SavingsEstimator.tsx`** - CTA #2
  - Monthly bill input (£50–£500)
  - Real-time calculations:
    - System size: linear 3kW–10kW
    - Annual saving: monthly bill × 8
    - Payback: 9y (under 5kW), 7y (5–7kW), 6y (8kW+)
  - Display results in clean boxes
  - CTA button below results → scroll to form

- **`Pricing.tsx`** - CTA #3 (3 buttons)
  - 3 pricing tier cards
  - Middle card: navy border (2px), "Most popular" pill, scaled 1.03
  - Each card has CTA button → scroll to form
  - Responsive: 1 col mobile/tablet, 3 col desktop

- **`Guarantees.tsx`** - Guarantee cards
  - 4 guarantee cards (25 year, 10 year warranty, MCS certified, etc.)
  - Left border: 3px solid amber, 20px left padding
  - No fixed height (expand naturally)
  - Responsive: 1 col mobile, 2 col tablet, 4 col desktop

- **`FAQ.tsx`** - CTA #6
  - Heading + Accordion items
  - Exclusive: only one open at a time
  - First item open by default
  - CTA button for reassurance ("Still have questions?") → scroll to form
  - useScrollAnimation() on section entry

- **`LeadCapture.tsx`** - BOTTOM OF PAGE
  - Form: name, phone, postcode, time preference
  - Submit button (amber CTA style)
  - Success message: "Thanks [firstName] — one of our advisors will call you within 2 hours."
  - 300ms loading state before showing confirmation
  - Inline message (no modal)
  - Includes StickyMobileBar

#### 2d. Specialized Components
- **`StickyMobileBar.tsx`**
  - Mobile-only (display: hidden on lg)
  - Fixed bottom, full width, white background
  - Phone icon + phone number + CTA button
  - Hide when LeadCapture enters viewport (IntersectionObserver)
  - On tap: scroll to lead form

- **`LeadForm.tsx`** (inside LeadCapture)
  - Input fields: first name, phone, postcode, time preference
  - Form state management (useState)
  - Submit handler: POST to /api/lead-capture
  - Validation: required fields, phone format, postcode format
  - Mock API returns success after 300ms

---

### PHASE 3: API & Mock Handlers

- **`pages/api/lead-capture.ts`**
  - POST endpoint (mock only)
  - Accept: { firstName, phone, postcode, timePreference }
  - Return: { success: true, message: "..." }
  - 300ms delay to simulate network

---

### PHASE 4: Page Integration

- **`app/page.tsx`**
  - Import all section components
  - Layout: `<Header> <Hero> <WhyChoose> <Testimonials> <SavingsEstimator> <Pricing> <Guarantees> <FAQ> <LeadCapture> <Footer> <StickyMobileBar>`
  - useRef for scroll-to-form functionality
  - Add structured data (LocalBusiness schema)

- **`app/layout.tsx`** (FINAL)
  - Fonts loaded (Geist 400, 600)
  - Metadata complete
  - Schema markup (LocalBusiness, LocalService)
  - Viewport tags

---

## 🎬 ANIMATION SPECIFICATIONS

### Custom Hook: `lib/hooks/useScrollAnimation.ts`
```typescript
export const useScrollAnimation = (delay = 0) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    }
  };

  return { ref, animate: isInView ? "visible" : "hidden", variants };
};
```

### Hero Button Pulse
```typescript
const pulseVariants = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(245, 158, 11, 0.7)",
      "0 0 0 10px rgba(245, 158, 11, 0)"
    ],
  }
};
```

### Card Stagger
Each card in grid uses: `useScrollAnimation((index * 0.1))` → 100ms delay

---

## ✅ RESPONSIVE BREAKPOINTS

| Breakpoint | Mobile | Tablet | Desktop |
|------------|--------|--------|---------|
| Max Width | <768px | 768–1024px | >1024px |
| Features Grid | 1 col | 2 col | 4 col |
| Testimonials | 1 col | 2 col | 3 col |
| Pricing Cards | 1 col | 1 col | 3 col |
| Guarantees | 1 col | 2 col | 4 col |
| CTA Button | 100% | 280px | 280px |

---

## 🎯 CTA PLACEMENT CHECKLIST (Minimum 3, Target 7+)

1. ✅ **CTA #1:** Hero section (large, 280px, pulse animation)
2. ✅ **CTA #2:** Below Savings Estimator results
3. ✅ **CTA #3a:** Pricing card 1
4. ✅ **CTA #3b:** Pricing card 2 (Most Popular)
5. ✅ **CTA #3c:** Pricing card 3
6. ✅ **CTA #4:** Header sticky navbar (always visible)
7. ✅ **CTA #5:** Mobile sticky bar at bottom (fixed, IntersectionObserver hide)
8. ✅ **CTA #6:** FAQ reassurance button ("Still have questions?")
9. ✅ **CTA #7:** Lead form submit button

**Total: 9 CTA placements, all scroll to lead form**

---

## 🔍 SEO & ACCESSIBILITY CHECKLIST

- [ ] Meta description (50–160 characters)
- [ ] Open Graph tags (title, description, image, url)
- [ ] LocalBusiness schema markup (JSON-LD)
- [ ] LocalService schema (for services offered)
- [ ] H1 (main heading only), H2/H3 hierarchy
- [ ] ARIA labels on all buttons, forms, interactive elements
- [ ] Alt text on all images (or decorative="true")
- [ ] Form accessibility: labels, error messages, success confirmation
- [ ] Color contrast: 4.5:1 (normal text), 3:1 (large text)
- [ ] Mobile viewport meta tag
- [ ] Keyboard navigation: Tab, Enter, Arrow keys for accordion
- [ ] Semantic HTML: `<header>`, `<main>`, `<footer>`, `<form>`, `<section>`

---

## 📊 FORM VALIDATION RULES

**Lead Capture Form:**
- First Name: required, min 2 chars
- Phone: required, UK format (11 digits, +44 or 0), auto-format
- Postcode: required, UK format (e.g. SW1A 1AA)
- Time Preference: required (select: morning, afternoon, evening, any)

**Success State:**
- Show inline: "Thanks [firstName] — one of our advisors will call you within 2 hours."
- Message after 300ms loading state
- Form resets after 2 seconds

---

## 🎨 TAILWIND & CSS VARIABLES

### CSS Custom Properties (in `app/globals.css`)
```css
:root {
  --primary: #0A1F44;
  --accent: #F59E0B;
  --accent-hover: #D97706;
  --accent-active: #B45309;
  
  --background: #FFFFFF;
  --foreground: #0A1F44;
  --foreground-muted: #6B7280;
  --border: #E5E7EB;
  
  --badge-blue-bg: #EFF6FF;
  --badge-blue-text: #1D4ED8;
  --badge-green-bg: #F0FDF4;
  --badge-green-text: #15803D;
  
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
}
```

---

## 🧪 TESTING CHECKLIST

### Functionality
- [ ] All 9 CTA buttons scroll smoothly to lead form
- [ ] Savings estimator calculations correct
- [ ] Accordion: one item open at a time
- [ ] Sticky mobile bar: hides on form entry
- [ ] Form validation: reject invalid data, show errors
- [ ] Form submission: loading state → success message
- [ ] Success message displays correct first name

### Responsiveness
- [ ] Mobile (375px): stacked layouts, full-width buttons
- [ ] Tablet (768px): 2-column grids
- [ ] Desktop (1024px+): multi-column grids

### Performance
- [ ] Fonts preloaded
- [ ] Animations smooth at 60fps
- [ ] No console errors

### SEO & Accessibility
- [ ] Lighthouse audit: >90 score
- [ ] WAVE accessibility: no errors
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] WCAG AA color contrast

---

## 📦 DEPENDENCIES

Already installed:
- next@16
- react@19
- tailwindcss
- framer-motion
- typescript

---

## 📝 KEY NOTES

1. **Single-Scroll:** No navigation links. Navbar: logo + phone + CTA only.
2. **Mock Form:** No backend. Form shows success message after 300ms delay.
3. **Design Tokens:** Reference `lib/design-tokens.ts` for all values.
4. **Animations:** Use `useScrollAnimation()` hook consistently.
5. **Data:** All content in `lib/data.ts`, not in components.
6. **Mobile-First:** Code mobile first, extend with Tailwind breakpoints.
7. **Phone Variable:** Use `NEXT_PUBLIC_PHONE` environment variable.
8. **SVG Logos:** Generate all logos/badges as components, no external images.

---

## 🎯 SUCCESS CRITERIA

- ✅ Page loads in <2s on 4G
- ✅ All 9 CTAs functional and scroll smoothly
- ✅ Form validates and shows success message
- ✅ Animations smooth without janking
- ✅ Responsive on mobile, tablet, desktop
- ✅ Accessibility audit passes (WAVE, Lighthouse)
- ✅ SEO metadata and schema complete
- ✅ No console errors or warnings

---

**Ready to implement!** Follow Phase 1 → Phase 2 → Phase 3 → Phase 4 in order.

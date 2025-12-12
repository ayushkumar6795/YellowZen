# YellowZen Style Guide

## Brand Identity

**YellowZen** represents the intersection of calm clarity and powerful data insights. Our design language reflects this through minimalism, generous spacing, and a warm, optimistic color palette.

---

## 🎨 Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Gradient Start | `#FFD54A` | Main brand color, CTAs, highlights |
| Primary Gradient End | `#FFF9E6` | Gradient backgrounds, subtle accents |
| Accent Yellow | `#FFE082` | Badges, hover states, highlights |

### Backgrounds

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Background | `#FFFDF6` | Main page background |
| Card Background | `#FFFFFF` | Cards, modals, content containers |
| Neutral Background | `#F3F4F6` | Alternate sections, hover states |

### Text Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Text | `#1F2937` | Headings, main content |
| Secondary Text | `#6B7280` | Body text, descriptions |
| Muted Text | `#9CA3AF` | Metadata, placeholders |

### Gradients

```css
/* Primary Gradient */
background: linear-gradient(135deg, #FFD54A 0%, #FFF9E6 100%);

/* Hover Gradient */
background: linear-gradient(135deg, #FFCA28 0%, #FFF6DC 100%);
```

---

## 📏 Typography

### Font Family

- **Primary**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Monospace**: 'Courier New', monospace

### Type Scale

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| Hero Title | 60px (3.75rem) | 700 | Landing page main heading |
| H1 | 48px (3rem) | 700 | Page titles |
| H2 | 36px (2.25rem) | 700 | Section headings |
| H3 | 30px (1.875rem) | 600 | Subsection headings |
| H4 | 24px (1.5rem) | 600 | Card titles |
| H5 | 20px (1.25rem) | 600 | Small headings |
| H6 | 18px (1.125rem) | 600 | Metadata labels |
| Body | 16px (1rem) | 400 | Main content |
| Small | 14px (0.875rem) | 400 | Captions, metadata |
| Tiny | 12px (0.75rem) | 500 | Badges, labels |

### Line Heights

- **Tight**: 1.25 (headings)
- **Normal**: 1.5 (body text)
- **Relaxed**: 1.75 (long-form content)

---

## 📐 Spacing System

```css
--space-xs:  4px   (0.25rem)
--space-sm:  8px   (0.5rem)
--space-md:  16px  (1rem)
--space-lg:  24px  (1.5rem)
--space-xl:  32px  (2rem)
--space-2xl: 48px  (3rem)
--space-3xl: 64px  (4rem)
--space-4xl: 96px  (6rem)
```

### Usage Guidelines

- **Card padding**: `--space-xl` (32px)
- **Section padding**: `--space-4xl` top/bottom (96px)
- **Grid gaps**: `--space-xl` (32px)
- **Component gaps**: `--space-md` to `--space-lg` (16-24px)

---

## 🔘 Components

### Buttons

#### Primary Button
```html
<button class="btn btn-primary">Explore Projects</button>
```
- **Style**: Yellow gradient background
- **Hover**: Slightly darker gradient, 2px lift
- **Usage**: Main CTAs, important actions

#### Secondary Button
```html
<button class="btn btn-secondary">Learn More</button>
```
- **Style**: Transparent with yellow border
- **Hover**: Light yellow background
- **Usage**: Secondary actions, alternative options

#### Ghost Button
```html
<button class="btn btn-ghost">Cancel</button>
```
- **Style**: Minimal, no border
- **Hover**: Light gray background
- **Usage**: Tertiary actions, less emphasis

### Cards

```html
<div class="card">
  <img src="..." class="card-image">
  <div class="card-title">Title</div>
  <div class="card-description">Description...</div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

- **Border radius**: 16px (`--radius-xl`)
- **Shadow**: Medium shadow on default, lifted shadow on hover
- **Hover**: 4px lift (translateY)
- **Transition**: 250ms ease

### Badges

```html
<span class="badge">Python</span>
```

- **Background**: Light yellow (`#FFF9E6`)
- **Border**: 1px solid accent (`#FFE082`)
- **Border radius**: 9999px (pill shape)
- **Padding**: 2px 12px
- **Font size**: 12px

### Modal

```html
<div class="modal-backdrop active">
  <div class="modal">
    <div class="modal-header">
      <h3 class="modal-title">Title</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      Content...
    </div>
  </div>
</div>
```

- **Backdrop**: Semi-transparent black with blur
- **Modal**: White background, rounded corners, shadow
- **Animation**: Scale from 0.9 to 1.0

---

## 🎭 Animations

### Hover Effects

```css
/* Card Lift */
transform: translateY(-4px);
box-shadow: var(--shadow-xl);

/* Button Lift */
transform: translateY(-2px);
box-shadow: var(--shadow-lg);
```

### Transitions

- **Fast**: 150ms (hover states, small changes)
- **Base**: 250ms (most transitions)
- **Slow**: 350ms (complex animations)

### Easing

```css
cubic-bezier(0.4, 0, 0.2, 1)
```

### Micro-animations

- **Hero illustration**: Floating animation (6s infinite)
- **Cards**: Hover lift
- **Buttons**: Hover lift + shadow
- **Mobile menu**: Slide down with fade

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (max-width: 1024px) { }

/* Large Desktop */
@media (max-width: 1280px) { }
```

### Mobile-First Approach

- Design for mobile screens first
- Progressively enhance for larger screens
- Test at 375px, 768px, 1024px, and 1440px

---

## ♿ Accessibility

### Focus States

```css
:focus-visible {
  outline: 3px solid #FFD54A;
  outline-offset: 2px;
  border-radius: 6px;
}
```

### Color Contrast

All text meets WCAG AA standards:
- Body text on white: 7:1 (AAA)
- Secondary text on white: 4.8:1 (AA)
- Primary text on light yellow: 8.5:1 (AAA)

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Logical tab order
- Skip links for main content
- Modal focus trap

---

## 🖼️ Images & Icons

### Image Guidelines

- **Format**: PNG for illustrations, JPG for photos
- **Optimization**: Compress before uploading
- **Alt text**: Always include descriptive alt text
- **Aspect ratio**: 16:9 for hero images, 4:3 for cards

### Icon System

- **Style**: Line icons, 2px stroke
- **Size**: 20px default, 24px for emphasis
- **Color**: Inherit from parent or use text colors

---

## 📝 Voice & Tone

- **Professional** but approachable
- **Technical** but clear
- **Calm** and confident
- **Data-driven** with human insights

---

## 🎯 Usage Examples

### Hero Section
- Large title (60px)
- Subtitle (20px, secondary color)
- Two CTAs (primary + secondary buttons)
- Illustration or zen-wave background
- Generous vertical padding (96px+)

### Project Card
- Image (200px height, cover)
- Title (20px, semibold)
- 2-3 line description
- 3-4 tech badges
- CTA button

### Article Layout
- Max-width 800px for content
- Relaxed line-height (1.75)
- Code blocks with syntax highlighting
- Generous margins between sections

---

**Last Updated**: January 2025  
**Version**: 1.0

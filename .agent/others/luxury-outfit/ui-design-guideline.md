## 1. UI Style and Philosophy

### Design Style

Modern Modest Elegance

### Design Philosophy

This design embraces **graceful confidence**—the balance between sophistication and approachability. It honors Bangladeshi cultural values while empowering women with modern solutions. The design feels **warm, trustworthy, and dignified**.

#### Visual DNA

- **Core Signature**: Soft rounded corners (`rounded-2xl` to `rounded-3xl`) that feel welcoming and feminine without being overly playful
- **Color Psychology**: Rose pink evokes femininity and warmth, slate gray provides stability and trust, amber adds a premium touch
- **Shadow Philosophy**: Subtle, elegant shadows with rose tints create gentle depth without harsh contrast
- **Typography Emotion**: Bengali-optimized fonts with excellent Unicode support ensure comfort and readability for Bangla content

#### Design Principles

- **Vibe**: Empathetic, confident, trustworthy, elegant, culturally respectful, supportive
- **Core Tenet**: "Dignity in every detail." Every element should make customers feel respected and understood, never judged
- **Rhythm**: Balanced whitespace creates breathing room while maintaining visual interest through subtle color variations
- **Interaction**: Smooth, reassuring transitions—elements respond gently to show the site is listening
- **Cultural Sensitivity**: Modest imagery, respectful language tone, privacy-conscious design
- **Trust Building**: Clear information hierarchy, transparent product details, secure-feeling form designs

---

## 2. UI Design Tokens

### Colors

**Primary Palette:**

- **Text Color (Foreground)**: `text-slate-900` - #0f172a
- **Background Color**: `bg-rose-50` - #fff1f2
- **Primary Color**: `bg-rose-500` - #f43f5e
- **Secondary Color**: `bg-slate-700` - #334155
- **Accent Color**: `bg-amber-600` - #d97706

**Extended Palette:**

- **Neutral Shades**:
  - Light backgrounds: `bg-white`, `bg-rose-100` (#ffe4e6)
  - Muted text: `text-slate-600` (#475569), `text-slate-500` (#64748b)
  - Borders: `border-rose-200` (#fecdd3), `border-slate-200` (#e2e8f0)
- **Interactive States**:
  - Hover primary: `bg-rose-600` (#e11d48)
  - Hover secondary: `bg-slate-800` (#1e293b)
  - Hover accent: `bg-amber-700` (#b45309)
- **Semantic Colors**:
  - Success: `bg-emerald-500` (#10b981)
  - Warning: `bg-amber-500` (#f59e0b)
  - Info: `bg-blue-500` (#3b82f6)

### Typography

**Font Families** (Bengali-optimized):

- **Headings**: **'Noto Serif Bengali'** or **'Hind Siliguri'** (Google Fonts) - Excellent Bangla support with elegant serifs. Use weights 600-700 for headings
- **Body Text**: **'Noto Sans Bengali'** or **'Mukta'** - Clean, highly readable sans-serif with complete Bangla Unicode coverage. Use weights 400-500
- **Alternative**: System fonts with Bangla fallback: `font-family: 'Noto Sans Bengali', 'Hind Siliguri', system-ui, -apple-system, sans-serif`

**Type Scale**: (1.25 ratio)

- **Hero**: `text-4xl md:text-5xl lg:text-6xl` (36-60px)
- **H1**: `text-3xl md:text-4xl` (30-36px)
- **H2**: `text-2xl md:text-3xl` (24-30px)
- **H3**: `text-xl md:text-2xl` (20-24px)
- **Body**: `text-base md:text-lg` (16-18px)
- **Small**: `text-sm` (14px)
- **Tiny**: `text-xs` (12px)

**Line Heights**: `leading-relaxed` (1.625) for body text for Bangla readability

### Radius & Shapes

- **Extra Small**: `rounded-lg` (8px) - badges, tags
- **Small**: `rounded-xl` (12px) - small buttons, inputs
- **Standard**: `rounded-2xl` (16px) - cards, containers
- **Large**: `rounded-3xl` (24px) - hero sections, feature cards
- **Full**: `rounded-full` - pill buttons, avatars, icons

### Shadows & Effects

- **Soft Shadow** (subtle): `shadow-sm` - `0 1px 2px 0 rgba(244, 63, 94, 0.05)`
- **Card Shadow**: `shadow-md` - `0 4px 6px -1px rgba(244, 63, 94, 0.1), 0 2px 4px -2px rgba(244, 63, 94, 0.1)`
- **Lifted Shadow**: `shadow-lg` - `0 10px 15px -3px rgba(244, 63, 94, 0.15), 0 4px 6px -4px rgba(244, 63, 94, 0.1)`
- **Floating Shadow**: `shadow-xl` - `0 20px 25px -5px rgba(244, 63, 94, 0.15), 0 8px 10px -6px rgba(244, 63, 94, 0.1)`
- **Inner Glow**: `shadow-inner` - for pressed states

---

## 3. UI Components Styling

### Buttons

**Primary Button:**

```
bg-rose-500 text-white rounded-xl px-6 py-3
hover:bg-rose-600 hover:shadow-lg
active:scale-95
transition-all duration-300
font-medium
```

**Secondary Button:**

```
bg-slate-700 text-white rounded-xl px-6 py-3
hover:bg-slate-800 hover:shadow-lg
active:scale-95
transition-all duration-300
font-medium
```

**Outline Button:**

```
border-2 border-rose-500 text-rose-500 bg-transparent rounded-xl px-6 py-3
hover:bg-rose-50 hover:border-rose-600
active:scale-95
transition-all duration-300
font-medium
```

**Accent Button:**

```
bg-amber-600 text-white rounded-xl px-6 py-3
hover:bg-amber-700 hover:shadow-lg
active:scale-95
transition-all duration-300
font-medium
```

**Sizes**: Small (h-10 px-4 text-sm), Default (h-12 px-6), Large (h-14 px-8 text-lg)

### Cards / Containers

**Product Card:**

```
bg-white rounded-2xl border border-rose-100
shadow-md hover:shadow-xl
p-6
transition-all duration-300
hover:-translate-y-1
```

**Feature Card:**

```
bg-white rounded-3xl
p-8
border border-rose-100
shadow-sm hover:shadow-lg
transition-all duration-300
```

**Testimonial Card:**

```
bg-gradient-to-br from-white to-rose-50
rounded-2xl p-6
border border-rose-100
shadow-md
```

### Inputs & Forms

**Text Input:**

```
w-full px-4 py-3 rounded-xl
border border-rose-200
bg-white
focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none
transition-all duration-300
text-slate-900
placeholder:text-slate-400
```

**Select Dropdown:**

```
w-full px-4 py-3 rounded-xl
border border-rose-200
bg-white
appearance-none
focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20
```

**Checkbox/Radio:**

```
w-5 h-5 rounded border-rose-300
text-rose-500 focus:ring-rose-500 focus:ring-2
```

**Label:**

```
text-sm font-medium text-slate-700 mb-2
```

### Navigation

**Desktop Header:**

```
sticky top-0 z-50
bg-white/95 backdrop-blur-md
border-b border-rose-100
shadow-sm
```

**Mobile Menu:**

```
fixed inset-0 z-50 bg-white
transform transition-transform duration-300
[open: translate-x-0, closed: translate-x-full]
```

**Nav Links:**

```
text-slate-700 hover:text-rose-500
font-medium transition-colors duration-200
px-4 py-2
```

---

## 4. UI Layout and Spacing

### Container Widths

- **Full Width Sections**: `max-w-7xl mx-auto` (hero, product grids)
- **Content Sections**: `max-w-6xl mx-auto` (features, benefits)
- **Text-Heavy Content**: `max-w-4xl mx-auto` (about, blog posts)
- **Forms**: `max-w-2xl mx-auto` (contact, checkout)

### Section Padding

- **Vertical**: `py-16 md:py-24 lg:py-32`
- **Horizontal**: `px-4 sm:px-6 lg:px-8`

### Grid Patterns

- **Product Grid**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8`
- **Feature Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Two Column**: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16`
- **Stats**: `grid grid-cols-2 md:grid-cols-4 gap-8`

### Spacing Scale

- **Tight**: `gap-4` (16px)
- **Standard**: `gap-6` (24px)
- **Comfortable**: `gap-8` (32px)
- **Spacious**: `gap-12` (48px)
- **Extra Spacious**: `gap-16` (64px)

### Whitespace Philosophy

Use generous spacing to create a premium, uncrowded feel. Space = Elegance.

---

## 5. UI Non-Genericness

### Signature Elements

**Gradient Overlays:**

```
bg-gradient-to-br from-rose-500/10 via-transparent to-amber-600/10
```

**Decorative Blobs:**
Large abstract shapes in background with `opacity-20` and `blur-3xl` for ambient depth:

```
absolute -top-40 -right-40 w-80 h-80
bg-rose-300 rounded-full blur-3xl opacity-20
```

**Image Treatments:**

- Product images with subtle border: `border-4 border-white shadow-lg rounded-2xl`
- Hover zoom effect: `overflow-hidden` parent with `hover:scale-110 transition-transform duration-700` on image

**Custom Shape Variations:**

- Asymmetric rounded corners on alternating cards
- Diagonal section dividers using SVG or `clip-path`

**Category Cards:**

```
relative overflow-hidden rounded-3xl
gradient overlay on hover
text slides up from bottom
```

**Trust Badges:**
Circular icons with soft backgrounds:

```
w-16 h-16 rounded-full bg-rose-100
flex items-center justify-center
group-hover:bg-rose-500 group-hover:text-white
```

**Section Backgrounds:**
Alternate between `bg-rose-50`, `bg-white`, `bg-gradient-to-b from-white to-rose-50/30`

---

## 6. UI Effects and Animation

### Transition Philosophy

Smooth, dignified motion that feels responsive but never jarring.

### Hover Animations

**Buttons:**

```
hover:scale-105 hover:shadow-lg
transition-all duration-300 ease-out
active:scale-95
```

**Cards:**

```
hover:-translate-y-2 hover:shadow-xl
transition-all duration-300
```

**Images:**

```
hover:scale-110
transition-transform duration-500 ease-out
```

**Links:**

```
hover:text-rose-500
transition-colors duration-200
```

**Icons:**

```
group-hover:rotate-12 group-hover:scale-110
transition-all duration-300
```

### Loading States

- Skeleton loaders with `animate-pulse` in rose-100
- Spinner: rotating rose-500 circle

### Scroll Animations

- Fade-in on scroll for cards: `opacity-0 → opacity-100` with intersection observer
- Stagger delays for grid items (100ms increments)

### Page Transitions

Smooth fade with 200ms duration between page loads

---

## 7. UI Icons and Imagery

### Icon System

- **Style**: 2px stroke width (default)
- **Color**: `text-rose-500` (primary), `text-slate-700` (secondary), `text-amber-600` (accent)
- **Sizing**:
  - Small: 20px
  - Default: 24px
  - Large: 28px
  - Hero: 32px

### Icon Containers

```
w-12 h-12 rounded-xl bg-rose-100
flex items-center justify-center
text-rose-500
group-hover:bg-rose-500 group-hover:text-white
transition-all duration-300
```

### Imagery Guidelines

- **Product Photos**: Clean white/light rose background, consistent lighting
- **Lifestyle Images**: Modest, culturally appropriate, showing confidence and comfort
- **Aspect Ratios**:
  - Product cards: 3:4 (portrait)
  - Hero banners: 16:9 or 21:9
  - Category cards: 4:3
- **Image Optimization**: WebP format, lazy loading, blur placeholders

---

## 8. UI Accessibility

### Color Contrast

- **Text on bg-rose-50**:
  - slate-900 (#0f172a): ~15:1 (AAA ✓)
  - slate-700 (#334155): ~9:1 (AAA ✓)
  - slate-600 (#475569): ~7:1 (AA ✓)
- **White text on rose-500**: 4.5:1 (AA ✓)
- **White text on slate-700**: 12:1 (AAA ✓)

### Focus States

```
focus-visible:outline-none
focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2
```

### Touch Targets

- Minimum 44x44px for all interactive elements
- Buttons: h-12 (48px) default
- Mobile nav items: min-h-12

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- `<nav>`, `<main>`, `<footer>` landmarks
- `<button>` for actions, `<a>` for navigation
- Alt text for all images
- Aria labels for icon-only buttons

### Keyboard Navigation

- Tab order follows visual flow
- Skip to main content link
- Escape closes modals/menus
- Arrow keys for carousels

### Screen Reader Support

- Hidden labels for icon buttons: `sr-only` class
- Live regions for dynamic content
- Form error announcements

---

## 9. UI Responsiveness

### Mobile-First Approach

Start with mobile styles, enhance for larger screens

### Breakpoint Strategy

- **Base (< 640px)**: Single column, stacked layouts, touch-optimized
- **sm (640px)**: 2-column grids begin
- **md (768px)**: Desktop nav appears, 3-column grids, horizontal forms
- **lg (1024px)**: 4-column product grids, side-by-side content
- **xl (1280px)**: Maximum container width reached

### Typography Scaling

```
Hero: text-3xl sm:text-4xl md:text-5xl lg:text-6xl
H1: text-2xl sm:text-3xl md:text-4xl
H2: text-xl sm:text-2xl md:text-3xl
Body: text-base md:text-lg
```

### Layout Adaptations

- **Navigation**: Hamburger menu → horizontal nav at md
- **Product Grid**: 1 col → 2 cols (sm) → 3 cols (lg) → 4 cols (xl)
- **Hero**: Stacked → side-by-side at lg
- **Footer**: Stacked sections → 4-column grid at md

### Mobile Optimizations

- Bottom sticky cart button on mobile
- Swipeable product galleries
- Collapsible filter panels
- Sticky header with minimal height
- Touch-friendly spacing (min 12px between tap targets)

### Image Responsiveness

- Responsive images: `w-full h-auto`
- Different image sources for mobile/desktop
- Lazy loading with loading="lazy"

### Performance

- Hide decorative blobs on mobile
- Reduce animation complexity on smaller screens
- Optimize font loading for Bangla characters

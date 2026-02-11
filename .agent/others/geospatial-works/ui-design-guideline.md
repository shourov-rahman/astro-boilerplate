
## 1. UI Style and Philosophy

### Design Style
Technical Precision / Data-Driven Professional

### Design Philosophy
This design embodies **accuracy, clarity, and technical authority**. It mirrors the precision required in geospatial work—clean, methodical, and trustworthy. The interface feels like a **reliable instrument**: structured yet approachable, modern without being flashy.

#### Visual DNA
* **Core Signature**: Clean geometric layouts with subtle depth through layered surfaces and strategic use of shadow
* **Data-First Aesthetic**: Grid systems, map-inspired elements, and coordinate-like precision in spacing
* **Color Psychology**: Cool blues convey professionalism and trust; slate tones suggest technical sophistication; amber accents highlight critical data points
* **Shadow Philosophy**: Subtle elevation shadows create hierarchy without distraction—mimicking topographic layers
* **Typography Emotion**: Clear, authoritative sans-serif for maximum legibility in technical contexts

#### Design Principles
* **Vibe**: Professional, precise, trustworthy, modern, solution-oriented, technically competent
* **Core Tenet**: "Precision in every pixel." Every element serves a functional purpose—no decoration for decoration's sake
* **Rhythm**: Structured spacing based on 8px grid system creates predictable, scannable layouts
* **Interaction**: Confident, purposeful transitions—elements respond with clarity, never ambiguity
* **Hierarchy**: Clear visual weight distribution guides users through complex technical information
* **Depth**: Layered card system mimics surveying depth—background, midground, foreground create spatial understanding

---

## 2. UI Design Tokens

### Colors - Light Theme
* **Background**: `slate-50` (#f8fafc) - Clean, neutral foundation
* **Text**: `slate-900` (#0f172a) - Maximum legibility
* **Primary**: `blue-600` (#1e40af) - Trust and authority
* **Secondary**: `slate-600` (#475569) - Supporting information
* **Accent**: `amber-500` (#f59e0b) - Attention and highlights
* **Surface**: `white` - Elevated content containers
* **Border**: `slate-200` (#e2e8f0) - Subtle separation

### Colors - Dark Theme
* **Background**: `slate-900` (#0f172a) - Deep, professional foundation
* **Text**: `slate-50` (#f8fafc) - Maximum legibility on dark
* **Text Secondary**: `slate-300` (#cbd5e1) - Supporting text
* **Primary**: `blue-500` (#3b82f6) - Slightly brighter for contrast
* **Secondary**: `slate-400` (#94a3b8) - Supporting information
* **Accent**: `amber-400` (#fbbf24) - Slightly brighter highlights
* **Surface**: `slate-800` (#1e293b) - Elevated content containers
* **Surface Hover**: `slate-750` (#273548) - Interactive surface state
* **Border**: `slate-700` (#334155) - Subtle separation


### Typography
Professional, highly legible sans-serif pairing
* **Headings**: **'Inter'** (Google Font) - Modern, technical, excellent at all sizes. Weights 600-800
* **Body**: **'Inter'** - Unified system for consistency. Weights 400-500
* **Scale**: 1.25 ratio for clear hierarchy
* **Sizes**: Base 16px, headings from 24px to 56px

### Radius & Shapes
* **Standard Radius**: `rounded-lg` (8px) for cards and containers
* **Button Radius**: `rounded-md` (6px) for interactive elements
* **Input Radius**: `rounded-md` (6px) for form consistency
* **Large Elements**: `rounded-xl` (12px) for hero sections or feature cards
* **Borders**: Clean 1px borders, 2px for focus states

### Shadows & Effects

#### Light Theme Shadows
* **Elevation System**: Three levels mimicking topographic layers
  * `shadow-sm`: `0 1px 2px 0 rgb(0 0 0 / 0.05)` - Subtle lift
  * `shadow-md`: `0 4px 6px -1px rgb(0 0 0 / 0.1)` - Standard elevation
  * `shadow-lg`: `0 10px 15px -3px rgb(0 0 0 / 0.1)` - Prominent cards

#### Dark Theme Shadows
* **Elevation System**: Enhanced with glow for depth perception
  * `dark:shadow-sm`: `0 1px 2px 0 rgb(0 0 0 / 0.3)` - Subtle lift
  * `dark:shadow-md`: `0 4px 6px -1px rgb(0 0 0 / 0.4)` - Standard elevation
  * `dark:shadow-lg`: `0 10px 15px -3px rgb(0 0 0 / 0.5)` - Prominent cards
  * `dark:shadow-blue`: `0 0 0 1px rgb(59 130 246 / 0.1)` - Subtle blue glow for elevated cards

#### Focus Ring
* **Light**: `ring-2 ring-blue-600 ring-offset-2` - Clear, accessible
* **Dark**: `dark:ring-blue-500 dark:ring-offset-slate-900` - Adjusted for dark background

---

## 3. UI Components Styling

### Buttons

#### Primary Button
* **Light**: `bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md`
* **Dark**: `dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 dark:shadow-md dark:hover:shadow-lg`

#### Secondary Button
* **Light**: `bg-slate-100 text-slate-900 border border-slate-300 hover:bg-slate-200`
* **Dark**: `dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-600`

#### Outline Button
* **Light**: `border-2 border-blue-600 text-blue-600 hover:bg-blue-50`
* **Dark**: `dark:border-blue-500 dark:text-blue-400 dark:hover:bg-slate-800`

#### Universal Properties
* **Interaction**: `transition-all duration-200` with `active:scale-98` for tactile feedback
* **Sizes**: sm h-9 px-4, default h-11 px-6, lg h-13 px-8
* **Typography**: Font weight 600, text-sm to text-base
* **Shape**: `rounded-md` with consistent proportions

### Cards / Containers

#### Light Theme
* **Background**: `bg-white` on slate-50 page background
* **Border**: `border border-slate-200` for definition
* **Shadows**: `shadow-md` at rest, `hover:shadow-lg` on interactive cards

#### Dark Theme
* **Background**: `dark:bg-slate-800` on slate-900 page background
* **Border**: `dark:border-slate-700` for definition
* **Shadows**: `dark:shadow-lg dark:shadow-blue` at rest, `dark:hover:shadow-xl` on interactive cards
* **Glow Effect**: Add `dark:ring-1 dark:ring-slate-700` for subtle elevation

#### Universal Properties
* **Shape**: `rounded-lg` or `rounded-xl` for feature cards
* **Padding**: Consistent `p-6` or `p-8` for breathing room
* **Interaction**: `hover:-translate-y-0.5 transition-all duration-200`

### Inputs

#### Light Theme
* **Background**: `bg-white`
* **Border**: `border border-slate-300 focus:border-blue-600`
* **Text**: `text-slate-900 placeholder:text-slate-400`

#### Dark Theme
* **Background**: `dark:bg-slate-800`
* **Border**: `dark:border-slate-600 dark:focus:border-blue-500`
* **Text**: `dark:text-slate-100 dark:placeholder:text-slate-500`

#### Universal Properties
* **Shape**: `rounded-md` for form consistency
* **Focus State**: `focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900`
* **Typography**: Inter, text-base
* **Height**: h-11 for comfortable interaction

### Navigation

#### Light Theme
* **Background**: `bg-white/95 backdrop-blur-sm border-b border-slate-200`
* **Links**: `text-slate-700 hover:text-blue-600`

#### Dark Theme
* **Background**: `dark:bg-slate-900/95 dark:backdrop-blur-sm dark:border-b dark:border-slate-800`
* **Links**: `dark:text-slate-300 dark:hover:text-blue-400`

#### Universal Properties
* **Style**: Sticky header with `sticky top-0 z-50`
* **Logo Area**: Blue-600/blue-500 background container or direct logo display
* **Transition**: `transition-colors duration-200`
* **Mobile**: Hamburger menu with slide drawer, clean icon-based toggle

---

## 4. UI Layout and Spacing

### Container Widths
* **Hero/Primary**: `max-w-7xl` (1280px)
* **Content Sections**: `max-w-6xl` (1152px)
* **Text Content**: `max-w-4xl` (896px) for optimal readability
* **Narrow Focus**: `max-w-2xl` (672px) for forms or CTAs

### Section Padding
* **Vertical**: `py-16 md:py-24 lg:py-32` - Generous breathing room
* **Horizontal**: `px-4 sm:px-6 lg:px-8` - Responsive edge spacing

### Grid Patterns
* **Service Cards**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
* **Features**: `md:grid-cols-2 lg:grid-cols-3`
* **Two-Column**: `lg:grid-cols-2` for content-image splits
* **Gaps**: Consistent `gap-6 md:gap-8` for clean separation

### Spacing System
* Based on 8px grid: 4px, 8px, 16px, 24px, 32px, 48px, 64px
* Consistent margins and padding maintain rhythm

---

## 5. UI Non-Genericness

### Light Theme Treatments
* **Data Visualization Accents**: Subtle grid overlays or coordinate markers in hero/feature backgrounds
* **Service Icons**: Custom icon treatments with amber-500 accent borders or backgrounds
* **Geometric Patterns**: Subtle topographic line patterns or map-inspired textures in section backgrounds
* **Stat Counters**: Animated numbers with amber accent highlights
* **Process Timeline**: Horizontal connected flow with numbered steps in blue-600 circles
* **Map Integration**: Actual or stylized map sections showing Bangladesh coverage areas
* **Technical Badges**: Small precision indicators ("±5mm accuracy") in accent color
* **Photo Treatments**: Field survey images with blue-600 border accent or corner clips
* **Case Study Cards**: Before/after comparison sliders or layered project imagery

### Dark Theme Treatments
* **Data Visualization Accents**: Grid overlays with `dark:bg-slate-800/50` and `dark:border-slate-700`
* **Service Icons**: Icons with `dark:bg-slate-700 dark:border-amber-400` treatments
* **Geometric Patterns**: Patterns with reduced opacity `dark:opacity-20` for subtlety
* **Stat Counters**: Amber-400 highlights with subtle glow effect
* **Process Timeline**: Blue-500 circles with `dark:ring-2 dark:ring-blue-500/30`
* **Map Integration**: Maps with darker base layers and blue-400 highlights
* **Technical Badges**: Amber-400 accent with `dark:bg-slate-800` background
* **Photo Treatments**: Images with blue-500 accents and subtle overlay `dark:bg-gradient-to-t dark:from-slate-900/80`
* **Case Study Cards**: Enhanced with `dark:shadow-blue` for depth

---

## 6. UI Effects and Animation

### Transition Philosophy
Precise, purposeful motion reflecting technical accuracy

### Hover Animations

#### Light Theme
* **Buttons**: `hover:shadow-md hover:bg-blue-700` with `transition-all duration-200`
* **Cards**: `hover:-translate-y-1 hover:shadow-lg` with `transition-all duration-200`
* **Service Icons**: `group-hover:text-blue-600 group-hover:bg-blue-50` on containers
* **Links**: `hover:text-blue-600` with `transition-colors duration-150`

#### Dark Theme
* **Buttons**: `dark:hover:shadow-lg dark:hover:bg-blue-600`
* **Cards**: `dark:hover:shadow-xl dark:hover:shadow-blue`
* **Service Icons**: `dark:group-hover:text-blue-400 dark:group-hover:bg-slate-700`
* **Links**: `dark:hover:text-blue-400`

#### Universal
* **Images**: `hover:scale-102` with `transition-transform duration-300`
* **Active States**: `active:scale-98` for tactile press

### Focus States
* **Light**: Clear ring indicators `focus-visible:ring-2 ring-blue-600 ring-offset-2`
* **Dark**: `dark:focus-visible:ring-blue-500 dark:ring-offset-slate-900`

### Scroll Behavior
* Smooth scroll on anchor links
* Sticky navigation with subtle shadow on scroll
* **Dark**: Enhanced with `dark:shadow-slate-950/50`

---

## 7. UI Icons & Imagery

### Icons 

#### Light Theme
* **Color**: `text-blue-600` for primary actions, `text-slate-600` for secondary
* **Containers**: Icons in `h-12 w-12 rounded-lg bg-blue-50` with centered flex
* **Hover Effect**: Container `group-hover:bg-blue-600` with icon `group-hover:text-white`

#### Dark Theme
* **Color**: `dark:text-blue-400` for primary actions, `dark:text-slate-400` for secondary
* **Containers**: `dark:bg-slate-700` with centered flex
* **Hover Effect**: Container `dark:group-hover:bg-blue-500` with icon `dark:group-hover:text-white`

#### Universal Properties
* **Style**: Stroke width 2px for clarity
* **Sizing**: 24px standard, 20px for UI elements
* **Usage**: Navigation, service indicators, feature highlights, form elements

### Imagery

#### Light Theme
* **Survey Photos**: High-quality field images with subtle blue overlay on hover
* **Equipment Shots**: Professional photography of surveying instruments
* **Project Results**: Maps, topographic data visualizations, 3D terrain models
* **Treatment**: Consistent border or corner accent in brand colors

#### Dark Theme
* **Overlay**: Darker overlays `dark:bg-slate-900/40` for image hover states
* **Borders**: `dark:border-blue-500` or `dark:border-slate-700` treatments
* **Brightness**: Slightly reduced opacity `dark:opacity-90` for ambient images
* **Accents**: Blue-500 and amber-400 for highlights

---

## 8. UI Accessibility

### Contrast Ratios

#### Light Theme
* **Primary text** (slate-900) on background (slate-50): 16.8:1 (AAA)
* **Blue-600** on white: 8.6:1 (AAA)
* **Slate-600** on white: 7.5:1 (AAA)
* **Amber-500** used only for accents, never primary text

#### Dark Theme
* **Primary text** (slate-50) on background (slate-900): 16.8:1 (AAA)
* **Blue-500** on slate-900: 9.2:1 (AAA)
* **Slate-300** on slate-900: 10.1:1 (AAA)
* **Amber-400** used only for accents, never primary text

### Focus States
* **Light**: `focus-visible:ring-2 ring-blue-600 ring-offset-2` on all interactive elements
* **Dark**: `dark:focus-visible:ring-blue-500 dark:ring-offset-slate-900`
* Clear keyboard navigation paths in both themes

### Touch Targets
* Minimum 44px height/width (buttons h-11 = 44px)
* Adequate spacing between interactive elements

### Semantic HTML
* Proper heading hierarchy (h1→h6)
* Semantic nav, main, section, article tags
* Alt text for all images
* ARIA labels where needed

### Theme Toggle
* Accessible button with clear labeling
* ARIA label: "Toggle dark mode" / "Toggle light mode"
* Keyboard accessible (Enter/Space)
* Persists user preference in localStorage

---

## 9. UI Responsiveness

### Mobile-First Approach
Base styles optimized for mobile, enhanced progressively

### Breakpoint Strategy
* **sm (640px)**: Improved spacing, some two-column layouts
* **md (768px)**: Service grids 2-column, nav expands, larger typography
* **lg (1024px)**: Full desktop layout, 3-4 column grids, side-by-side content

### Typography Scaling
* **Hero**: `text-4xl md:text-5xl lg:text-6xl`
* **Sections**: `text-3xl md:text-4xl`
* **Body**: `text-base md:text-lg`

### Navigation
* **Mobile**: Hamburger with full-screen or drawer menu
* **Desktop**: Horizontal inline navigation
* **Dark Theme**: Menu uses `dark:bg-slate-800` with `dark:border-slate-700`

### Grid Collapse
All multi-column grids stack to single column on mobile for readability


### Best Practices
1. **Always pair theme classes**: Every color-related class should have a `dark:` variant
2. **Test contrast**: Verify WCAG AAA compliance in both themes
3. **Smooth transitions**: Use `transition-colors duration-200` for theme switches
4. **System preference**: Respect user's OS-level dark mode preference by default
5. **Persistence**: Store theme preference in localStorage
6. **Consistency**: Maintain the same visual hierarchy and spacing in both themes
7. **Shadows in dark**: Use stronger shadows and subtle glows for depth perception
8. **Borders in dark**: Lighter borders (slate-700 vs slate-200) for contrast

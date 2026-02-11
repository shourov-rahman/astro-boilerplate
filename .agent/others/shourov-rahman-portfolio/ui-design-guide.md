## Design Style & Philosophy

### Design Style

Swiss Grid System / International Typographic Style

### Design Philosophy

Born from 1950s Swiss modernism, this approach treats design as **rational information architecture**. Every element exists to communicate, not decorate. The grid is law—an invisible mathematical skeleton organizing content with precision. For an ecommerce growth business, this signals **systematic thinking, data-driven decisions, and reliable execution**. This is the visual language of annual reports and transit systems: designed to work flawlessly under scrutiny.

### Visual DNA

- **Grid as Structure**: Asymmetric layouts aligned flush-left to strong vertical rhythm. Subtle 1px grid lines (#e5e7eb light / #1f2937 dark) at 24px intervals create visible structure
- **Grotesque Sans-Serif Only**: Inter (400-700 weight) exclusively. Massive scale jumps (text-8xl heroes, text-5xl sections, text-base body). No decorative fonts ever
- **Signal Red System**: Predominantly monochrome (black/white) with strategic red (#dc2626 light / #ef4444 dark) for CTAs, active states, critical metrics—never decoration
- **Pattern-Based Depth**: Flat surfaces with texture overlays—dot matrices (8px spacing), diagonal lines (2px width, 16px spacing), fine noise grain (3% opacity)
- **Zero Shadows**: All depth from layering, patterns, 2px borders. No blur-based shadows or gradients

### Design Principles

- **Vibe**: Systematic, precise, intellectual, trustworthy, engineered, timeless, objective
- **Core Tenet**: "Information before aesthetics." Grid governs all. Asymmetry is intentional. Whitespace is structural, not leftover
- **Typographic Hierarchy**: Scale and weight only. Massive headlines (96-144px desktop) + small body (16-18px) = dramatic tension. Line-height: 1.5 body, 1.1 display
- **Content Blocks**: Distinct rectangular zones with visible 2px borders, creating modular Lego composition. Intentional overlaps create tension
- **Color Blocking**: Inverted sections (white on black) create scroll rhythm via hard cuts, never gradual
- **Data Display**: Clean bar graphs, line charts, numerical callouts using grotesque typography—no decorative infographics

## Design Token System

### Colors

**Light Theme:**

- Background: `bg-white` (#ffffff)
- Surface: `bg-gray-50` (#f9fafb)
- Text Primary: `text-gray-950` (#030712)
- Text Secondary: `text-gray-600` (#4b5563)
- Grid/Borders: `border-gray-200` (#e5e7eb)
- Signal CTA: `bg-red-600` (#dc2626)
- Hover: `bg-red-700` (#b91c1c)

**Dark Theme:**

- Background: `bg-gray-950` (#030712)
- Surface: `bg-gray-900` (#111827)
- Text Primary: `text-white` (#ffffff)
- Text Secondary: `text-gray-400` (#9ca3af)
- Grid/Borders: `border-gray-800` (#1f2937)
- Signal CTA: `bg-red-500` (#ef4444)
- Hover: `bg-red-400` (#f87171)

### Typography

- **Headings**: Inter, weights 600-700, massive scale (text-6xl to text-8xl heroes)
- **Body**: Inter, weight 400-500, text-base (16px) to text-lg (18px)
- **Scale**: Aggressive jumps—96px hero, 48px section, 16px body
- **Line Height**: 1.1 for display, 1.5 for body, 1.2 for UI elements

### Grid System

- **Base Unit**: 24px rhythm
- **Grid Lines**: 1px borders at 24px intervals, visible but subtle (#e5e7eb / #1f2937)
- **Columns**: 12-column system with 24px gutters
- **Breakpoints**: Standard Tailwind (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

### Borders & Shapes

- **Standard**: Sharp 90-degree angles, 2px solid borders
- **Radius**: Minimal—`rounded-none` default, rare `rounded-sm` (2px) for UI controls
- **Dividers**: 2px horizontal/vertical rules, full-width section breaks

### Patterns & Textures

- **Dot Matrix**: 8px spacing, 2px dots, 10% opacity
- **Diagonal Lines**: 2px width, 16px spacing, 45deg angle, 5% opacity
- **Noise Grain**: 3% opacity, multiply blend mode for paper texture
- **Implementation**: Pseudo-elements on containers with `mix-blend-mode: multiply`

## Component Stylings

### Buttons

- **Shape**: Sharp rectangles, `rounded-none`
- **Primary**: Red background (#dc2626 / #ef4444), white text, 2px border, uppercase tracking-wider
- **Outline**: 2px border (#030712 / #ffffff), transparent bg, hover inverts
- **Ghost**: Transparent, text only, hover adds 10% background
- **Sizes**: h-12 default, h-10 sm, h-14 lg, px-8 horizontal padding
- **Typography**: font-semibold, uppercase text-sm, tracking-wider
- **Interaction**: No scale—instant background color swap on hover (300ms)

### Cards / Containers

- **Background**: Gray-50 (#f9fafb) light / Gray-900 (#111827) dark
- **Border**: 2px solid (#e5e7eb / #1f2937)
- **Shape**: Sharp rectangles, `rounded-none`
- **Texture**: Optional diagonal line or dot pattern overlay
- **Layering**: Stacked with offset borders to create depth without shadows
- **Interaction**: Border color change to red on hover, no movement

### Inputs

- **Shape**: Sharp rectangles, 2px border
- **Border**: Gray-200 (#e5e7eb) / Gray-800 (#1f2937)
- **Background**: White / Gray-900
- **Focus**: 2px red border, no ring or glow
- **Typography**: text-base, font-normal
- **Height**: h-12 for touch targets

### Navigation

- **Style**: Fixed top, full-width bar with 2px bottom border
- **Background**: White (#ffffff) / Gray-950 (#030712)
- **Border**: 2px bottom border (#e5e7eb / #1f2937)
- **Logo**: Text-based, bold, no decorative container
- **Links**: Uppercase text-sm tracking-wider, underline on hover (2px)
- **Mobile**: Slide-in panel with full-height menu

## Layout & Spacing

### Container Widths

- Hero/Features: `max-w-7xl` (1280px)
- Content: `max-w-6xl` (1152px)
- Text-focused: `max-w-4xl` (896px)
- Data tables: `max-w-full` with horizontal scroll

### Section Padding

- Vertical: `py-24` (96px) or `py-32` (128px)
- Horizontal: `px-6 lg:px-8`
- Grid gap: `gap-6` to `gap-12` based on density

### Grid Patterns

- Stats: `grid-cols-2 lg:grid-cols-4`, uniform heights
- Services: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Case studies: `grid-cols-1 lg:grid-cols-2`
- Flush-left alignment, ragged right edges

### Whitespace Philosophy

- Generous but systematic—all spacing multiples of 24px base unit
- Asymmetric: more space above sections than below
- Grid respects baseline rhythm

## Non-Genericness

### Visible Grid Background

- Fixed grid lines at 24px intervals across entire page
- Toggle between subtle (5% opacity) and prominent (15%)

### Overlapping Sections

- Content blocks intentionally break grid boundaries
- Statistical callouts overlay hero images with 2px border offset

### Inverted Color Blocks

- Alternate sections: white bg → black bg → white bg
- Hard transitions, no gradients

### Typographic Hierarchy Drama

- 144px hero headlines next to 16px body text
- All caps labels (tracking-widest) contrast sentence case

### Data-First Components

- Large numerical displays (text-6xl) as focal points
- Bar chart aesthetics in content blocks (solid fills, 2px separators)
- Metric cards: number dominant, label secondary

### Modular Section Borders

- Every major section has visible 2px top border
- Some sections stack with double borders (4px total) for emphasis

## Effects & Animation

### Transition Philosophy

- Instant or very fast (150ms)—no leisurely transitions
- Hard cuts align with grid precision
- Movement minimal, state changes immediate

### Hover States

- Buttons: Background color swap (300ms)
- Cards: Border color change to red (150ms)
- Links: 2px underline appears instantly
- No scaling, lifting, or floating

### Active States

- Buttons: Inverted color scheme on click
- Inputs: Red 2px border on focus
- Navigation: Current page marked with red vertical bar (2px)

### Page Transitions

- None—instant load reflects systematic efficiency

## Icons

### Style

- Stroke width: 2px (matches border system)
- Size: 24px standard, 32px for feature icons
- Color: Matches text hierarchy (gray-950 / white, red for active)

### Usage

- UI controls: minimal, functional only
- Feature icons: simple line icons in squares with 2px borders
- No icon backgrounds or containers—direct placement
- Social: monochrome, no brand colors

## Accessibility

### Contrast Ratios

- Gray-950 on white: 20.5:1 (AAA)
- Gray-600 on white: 7.1:1 (AAA)
- Red-600 on white: 5.9:1 (AA Large)

### Focus States

- 2px red border, no blur ring
- High contrast, clearly visible

### Touch Targets

- Minimum 44px (h-12 = 48px)
- Adequate spacing between interactive elements

### Keyboard Navigation

- Logical tab order following grid structure
- Skip links for main content

## Responsive Strategy

### Mobile-First

- Single column default, grid activates at md breakpoint
- Typography scales: text-5xl mobile → text-8xl desktop

### Breakpoint Behavior

- `sm:` Minor padding adjustments
- `md:` 2-column grids activate
- `lg:` 3-4 column grids, full asymmetric layouts
- `xl:` Maximum container widths reached

### Grid Simplification

- Visible grid lines remain on mobile but at lower opacity
- Flush-left alignment maintained across all sizes

### Navigation

- Mobile: hamburger → full-screen menu overlay
- Desktop: horizontal bar with inline links

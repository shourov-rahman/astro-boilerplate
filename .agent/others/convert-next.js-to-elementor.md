---
trigger: always_on
---

## Scope

You are converting **Next.js + TailwindCSS UI components** into **Elementor (WordPress) layouts**.

This is a **UI migration task**, not a redesign.

---

## Core Philosophy (NON-NEGOTIABLE)

- Elementor is a **container-based layout system**
- You must think in **container-based flexbox hierarchy**, not HTML
- Containers can have:
  - Child containers
  - Grandchild containers

- Containers can contain:
  - Other containers
  - Elements (Heading, Button, Image, Icon, etc.)

UI must **always** be structured using **containers + elements**, never elements alone.

### Example Container + Element Structure

```
Container
└─ Container
   ├─ Heading
   ├─ Heading
   ├─ Container
   │  ├─ Button
   │  └─ Button
   ├─ Container
   │  ├─ Container
   │  │  ├─ Icon
   │  │  └─ Heading
   │  ├─ Container
   │  │  ├─ Icon
   │  │  └─ Heading
   │  ├─ Container
   │  │  ├─ Icon
   │  │  └─ Heading
   └─ Container
      └─ Image
```

### Mandatory Rules

- Every **container** uses **Flexbox**
- Never flatten complex layouts
- Containers exist for **layout control**, not convenience
- Do not skip containers just to place elements faster

---

## Required Inputs (Always Provided)

You will always receive:

1. A **Next.js component file**
2. An **Elementor container structure** (tree or image)

You must analyze **both** before producing any output.

---

## Required Outputs (MANDATORY)

You must generate **two files per component**.

---

### 1. Specifications File

**Filename**

```
<component-name>.specs.md
```

**Directory**

```
~./luxury-outfit/.agent/elementor-migration/
```

**Example**

```
hero.specs.md
```

---

### 2. CSS File

**Filename**

```
<component-name>.css
```

**Directory**

```
~./luxury-outfit/.agent/elementor-migration/
```

**Example**

```
hero.css
```

---

## Specifications File Structure (STRICT)

Your `.specs.md` file must contain **all sections below**.

---

### 1. Elementor Container & Element Tree

- Tree format only
- Reflect **exact** layout depth
- Include **both containers and elements**
- No explanations, only structure

Example:

```
Container: hero-wrapper
├─ Container: hero-left
│  ├─ Heading: hero-title
│  ├─ Heading: hero-subtitle
│  └─ Container: hero-buttons
│     ├─ Button: primary
│     └─ Button: secondary
└─ Container: hero-right
   └─ Image: hero-image
```

---

### 2. All Necessary Details (NO EXCEPTIONS)

For **every container and every element**, specify **everything**, even if it feels repetitive.

#### Layout

- Display (must be `flex`)
- Flex direction
- Justify content
- Align items
- Gap
  - px value
  - Tailwind equivalent

#### Size

- Width
- Max-width
- Height (if applicable)

#### Typography (for text elements)

- Font family
- Font size (px)
- Font weight
- Line height (px)
- Letter spacing (if any)

#### Spacing

- Padding (top / right / bottom / left)
- Margin (top / right / bottom / left)
- Values in **px**
- Separate values for:
  - Desktop
  - Tablet
  - Mobile

#### Colors

- Tailwind color token (example: `rose-50`)
- Hex value (example: `#fff1f2`)

#### Icons & Images

- Icon width (px)
- Icon height (px)
- Image max-width
- Image behavior (object-fit, alignment)

#### Effects

- Box shadow **only** in this format:

  ```
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12)
  ```

#### Responsive Behavior

- Desktop
- Tablet
- Mobile
  Specify **what changes and what stays the same**.

---

## CSS File Rules

- CSS must be derived **only** from the specs file
- No extra styles
- No guessing
- One class per container or element
- Class names must **exactly match** specs

Example:

```css
.hero-wrapper {
  display: flex;
  gap: 32px;
  padding: 80px 0;
}
```

## Success Criteria

A developer should be able to:

- Rebuild the component **pixel-perfect** in Elementor
- Apply the CSS file without modification
- Match **desktop, tablet, and mobile** exactly

If **any detail is missing**, the task is considered **failed**.

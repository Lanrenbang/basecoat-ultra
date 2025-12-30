# Basecoat Ultra

**English** | [中文](./README-cn.md)

Basecoat is a set of components built with Tailwind CSS. It is designed to be used with any traditional web stack.
Basecoat brings the magic of shadcn/ui to any traditional web stack: no React required.

**Basecoat Ultra** is an enhanced UI library based on [Basecoat](https://basecoatui.com). It retains the core philosophy of "Tailwind-first, framework-agnostic" while offering deep customizations tailored for modern aesthetics and lightweight requirements. We have removed native support for Nunjucks/Jinja to focus on providing richer interactive components, an out-of-the-box theming system, and refined visual enhancements.

## ✨ Features

### 🛠️ Core Improvements
We have polished the Basecoat core with numerous details and bug fixes (see CHANGELOG), including but not limited to:
- **CSS Modularization**: Refactored monolithic CSS into a modular structure supporting on-demand loading.
- **Build Fixes**: Resolved escaping issues with complex selectors in Tailwind v4.
- **Component Optimizations**:
    - `Button`: Fixed Ghost/Link variant background issues in specific contexts.
    - `Dialog`: Introduced more natural scaling and bounce animations.
    - `Dropdown Menu`: Fixed flickering issues during initialization.
    - `Sidebar`: Intelligent logic for identifying and highlighting the current page.

### 🧩 New Components
Introduced a series of high-frequency components inspired by shadcn/ui, completely independent of React/Vue:
- **Accordion**: Originally only a demo in upstream docs; standardized and internalized here. Based on native `<details>`, zero-JS animation.
- **Sheet**: Elegant side-sliding panel.
- **Carousel**: Lightweight carousel component.
- **Input OTP**: Dedicated one-time password input.
- **Toggle Group**: Button-style interaction similar to Radio Group.
- **Toggle**: Independent toggle button style.

### 🔌 External Integrations
Integrated excellent third-party libraries to bridge gaps in pure CSS/Vanilla JS (must be imported separately):
- **Date Picker**: Deeply customized version based on [Flatpickr](https://flatpickr.js.org/), perfectly adapted to themes.
- **Resizable**: Draggable split panel based on [Split.js](https://split.js.org/).

### 🎨 Visual Enhancements
- **Catppuccin Themes**: Built-in support for the full [Catppuccin](https://github.com/catppuccin/catppuccin) suite (Latte, Frappé, Macchiato, Mocha).
- **Neumorphism Extension**:
    - **Global Lighting System**: Unique mouse-following lighting effects (`lighting.js`), giving neumorphic feel to `.neu-panel`, `.neu-btn` elements.
    - **3D Flip**: Supports CSS 3D Transform-based card flip effects.

## 📦 Installation

Recommended using `bun`, but `npm` or `pnpm` are also supported:

```bash
bun add @lanrenbang/basecoat-ultra
# or
npm install @lanrenbang/basecoat-ultra
```

## 🚀 Setup (Bundlers)

For projects using Vite, Webpack, or other bundlers with Tailwind CSS v4 configured.

### 1. Import CSS

In your CSS entry file (e.g., `style.css`).

**Note**: Import the raw CSS (`/css`), letting your Tailwind config handle the styles. Do NOT use the `.cdn.css` version here.

```css
@import "tailwindcss";

/* 1. Basecoat Core (Required) */
@import "@lanrenbang/basecoat-ultra";

/* 2. External Components (Optional) */
/* Only import if you use these specific components */
@import "@lanrenbang/basecoat-ultra/datepicker.css";
@import "@lanrenbang/basecoat-ultra/resizable.css";

/* 3. Theme (Optional, must be explicit) */
/* We provide a Catppuccin theme suite, or you can build your own */
@import "@lanrenbang/basecoat-ultra/theme/catppuccin";
```

### 2. Import JavaScript

In your application entry point (e.g., `main.js` or `app.ts`).

**Option A: Import All (Recommended)**
Includes core logic and most standard components (excludes Datepicker/Resizable).

```javascript
import '@lanrenbang/basecoat-ultra/all';
```

**Option B: Cherry-pick**
To reduce bundle size, import only what you need.
**Important**: You MUST import the `basecoat` core module first, as other components rely on it for registration.

```javascript
// 1. Core first
import '@lanrenbang/basecoat-ultra/basecoat';

// 2. Then components
import '@lanrenbang/basecoat-ultra/tabs';
import '@lanrenbang/basecoat-ultra/select';
import '@lanrenbang/basecoat-ultra/popover';
```

**External Components (Must be imported separately)**
Regardless of the option above, these components are not included in the main bundle due to size or dependencies:

```javascript
import '@lanrenbang/basecoat-ultra/datepicker'; // Uses flatpickr
import '@lanrenbang/basecoat-ultra/resizable';  // Uses split.js
```

---

## 🌐 CDN Usage (No Build Tool)

If you are not using a bundler, you can use the pre-compiled versions via CDN (jsDelivr). These include the compiled Tailwind styles.

### CSS

```html
<!-- Basecoat Core (includes Tailwind styles) -->
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/css/basecoat.cdn.min.css" rel="stylesheet">

<!-- External Components (Optional) -->
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/css/datepicker.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/css/resizable.min.css" rel="stylesheet">

<!-- Theme (Optional) -->
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/theme/catppuccin/index.min.css" rel="stylesheet">
```

### JavaScript

```html
<!-- Core & Standard Components -->
<script src="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/js/all.min.js" defer></script>

<!-- External Components (Optional) -->
<script src="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/js/datepicker.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/js/resizable.min.js" defer></script>
```

## 🛠️ Development

This project uses [Bun](https://bun.sh) as the package manager and runtime, and [Vite](https://vitejs.dev) for building.

### Setup

```bash
# 1. Clone project
git clone https://github.com/your-username/basecoat-ultra.git
cd basecoat-ultra

# 2. Install dependencies
bun install

# 3. Start dev server
bun run dev
```

### Anti-flash Script

To prevent page flicker (FOUC) when using the Catppuccin Theme Switcher on refresh, place the following script at the top of your HTML `<head>` tag:

```html
<script>
(function() {
  try {
    const t = localStorage.getItem('catppuccin-theme');
    const a = localStorage.getItem('catppuccin-accent');
    const m = localStorage.getItem('basecoat-mode');
    const r = document.documentElement;
    // Prioritize theme config
    if (t && a) {
      r.classList.add(`theme-${t}`, `accent-${a}`);
      if(['frappe','macchiato','mocha'].includes(t)) r.classList.add('dark');
    } else if (m) {
      // Only dark/light mode preference
      r.classList.toggle('dark', m === 'dark');
    } else {
      // Follow system
      r.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  } catch(e) {}
})();
</script>
```

## ❤️ Credits

This project stands on the shoulders of giants:

*   **[Basecoat](https://basecoatui.com)**: Original creator [hunvreus](https://github.com/hunvreus). Most foundational code belongs to the original author.
*   **[Catppuccin](https://github.com/catppuccin/palette)**: Provided the beautiful color palettes.
*   **[puikinsh/login-forms](https://github.com/puikinsh/login-forms/tree/main/forms/neumorphism)**: Inspiration for Neumorphism lighting and 3D effects.
*   **[Flatpickr](https://flatpickr.js.org/)** & **[Split.js](https://split.js.org/)**: Excellent third-party library support.

## Support Me
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/bobbynona) [![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/bobbynona) [![USDT(TRC20)/Tether](https://img.shields.io/badge/Tether-168363?style=for-the-badge&logo=tether&logoColor=white)](https://github.com/Lanrenbang/.github/blob/5b06b0b2d0b8e4ce532c1c37c72115dd98d7d849/custom/USDT-TRC20.md) [![Litecoin](https://img.shields.io/badge/Litecoin-A6A9AA?style=for-the-badge&logo=litecoin&logoColor=white)](https://github.com/Lanrenbang/.github/blob/5b06b0b2d0b8e4ce532c1c37c72115dd98d7d849/custom/Litecoin.md)

## 📄 License

This project is licensed under the [MIT License](LICENSE.md).
Original Basecoat content copyright belongs to hunvreus.

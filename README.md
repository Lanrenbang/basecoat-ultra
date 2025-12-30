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

This project is published to the [JSR (JavaScript Registry)](https://jsr.io/).

### 1. Install Dependencies

```bash
# Using npm
npx jsr add @lanrenbang/basecoat-ultra

# Using bun
bunx jsr add @lanrenbang/basecoat-ultra

# Using deno
deno add @lanrenbang/basecoat-ultra
```

### 2. Import Styles

In your CSS file (Tailwind CSS v4 configuration required):

```css
@import "tailwindcss";
/* Import core styles */
@import "@lanrenbang/basecoat-ultra/css"; 
/* Or use the CDN version (includes Tailwind utilities) */
/* @import "@lanrenbang/basecoat-ultra/cdn"; */

/* Import Catppuccin Theme (Optional) */
@import "@lanrenbang/basecoat-ultra/dist/theme/catppuccin/index.css";
```

### 3. Import Logic

You can import everything or use on-demand imports:

```javascript
// Import all component logic
import '@lanrenbang/basecoat-ultra';

// Or on-demand import
import '@lanrenbang/basecoat-ultra/basecoat'; // Core
import '@lanrenbang/basecoat-ultra/tabs';
import '@lanrenbang/basecoat-ultra/sheet';
// ...
```

For external components (Datepicker, Resizable), import them separately:

```javascript
// Datepicker
import 'flatpickr/dist/flatpickr.css';
import '@lanrenbang/basecoat-ultra/datepicker-css';
import '@lanrenbang/basecoat-ultra/datepicker';

// Resizable
import '@lanrenbang/basecoat-ultra/resizable-css';
import '@lanrenbang/basecoat-ultra/resizable';
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

### Publishing to JSR

If you are a maintainer, follow these steps to publish a new version:

1.  Login to JSR (Once):
    ```bash
    bunx jsr login
    ```
2.  Publish:
    ```bash
    bunx jsr publish
    ```

## ❤️ Credits

This project stands on the shoulders of giants:

*   **[Basecoat](https://basecoatui.com)**: Original creator [hunvreus](https://github.com/hunvreus). Most foundational code belongs to the original author.
*   **[Catppuccin](https://github.com/catppuccin/palette)**: Provided the beautiful color palettes.
*   **[puikinsh/login-forms](https://github.com/puikinsh/login-forms/tree/main/forms/neumorphism)**: Inspiration for Neumorphism lighting and 3D effects.
*   **[Flatpickr](https://flatpickr.js.org/)** & **[Split.js](https://split.js.org/)**: Excellent third-party library support.

## 📄 License

This project is licensed under the [MIT License](LICENSE.md).
Original Basecoat content copyright belongs to hunvreus.

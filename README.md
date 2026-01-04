# Basecoat Ultra

[![Version](https://img.shields.io/npm/v/@lanrenbang/basecoat-ultra?style=flat-square)](https://www.npmjs.com/package/@lanrenbang/basecoat-ultra)
[![License](https://img.shields.io/github/license/hunvreus/basecoat?style=flat-square)](https://github.com/hunvreus/basecoat/blob/main/LICENSE.md)

**Basecoat Ultra** is a Tailwind-first UI component library designed for high performance, minimalism, and deep customization. Built upon the excellent foundation of [Basecoat](https://basecoatui.com) by [hunvreus](https://github.com/hunvreus), it brings the magic of shadcn/ui to any traditional web stack without requiring React.

🎡 **[Live Demo & Documentation](https://lanrenbang.github.io/basecoat-ultra)**

## ✨ Features

### 🛠️ Core Improvements Over Upstream
Enhanced from the original Basecoat with numerous optimizations and bug fixes:
- **CSS Modularization**: Refactored monolithic CSS into modular structure supporting on-demand loading
- **Tailwind v4 Compatibility**: Fixed escaping issues with complex selectors and modern CSS nesting
- **Component Optimizations**: 
  - Button: Fixed Ghost/Link variant background issues
  - Dialog: Enhanced animations with natural scaling and bounce effects
  - Dropdown Menu: Resolved initialization flickering
  - Sidebar: Intelligent current page highlighting logic
  - Form Elements: Improved contrast and accessibility

### 🧩 New Components
Comprehensive component library inspired by shadcn/ui, completely framework-independent:
- **Standard Components**: Accordion, Sheet, Carousel, Input OTP, Toggle Group, Toggle
- **External Integrations**: Date Picker (Flatpickr), Resizable Panels (Split.js)
- **Advanced Features**: Command palette, enhanced dialogs, improved navigation

### 🎨 Visual Enhancements
- **Catppuccin Themes**: Full suite support (Latte, Frappé, Macchiato, Mocha) with theme switcher
- **Neumorphism Effects**: Global lighting system with mouse-following effects and 3D transforms
- **Enhanced Animations**: Smooth transitions and micro-interactions throughout

### 🏗️ Multi-Package Architecture
- **Ultra Package**: Framework-agnostic CSS/JS components for any stack
- **Svelte Package**: Native Svelte 5 components with Runes support
- **CLI Tool**: Copy-paste workflow for Svelte components
- **Documentation**: Comprehensive guides and interactive examples

## 📦 Installation

Choose the package that fits your stack:

### For Vanilla HTML/JS, React, Vue, or Other Frameworks
```bash
bun add @lanrenbang/basecoat-ultra
# or npm install @lanrenbang/basecoat-ultra
```

### For Svelte 5 Projects
```bash
# CLI approach (recommended)
npx basecoat-ultra-svelte@latest init
npx basecoat-ultra-svelte@latest add button

# Package approach
bun add @lanrenbang/basecoat-ultra-svelte
```

## 🚀 Quick Setup

### Bundler Setup (Vite, Webpack, etc.)
```css
/* In your CSS file */
@import "tailwindcss";
@import "@lanrenbang/basecoat-ultra";
@import "@lanrenbang/basecoat-ultra/theme/catppuccin"; /* Optional */
```

```javascript
// In your JS file
import '@lanrenbang/basecoat-ultra/all';
```

### CDN Setup (No Build Tool)
```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/css/basecoat.cdn.min.css" rel="stylesheet">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/js/all.min.js" defer></script>
```

For detailed setup instructions, configuration options, and usage examples, visit our **[comprehensive documentation](https://lanrenbang.github.io/basecoat-ultra)**.

## 🛠️ Development

This project uses a Bun workspace monorepo structure:

```
packages/
├── ultra/          # Core CSS/JS library (framework-agnostic)
├── svelte/         # Svelte 5 components with Runes
├── cli/            # CLI tool for Svelte components  
└── docs/           # Documentation site (SvelteKit)
```

### Development Commands
```bash
# Install dependencies
bun install

# Development servers
bun dev:ultra      # Core Ultra package
bun dev:svelte     # Svelte components
bun dev:docs       # Documentation site

# Build packages
bun run build:ultra
bun run build:svelte  
bun run build:docs

# CLI tool
bun cli            # Run CLI locally
```

### Build Order
Due to package dependencies: Ultra → Svelte → Docs

## ❤️ Credits

This project stands on the shoulders of giants:

- **[Basecoat](https://basecoatui.com)**: Original creator [hunvreus](https://github.com/hunvreus). Most foundational code belongs to the original author.
- **[Catppuccin](https://github.com/catppuccin/palette)**: Beautiful color palettes for theming
- **[Flatpickr](https://flatpickr.js.org/)** & **[Split.js](https://split.js.org/)**: Excellent third-party integrations
- **[puikinsh/login-forms](https://github.com/puikinsh/login-forms/tree/main/forms/neumorphism)**: Inspiration for neumorphism effects

## ☕ Support

[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/bobbynona) [![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/bobbynona) [![USDT(TRC20)/Tether](https://img.shields.io/badge/Tether-168363?style=for-the-badge&logo=tether&logoColor=white)](https://github.com/Lanrenbang/.github/blob/5b06b0b2d0b8e4ce532c1c37c72115dd98d7d849/custom/USDT-TRC20.md) [![Litecoin](https://img.shields.io/badge/Litecoin-A6A9AA?style=for-the-badge&logo=litecoin&logoColor=white)](https://github.com/Lanrenbang/.github/blob/5b06b0b2d0b8e4ce532c1c37c72115dd98d7d849/custom/Litecoin.md)

## 📄 License

This project is licensed under the [MIT License](LICENSE.md).
Original Basecoat content copyright belongs to hunvreus.

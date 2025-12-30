# Basecoat Ultra Changelog

**English** | [中文](./CHANGELOG-cn.md)

This document records all major changes in `basecoat-ultra` relative to the upstream Basecoat.

## 🚀 Architecture & Build

*   **Modular Refactoring**: Split the monolithic `basecoat.css` into independent modules under `src/css/parts/` for easier maintenance and on-demand usage.
*   **Tailwind v4 Adaptation**: Fixed escaping and syntax errors when using complex `@apply` selectors (e.g., `[&_svg:not(...)]`) in CSS, replacing them with native CSS nesting syntax.
*   **Dependency Slimming**: Removed Nunjucks/Jinja template support to focus on HTML/JS component implementation.

## ✨ Component Improvements

### Core Fixes
*   **Button**:
    *   Fixed background residue issues for Ghost/Link variants in specific contexts.
    *   Enhanced text contrast for Outline variants.
*   **Dialog**:
    *   Refactored animation curves, introducing `cubic-bezier` bounce effects.
    *   Optimized centering logic.
*   **Dropdown Menu**:
    *   Fixed visibility flicker on initialization (ensured initial `aria-hidden="true"`).
    *   Supported more flexible DOM structures (defining `role="menu"` directly on popover content).
*   **Sidebar**:
    *   Optimized `aria-current` auto-highlighting logic to ignore `href="#"` empty links.
*   **Form Elements**:
    *   Fixed build errors caused by missing escape characters in `content` properties for Checkbox/Radio/Switch/Sidebar.
    *   Adjusted Select and Checkbox icon colors (`oklch`) to improve contrast.
    *   Added hover shadows and pointer cursor to Range sliders.

### New Custom Components
*   **Accordion**: Standardized and internalized (upstream only had it as a demo). Pure CSS animation based on `<details>`/`<summary>`.
*   **Sheet**: Side drawer component supporting slide-in from screen edges.
*   **Carousel**: Basic carousel component.
*   **Input OTP**: Verification code/One-Time Password input component.
*   **Toggle / Toggle Group**: Independent toggle and toggle group components.

### External Integrations
*   **Date Picker**: Integrated `flatpickr` with deeply customized theme styles.
*   **Resizable**: Integrated `split.js` providing draggable layout support.

## 🎨 Visuals & Theming

*   **Catppuccin Themes**:
    *   Fully integrated Latte, Frappé, Macchiato, and Mocha themes.
    *   Provided matching `Theme Switcher` logic (`src/js/catppuccin-theme-switcher.js`).
*   **Neumorphism Extension**:
    *   Added `lighting.js`: Implements global neumorphic lighting effects based on mouse position (Inspired by `puikinsh/login-forms`).
    *   Supported CSS 3D Transform flip effects.

---

*Note: The above changes are based on comparison with the original Basecoat (`references/basecoat`).*

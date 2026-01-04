# Basecoat Ultra - AI Assistant Guide

This document provides comprehensive information about Basecoat Ultra for AI assistants to understand and help users with this UI component library.

## Overview

**Basecoat Ultra** is a Tailwind-first UI component library designed for high performance, minimalism, and deep customization. It's framework-agnostic and works with any traditional web stack.

- **Repository**: https://github.com/Lanrenbang/basecoat-ultra
- **Documentation**: https://lanrenbang.github.io/basecoat-ultra
- **Based on**: [Basecoat](https://basecoatui.com) by [hunvreus](https://github.com/hunvreus)

## Architecture

### Multi-Package Structure
```
packages/
├── ultra/          # Core CSS/JS library (framework-agnostic)
├── svelte/         # Svelte 5 components with Runes
├── cli/            # CLI tool for Svelte components
└── docs/           # Documentation site (SvelteKit)
```

### Target Users
1. **Vanilla HTML/JS, React, Vue developers**: Use `@lanrenbang/basecoat-ultra`
2. **Svelte 5 developers**: Use `@lanrenbang/basecoat-ultra-svelte` + CLI tool

## Installation & Setup

### Ultra Package (Framework Agnostic)

#### Package Manager Installation
```bash
bun add @lanrenbang/basecoat-ultra
# or npm install @lanrenbang/basecoat-ultra
```

#### CSS Setup (Bundlers - Vite, Webpack, etc.)
```css
/* In your CSS file (e.g., style.css) */
@import "tailwindcss";

/* 1. Core CSS (Required) */
@import "@lanrenbang/basecoat-ultra";

/* 2. External Components (Optional - only if using these specific components) */
@import "@lanrenbang/basecoat-ultra/datepicker.css";
@import "@lanrenbang/basecoat-ultra/resizable.css";

/* 3. Theme (Optional) */
@import "@lanrenbang/basecoat-ultra/theme/catppuccin";
```

#### JavaScript Setup (Bundlers)
```javascript
// Option A: Import All (Recommended)
import '@lanrenbang/basecoat-ultra/all';

// Option B: Cherry-pick (MUST import basecoat core first)
import '@lanrenbang/basecoat-ultra/basecoat';  // Core first!
import '@lanrenbang/basecoat-ultra/tabs';
import '@lanrenbang/basecoat-ultra/select';

// External Components (Must be imported separately)
import '@lanrenbang/basecoat-ultra/datepicker'; // Uses flatpickr
import '@lanrenbang/basecoat-ultra/resizable';  // Uses split.js
```

#### CDN Setup (No Build Tool)
```html
<!-- CSS (includes compiled Tailwind) -->
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/css/basecoat.cdn.min.css" rel="stylesheet">

<!-- Optional External Components -->
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/css/datepicker.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/css/resizable.min.css" rel="stylesheet">

<!-- Theme -->
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/theme/catppuccin/index.min.css" rel="stylesheet">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/js/all.min.js" defer></script>

<!-- Optional External Components -->
<script src="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/js/datepicker.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/js/resizable.min.js" defer></script>
```

### Svelte Package

#### CLI Installation (Recommended)
```bash
# Initialize project
npx basecoat-ultra-svelte@latest init

# Add specific components
npx basecoat-ultra-svelte@latest add button
npx basecoat-ultra-svelte@latest add card
npx basecoat-ultra-svelte@latest add accordion
```

#### Package Installation (Alternative)
```bash
bun add @lanrenbang/basecoat-ultra @lanrenbang/basecoat-ultra-svelte
```

```css
/* In your app.css */
@import "tailwindcss";
@import "@lanrenbang/basecoat-ultra";
```

```svelte
<script>
  import { Button } from "@lanrenbang/basecoat-ultra-svelte";
</script>

<Button>Click Me</Button>
```

## Key Concepts

### CSS Architecture
- **Modular Structure**: Components can be imported individually
- **Two CSS Versions**:
  - `basecoat.css`: Raw CSS for bundlers (no Tailwind included)
  - `basecoat.cdn.css`: Includes compiled Tailwind for CDN usage

### JavaScript Architecture
- **Core Dependency**: `basecoat.js` must be imported before other components
- **Bundle Options**:
  - `all.js`: Includes most components (excludes datepicker/resizable)
  - Individual modules: Import `basecoat.js` first, then specific components
- **External Components**: `datepicker.js` and `resizable.js` must be imported separately

### Theme System
- **Catppuccin Themes**: Latte, Frappé, Macchiato, Mocha
- **Theme Switcher**: Built-in component for dynamic theme switching
- **Anti-Flash Script**: Prevents FOUC when using theme switcher

## Anti-Flash Script (Important for Theme Switcher)

When using the Catppuccin theme switcher, add this script at the top of your HTML `<head>` to prevent page flicker:

```html
<script>
(function() {
  try {
    const t = localStorage.getItem('catppuccin-theme');
    const a = localStorage.getItem('catppuccin-accent');
    const m = localStorage.getItem('basecoat-mode');
    const r = document.documentElement;
    if (t && a) {
      r.classList.add(`theme-${t}`, `accent-${a}`);
      if(['frappe','macchiato','mocha'].includes(t)) r.classList.add('dark');
    } else if (m) {
      r.classList.toggle('dark', m === 'dark');
    } else {
      r.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  } catch(e) {}
})();
</script>
```

## Component Categories

### Standard Components
- **Layout**: Card, Container, Separator
- **Navigation**: Breadcrumb, Pagination, Tabs, Sidebar
- **Forms**: Button, Input, Select, Checkbox, Radio, Switch, Textarea, Range
- **Data Display**: Badge, Table, Avatar, Progress
- **Feedback**: Alert, Toast, Tooltip
- **Overlays**: Dialog, Popover, Sheet, Command

### New Components (Ultra-specific)
- **Accordion**: Pure CSS animation based on `<details>`
- **Sheet**: Side drawer component
- **Carousel**: Basic carousel component
- **Input OTP**: One-time password input
- **Toggle/Toggle Group**: Independent toggle components

### External Integrations
- **Date Picker**: Based on Flatpickr with custom theming
- **Resizable**: Draggable panels based on Split.js

### Visual Enhancements
- **Neumorphism**: Global lighting effects with `lighting.js`
- **3D Effects**: CSS Transform-based card flips

## Development Commands

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

## Common Issues & Solutions

### CSS Issues
- **Problem**: Styles not applying
- **Solution**: Ensure Tailwind CSS is properly configured and imported before Basecoat Ultra

### JavaScript Issues
- **Problem**: Components not working
- **Solution**: Make sure to import `basecoat.js` core before other components, or use `all.js`

### Theme Issues
- **Problem**: Page flickers on reload
- **Solution**: Add the anti-flash script to your HTML `<head>`

### Build Issues
- **Problem**: Complex selectors breaking in Tailwind v4
- **Solution**: Ultra package already handles this with proper CSS nesting syntax

## File Structure Reference

### Ultra Package Exports
```javascript
// CSS
'@lanrenbang/basecoat-ultra'                    // Main CSS
'@lanrenbang/basecoat-ultra/datepicker.css'    // Optional CSS
'@lanrenbang/basecoat-ultra/resizable.css'     // Optional CSS
'@lanrenbang/basecoat-ultra/theme/catppuccin'  // Theme CSS

// JavaScript
'@lanrenbang/basecoat-ultra/all'               // All standard components
'@lanrenbang/basecoat-ultra/basecoat'          // Core functionality
'@lanrenbang/basecoat-ultra/[component]'       // Individual components
'@lanrenbang/basecoat-ultra/datepicker'        // External component
'@lanrenbang/basecoat-ultra/resizable'         // External component
```

### Svelte Package Exports
```javascript
// Components
import { Button, Card, Input } from '@lanrenbang/basecoat-ultra-svelte';
// Or individual imports
import Button from '@lanrenbang/basecoat-ultra-svelte/Button.svelte';
```

## Best Practices

1. **Always import core first**: When cherry-picking JS modules, import `basecoat.js` before other components
2. **Use appropriate CSS version**: `basecoat.css` for bundlers, `basecoat.cdn.css` for CDN
3. **External components are separate**: Datepicker and Resizable must be imported individually
4. **Theme consistency**: Use the anti-flash script when implementing theme switching
5. **Svelte CLI preferred**: Use the CLI tool for Svelte projects to get full source code ownership

## Version Information

- **Current Version**: Check npm for latest version
- **Upstream Tracking**: Based on Basecoat 0.3.9
- **Tailwind Compatibility**: Designed for Tailwind CSS v4
- **Svelte Compatibility**: Built for Svelte 5 with Runes

This guide should help AI assistants provide accurate and helpful information about Basecoat Ultra installation, configuration, and usage across different frameworks and setups.
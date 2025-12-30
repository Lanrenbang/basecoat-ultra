# Basecoat Ultra 更新日志 (Changelog)

[English](./CHANGELOG.md) | **中文**

本文档记录了 `basecoat-ultra` 相对于上游 Basecoat 的所有主要变更。

## 🚀 核心架构与构建 (Architecture & Build)

*   **模块化重构**: 将原版单体 `basecoat.css` 拆分为 `src/css/parts/` 下的独立模块，便于维护和按需引用。
*   **Tailwind v4 适配**: 修复了在 CSS 中使用复杂 `@apply` 选择器（如 `[&_svg:not(...)]`）时的转义与语法错误，改用原生 CSS 嵌套写法。
*   **依赖精简**: 移除了 Nunjucks/Jinja 模板支持，专注于 HTML/JS 组件实现。

## ✨ 组件改进 (Component Improvements)

### 核心组件修复
*   **Button**:
    *   修复 Ghost/Link 变体在某些上下文中的背景残留问题。
    *   增强 Outline 变体的文字对比度。
*   **Dialog**:
    *   重构动画曲线，引入 `cubic-bezier` 回弹效果。
    *   优化居中定位逻辑。
*   **Dropdown Menu**:
    *   修复初始化时的可见性闪烁问题（确保初始 `aria-hidden="true"`）。
    *   支持更灵活的 DOM 结构（直接在 popover 内容上定义 `role="menu"`）。
*   **Sidebar**:
    *   优化 `aria-current` 自动高亮逻辑，自动忽略 `href="#"` 空链接。
*   **Form Elements**:
    *   修复 Checkbox/Radio/Switch/Sidebar 中 `content` 属性转义符丢失导致的构建错误。
    *   调整 Select 和 Checkbox 图标颜色 (`oklch`) 以提升对比度。
    *   Range 滑块增加 hover 阴影与手型光标。

### 新增自定义组件 (New Components)
*   **Accordion**: 上游仅做文档演示，本项目已将其标准化封装为正式组件。基于 `<details>`/`<summary>` 的纯 CSS 动画手风琴。
*   **Sheet**: 侧边抽屉组件，支持从屏幕边缘滑出。
*   **Carousel**: 基础轮播图组件。
*   **Input OTP**: 验证码/一次性密码输入组件。
*   **Toggle / Toggle Group**: 独立的开关与开关组组件。

### 外部集成 (External Integrations)
*   **Date Picker**: 集成 `flatpickr`，并提供深度定制的主题样式。
*   **Resizable**: 集成 `split.js`，提供可拖拽布局支持。

## 🎨 视觉与主题 (Visuals & Theming)

*   **Catppuccin 主题**: 
    *   完整集成 Latte, Frappé, Macchiato, Mocha 四款主题。
    *   提供配套的 `Theme Switcher` 逻辑 (`src/js/catppuccin-theme-switcher.js`)。
*   **Neumorphism 扩展**:
    *   新增 `lighting.js`: 实现基于鼠标位置的全局拟态光照效果（灵感来源于 `puikinsh/login-forms`）。
    *   支持 CSS 3D Transform 翻转效果。

---

*注意：以上变更基于与 Basecoat 原版 (`references/basecoat`) 的对比。*
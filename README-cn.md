# Basecoat Ultra

[English](./README.md) | **中文**

Basecoat is a set of components built with Tailwind CSS. It is designed to be used with any traditional web stack.
Basecoat brings the magic of shadcn/ui to any traditional web stack: no React required.

**Basecoat Ultra** 是基于 [Basecoat](https://basecoatui.com) 开发的增强版 UI 库。它保留了原版“Tailwind 优先、框架无关”的核心理念，并在此基础上根据现代审美与轻量化需求进行了深度定制。我们移除了对 Nunjucks/Jinja 的原生支持，转而专注于提供更丰富的交互组件、开箱即用的主题系统以及细腻的视觉增强。

## ✨ 特性 (Features)

### 🛠️ 核心增强与修复 (Core Improvements)
我们对 Basecoat 原版核心进行了大量细节打磨与 bug 修复（详见 CHANGELOG），包括但不限于：
- **CSS 模块化**: 将单体 CSS 重构为模块化结构，支持按需加载。
- **构建修复**: 修复了 Tailwind v4 下复杂选择器的转义问题。
- **组件优化**: 
    - `Button`: 修复 Ghost/Link 变体在特定背景下的显示问题。
    - `Dialog`: 引入更自然的缩放与回弹动画。
    - `Dropdown Menu`: 修复初始化时的闪烁问题。
    - `Sidebar`: 智能识别当前页高亮逻辑。

### 🧩 新增组件 (New Components)
引入了一系列对标 shadcn/ui 的高频组件，且完全不依赖 React/Vue：
- **Accordion (手风琴)**: 上游仅在文档中作为演示存在，本项目将其逻辑标准化并内置，基于原生 `<details>` 实现，零 JS 依赖动画。
- **Sheet (侧边抽屉)**: 优雅的侧边滑出面板。
- **Carousel (轮播图)**: 轻量级轮播组件。
- **Input OTP (验证码输入)**: 专用的验证码输入框。
- **Toggle Group (开关组)**: 类似于 Radio Group 的按钮式交互。
- **Toggle (开关)**: 独立的开关按钮样式。

### 🔌 外部集成 (External Integrations)
集成了优秀的第三方库以弥补纯 CSS/Vanilla JS 的短板（需单独引入）：
- **Date Picker**: 基于 [Flatpickr](https://flatpickr.js.org/) 的深度定制，完美适配主题。
- **Resizable**: 基于 [Split.js](https://split.js.org/) 的可拖拽分割面板。

### 🎨 视觉增强 (Visual Enhancements)
- **Catppuccin 主题**: 内置 [Catppuccin](https://github.com/catppuccin/catppuccin) 全系列（Latte, Frappé, Macchiato, Mocha）主题支持。
- **Neumorphism Extension**: 
    - **全局光照系统**: 独特的鼠标跟随光影效果 (`lighting.js`)，为 `.neu-panel`, `.neu-btn` 等元素赋予拟态光感。
    - **3D 翻转**: 支持基于 CSS 3D Transform 的卡片翻转效果。

## 📦 安装 (Installation)

本项目已发布到 [JSR (JavaScript Registry)](https://jsr.io/)。

### 1. 安装依赖

```bash
# 使用 npm
npx jsr add @lanrenbang/basecoat-ultra

# 使用 bun
bunx jsr add @lanrenbang/basecoat-ultra

# 使用 deno
deno add @lanrenbang/basecoat-ultra
```

### 2. 引入样式

在你的 CSS 文件中（需配置 Tailwind CSS v4）：

```css
@import "tailwindcss";
/* 引入核心样式 */
@import "@lanrenbang/basecoat-ultra/css/basecoat.css"; 
/* 或者使用 CDN 版本（包含 Tailwind 工具类） */
/* @import "@lanrenbang/basecoat-ultra/css/basecoat.cdn.css"; */

/* 引入 Catppuccin 主题（可选） */
@import "@lanrenbang/basecoat-ultra/dist/theme/catppuccin/index.css";
```

### 3. 引入交互逻辑

你可以全量引入，也可以按需引入：

```javascript
// 全量引入 (包含所有组件逻辑)
import '@lanrenbang/basecoat-ultra';

// 或者按需引入
import '@lanrenbang/basecoat-ultra/basecoat'; // 核心
import '@lanrenbang/basecoat-ultra/tabs';
import '@lanrenbang/basecoat-ultra/sheet';
// ...
```

对于外部组件（Datepicker, Resizable），需要单独引入：

```javascript
// Datepicker
import 'flatpickr/dist/flatpickr.css';
import '@lanrenbang/basecoat-ultra/css/datepicker.css';
import '@lanrenbang/basecoat-ultra/datepicker';

// Resizable
import '@lanrenbang/basecoat-ultra/css/resizable.css';
import '@lanrenbang/basecoat-ultra/resizable';
```

对于外部组件（Datepicker, Resizable），需要单独引入：

```javascript
// Datepicker
import 'flatpickr/dist/flatpickr.css';
import '@basecoat/ultra/datepicker-css';
import '@basecoat/ultra/datepicker';

// Resizable
import '@basecoat/ultra/resizable-css';
import '@basecoat/ultra/resizable';
```

## 🛠️ 开发与贡献 (Development)

本项目使用 [Bun](https://bun.sh) 作为包管理器和运行时，使用 [Vite](https://vitejs.dev) 进行构建。

### 环境搭建

```bash
# 1. 克隆项目
git clone https://github.com/your-username/basecoat-ultra.git
cd basecoat-ultra

# 2. 安装依赖
bun install

# 3. 启动开发服务器
bun run dev
```

### 主题防闪烁 (Anti-flash Script)

为了在使用 Catppuccin 主题切换器时防止页面刷新出现闪烁（FOUC），请将以下脚本放在 HTML 的 `<head>` 标签顶部：

```html
<script>
(function() {
  try {
    const t = localStorage.getItem('catppuccin-theme');
    const a = localStorage.getItem('catppuccin-accent');
    const m = localStorage.getItem('basecoat-mode');
    const r = document.documentElement;
    // 优先加载主题配置
    if (t && a) {
      r.classList.add(`theme-${t}`, `accent-${a}`);
      if(['frappe','macchiato','mocha'].includes(t)) r.classList.add('dark');
    } else if (m) {
      // 只有明暗模式偏好
      r.classList.toggle('dark', m === 'dark');
    } else {
      // 跟随系统
      r.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  } catch(e) {}
})();
</script>
```

### 发布到 JSR

如果你是维护者，按照以下步骤发布新版本：

1.  登录 JSR (仅需一次):
    ```bash
    bunx jsr login
    ```
2.  发布:
    ```bash
    bunx jsr publish
    ```

## ❤️ 鸣谢 (Credits)

本项目站在巨人的肩膀上：

*   **[Basecoat](https://basecoatui.com)**: 原创者 [hunvreus](https://github.com/hunvreus)。本项目的大部分基础代码归原作者所有。
*   **[Catppuccin](https://github.com/catppuccin/palette)**: 提供了美妙的配色方案。
*   **[puikinsh/login-forms](https://github.com/puikinsh/login-forms/tree/main/forms/neumorphism)**: Neumorphism 光照与 3D 效果的灵感来源。
*   **[Flatpickr](https://flatpickr.js.org/)** & **[Split.js](https://split.js.org/)**: 优秀的第三方库支持。

## 📄 许可 (License)

本项目遵循 [MIT License](LICENSE.md)。
Basecoat 原始内容版权归属于 hunvreus。

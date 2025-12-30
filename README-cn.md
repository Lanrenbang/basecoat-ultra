# Basecoat Ultra

**中文** | [English](./README.md)

Basecoat 是一套基于 Tailwind CSS 构建的组件库。它旨在用于任何传统的 Web 技术栈。
Basecoat 将 shadcn/ui 的设计魔法带到了传统 Web 开发中：无需 React。

**Basecoat Ultra** 是基于 [Basecoat](https://basecoatui.com) 的增强版 UI 库。它保留了“Tailwind 优先、框架无关”的核心理念，同时提供了针对现代审美和轻量级需求的深度定制。我们移除了对 Nunjucks/Jinja 的原生支持，转而专注于提供更丰富的交互组件、开箱即用的主题系统以及精细的视觉增强。

## 🎡 组件预览
[lanrenbang.github.io/basecoat-ultra](https://lanrenbang.github.io/basecoat-ultra)

## ✨ 特性

### 🛠️ 核心改进
我们对 Basecoat 核心进行了大量细节打磨和错误修复（详见 CHANGELOG），包括但不限于：
- **CSS 模块化**：将单体 CSS 重构为模块化结构，支持按需加载。
- **构建修复**：解决了 Tailwind v4 中复杂选择器的转义问题。
- **组件优化**：
    - `Button`：修复了特定背景下 Ghost/Link 变体的显示问题。
    - `Dialog`：引入了更自然的缩放和回弹动画。
    - `Dropdown Menu`：修复了初始化时的闪烁问题。
    - `Sidebar`：智能识别并高亮当前页面的逻辑。

### 🧩 新增组件
引入了一系列受 shadcn/ui 启发的高频组件，完全独立于 React/Vue：
- **Accordion (手风琴)**：原版仅存在于演示中，现已标准化并内置。基于原生 `<details>`，零 JS 动画。
- **Sheet (侧边栏/抽屉)**：优雅的侧滑面板。
- **Carousel (轮播)**：轻量级轮播组件。
- **Input OTP (验证码输入)**：专用的单次密码输入框。
- **Toggle Group (切换组)**：类似 Radio Group 的按钮式交互。
- **Toggle (切换按钮)**：独立的切换按钮样式。

### 🔌 外部集成
集成了优秀的第三方库以填补纯 CSS/Vanilla JS 的空白（需单独引入）：
- **Date Picker (日期选择器)**：基于 [Flatpickr](https://flatpickr.js.org/) 的深度定制版，完美适配主题。
- **Resizable (拖拽分割)**：基于 [Split.js](https://split.js.org/) 的可拖拽分割面板。

### 🎨 视觉增强
- **Catppuccin 主题**：内置支持完整的 [Catppuccin](https://github.com/catppuccin/catppuccin) 配色方案 (Latte, Frappé, Macchiato, Mocha)。
- **拟态设计 (Neumorphism) 扩展**：
    - **全局光照系统**：独特的小鼠跟随光照效果 (`lighting.js`)，赋予 `.neu-panel`、`.neu-btn` 元素拟态质感。
    - **3D 翻转**：支持基于 CSS 3D Transform 的卡片翻转效果。

## 📦 安装

推荐使用 `bun`，当然也支持 `npm` 或 `pnpm`：

```bash
bun add @lanrenbang/basecoat-ultra
# 或
npm install @lanrenbang/basecoat-ultra
```

## 🚀 配置 (构建工具)

如果您使用 Vite、Webpack 等构建工具，并已配置 Tailwind CSS v4，请按照以下步骤操作。

### 1. 引入 CSS

在您的 CSS 入口文件（例如 `style.css`）中引入。

**注意**：请引入不带编译的源码版本，让您的 Tailwind 配置来处理样式。切勿引入 `.cdn.css` 版本。

```css
@import "tailwindcss";

/* 1. Basecoat 核心样式 (必须) */
@import "@lanrenbang/basecoat-ultra";

/* 2. 外部扩展组件样式 (可选，仅当您使用这些组件时必须显式引入) */
@import "@lanrenbang/basecoat-ultra/datepicker.css";
@import "@lanrenbang/basecoat-ultra/resizable.css";

/* 3. 主题样式 (可选，必须显式引入) */
/* 我们提供了一套 Catppuccin 主题，您也可以参考源码实现自己的主题 */
@import "@lanrenbang/basecoat-ultra/theme/catppuccin";
```

### 2. 引入 JavaScript

在您的应用入口文件（例如 `main.js` 或 `app.ts`）中引入。

**方式一：全量引入 (推荐)**
包含核心逻辑及大部分常用组件（不含 Datepicker/Resizable）。

```javascript
import '@lanrenbang/basecoat-ultra/all';
```

**方式二：特定组件引入**
```javascript
// 1. 先引入核心
import '@lanrenbang/basecoat-ultra/basecoat';

// 2. 再引入具体组件
import '@lanrenbang/basecoat-ultra/tabs';
import '@lanrenbang/basecoat-ultra/select';
import '@lanrenbang/basecoat-ultra/popover';
```

**外部扩展组件 (必须单独引入)**
无论使用哪种方式，以下组件因为体积较大或依赖外部库，**不会**包含在默认入口中，必须显式引入：

```javascript
import '@lanrenbang/basecoat-ultra/datepicker'; // 基于 flatpickr
import '@lanrenbang/basecoat-ultra/resizable';  // 基于 split.js
```

---

## 🌐 CDN 用法 (无构建工具)

如果您不使用打包工具，可以直接通过 CDN (jsDelivr) 引入。这里我们使用编译好的 `.cdn.css` 版本（已包含 Tailwind 样式）。

### CSS

```html
<!-- Basecoat 核心 (包含 Tailwind 样式) -->
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/css/basecoat.cdn.min.css" rel="stylesheet">

<!-- 外部扩展 (可选) -->
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/css/datepicker.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/css/resizable.min.css" rel="stylesheet">

<!-- 主题 (可选) -->
<link href="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/theme/catppuccin/index.min.css" rel="stylesheet">
```

### JavaScript

```html
<!-- 核心与常用组件 -->
<script src="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/js/all.min.js" defer></script>

<!-- 外部扩展 (可选) -->
<script src="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/js/datepicker.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/@lanrenbang/basecoat-ultra@latest/dist/js/resizable.min.js" defer></script>
```

## 🛠️ 开发指南

本项目使用 [Bun](https://bun.sh) 作为包管理器和运行时，使用 [Vite](https://vitejs.dev) 进行构建。

### 启动项目

```bash
# 1. 克隆项目
git clone https://github.com/your-username/basecoat-ultra.git
cd basecoat-ultra

# 2. 安装依赖
bun install

# 3. 启动开发服务器
bun run dev
```

### 防闪烁脚本 (Anti-flash)

为了防止在使用 Catppuccin 主题切换器时刷新页面出现闪烁 (FOUC)，请将以下脚本放在 HTML `<head>` 标签的顶部：

```html
<script>
(function() {
  try {
    const t = localStorage.getItem('catppuccin-theme');
    const a = localStorage.getItem('catppuccin-accent');
    const m = localStorage.getItem('basecoat-mode');
    const r = document.documentElement;
    // 优先使用主题配置
    if (t && a) {
      r.classList.add(`theme-${t}`, `accent-${a}`);
      if(['frappe','macchiato','mocha'].includes(t)) r.classList.add('dark');
    } else if (m) {
      // 仅夜间/日间模式偏好
      r.classList.toggle('dark', m === 'dark');
    } else {
      // 跟随系统
      r.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  } catch(e) {}
})();
</script>
```

## ❤️ 致谢

本项目站在巨人的肩膀上：

*   **[Basecoat](https://basecoatui.com)**: 原作者 [hunvreus](https://github.com/hunvreus)。大部分基础代码归原作者所有。
*   **[Catppuccin](https://github.com/catppuccin/palette)**: 提供了精美的配色方案。
*   **[puikinsh/login-forms](https://github.com/puikinsh/login-forms/tree/main/forms/neumorphism)**: 拟态光照和 3D 效果的灵感来源。
*   **[Flatpickr](https://flatpickr.js.org/)** & **[Split.js](https://split.js.org/)**: 优秀的第三方库支持。

## ☕ 通过捐赠支持我
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/bobbynona) [![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/bobbynona) [![USDT(TRC20)/Tether](https://img.shields.io/badge/Tether-168363?style=for-the-badge&logo=tether&logoColor=white)](https://github.com/Lanrenbang/.github/blob/5b06b0b2d0b8e4ce532c1c37c72115dd98d7d849/custom/USDT-TRC20.md) [![Litecoin](https://img.shields.io/badge/Litecoin-A6A9AA?style=for-the-badge&logo=litecoin&logoColor=white)](https://github.com/Lanrenbang/.github/blob/5b06b0b2d0b8e4ce532c1c37c72115dd98d7d849/custom/Litecoin.md)

## 📄 许可证

本项目基于 [MIT License](LICENSE.md) 开源。
原 Basecoat 内容版权归 hunvreus 所有。

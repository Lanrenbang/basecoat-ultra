import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Get all JS files for multi-entry build
const srcJsDir = resolve(__dirname, 'src/js');
const jsFiles = readdirSync(srcJsDir)
  .filter(file => file.endsWith('.js') && file !== 'index.js');

const input = {
  all: resolve(srcJsDir, 'index.js'),
};

jsFiles.forEach(file => {
  const name = file.replace('.js', '');
  input[name] = resolve(srcJsDir, file);
});

// Custom plugin to handle different modes
const htmlPlugin = (mode) => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      if (mode === 'verify') {
        // Verify 模式：将 HTML 中硬编码的源码引用替换为 verify 专用引用
        // 1. 删除所有 /src/ 相关的 link 和 script 标签
        let transformed = html.replace(/<(link|script)[^>]+src\/(css|js|theme)\/[^>]+>/g, '');
        
        // 2. 注入 verify 专用资源
        const verifyCss = `<link href="/demo/verify.css" rel="stylesheet">`;
        const verifyJs = `<script type="module" src="/demo/verify-entry.js"></script>`;
        
        return transformed
          .replace('<!-- Basecoat CSS -->', `<!-- Basecoat CSS -->\n    ${verifyCss}`)
          .replace('<!-- Basecoat JS -->', `<!-- Basecoat JS -->\n    ${verifyJs}`);
      }
      // Dev 模式：直接返回 HTML，因为 HTML 里已经有了 /src 路径，Vite 会自动处理
      return html;
    }
  }
};

export default defineConfig(({ mode }) => {
  const isMinify = mode === 'minify';

  return {
    plugins: [
      tailwindcss(),
      htmlPlugin(mode),
    ],
    build: {
      outDir: 'dist/js',
      emptyOutDir: !isMinify, 
      minify: isMinify ? 'esbuild' : false, 
      lib: {
        entry: input,
        formats: ['es'], 
      },
      rollupOptions: {
        output: {
          entryFileNames: isMinify ? '[name].min.js' : '[name].js',
          chunkFileNames: isMinify ? '[name]-[hash].min.js' : '[name]-[hash].js',
        },
      }
    }
  };
});
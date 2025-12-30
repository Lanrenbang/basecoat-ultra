import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  // 以项目根目录为 root，这样 HTML 中的 /src 路径可以被正确解析
  base: './',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'demo/index.html'),
        demo: resolve(__dirname, 'demo/demo.html')
      }
    }
  }
});
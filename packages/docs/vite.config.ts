import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
  resolve: {
    alias: {
      // Svelte 组件包
      '@lanrenbang/basecoat-ultra-svelte': path.resolve(__dirname, '../svelte/src/lib'),
      
      // Ultra 包 - JS 路径映射 (指向源码)
      '@lanrenbang/basecoat-ultra/all': path.resolve(__dirname, '../ultra/src/js/index.js'),
      '@lanrenbang/basecoat-ultra/datepicker': path.resolve(__dirname, '../ultra/src/js/datepicker.js'),
      '@lanrenbang/basecoat-ultra/resizable': path.resolve(__dirname, '../ultra/src/js/resizable.js'),
    }
  },
  server: {
    fs: {
      // 允许 Vite 访问 monorepo 根目录
      allow: [path.resolve(__dirname, '../..')]
    }
  },
  // 屏蔽一些不影响功能的警告
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // 忽略 a11y 相关警告
        if (warning.code === 'a11y-role-has-required-aria-props') return;
        if (warning.code === 'a11y-no-redundant-roles') return;
        warn(warning);
      }
    }
  }
});

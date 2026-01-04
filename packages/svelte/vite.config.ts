import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte({
    onwarn: (warning, handler) => {
      if (warning.code === 'css_unused_selector') return;
      handler(warning);
    }
  })],
  build: {
    lib: {
      entry: './src/lib/index.ts',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      // 确保外部化处理那些你不期望打包进库的依赖
      external: ['svelte', /^@lanrenbang\/basecoat-ultra/]
    }
  }
});

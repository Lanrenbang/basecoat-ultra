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

export default defineConfig(({ mode }) => {
  const isMinify = mode === 'minify';

  return {
    plugins: [
      tailwindcss(),
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
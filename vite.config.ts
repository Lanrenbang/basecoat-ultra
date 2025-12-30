import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Get all JS files for multi-entry build
const srcJsDir = resolve(__dirname, 'src/js');
const jsFiles = readdirSync(srcJsDir)
  .filter(file => file.endsWith('.js') && file !== 'index.js'); // exclude our new index.js from being built as "index.js"

// Construct entry points
// 1. "all": maps to src/js/index.js
// 2. "component": maps to src/js/component.js
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
    // Development server config
    server: {
      // Defaults to port 5173, no auto-open
    },
    // Build config (Library Mode for JS)
    build: {
      outDir: 'dist/js',
      emptyOutDir: !isMinify, // Only empty on the first run (non-minify)
      minify: isMinify ? 'esbuild' : false, // Minify only in minify mode
      lib: {
        entry: input,
        formats: ['es'], // Output ESM
      },
      rollupOptions: {
        output: {
          // Ensure we get [name].js or [name].min.js output structure
          entryFileNames: isMinify ? '[name].min.js' : '[name].js',
          chunkFileNames: isMinify ? '[name]-[hash].min.js' : '[name]-[hash].js',
        },
        // Externalize deps if you don't want them bundled (optional, currently Basecoat seems to want bundling)
        // external: ['flatpickr', 'split.js'] 
      }
    }
  };
});

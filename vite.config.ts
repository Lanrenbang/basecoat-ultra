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

// Custom plugin to inject assets based on mode
const htmlPlugin = (mode) => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      const isVerify = mode === 'verify';
      let cssTags = '';
      let jsTags = '';

      if (isVerify) {
        // Verify Mode: Simulate Consumer Usage
        // 1. CSS: Link to a standard CSS entry file (No FOUC)
        cssTags = `<link href="/demo/verify.css" rel="stylesheet">`;
        
        // 2. JS: Point to the verify entry file so Vite resolves imports correctly
        jsTags = `<script type="module" src="/demo/verify-entry.js"></script>`;
      } else {
        // Dev Mode: Use source files
        const assets = {
          css: [
            '/src/css/basecoat.cdn.css',
            '/src/css/datepicker.css',
            '/src/css/resizable.css',
            '/src/theme/catppuccin/index.css'
          ],
          js: [
            { src: '/src/js/index.js', type: 'module' },
            { src: '/src/js/datepicker.js', type: 'module' },
            { src: '/src/js/resizable.js', type: 'module' }
          ]
        };

        // Generate HTML tags
        cssTags = assets.css.map(href => `<link href="${href}" rel="stylesheet">`).join('\n    ');
        jsTags = assets.js.map(script => 
          script.type === 'module' 
            ? `<script type="module" src="${script.src}"></script>` 
            : `<script src="${script.src}" defer></script>`
        ).join('\n    ');
      }

      return html
        .replace('<!-- INJECT_ASSETS_CSS -->', cssTags)
        .replace('<!-- INJECT_ASSETS_JS -->', jsTags);
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
    // Development server config
    server: {
      // Defaults to port 5173
    },
    // Build config (Library Mode for JS)
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

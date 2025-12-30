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
  const isVerify = mode === 'verify';

  return {
    plugins: [
      tailwindcss(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          let entryTags = '';
          
          if (isVerify) {
            // Verify Mode: Use the installed NPM package
            // This simulates exactly how a user would import the library in their JS entry point.
            console.log('✨ Running in VERIFY mode: Using installed @lanrenbang/basecoat-ultra package');
            entryTags = `
    <script type="module">
      import '@lanrenbang/basecoat-ultra/css';
      import '@lanrenbang/basecoat-ultra/css/datepicker.css';
      import '@lanrenbang/basecoat-ultra/css/resizable.css';
      import '@lanrenbang/basecoat-ultra/theme/catppuccin/index.css';
      
      import '@lanrenbang/basecoat-ultra';
      import '@lanrenbang/basecoat-ultra/datepicker';
      import '@lanrenbang/basecoat-ultra/resizable';
    </script>`;
          } else {
            // Development Mode: Use local source files directly
            // Using <link> tags avoids FOUC (Flash of Unstyled Content) during dev.
            console.log('🛠️ Running in DEV mode: Using local source files');
            entryTags = `
    <!-- Basecoat CSS (Source) -->
    <link href="/src/css/basecoat.cdn.css" rel="stylesheet">
    <link href="/src/css/datepicker.css" rel="stylesheet">
    <link href="/src/css/resizable.css" rel="stylesheet">
    <!-- Theme CSS -->
    <link href="/src/theme/catppuccin/index.css" rel="stylesheet">
    
    <!-- Basecoat JS (Source) -->
    <script type="module" src="/src/js/index.js"></script>
    <script type="module" src="/src/js/datepicker.js"></script>
    <script type="module" src="/src/js/resizable.js"></script>`;
          }

          return html.replace('<!-- INJECT_ENTRY -->', entryTags);
        }
      }
    ],
    // Remove the previous alias config as we now handle it via HTML injection
    resolve: {
      alias: [], 
    },
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
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: '../../docs',
			assets: '../../docs',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '' : ''
		},
		alias: {
			"@lib": "./src/lib"
		},
		prerender: {
			handleMissingId: 'ignore'
		}
	},
  compilerOptions: {
    runes: true
  },
  vitePlugin: {
    inspector: {
      devtoolsJson: false
    }
  },
  onwarn: (warning, handler) => {
    // Ignore CSS unused selector warnings
    if (warning.code === 'css_unused_selector') return;
    
    // Ignore a11y warnings for demo/example code
    // These are intentionally simplified examples for documentation purposes
    const demoFiles = ['ComponentSections.svelte', '+page.svelte'];
    const isDemoFile = demoFiles.some(file => warning.filename?.includes(file));
    
    if (isDemoFile && warning.code?.startsWith('a11y_')) {
      return;
    }
    
    handler(warning);
  }
};

export default config;

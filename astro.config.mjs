import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
	integrations: [react()],
	vite: {
	  resolve: {
		alias: {
		  // Alias for layouts
		  '@layouts': path.resolve('./src/layouts'),
		  // Alias for components
		  '@components': path.resolve('./src/components'),
		},
	  },
	},
});

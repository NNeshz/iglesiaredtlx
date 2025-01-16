import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind()],
});

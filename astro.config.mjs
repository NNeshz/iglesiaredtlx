import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  output: 'server', // Correcto para usar lógica del lado del servidor.
  adapter: node({
    mode: 'standalone', // Standalone es ideal para manejar lógica personalizada.
  }),
  integrations: [tailwind()],
});

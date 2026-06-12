import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mhashiq.github.io',
  base: '/authbrain_website',
  integrations: [tailwind()]
});

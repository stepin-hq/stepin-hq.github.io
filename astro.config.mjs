import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://stepin-hq.github.io',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bg'],
    routing: {
      prefixDefaultLocale: false, // English stays at /,  Bulgarian at /bg/
    },
  },
});

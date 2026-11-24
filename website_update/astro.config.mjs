// @ts-check
import { defineConfig } from 'astro/config';

// Fully static output: no server, no database, nothing to exploit at runtime.
export default defineConfig({
  // Update to the real domain before deploying (used for canonical URL / OG tags).
  site: process.env.SITE_URL ?? 'https://israt-tabassum.github.io',
  // GitHub Pages project sites live under /<repo>/; the deploy workflow sets this.
  // Leave unset for a custom domain or Netlify / Cloudflare Pages.
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  output: 'static',
  security: {
    // Emits a strict Content-Security-Policy <meta> with hashes for every
    // inline script/style Astro generates.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "base-uri 'self'",
        "form-action 'none'",
        "object-src 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
});

import { defineConfig } from 'astro/config';

// اگر روی USERNAME.github.io دیپلوی می‌کنی، site رو با دامنه خودت پر کن.
// اگر روی Project Pages (مثلا /my-repo) می‌ریزی، base رو به '/my-repo' تغییر بده.
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/',
  build: { format: 'directory' }
});

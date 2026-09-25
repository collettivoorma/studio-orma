# Studio Orma v2

Modern static website for Studio Orma, built with Astro and prepared for Decap CMS.

## Local preview
1. Install Node.js 20+
2. `npm install`
3. `npm run dev`
4. Open the localhost address shown by Astro.

## CMS setup
The visual CMS lives at `/admin/`. Before production, edit `public/admin/config.yml` and replace `YOUR_GITHUB_USERNAME/studio-orma` with the real GitHub repository. Decap's GitHub backend also needs an OAuth/authentication provider (Decap Turbo, Netlify, or a small Cloudflare OAuth proxy).

## Publishing workflow
- Add/edit exhibitions in **Mostre ed eventi**.
- Add/edit editorial pieces in **Journal / Articoli**.
- Upload cover/gallery images directly from the editor.
- Publishing commits content to GitHub; your hosting provider rebuilds the site automatically.

## Suggested hosting
Cloudflare Pages or Netlify. Keep studioorma.it as the custom domain.

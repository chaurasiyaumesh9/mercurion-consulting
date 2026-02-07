# Deployment Guide - Next.js Portfolio

This guide provides step-by-step instructions for deploying your Next.js portfolio website to various platforms.

## Prerequisites

Before deploying, ensure you have:
1. Node.js 18.x or higher installed
2. Git installed (for most deployment methods)
3. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Quick Start - Local Build

Test the production build locally:

```bash
npm install
npm run build
```

The static files will be in the `out/` directory.

---

## Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., mercurionconsulting.com)
   - Follow DNS configuration instructions

**Pros**: Zero configuration, automatic deployments, instant updates on push
**Cons**: Free tier has usage limits

---

## Option 2: Netlify

### Steps:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `out`

### Via Netlify CLI:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Via Netlify UI:
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Set build command: `npm run build`
5. Set publish directory: `out`
6. Click "Deploy site"

**Pros**: Easy to use, good free tier, great for static sites
**Cons**: None significant for static sites

---

## Option 3: GitHub Pages

### Steps:

1. **Update `next.config.ts`**:
   ```typescript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name', // Add this line
     images: {
       unoptimized: true,
     },
     trailingSlash: true,
   };
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   # Install gh-pages
   npm install -g gh-pages

   # Deploy
   gh-pages -d out
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`

**Pros**: Free, integrated with GitHub
**Cons**: Requires repository to be public (for free tier)

---

## Option 4: AWS S3 + CloudFront

### Steps:

1. **Build**:
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**:
   - Name: your-domain.com
   - Enable static website hosting
   - Set index document: index.html

3. **Upload Files**:
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

4. **Configure CloudFront** (for HTTPS and custom domain):
   - Create CloudFront distribution
   - Origin: Your S3 bucket
   - Add your custom domain
   - Configure SSL certificate

**Pros**: Scalable, fast CDN, full control
**Cons**: More complex setup, costs money

---

## Option 5: Digital Ocean App Platform

### Steps:

1. **Connect Repository**:
   - Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
   - Create new app
   - Connect GitHub repository

2. **Configure Build**:
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Static Site type

3. **Deploy**:
   - Click "Create Resources"

**Pros**: Simple, good pricing, includes CDN
**Cons**: Costs money (but affordable)

---

## Option 6: Firebase Hosting

### Steps:

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize Firebase**:
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Public directory: `out`
   - Single-page app: No
   - Don't overwrite files

3. **Build and Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

**Pros**: Free tier is generous, easy to use, includes SSL
**Cons**: Limited to Firebase ecosystem

---

## Environment Variables

If you need environment variables (API keys, etc.):

### Vercel/Netlify:
Add them in the project settings dashboard

### Build-time variables:
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

Then access in code:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## Custom Domain Setup

### General DNS Configuration:

1. **For Apex Domain** (example.com):
   ```
   A Record: @ → [hosting provider IP]
   ```

2. **For Subdomain** (www.example.com):
   ```
   CNAME: www → [hosting provider domain]
   ```

3. **For Both**:
   Add both records, then configure redirect in hosting settings

### SSL Certificate:
Most modern hosts (Vercel, Netlify, etc.) provide free SSL automatically via Let's Encrypt.

---

## Post-Deployment Checklist

✅ Test all pages and links
✅ Verify mobile responsiveness
✅ Check page load speed (Google PageSpeed Insights)
✅ Test form submissions (if any)
✅ Verify SEO metadata (use SEO checker tools)
✅ Check browser console for errors
✅ Test on different browsers (Chrome, Firefox, Safari)
✅ Verify analytics tracking (if configured)
✅ Test custom domain and HTTPS
✅ Submit sitemap to Google Search Console

---

## Performance Optimization

After deployment, verify performance:

1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **WebPageTest**: https://www.webpagetest.org/

Target metrics:
- Lighthouse Performance Score: 90+
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

---

## Continuous Deployment

For automatic deployments on git push:

### Vercel/Netlify:
- Automatically enabled when you connect repository
- Every push to main branch triggers deployment
- Preview deployments for pull requests

### GitHub Actions:
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      # Add deployment steps for your chosen platform
```

---

## Troubleshooting

### Build Fails:
- Check Node.js version matches requirements
- Clear cache: `rm -rf .next out node_modules`
- Reinstall: `npm install`

### 404 Errors:
- Verify `output: 'export'` in next.config.ts
- Check file paths are correct
- Ensure trailing slashes in URLs

### Slow Performance:
- Enable compression on hosting
- Use CDN (most hosts include this)
- Optimize images (already configured with `unoptimized: true`)

### Images Not Loading:
- Check image paths are relative
- Verify images are in `public/` directory
- Ensure `unoptimized: true` in next.config.ts

---

## Support

For deployment issues:
- Next.js Docs: https://nextjs.org/docs/deployment
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com

---

## Recommended: Vercel Deployment

For the easiest and most optimal experience, we recommend deploying to Vercel:

1. Push code to GitHub
2. Import project to Vercel
3. Deploy (takes ~30 seconds)
4. Add custom domain (optional)
5. Done! ✨

Your site will be live with:
- ✅ HTTPS enabled
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Preview deployments for PRs
- ✅ Perfect Lighthouse scores

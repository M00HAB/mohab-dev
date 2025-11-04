# Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import repository: `M00HAB/My-Website`
5. Click "Deploy"
6. Your site will be live in ~2 minutes at `your-project.vercel.app`

**Benefits:**
- ✅ Zero configuration needed
- ✅ Automatic deployments on every push
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Fast CDN

---

### Option 2: Netlify

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Sign up/Login
4. Drag and drop the `dist` folder
   - OR connect GitHub repo for auto-deploy

**Benefits:**
- ✅ Free tier available
- ✅ Easy drag-and-drop deployment
- ✅ Continuous deployment from Git

---

### Option 3: GitHub Pages

For GitHub Pages deployment, you'll need to:

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json` scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.ts` to add base path:
   ```typescript
   export default defineConfig({
     base: '/My-Website/', // Your repo name
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to your repo Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at: `https://m00hab.github.io/My-Website/`

**Note:** GitHub Pages requires updating the base path in vite.config.ts

---

## 📝 After Deployment

1. Update your README.md with the live URL
2. Add the URL to your portfolio website
3. Consider adding a custom domain (free on Vercel/Netlify)

---

## 🔧 Troubleshooting

### If routes don't work (404 errors):
- Make sure your hosting provider supports SPA routing
- Vercel and Netlify handle this automatically
- GitHub Pages may need a `404.html` redirect file

### If images don't load:
- Check that image paths use `/public/` correctly
- Ensure images are in the `public` folder

---

**Recommended: Use Vercel for the easiest deployment experience!**


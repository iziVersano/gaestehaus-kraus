# Pre-Deployment Checklist

Use this checklist to ensure everything is ready for production deployment.

## ✅ Code & Configuration

- [x] GitHub Actions workflow created (`.github/workflows/deploy.yml`)
- [x] Vite config updated (`base: '/'`, `publicDir: 'public'`)
- [x] CNAME file in public directory (`public/CNAME`)
- [x] .nojekyll file in public directory (`public/.nojekyll`)
- [x] Build tested locally (`yarn build` successful)
- [x] No raw .jsx files in dist folder
- [x] All assets use absolute paths (`/assets/...`)
- [x] index.html properly configured
- [x] React StrictMode enabled in main.jsx
- [x] Root element validation in main.jsx

## ✅ Build Output

- [x] dist/index.html exists and is valid
- [x] dist/CNAME contains correct domain
- [x] dist/.nojekyll exists (empty file)
- [x] dist/assets/index-*.js exists (compiled JavaScript)
- [x] dist/assets/index-*.css exists (compiled CSS)
- [x] No source maps in production build
- [x] Build size optimized (minified)

## ✅ Documentation

- [x] DEPLOYMENT.md created
- [x] PRODUCTION_SETUP_SUMMARY.md created
- [x] GITHUB_PAGES_SETUP.md created
- [x] SETUP_COMPLETE.md created
- [x] PRE_DEPLOYMENT_CHECKLIST.md created

## 📋 Before Pushing to GitHub

### Local Testing
- [ ] Run `yarn dev` and verify site works locally
- [ ] Test all pages (Startseite, Zimmer, Über Uns, Galerie, Lage, Kontakt)
- [ ] Check browser console for errors (F12)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify all links work correctly
- [ ] Test contact form submission

### Build Testing
- [ ] Run `yarn build` successfully
- [ ] Verify no build errors or warnings
- [ ] Check dist folder contents
- [ ] Run `yarn preview` and test production build locally
- [ ] Verify all pages load in preview
- [ ] Check console for errors in preview

### Git Preparation
- [ ] All changes committed locally
- [ ] No uncommitted changes (`git status` clean)
- [ ] Ready to push to main branch

## 🚀 Deployment Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Configure production deployment to GitHub Pages"
git push origin main
```

- [ ] Changes pushed to main branch
- [ ] No push errors

### Step 2: Verify GitHub Actions
1. Go to repository on GitHub
2. Click **Actions** tab
3. Watch "Build and Deploy to GitHub Pages" workflow
4. Verify workflow completes successfully

- [ ] Workflow triggered
- [ ] Build step completed
- [ ] Deploy step completed
- [ ] Workflow shows ✓ (success)

### Step 3: Configure GitHub Pages
1. Go to **Settings** → **Pages**
2. Under "Build and deployment":
   - [ ] Source: "Deploy from a branch"
   - [ ] Branch: `gh-pages` (should exist after first workflow)
   - [ ] Folder: `/ (root)`
3. Under "Custom domain":
   - [ ] Enter: `gaestehaus-kraus.de`
   - [ ] Click Save
4. Under "Enforce HTTPS":
   - [ ] Check the box ✓
   - [ ] Click Save

- [ ] GitHub Pages source configured
- [ ] Custom domain set
- [ ] HTTPS enforcement enabled

### Step 4: Configure DNS
At your domain registrar (e.g., GoDaddy, Namecheap, etc.):

1. Go to DNS settings
2. Add or update CNAME record:
   ```
   Type:  CNAME
   Name:  gaestehaus-kraus.de
   Value: iziVersano.github.io
   TTL:   3600 (or default)
   ```
3. Save changes

- [ ] CNAME record added/updated
- [ ] Correct value: iziVersano.github.io
- [ ] Changes saved at registrar

**Note**: DNS changes can take 5 minutes to 24 hours to propagate.

## ✅ Post-Deployment Verification

### Immediate (5-30 minutes after DNS update)
- [ ] Visit https://gaestehaus-kraus.de
- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] No 404 errors
- [ ] No MIME type errors
- [ ] No console errors (F12)

### Functionality Testing
- [ ] Startseite page loads
- [ ] Zimmer page loads
- [ ] Über Uns page loads
- [ ] Galerie page loads
- [ ] Lage page loads
- [ ] Kontakt page loads
- [ ] Contact form displays
- [ ] All links work
- [ ] Images load correctly
- [ ] Responsive design works

### Performance Check
- [ ] Page loads quickly
- [ ] No console warnings
- [ ] No console errors
- [ ] Assets load from correct paths
- [ ] CSS applied correctly
- [ ] JavaScript functions work

### Browser Compatibility
- [ ] Chrome/Edge works
- [ ] Firefox works
- [ ] Safari works (if available)
- [ ] Mobile browser works

## 🔍 Troubleshooting Checklist

If something doesn't work:

### Build Fails
- [ ] Check GitHub Actions logs for error messages
- [ ] Run `yarn build` locally to reproduce error
- [ ] Check for syntax errors in code
- [ ] Verify all dependencies installed
- [ ] Check Node.js version (should be 18+)

### Site Shows 404
- [ ] Verify CNAME file exists in dist folder
- [ ] Check GitHub Pages settings
- [ ] Verify gh-pages branch exists
- [ ] Check custom domain setting in GitHub Pages

### MIME Type Errors
- [ ] Verify .nojekyll file exists in dist
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Hard refresh page (Ctrl+F5)
- [ ] Check browser console for specific errors

### Custom Domain Not Working
- [ ] Verify DNS CNAME record is correct
- [ ] Check GitHub Pages custom domain setting
- [ ] Wait for DNS propagation (up to 24 hours)
- [ ] Try accessing with www: https://www.gaestehaus-kraus.de
- [ ] Check DNS propagation: https://dnschecker.org

### Site Shows Old Version
- [ ] Clear browser cache
- [ ] Hard refresh (Ctrl+F5)
- [ ] Wait for GitHub Pages to update (1-2 minutes)
- [ ] Check GitHub Actions workflow completed

## 📞 Support Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [DNS Checker](https://dnschecker.org)

## ✨ Success Criteria

Your deployment is successful when:

✅ Site loads at https://gaestehaus-kraus.de
✅ All pages accessible without 404 errors
✅ No MIME type errors in console
✅ No JavaScript errors in console
✅ All images load correctly
✅ Responsive design works on mobile
✅ Contact form displays and functions
✅ All links work correctly
✅ HTTPS certificate valid (green lock icon)

## 🎉 You're Ready!

Once all items are checked, your site is live and ready for visitors!

For ongoing maintenance:
1. Make changes locally
2. Test with `yarn dev`
3. Commit and push to main
4. GitHub Actions automatically deploys
5. Site updates within 1-2 minutes

No manual deployment needed after initial setup!


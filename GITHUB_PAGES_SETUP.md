# GitHub Pages Setup Instructions

## Quick Start

Your project is now configured for automatic deployment to GitHub Pages. Follow these steps to go live:

## Step 1: Commit and Push Changes

```bash
git add .
git commit -m "Configure production deployment to GitHub Pages with custom domain"
git push origin main
```

This will trigger the GitHub Actions workflow automatically.

## Step 2: Verify GitHub Actions Build

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see a workflow run called "Build and Deploy to GitHub Pages"
4. Wait for it to complete (should take 1-2 minutes)
5. Verify it shows ✓ (success)

## Step 3: Configure GitHub Pages in Repository Settings

1. Go to **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` (should appear after first workflow run)
   - **Folder**: Select `/ (root)`
3. Under "Custom domain":
   - Enter: `gaestehaus-kraus.de`
   - Click **Save**
4. Under "Enforce HTTPS":
   - Check the box ✓
5. Click **Save**

## Step 4: Configure DNS at Your Domain Registrar

Add a CNAME record pointing to GitHub Pages:

```
Type:  CNAME
Name:  gaestehaus-kraus.de
Value: iziVersano.github.io
TTL:   3600 (or default)
```

**Note**: DNS changes can take up to 24 hours to propagate.

## Step 5: Verify the Site is Live

After DNS propagates (usually 5-30 minutes):

1. Visit https://gaestehaus-kraus.de
2. Verify the site loads correctly
3. Check all pages work (Startseite, Zimmer, Über Uns, etc.)
4. Open browser console (F12) and verify no errors

## What Happens Automatically

Every time you push to the main branch:

1. ✓ GitHub Actions checks out your code
2. ✓ Installs dependencies with `yarn install`
3. ✓ Builds the project with `yarn build`
4. ✓ Uploads the `/dist` folder to GitHub Pages
5. ✓ Site updates at https://gaestehaus-kraus.de

## Files That Were Set Up

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Purpose**: Automates build and deployment
- **Triggers**: On every push to main branch

### Configuration Files
- **File**: `vite.config.js` (modified)
- **Changes**: Added `base: '/'` and `publicDir: 'public'`
- **Purpose**: Ensures correct paths and includes CNAME/Jekyll files

### Public Directory
- **File**: `public/CNAME`
- **Content**: `gaestehaus-kraus.de`
- **Purpose**: Tells GitHub Pages to use custom domain

- **File**: `public/.nojekyll`
- **Purpose**: Prevents Jekyll processing (fixes MIME errors)

### Documentation
- **File**: `DEPLOYMENT.md` - Full deployment guide
- **File**: `PRODUCTION_SETUP_SUMMARY.md` - Setup summary

## Local Development

Development still works the same way:

```bash
# Start dev server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Troubleshooting

### GitHub Actions Build Fails
1. Check the Actions tab for error messages
2. Run `yarn build` locally to debug
3. Verify all files are committed

### Site Shows 404
1. Verify CNAME file exists in dist folder
2. Check GitHub Pages settings
3. Ensure gh-pages branch exists

### MIME Type Errors
1. Verify `.nojekyll` file exists in dist
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check browser console for specific errors

### Custom Domain Not Working
1. Verify DNS CNAME record is set correctly
2. Check GitHub Pages custom domain setting
3. Wait for DNS propagation (up to 24 hours)
4. Try accessing with www: https://www.gaestehaus-kraus.de

## Verification Checklist

- [ ] Committed and pushed changes to main branch
- [ ] GitHub Actions workflow completed successfully
- [ ] gh-pages branch created automatically
- [ ] GitHub Pages settings configured
- [ ] Custom domain set to gaestehaus-kraus.de
- [ ] HTTPS enforcement enabled
- [ ] DNS CNAME record added at registrar
- [ ] Site loads at https://gaestehaus-kraus.de
- [ ] All pages work correctly
- [ ] No console errors in browser

## Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## Next Deployments

After the initial setup, deployment is automatic:

1. Make changes locally
2. Test with `yarn dev`
3. Commit and push to main
4. GitHub Actions automatically builds and deploys
5. Site updates within 1-2 minutes

No manual deployment steps needed!


# Deployment Guide - Gästehaus Kraus

## Overview

This project is configured for automatic deployment to GitHub Pages with a custom domain (gaestehaus-kraus.de).

## Automatic Deployment Setup

### GitHub Actions Workflow

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. **Triggers on push to main branch** - Automatically builds and deploys when code is pushed
2. **Builds the project** - Runs `yarn build` to compile React/JSX to production-ready JavaScript
3. **Deploys to GitHub Pages** - Uploads the compiled `/dist` folder to GitHub Pages
4. **Preserves custom domain** - CNAME file ensures gaestehaus-kraus.de remains configured

### How It Works

```
Push to main branch
    ↓
GitHub Actions triggers
    ↓
Install dependencies (yarn install)
    ↓
Build project (yarn build)
    ↓
Upload dist/ to GitHub Pages
    ↓
Site live at https://gaestehaus-kraus.de
```

## Configuration Files

### 1. `.github/workflows/deploy.yml`
- Defines the CI/CD pipeline
- Runs on every push to main branch
- Builds and deploys automatically

### 2. `vite.config.js`
- `base: '/'` - Serves from root domain (gaestehaus-kraus.de)
- `publicDir: 'public'` - Copies public files (CNAME, .nojekyll) to dist
- Optimized build configuration for production

### 3. `public/CNAME`
- Contains: `gaestehaus-kraus.de`
- Automatically copied to dist during build
- Tells GitHub Pages to use custom domain

### 4. `public/.nojekyll`
- Empty file that disables Jekyll processing
- Prevents GitHub Pages from treating this as a Jekyll site
- Ensures .jsx and other files are served correctly

## Local Development

### Run Development Server
```bash
yarn dev
```
- Runs on http://localhost:5173/
- Hot module reloading enabled
- No build step needed

### Build for Production
```bash
yarn build
```
- Compiles React/JSX to JavaScript
- Outputs to `/dist` folder
- Minified and optimized

### Preview Production Build
```bash
yarn preview
```
- Serves the `/dist` folder locally
- Simulates production environment
- Useful for testing before deployment

## GitHub Pages Configuration

### Repository Settings

1. **Go to Settings → Pages**
2. **Source**: Deploy from a branch
3. **Branch**: gh-pages (created automatically by GitHub Actions)
4. **Folder**: / (root)
5. **Custom domain**: gaestehaus-kraus.de
6. **Enforce HTTPS**: ✓ Enabled

### DNS Configuration

For custom domain to work, your DNS provider must have:

```
CNAME record:
  Name: gaestehaus-kraus.de
  Value: iziVersano.github.io
```

Or A records pointing to GitHub Pages IP addresses.

## Troubleshooting

### Issue: MIME Type Errors
**Cause**: Raw .jsx files being served instead of compiled JavaScript
**Solution**: Ensure `.nojekyll` file exists in dist folder (automatically added)

### Issue: 404 Errors on Routes
**Cause**: GitHub Pages doesn't know about client-side routes
**Solution**: Already handled by Vite's build configuration

### Issue: Assets Not Loading
**Cause**: Incorrect base path
**Solution**: Verify `base: '/'` in vite.config.js

### Issue: Custom Domain Not Working
**Cause**: DNS not configured or CNAME file missing
**Solution**: 
1. Check DNS CNAME record points to iziVersano.github.io
2. Verify CNAME file exists in dist folder
3. Wait 24 hours for DNS propagation

## Deployment Checklist

- [x] GitHub Actions workflow configured
- [x] Vite build configuration optimized
- [x] CNAME file in public directory
- [x] .nojekyll file in public directory
- [x] base path set to '/'
- [x] publicDir set to 'public'
- [x] Repository has GitHub Pages enabled
- [x] Custom domain configured in GitHub Pages settings
- [x] DNS CNAME record configured

## Deployment Process

1. **Make changes locally**
   ```bash
   git add .
   git commit -m "Update site"
   ```

2. **Push to main branch**
   ```bash
   git push origin main
   ```

3. **GitHub Actions automatically:**
   - Builds the project
   - Deploys to GitHub Pages
   - Site updates at https://gaestehaus-kraus.de

4. **Verify deployment**
   - Check GitHub Actions tab for build status
   - Visit https://gaestehaus-kraus.de
   - Verify all pages load correctly

## Performance Optimization

The build is optimized for production:
- Minified JavaScript and CSS
- No source maps
- Efficient asset bundling
- Gzip compression ready

## Support

For issues or questions about deployment:
1. Check GitHub Actions logs for build errors
2. Verify all configuration files are in place
3. Test locally with `yarn build && yarn preview`
4. Check GitHub Pages settings in repository


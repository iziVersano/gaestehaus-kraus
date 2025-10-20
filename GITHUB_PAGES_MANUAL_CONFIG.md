# ⚠️ CRITICAL: Manual GitHub Pages Configuration Required

## The Problem

GitHub Pages is currently serving from the `main` branch, which contains source files (main.jsx).
This causes MIME type errors because browsers can't load raw .jsx files.

## The Solution

Configure GitHub Pages to serve from the `gh-pages` branch, which contains compiled files.

## Step-by-Step Instructions

### Step 1: Go to Repository Settings
1. Open https://github.com/iziVersano/gaestehaus-kraus
2. Click the **Settings** tab (top right)

### Step 2: Navigate to Pages
1. In the left sidebar, scroll down
2. Click **Pages** (under "Code and automation")

### Step 3: Configure Build and Deployment
1. Under "Build and deployment" section:
   - **Source**: Click dropdown and select "Deploy from a branch"
   - **Branch**: Click dropdown and select `gh-pages`
   - **Folder**: Click dropdown and select `/ (root)`

### Step 4: Save Configuration
1. Click **Save** button
2. Wait for page to refresh

### Step 5: Verify Configuration
1. Refresh the page
2. Verify it shows:
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Custom domain: `gaestehaus-kraus.de`
   - HTTPS: Enabled ✓

## What This Does

### Before Configuration
```
GitHub Pages Source: main branch
  ↓
Serves: /index.html (points to /src/main.jsx)
  ↓
Browser loads: raw .jsx file
  ↓
Error: MIME type "text/jsx" ✗
```

### After Configuration
```
GitHub Pages Source: gh-pages branch
  ↓
Serves: /index.html (points to /assets/index-*.js)
  ↓
Browser loads: compiled .js file
  ↓
Site works correctly ✓
```

## Timeline

```
Now:        Configure GitHub Pages settings
1-2 min:    GitHub Pages updates
2-3 min:    Site loads at https://gaestehaus-kraus.de
```

## Verification

After configuration:

1. Wait 1-2 minutes
2. Visit https://gaestehaus-kraus.de
3. Open console (F12)
4. Verify NO errors
5. Test all pages

## Expected Results

✅ Site loads correctly
✅ No MIME type errors
✅ No 404 errors
✅ All pages work
✅ All images load
✅ HTTPS works
✅ Custom domain works

## If It Doesn't Work

### Check GitHub Pages Settings
1. Go to Settings → Pages
2. Verify Source: "Deploy from a branch"
3. Verify Branch: `gh-pages`
4. Verify Folder: `/ (root)`

### Check gh-pages Branch Exists
1. Go to repository main page
2. Click branch dropdown (top left)
3. Look for `gh-pages` branch
4. If not there, check GitHub Actions logs

### Clear Browser Cache
1. Press Ctrl+Shift+Delete
2. Select "All time"
3. Check "Cookies and other site data"
4. Click "Clear data"
5. Refresh https://gaestehaus-kraus.de

### Wait and Retry
1. GitHub Pages can take 2-3 minutes to update
2. Wait a few minutes
3. Hard refresh (Ctrl+F5)
4. Try again

## Screenshots Guide

### GitHub Pages Settings (Correct Configuration)

```
Build and deployment
├── Source: Deploy from a branch ✓
├── Branch: gh-pages ✓
├── Folder: / (root) ✓
└── Custom domain: gaestehaus-kraus.de ✓
```

## Summary

This is a **one-time manual configuration** that tells GitHub Pages to serve from the compiled `gh-pages` branch instead of the source `main` branch.

Once configured, all future deployments will automatically update the gh-pages branch with compiled files.

**This single step fixes all MIME type and 404 errors!**

---

**Status**: ⚠️ Awaiting manual configuration
**Action**: Configure GitHub Pages settings
**Expected Result**: Site loads correctly at https://gaestehaus-kraus.de


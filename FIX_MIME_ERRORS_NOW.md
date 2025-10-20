# 🚀 Fix MIME Type Errors - Quick Action Guide

## Problem

GitHub Pages serving raw .jsx files instead of compiled JavaScript.

**Error**: `MIME type of "text/jsx"`

## Root Cause

GitHub Pages is configured to serve from `main` branch (source files) instead of `gh-pages` branch (compiled files).

## Solution - 2 Steps

### Step 1: Update Workflow ✅ DONE

Workflow has been updated with:
- `force_orphan: true` for clean gh-pages branch
- Verification step to confirm dist/ is built

**Action**: Commit and push
```bash
git add .github/workflows/deploy.yml
git commit -m "Fix GitHub Pages deployment - add force_orphan and verification"
git push origin main
```

### Step 2: Configure GitHub Pages ⚠️ MANUAL

**This is the critical step that fixes the MIME errors!**

1. Go to: https://github.com/iziVersano/gaestehaus-kraus
2. Click: **Settings** tab
3. Click: **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages`
   - **Folder**: Select `/ (root)`
5. Click: **Save**

## Timeline

```
Now:        Commit workflow changes
1-2 min:    GitHub Actions builds and deploys
2-3 min:    GitHub Pages updates
3-5 min:    Site loads correctly at https://gaestehaus-kraus.de
```

## Verification

After configuration:

1. Wait 2-3 minutes
2. Visit https://gaestehaus-kraus.de
3. Open console (F12)
4. Verify NO errors
5. Test all pages

## Expected Results

✅ No MIME type errors
✅ No 404 errors
✅ All pages load
✅ All images display
✅ HTTPS works
✅ Custom domain works

## What This Does

### Before
```
GitHub Pages → main branch → /src/main.jsx → MIME error ✗
```

### After
```
GitHub Pages → gh-pages branch → /assets/index-*.js → Works ✓
```

## Files Changed

- `.github/workflows/deploy.yml` - Added force_orphan and verification

## Manual Configuration

- Settings → Pages
- Source: "Deploy from a branch"
- Branch: `gh-pages`
- Folder: `/ (root)`
- Save

## Quick Checklist

- [ ] Committed workflow changes
- [ ] Pushed to main
- [ ] GitHub Actions completed
- [ ] Configured GitHub Pages settings
- [ ] Set Branch to gh-pages
- [ ] Clicked Save
- [ ] Waited 2-3 minutes
- [ ] Site loads at https://gaestehaus-kraus.de
- [ ] No console errors

## If It Doesn't Work

1. Verify GitHub Pages settings (Settings → Pages)
2. Confirm Branch is `gh-pages`
3. Clear browser cache (Ctrl+Shift+Delete)
4. Hard refresh (Ctrl+F5)
5. Wait 2-3 minutes

## Documentation

- `MIME_TYPE_ERROR_FIX.md` - Complete technical details
- `GITHUB_PAGES_CONFIGURATION_FIX.md` - Detailed explanation
- `GITHUB_PAGES_MANUAL_CONFIG.md` - Step-by-step instructions

---

**Status**: ✅ Workflow Updated | ⚠️ Awaiting Manual Configuration
**Action**: Configure GitHub Pages (Settings → Pages)
**Expected**: Site loads correctly in 2-3 minutes


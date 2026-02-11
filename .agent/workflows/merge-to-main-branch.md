---
description: Merge to main branch
---

## Pre-Merge Checklist

Before starting the merge process, ensure:
- All features in development branch are tested and stable
- Development branch builds successfully
- All tests pass (unit, integration, E2E)
- No debug code or console.logs remain

---
## Step 1: Validate Development Branch

**Run comprehensive tests on development branch:**

```bash
# Ensure you're on development branch
git checkout development

# Ensure development is up to date
git pull origin development

# Install dependencies (if needed)
pnpm install

# Run linting
pnpm run lint

# Build the project
pnpm run build

# Run the build
pnpm preview
```

**Validation checklist:**
- No linting errors
- Build completes successfully
- It works as expected in browser
- No console errors in browser DevTools
- All features are working correctly
- Performance is acceptable

⚠️ **If validation fails:** Fix issues before proceeding.

---

## Step 2: Sync Development with Main

**Ensure development has latest changes from main:**

```bash
# Ensure you're on development branch
git checkout development

# Merge main into development
git merge origin/main
```

**Two scenarios:**

### A) Clean Merge (No Conflicts)
```
Auto-merging src/components/Hero.astro
Merge made by the 'ort' strategy.
 src/components/Hero.astro | 10 +++++-----
 1 file changed, 5 insertions(+), 5 deletions(-)
```
✅ Continue to validation

### B) Merge Conflicts
```
Auto-merging src/components/Hero.astro
CONFLICT (content): Merge conflict in src/components/Hero.astro
Automatic merge failed; fix conflicts and then commit the result.
```

**Resolve conflicts:**
1. Open conflicted files in your editor
2. Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Resolve conflicts by choosing the correct code (give development branch code priority)
4. Remove conflict markers
5. Test the resolved code

```bash
# After resolving conflicts
git add .
git commit -m "merge: resolve conflicts from main"

# Verify the merge
pnpm run build
pnpm preview
```

---

## Step 3: Re-validate After Sync

**Test again after merging main:**

```bash
# Build to ensure no integration issues
pnpm run build

# Test locally
pnpm preview
```

**Production-ready checklist:**
- [ ] All features working correctly
- [ ] No console errors or warnings
- [ ] Performance is optimal
- [ ] SEO tags are correct
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility checked
- [ ] Lighthouse scores are acceptable

⚠️ **If issues arise:** Fix them now before merging to main.

---

## Step 4: Switch to Main Branch

**Prepare main branch for merge:**

```bash
# Switch to main
git checkout main

# Ensure main is up to date
git pull origin main

# Verify clean state
git status
```

**Expected output:**
```
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

---

## Step 5: Merge Development into Main

**Perform the merge:**

```bash
# Merge development into main
git merge development --no-ff
```

> **Note:** `--no-ff` creates a merge commit, preserving development branch history.

**Two scenarios:**

### A) Clean Merge (No Conflicts)
```
Merge made by the 'ort' strategy.
 src/components/Hero.astro | 45 +++++++++++++++++++++
 src/pages/index.astro     | 12 +++---
 2 files changed, 52 insertions(+), 5 deletions(-)
```
✅ Continue to Step 7

### B) Merge Conflicts
```
Auto-merging src/components/Hero.astro
CONFLICT (content): Merge conflict in src/components/Hero.astro
Automatic merge failed; fix conflicts and then commit the result.
```

**This shouldn't happen if Step 3 was done correctly, but if it does:**

```bash
# Abort the merge
git merge --abort

# Go back to Step 3 and ensure development is properly synced
git checkout development
```

---

## Step 6: Final Production Validation

**Run final production checks on main branch:**

```bash
# Build for production
pnpm run build

# Test the production build
pnpm preview
```

**Final production checklist:**
- [ ] Build successful with no errors
- [ ] No warnings in build output
- [ ] Application runs without errors
- [ ] All critical features working
- [ ] Performance metrics acceptable

⚠️ **If any issues found:** Fix immediately or abort the merge.

---

## Step 7: Push to Remote

**Push the merged main branch:**

```bash
# Push main to remote
git push origin main
```

**Expected output:**
```
Counting objects: 15, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (12/12), done.
Writing objects: 100% (15/15), 2.34 KiB | 2.34 MiB/s, done.
Total 15 (delta 8), reused 0 (delta 0)
To github.com:username/repo.git
   abc1234..def5678  main -> main
```
✅ **Merge complete!**


## Common Issues & Solutions

### Issue: Conflicts in package-lock.json or pnpm-lock.yaml
```bash
# Accept the version from main
git checkout --theirs pnpm-lock.yaml

# Regenerate lock file
pnpm install

# Complete the merge
git add pnpm-lock.yaml
git commit -m "merge: resolve lock file conflicts"
```

### Issue: Build fails on main
```bash
# Abort the merge
git merge --abort

# Go back to development and fix
git checkout development

# After fixing, repeat from Step 2
```


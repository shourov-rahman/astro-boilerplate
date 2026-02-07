---
description: Merge feature branch to development branch
---

## Pre-Merge Checklist

Before starting the merge process, ensure:
- ✅ Feature is complete and tested
- ✅ All changes are committed (no uncommitted work)
- ✅ Feature branch builds successfully
- ✅ No debug code or console.logs remain
- ✅ Code follows project standards

---

## Step 1: Verify Current State

**Check your current branch and status:**

```bash
# Verify you're on the feature branch
git branch --show-current

# Check for uncommitted changes
git status
```

**Expected output:**
```
On branch feature/your-feature-name
nothing to commit, working tree clean
```

⚠️ **If you have uncommitted changes:**
```bash
# Option A: Commit them
git add .
git commit -m "type: description"
```

---

## Step 2: Validate Feature Branch

**Run comprehensive tests on your feature branch:**

```bash
# Ensure you're on the right feature branch
git checkout feature/your-feature-name

# Install dependencies (if needed)
pnpm install

# Run linting
pnpm run lint

# Build the project
pnpm run build

# Test locally
pnpm run dev
```

**Validation checklist:**
- ✅ No linting errors
- ✅ Build completes successfully
- ✅ Dev server starts without errors
- ✅ Feature works as expected in browser
- ✅ No console errors in browser DevTools

⚠️ **If validation fails:** Fix issues before proceeding.

---

## Step 3: Merge Feature with Development


```bash

# Ensure you're on right feature branch
git checkout feature/your-feature-name

# Merge development into feature
git merge origin/development
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
3. Resolve conflicts by choosing the correct code
4. Remove conflict markers
5. Test the resolved code

```bash
# After resolving conflicts
git add .
git commit -m "merge: resolve conflicts from development"

# Verify the merge
pnpm run build
pnpm run dev
```

---

## Step 4: Re-validate After Sync

**Test again after merging development:**

```bash
# Build to ensure no integration issues
pnpm run build

# Test locally
pnpm run dev
```

⚠️ **If issues arise:** Fix them now before merging to development.

---

## Step 5: Switch to Development Branch

**Prepare development branch for merge:**

```bash
# Switch to development
git checkout development

# Ensure development is up to date
git pull origin development

# Verify clean state
git status
```

**Expected output:**
```
On branch development
Your branch is up to date with 'origin/development'.
nothing to commit, working tree clean
```

---

## Step 6: Merge Feature into Development

**Perform the merge:**

```bash
# Merge feature branch into development
git merge feature/your-feature-name --no-ff
```

> **Note:** `--no-ff` creates a merge commit, preserving feature branch history.

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

# Go back to Step 3 and ensure feature is properly synced
git checkout feature/your-feature-name
```

---

## Step 8: Push to Remote

**Push the merged development branch:**

```bash
# Push development to remote
git push origin development
```

**Expected output:**
```
Counting objects: 15, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (12/12), done.
Writing objects: 100% (15/15), 2.34 KiB | 2.34 MiB/s, done.
Total 15 (delta 8), reused 0 (delta 0)
To github.com:username/repo.git
   abc1234..def5678  development -> development
```
✅ **Merge complete!**


## Common Issues & Solutions


### Issue: Conflicts in package-lock.json or pnpm-lock.yaml
```bash
# Accept the version from development
git checkout --theirs pnpm-lock.yaml

# Regenerate lock file
pnpm install

# Complete the merge
git add pnpm-lock.yaml
git commit -m "merge: resolve lock file conflicts"
```












## Part 2: Merge Development → Main

### Quick Steps

```bash
# 1. Switch to main branch
git checkout main

# 2. Merge development
git merge development

# 3. Test thoroughly
npm run build
npm test

# 4. Push to remote
git push origin main

# 5. Optional: Tag the release
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

### Detailed Walkthrough

#### Step 1: Verify Development is Ready

```bash
# Switch to development
git checkout development

# Pull latest (if working across devices)
git pull origin development

# Final testing
npm run build
npm run dev
```

Make sure everything works perfectly before merging to main.

#### Step 2: Switch to Main and Merge

```bash
# Switch to main
git checkout main

# Pull latest (if working across devices)
git pull origin main

# Merge development
git merge development
```

#### Step 3: Final Verification

```bash
# Build production bundle
npm run build

# Test the build
npm run preview

# Run tests if available
npm test
```

#### Step 4: Push to Remote

```bash
git push origin main
```

#### Step 5: Tag Release (Optional but Recommended)

```bash
# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tag to remote
git push origin v1.0.0

# Or push all tags
git push origin --tags
```

**Version naming:**
- `v1.0.0` - Major release
- `v1.1.0` - Minor update (new features)
- `v1.0.1` - Patch (bug fixes)

---

## Conflict Resolution

### When Conflicts Happen

You'll see something like:
```
CONFLICT (content): Merge conflict in src/components/Hero.astro
Automatic merge failed; fix conflicts and then commit the result.
```

### Step-by-Step Resolution

#### 1. Check Which Files Have Conflicts

```bash
git status
```

Look for files marked as "both modified":
```
Unmerged paths:
  both modified:   src/components/Hero.astro
  both modified:   src/styles/global.css
```

#### 2. Open Conflicted File

```bash
# Open in your editor
code src/components/Hero.astro
```

#### 3. Find Conflict Markers

Look for these markers:
```astro
<<<<<<< HEAD (current change - development branch)
<div class="hero-section">
  <h1>Welcome to Our Site</h1>
=======
<section class="hero-container">
  <h1>Welcome to Geospatial Works</h1>
>>>>>>> feature/landing-page (incoming change - feature branch)
</div>
```

#### 4. Resolve the Conflict

**Option A: Keep Development Version (HEAD)**
```astro
<div class="hero-section">
  <h1>Welcome to Our Site</h1>
</div>
```

**Option B: Keep Feature Version**
```astro
<section class="hero-container">
  <h1>Welcome to Geospatial Works</h1>
</section>
```

**Option C: Combine Both (Best Practice)**
```astro
<section class="hero-container">
  <h1>Welcome to Geospatial Works</h1>
</section>
```

**Remove all conflict markers** (`<<<<<<<`, `=======`, `>>>>>>>`).

#### 5. Verify the Fix

```bash
# Check syntax
npm run lint

# Build to ensure no errors
npm run build
```

#### 6. Stage Resolved Files

```bash
# Stage individual file
git add src/components/Hero.astro

# Or stage all resolved files
git add .
```

#### 7. Complete the Merge

```bash
# Commit the merge
git commit -m "Merge feature/landing-page into development"

# Or just continue the merge (Git will auto-generate message)
git commit --no-edit
```

#### 8. Push Changes

```bash
git push origin development
```

### Conflict Resolution Tips

**DO ✅**
- Read both versions carefully
- Understand what each change is trying to do
- Combine changes when possible
- Test after resolving
- Remove ALL conflict markers

**DON'T ❌**
- Blindly accept one side without reading
- Leave conflict markers in code
- Skip testing after resolution
- Rush through conflicts

---

## Special File Handling

### package.json / package-lock.json

If both conflict:

```bash
# 1. Manually resolve package.json
code package.json

# 2. Delete package-lock.json
rm package-lock.json

# 3. Regenerate lock file
npm install

# 4. Stage both files
git add package.json package-lock.json

# 5. Continue merge
git commit --no-edit
```

### Configuration Files

**astro.config.mjs, tsconfig.json, tailwind.config.js**

- Merge all configuration options
- Don't duplicate keys
- Test build after resolution

### Component Files

**.astro, .tsx, .jsx files**

- Preserve functionality from both versions
- Maintain consistent styling
- Test component visually

### Style Files

**global.css, component styles**

- Merge all style rules
- Watch for duplicate selectors
- Check visual appearance in browser

---

## Common Workflows

### Create New Feature Branch

```bash
# Start from development
git checkout development

# Pull latest changes
git pull origin development

# Create and switch to new feature branch
git checkout -b feature/service-section

# Start working...
```

### Update Feature Branch from Development

While working on a long-running feature:

```bash
# On your feature branch
git checkout feature/service-section

# Get latest development changes
git merge development

# Resolve conflicts if any
# Continue working...
```

### Check Branch Status

```bash
# See all branches
git branch -a

# See current branch
git branch --show-current

# See branch history
git log --oneline --graph --all -n 10
```

### Undo a Merge (Before Pushing)

```bash
# Undo the last merge
git reset --hard HEAD~1

# Or abort an in-progress merge
git merge --abort
```

### Undo a Merge (After Pushing)

```bash
# Revert the merge commit
git revert -m 1 HEAD

# Push the revert
git push origin development
```

---

## Best Practices

### DO ✅

1. **Keep feature branches small** - easier to merge
2. **Test before merging** - catch issues early
3. **Commit often** - easier to track changes
4. **Use descriptive branch names** - `feature/landing-page` not `feature/new-stuff`
5. **Delete merged branches** - keeps repo clean
6. **Use conventional commits** - `feat:`, `fix:`, `docs:`, etc.
7. **Update from development regularly** - reduces conflicts
8. **Tag releases on main** - easy to track versions

### DON'T ❌

1. **Don't commit directly to main** - always merge from development
2. **Don't merge untested code** - breaks your workflow
3. **Don't keep stale branches** - delete after merging
4. **Don't force push to main/development** - can lose work
5. **Don't skip conflict resolution** - leads to broken code
6. **Don't leave debug code** - clean up before merging

---

## Quick Reference

### Essential Commands

```bash
# Create feature branch
git checkout development
git checkout -b feature/name

# Merge feature to development
git checkout development
git merge feature/name
git push origin development
git branch -d feature/name

# Merge development to main
git checkout main
git merge development
git push origin main

# Abort merge
git merge --abort

# Undo last merge (not pushed)
git reset --hard HEAD~1

# Check status
git status
git log --oneline --graph -n 10

# Tag release
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

---

## Troubleshooting

### "Already up to date" but I have changes

```bash
# Check if you're on the right branch
git branch --show-current

# Check commit history
git log --oneline -n 5

# Try fetching
git fetch origin
git merge origin/development
```

### Lost commits after merge

```bash
# Find lost commits
git reflog

# Restore specific commit
git cherry-pick <commit-hash>

# Or reset to before merge
git reset --hard HEAD@{1}
```

### Merge created too many commits

```bash
# Squash last 3 commits (before pushing)
git reset --soft HEAD~3
git commit -m "feat: add service section"
```

### Wrong branch merged

```bash
# If not pushed yet
git reset --hard HEAD~1

# If already pushed
git revert -m 1 HEAD
git push origin branch-name
```

### Conflicts are overwhelming

```bash
# Abort and start over
git merge --abort

# Try updating feature branch first
git checkout feature/name
git merge development
# Resolve conflicts here
git checkout development
git merge feature/name
```

---

## Complete Example Workflow

### Scenario: Adding a new landing page

```bash
# 1. Create feature branch from development
git checkout development
git pull origin development
git checkout -b feature/landing-page

# 2. Work on the feature
# ... create files, make changes ...
git add .
git commit -m "feat: add hero section"
git commit -m "feat: add services section"
git commit -m "feat: add footer"

# 3. Test locally
npm run dev
npm run build

# 4. Merge to development
git checkout development
git merge feature/landing-page

# 5. If conflicts, resolve them
# ... edit conflicted files ...
git add .
git commit --no-edit

# 6. Test again
npm run build
npm run dev

# 7. Push to remote
git push origin development

# 8. Clean up
git branch -d feature/landing-page
git push origin --delete feature/landing-page

# 9. When ready for production
git checkout main
git merge development
npm run build
git push origin main

# 10. Tag the release
git tag -a v1.0.0 -m "Release: Landing page"
git push origin v1.0.0
```

---

## Summary

**Your Standard Workflow:**

1. **Create feature branch** from development
2. **Work and commit** regularly with good messages
3. **Test** your feature thoroughly
4. **Merge to development** locally
5. **Resolve conflicts** if any
6. **Test again** after merge
7. **Push** development to remote
8. **Delete** feature branch
9. **When ready:** Merge development to main
10. **Tag** the release

**Remember:**
- Always test before and after merging
- Resolve conflicts carefully
- Keep branches clean and organized
- Use conventional commit messages
- Tag your releases on main

**Related Workflows:**
- Use `/smart-commit` for creating well-formatted commits
- Use `/smart-resolver` for intelligent conflict resolution
- Use `/conflict-resolver-general` for general conflict help

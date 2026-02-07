---
description: Complete guide for merging branches in the feature → development → main workflow
---

# Branch Merge Guide

This workflow defines the standard process for merging branches in our three-tier branching strategy.

## Branch Structure

- **main**: Production-ready code, always stable
- **development**: Integration branch for testing features together
- **feature/\***: Individual feature branches (e.g., `feature/xyz`, `feature/landing-page`, `feature/home-page`, `feature/service-section`)

## Workflow Overview

```
feature/xyz → development → main
```

---

## Part 1: Merging Feature Branch to Development

### Prerequisites

1. Ensure your feature is complete and tested
2. All commits should follow conventional commits format
3. Run local tests and linting

### Step-by-Step Process

#### 1. Update Your Feature Branch

```bash
# Switch to your feature branch
git checkout feature/your-feature-name

# Fetch latest changes from remote
git fetch origin

# Update from development to avoid conflicts later
git merge origin/development
```

If there are conflicts during this step, resolve them now (see "Conflict Resolution" section below).

#### 2. Verify Everything Works

```bash
# Run tests
npm test

# Run linting
npm run lint

# Build the project
npm run build

# Test locally
npm run dev
```

#### 3. Push Your Updated Feature Branch

```bash
git push origin feature/your-feature-name
```

#### 4. Create Pull Request to Development

```bash
# Using GitHub CLI
gh pr create \
  --base development \
  --head feature/your-feature-name \
  --title "feat: Add [feature name]" \
  --body "$(cat <<'EOF'
## Summary
Brief description of what this feature does

## Changes
- List key changes
- Be specific about what was added/modified

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Enhancement
- [ ] Refactor

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] No console.logs or debug code

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Additional Notes
[Any context reviewers should know]
EOF
)"
```

#### 5. Review and Merge

- Wait for code review (if team workflow requires it)
- Address any feedback
- Once approved, merge using one of these strategies:

**Option A: Squash and Merge (Recommended for feature branches)**
```bash
gh pr merge --squash --delete-branch
```

**Option B: Merge Commit (Preserves all commits)**
```bash
gh pr merge --merge --delete-branch
```

**Option C: Manual Merge**
```bash
# Switch to development
git checkout development

# Pull latest
git pull origin development

# Merge feature branch
git merge feature/your-feature-name

# Push to remote
git push origin development

# Delete feature branch
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

---

## Part 2: Merging Development to Main

### Prerequisites

1. All features in development are tested and working together
2. No known critical bugs
3. Ready for production deployment

### Step-by-Step Process

#### 1. Ensure Development is Up-to-Date

```bash
# Switch to development
git checkout development

# Pull latest changes
git pull origin development

# Verify everything works
npm run build
npm test
```

#### 2. Update Development from Main (if needed)

```bash
# Fetch latest main
git fetch origin main

# Merge main into development to ensure compatibility
git merge origin/main
```

Resolve any conflicts if they arise.

#### 3. Create Pull Request to Main

```bash
gh pr create \
  --base main \
  --head development \
  --title "release: Deploy features to production" \
  --body "$(cat <<'EOF'
## Release Summary
Description of what's being released to production

## Features Included
- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

## Bug Fixes
- Fix 1: Description
- Fix 2: Description

## Breaking Changes
- [ ] No breaking changes
- [ ] Breaking changes (list below)

## Testing
- [ ] All tests pass
- [ ] Manual QA completed
- [ ] Staging environment tested
- [ ] No regressions found

## Deployment Notes
[Any special deployment instructions]

## Rollback Plan
[How to rollback if issues arise]
EOF
)"
```

#### 4. Final Review and Merge

- Conduct thorough code review
- Test in staging environment if available
- Once approved, merge to main:

**Recommended: Merge Commit (for main)**
```bash
gh pr merge --merge
```

**Keep development branch** (don't delete it)

#### 5. Tag the Release (Optional but Recommended)

```bash
# Switch to main
git checkout main
git pull origin main

# Create a tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tag
git push origin v1.0.0
```

---

## Conflict Resolution

When you encounter merge conflicts, follow this process:

### 1. Identify Conflicts

```bash
# Check status
git status

# See conflicted files
git diff --name-only --diff-filter=U
```

### 2. Understand Both Changes

```bash
# View the conflict in detail
git diff

# Check commit history to understand intent
git log --oneline --graph --all -n 20

# Use GitHub CLI to check related PRs
gh pr list --base development
```

### 3. Resolve Conflicts Intelligently

For each conflicted file:

- **Read both versions** (marked by `<<<<<<<`, `=======`, `>>>>>>>`)
- **Understand the intent** of both changes
- **Combine both changes** when possible
- **If incompatible**, prefer the version that:
  - Maintains backward compatibility
  - Follows project coding standards
  - Is more performant
  - Has better test coverage

**Never blindly accept one side** - understand both changes!

### 4. Edit Files to Resolve

```bash
# Open conflicted file in editor
code path/to/conflicted-file.js

# Remove conflict markers and merge intelligently
# Save the file
```

### 5. Verify Resolution

```bash
# Check syntax is correct
npm run lint

# Run tests
npm test

# Build to ensure no issues
npm run build
```

### 6. Stage Resolved Files

```bash
# Stage each resolved file
git add path/to/resolved-file.js

# Or stage all resolved files
git add .
```

### 7. Complete the Merge

```bash
# Continue the merge
git merge --continue

# Or if you were rebasing
git rebase --continue
```

### 8. Push Changes

```bash
git push origin your-branch-name
```

---

## Special File Handling

### package.json / package-lock.json

```bash
# If both package.json and package-lock.json conflict:
# 1. Resolve package.json manually
# 2. Delete package-lock.json
# 3. Regenerate it
rm package-lock.json
npm install
git add package.json package-lock.json
```

### Configuration Files (astro.config.mjs, tsconfig.json, etc.)

- Merge all configuration options
- Test thoroughly after resolution
- Ensure no duplicate keys

### Component Files (.astro, .tsx, .jsx)

- Preserve functionality from both branches
- Maintain consistent styling
- Test components visually after merge

### CSS/Style Files

- Merge all style rules
- Watch for duplicate selectors
- Test visual appearance

---

## Best Practices

### DO ✅

- **Keep feature branches small and focused** - easier to review and merge
- **Update from development regularly** - reduces merge conflicts
- **Write descriptive commit messages** - helps during conflict resolution
- **Test before merging** - catch issues early
- **Delete merged feature branches** - keeps repository clean
- **Use conventional commits** - maintains clear history
- **Document breaking changes** - helps team awareness

### DON'T ❌

- **Don't commit directly to main** - always use PRs
- **Don't merge untested code** - breaks development/main
- **Don't leave conflict markers** - breaks the build
- **Don't force push to shared branches** - causes issues for team
- **Don't merge without reviewing** - catches bugs and maintains quality
- **Don't keep stale feature branches** - creates confusion

---

## Quick Reference Commands

### Create Feature Branch
```bash
git checkout development
git pull origin development
git checkout -b feature/your-feature-name
```

### Update Feature from Development
```bash
git checkout feature/your-feature-name
git fetch origin
git merge origin/development
```

### Merge Feature to Development (Manual)
```bash
git checkout development
git pull origin development
git merge feature/your-feature-name
git push origin development
git branch -d feature/your-feature-name
```

### Merge Development to Main (Manual)
```bash
git checkout main
git pull origin main
git merge development
git push origin main
```

### Abort a Merge
```bash
git merge --abort
```

### Check Merge Status
```bash
git status
git log --oneline --graph --all -n 10
```

---

## Troubleshooting

### "Already up to date" but changes aren't visible

```bash
git fetch origin
git log origin/development
```

### Accidentally merged to wrong branch

```bash
# Undo the merge (if not pushed)
git reset --hard HEAD~1

# If already pushed, revert the merge
git revert -m 1 HEAD
git push origin branch-name
```

### Lost commits after merge

```bash
# Find the commit
git reflog

# Restore it
git cherry-pick <commit-hash>
```

### Merge conflicts seem overwhelming

```bash
# Abort and try a different approach
git merge --abort

# Consider rebasing instead
git rebase development
```

---

## Related Workflows

- Use `/smart-commit` for creating well-formatted commits
- Use `/create-pr` for creating pull requests
- Use `/smart-resolver` for intelligent conflict resolution
- Use `/conflict-resolver-general` for general conflict help
- Use `/conflict-resolver-specific` for targeted conflict resolution

---

## Summary

**Standard Flow:**
1. Create feature branch from development
2. Work on feature, commit regularly
3. Update from development before merging
4. Create PR: feature → development
5. Review, test, and merge
6. When ready for production: Create PR: development → main
7. Final review and merge to main
8. Tag release (optional)

**Remember:** Always test before merging, resolve conflicts intelligently, and keep branches up to date!

You are an expert at resolving Git merge conflicts intelligently. Your task is to resolve all merge conflicts in the current repository.

## Step-by-step process:

1. First, check the current git status to understand the situation
2. Identify all files with merge conflicts
3. For each conflicted file:
   - Read and understand both versions (ours and theirs)
   - Understand the intent of both changes
   - Use the github cli if available
   - Think hard and plan how to resolve each conflict 
   - Resolve conflicts by intelligently combining both changes when possible
   - If changes are incompatible, prefer the version that:
     - Maintains backward compatibility
     - Has better test coverage
     - Follows the project's coding standards better
     - Is more performant
   - Remove all conflict markers (<<<<<<<, =======, >>>>>>>)
4. After resolving each file, verify the syntax is correct
5. Run any relevant tests to ensure nothing is broken
6. Stage the resolved files
7. Provide a summary of all resolutions made

## Important guidelines:

- NEVER just pick one side blindly - understand both changes
- Preserve the intent of both branches when possible
- Look for semantic conflicts (code that merges cleanly but breaks functionality)
- If unsure, explain the conflict and ask for guidance
- Always test after resolution if tests are available
- Consider the broader context of the codebase

## Commands you should use:

- `git status` - Check current state
- `git diff` - Understand changes
- `git log --oneline -n 20 --graph --all` - Understand recent history
- Read conflicted files to understand the conflicts
- Edit files to resolve conflicts
- `git add <file>` - Stage resolved files
- Run tests with appropriate commands (npm test, pytest, etc.)
- Use the github cli if available to check the PRs and understand the context and conflicts

Begin by checking the current git status.



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

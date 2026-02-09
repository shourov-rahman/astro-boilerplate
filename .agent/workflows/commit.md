---
name: commit
description: Analyze changes and create a smart git commit
---

## Usage

To create a commit, just type:
```
/commit
```

Or with options:
```
/commit --no-verify
```

## What This Command or Workflow Does

1. Unless specified with `--no-verify`, automatically runs pre-commit checks:
   - `pnpm lint` to ensure code quality
   - `pnpm build` to verify the build succeeds
2. Checks which files are staged with `git status`
3. If 0 files are staged, automatically adds all modified and new files with `git add`
4. Performs a `git diff` to understand what changes are being committed
5. Analyzes the diff to determine if multiple distinct logical changes are present
6. If multiple distinct changes are detected, suggests breaking the commit into multiple smaller commits
7. For each commit (or the single commit if not split), creates a commit message using emoji conventional commit format

## Best Practices for Commits

- **Verify before committing**: Ensure code is linted, builds correctly, and documentation is updated
- **Atomic commits**: Each commit should contain related changes that serve a single purpose
- **Split large changes**: If changes touch multiple concerns, split them into separate commits 
- **Conventional commit format**: Based on the changes, suggest:
    - The appropriate commit type (feat/fix/docs/style/refactor/perf/test/chore/etc)
    - A concise, descriptive commit message following conventional commits (must add)

    - The commit format should be:
    ```
    $type: description for simple commits
     Include a body explaining what and why (use bullet points)
    ```
- **Present tense, imperative mood**: Write commit messages as commands (e.g., "add feature" not "added feature")
- **Concise first line**: Keep the first line under 72 characters
- **Emoji**: Each commit type is paired with an appropriate emoji

## Guidelines for Splitting Commits

When analyzing the diff, consider splitting commits based on these criteria:

1. **Different concerns**: Changes to unrelated parts of the codebase
2. **Different types of changes**: Mixing features, fixes, refactoring, etc.
3. **File patterns**: Changes to different types of files (e.g., source code vs documentation)
4. **Logical grouping**: Changes that would be easier to understand or review separately
5. **Size**: Very large changes that would be clearer if broken down

## Examples

📘 docs: update README with project features and setup instructions

- Added project-specific features (Astro 5, Tailwind v4, AlpineJS).
- Documented the new project structure.
- Updated installation and development commands for pnpm.
- Added configuration details for Tailwind v4 and SEO.

📌 chore: initialize comprehensive astro boilerplate with tailwind v4 and cloudflare

- Integrated Tailwind CSS v4 and AlpineJS.
- Configured Astro integrations: MDX, Sitemap, Partytown, and Robots.txt.
- Added Cloudflare adapter for deployment.
- Set up ESLint and Prettier for code formatting and linting.
- Enhanced SEO with Astro SEO and meta tags in Layout.astro.
- Cleaned up default assets and scaffolded project directory structure.


## Command Options

- `--no-verify`: Skip running the pre-commit checks (lint, build, generate:docs)

## Important Notes

- By default, pre-commit checks (`pnpm lint`, `pnpm build`) will run to ensure code quality
- If these checks fail, you'll be asked if you want to proceed with the commit anyway or fix the issues first
- If specific files are already staged, the command/workflow will only commit those files
- If no files are staged, it will automatically stage all modified and new files
- The commit message will be constructed based on the changes detected
- Before committing, the command will review the diff to identify if multiple commits would be more appropriate
- If suggesting multiple commits, it will help you stage and commit the changes separately
- Always reviews the commit diff to ensure the message matches the changes

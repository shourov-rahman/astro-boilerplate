---
name: bugfix
description: Fixes a bug in the codebase
---

You are tasked with fixing a bug described by "$Argument".

Execute the following structured workflow:

1.  **Initialization Phase**:
    - **Clean Check**: Check `git status`. If dirty, ask user to stash or commit first.
    - **Branching**:
      - Generate a short kebab-case name from the bug description (e.g., "Login Button Not Working" -> `login-button-not-working`).
      - Propose the branch name `bugfix/<kebab-case-name>`.
      - Run `git checkout -b bugfix/<kebab-case-name>`.

2.  **Investigation Phase**:
    - **Bug Analysis**:
      - Understand the bug thoroughly by examining the description and any error messages.
      - Identify the affected files, components, or modules.
      - Trace the root cause of the issue.
    - **Context Discovery**:
      - Review existing code patterns and related implementations.
      - Check for similar bugs or issues that have been fixed before.
      - Read `package.json` to check available dependencies and versions.

3.  **Development Phase**:
    - **Implementation**:
      - Apply the minimal necessary fix to resolve the bug.
      - Ensure the fix doesn't introduce new bugs or break existing functionality.
      - Add comments if the fix is non-obvious or requires explanation.
    - **Testing**:
      - Verify the bug is fixed by testing the affected functionality.
      - Check edge cases to ensure robustness.

4.  **Quality Assurance**:
    - **Static Analysis**: Run `pnpm lint` to catch issues.
    - **Build Check**: Run `pnpm build` to ensure no breaking changes.
    - **Run Preview**: Run `pnpm preview` to ensure everything works correctly.
    - **Correction**: If checks fail, analyze and fix errors immediately.

5.  **Finalization**:
    - **Summary**: Describe the bug that was fixed and the solution implemented.

---
name: new feature
description: Implements a new feature 
---

You are tasked with implementing a new feature described by "$Argument".

Execute the following structured workflow:

1.  **Initialization Phase**:
    - **Clean Check**: Check `git status`. If dirty, ask user to stash or commit first.
    - **Branching**:
      - Generate a short kebab-case name from the feature description (e.g., "Login Page" -> `login-page`).
      - Propose the branch name `feature/<kebab-case-name>`.
      - Run `git checkout -b feature/<kebab-case-name>`.

2.  **Discovery & Architecture**:
    - **Context Discovery**:
      -  Identify valid patterns, existing components, and relevant styles.
      - Read `package.json` to check available dependencies.

3.  **Development Phase**:
    - **Execution**:
       - Execute the feature step-by-step.

4.  **Quality Assurance** :
    - **Static Analysis**: Run `pnpm lint` to catch issues.
    - **Build Check**: Run `pnpm build` to ensure no breaking changes.
    - **Run Preview**: Run `pnpm preview` to ensure everthing work correctly
    - **Correction**: If checks fail, analyze and fix errors immediately.

5.  **Finalization**:
    - **Summary**: List the implemented features.

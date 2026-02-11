---
name: Refactor Clean
description: Refactor Clean
---

Safely identify and remove dead code with test verification:
1. Environment Setup: 
   - Create a new branch: `git checkout -b refactor-clean/$ARGUMENTS`

2. Run dead code analysis tools:
   - knip: Find unused exports and files
   - depcheck: Find unused dependencies
   - ts-prune: Find unused TypeScript exports

3. Generate comprehensive report in `docs` directory. For example: docs/dead-code-analysis.md

4. Categorize findings by severity:
   - SAFE: Test files, unused utilities
   - CAUTION: API routes, components
   - DANGER: Config files, main entry points

5. Propose safe deletions only

6. Before each deletion:
   - Run full test suite
   - Verify tests pass
   - Apply change
   - Re-run tests
   - Rollback if tests fail

7. Show summary of cleaned items

Never delete code without running tests first!

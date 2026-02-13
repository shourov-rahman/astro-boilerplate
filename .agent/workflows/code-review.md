---
name: code review
description: Perform comprehensive code review
---


## Instructions

Follow these steps to conduct a thorough code review:

1. **Environment Setup:** 
   - Create a new branch: `git checkout -b code-review/$ARGUMENTS`

2. **Repository Analysis**
   - Examine the repository structure and identify the primary language/framework
   - Check for configuration files (package.json, requirements.txt, Cargo.toml, etc.)
   - Review README and code review related documentation (inside docs repository) for context

3. **Code Quality Assessment**
   - Scan for code smells, anti-patterns, and potential bugs
   - Check for consistent coding style and naming conventions
   - Identify unused imports, variables, or dead code
   - Review error handling and logging practices

4. **Security Review**
   - Look for common security vulnerabilities (SQL injection, XSS, etc.)
   - Check for hardcoded secrets, API keys, or passwords
   - Review authentication and authorization logic
   - Examine input validation and sanitization

5. **Performance Analysis**
   - Identify potential performance bottlenecks
   - Check for inefficient algorithms or database queries
   - Review memory usage patterns and potential leaks
   - Analyze bundle size and optimization opportunities

6. **Architecture & Design**
   - Evaluate code organization and separation of concerns
   - Check for proper abstraction and modularity
   - Review dependency management and coupling
   - Assess scalability and maintainability

7. **Testing Coverage**
   - Check existing test coverage and quality
   - Identify areas lacking proper testing
   - Review test structure and organization
   - Suggest additional test scenarios

8. **Documentation Review**
   - Evaluate code comments and inline documentation
   - Check API documentation completeness
   - Review README and setup instructions
   - Identify areas needing better documentation

9. **Recommendations**
   - Prioritize issues by severity (critical, high, medium, low)
   - Provide specific, actionable recommendations
   - Suggest tools and practices for improvement
   - Create/update a summary report in `docs` folder with next steps

Remember to be constructive and provide specific examples with file paths and line numbers where applicable.

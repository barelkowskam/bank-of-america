# Skill: Angular Migration Pre-PR Validation

## Purpose
Run this skill before opening any pull request as part of the Angular 14 → 18 migration. Ensures all migrated components meet Bank of America's validation standards before review.

## Steps

### 1. Run Angular migration checks
```bash
ng build --configuration production
ng lint
npx tsc --noEmit
```
Fix all errors before proceeding. Do not suppress type errors with `$any()` casts.

### 2. Run unit tests
```bash
ng test --watch=false --browsers=ChromeHeadless
```
All tests must pass. If a test was previously passing and is now failing due to the migration, fix the test. Do not delete or skip failing tests.

### 3. Verify analytics SDK event names are unchanged
Check all calls to `AnalyticsService.track()` and `AnalyticsService.page()` in the migrated files. Event names must match exactly what was present before migration. If any have changed, revert them.

### 4. Verify authentication hooks are in place
Confirm that `AuthGuard` is still applied to all routes that had it before migration. Confirm that `AuthInterceptor` is still registered in the module or provider configuration.

### 5. Check for PII in logs
Search migrated files for any `console.log()` calls containing the following fields and remove them:
- `userId`, `accountNumber`, `email`, `sortCode`, `dateOfBirth`, `address`

```bash
grep -rn "console.log" src/ --include="*.ts"
```

### 6. Run consumer build check
If the migrated component is part of the shared component library, verify that the public API has not changed:
```bash
npm run build:lib
npm run test:consumers
```

### 7. Capture test output
After all tests pass, copy the full terminal output from the test run and save it. This will be included in the PR description as evidence.

### 8. Open PR
Open a pull request with the following in the description:
- List of files changed
- Angular APIs updated (deprecated → replacement)
- Full test output pasted as a code block
- Confirmation that analytics event names are unchanged
- Confirmation that auth hooks are in place

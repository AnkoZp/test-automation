# Allure Reporter Configuration Guide

This project uses Allure reporter for test results visualization.

## Installation

First, install all required dependencies:

```bash
npm install
```

This will install:
- `allure-playwright` - Allure reporter for Playwright
- `allure-commandline` - Allure commandline tool (no global installation needed)

### Allure Framework Installation

Allure requires Java to be installed on your system. The `allure-commandline` package is included as a dev dependency, so you don't need to install Allure globally.

**Prerequisites:**
- Java must be installed on your system
- Verify Java installation: `java -version`

The Allure commandline tool will be automatically available via `npx allure` after running `npm install`.

## Usage

### Run Tests with Allure Reporter

```bash
npm run test:allure
```

Or simply:
```bash
npm test
```

The Allure reporter is configured by default in `playwright.config.ts`.

### Generate Allure Report

After running tests, generate the HTML report:

```bash
npm run test:allure:generate
```

This will:
- Read test results from `allure-results/` directory
- Generate HTML report in `allure-report/` directory
- Overwrite any existing report in the output directory

### Open Allure Report

Open the generated report in your default browser:

```bash
npm run test:allure:open
```

Or manually open `allure-report/index.html` in your browser.

## Configuration

The Allure reporter is configured in `playwright.config.ts`:

```typescript
reporter: [['allure-playwright', { outputFolder: 'allure-results' }]]
```

- **outputFolder**: Directory where Allure test results are stored (default: `allure-results/`)

## Report Features

Allure provides:

- **Detailed test execution history** - Track test runs over time
- **Test attachments** - Screenshots, videos, and other files attached to tests
- **Test categorization and grouping** - Organize tests by features, stories, etc.
- **Timeline visualization** - See test execution timeline
- **Environment information** - System and test environment details
- **Test steps** - Detailed step-by-step test execution
- **Screenshots on failure** - Automatic screenshots for failed tests

## Directory Structure

```
lesson18-19/
├── allure-results/      # Test execution results (raw data)
├── allure-report/       # Generated HTML reports
└── tests/              # Test files
```

## NPM Scripts

- `npm test` - Run tests with Allure reporter (default)
- `npm run test:allure` - Run tests with Allure reporter
- `npm run test:allure:generate` - Generate Allure HTML report from results
- `npm run test:allure:open` - Open Allure report in browser

## Troubleshooting

### Allure command not found

- Ensure Java is installed: `java -version`
- Run `npm install` to install `allure-commandline` package
- The scripts use `npx allure` which doesn't require global installation

### Report not generating

- Ensure tests have been run first: `npm test`
- Check that `allure-results/` directory contains result files
- Verify Allure is properly installed

### Report not opening

- Generate the report first: `npm run test:allure:generate`
- Check that `allure-report/index.html` exists
- Try opening the HTML file manually in your browser

## Additional Resources

- [Allure Framework Documentation](https://docs.qameta.io/allure/)
- [Allure Playwright Integration](https://github.com/allure-framework/allure-js/tree/master/packages/allure-playwright)
- [Playwright Reporters Documentation](https://playwright.dev/docs/test-reporters)

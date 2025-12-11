This is the Playwright Test project
Recommended config for programming on TS >  https://coda.io/d/QA-Automation_d3DDrmEyeIe/TS_suhLQUIn#_lutrAdCg

Project Structure: tests with Playwright on TS

## How to Run

Basic test execution:
```bash
npm test
```

## Allure Reporter

This project uses Allure reporter for test results visualization.

### Quick Start

1. Run tests:
   ```bash
   npm test
   ```

2. Generate Allure report:
   ```bash
   npm run test:allure:generate
   ```

3. Open report in browser:
   ```bash
   npm run test:allure:open
   ```

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Java (required for Allure):
   - Download from: https://www.java.com/download/
   - Verify installation: `java -version`
   - Note: Allure commandline is included as npm dependency, no manual installation needed

For detailed configuration and setup instructions, see [REPORTERS.md](./REPORTERS.md)
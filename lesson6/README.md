# Lesson 6
recommended config from me for programming on a JavaScript

## ESLint + Prettier Configuration

In order to use this config you have to install the following NPM packages
```
npm init
npm i -D @eslint/js eslint globals eslint-plugin-unicorn @stylistic/eslint-plugin prettier
```

Then put eslint.config.mjs and .prettierrc into your base directory

You can add a script to your package.json
```
"scripts": {
  "lint": "eslint .",
  "build": "npm run lint && <build script>",
}
```

**Alternatively**, just copy the content of this folder (C:\Users\test_aapo\sources\QA-AUTOMATION-TYPESCRIPT-2-main\js-eslint-config) into your project folder and run
```
npm i
```
and start coding

## Project Structure
promises.js → fetch via .then()
async-await.js → fetch via async/await
try-catch.js → error checking and fallback


## How to Run
Run files one by one using Node.js:

node .\src\promises.js
node .\src\async-await.js
node .\src\try-catch.js
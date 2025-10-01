# Lesson 4 - Loops. Arrays and objects
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
loop.js → loop examples:
loop from 0 to 9
loop from 100 to 0 with step 10

arrays.js → array operations:
arrays of different types
methods: forEach(), map(), filter(), find(), sort()

objects.js → working with objects:
nested properties (2 levels)
array inside an object
methods (greet, showHobbies)

## How to Run
Run files one by one using Node.js:

node .\src\loop.js
node .\src\arrays.js
node .\src\objects.js

# ESLint (and Prettier) config

[![npm version](https://badge.fury.io/js/eslint-config-twg.svg)](https://badge.fury.io/js/eslint-config-twg) ![NPM downloads](https://img.shields.io/npm/dm/eslint-config-twg) ![Code Style Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) [![MIT License](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/TheWidlarzGroup/eslint-config-twg/blob/master/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/WidlarzGroup?label=Follow%20on%20Twitter)](https://twitter.com/WidlarzGroup)

These are settings for ESLint.

## What it does

This setup lints your TypeScript code based on practices. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
npx install-peerdeps --dev eslint-config-twg
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```jsx
{
  "extends": "eslint-config-twg/typescript.js",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

3. Then make or update a `tsconfig.json` file:

```jsx
{
  "extends": "eslint-config-twg/tsconfig.json",
  "include": [
    "**/*"
  ]
}
```

4. Add prettier config [@twg/prettier-config](https://www.npmjs.com/package/@twg/prettier-config)

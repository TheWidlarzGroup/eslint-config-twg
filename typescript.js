module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses rules from `@typescript-eslint/eslint-plugin`,
    "prettier/@typescript-eslint", // Use `eslint-config-prettier` to override conflicting rules from `@typescript-eslint/eslint-plugin`
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // Layer in all the JS Rules
    "./.eslintrc.js",
  ],
  // then add some extra good stuff for Typescript
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  // Then we add our own custom typescript rules
  rules: {
    // This allows us to use async function on addEventListener(). Discussion: https://twitter.com/wesbos/status/1337074242161172486
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/restrict-plus-operands": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-this-alias": 0,
    "@typescript-eslint/no-var-requires": 0,
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};

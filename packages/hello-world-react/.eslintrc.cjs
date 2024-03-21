/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@monorepo-changesets-test/eslint-config/base.js'],
  parserOptions: {
    project: './tsconfig.quality.json',
    tsconfigRootDir: __dirname,
  },
}

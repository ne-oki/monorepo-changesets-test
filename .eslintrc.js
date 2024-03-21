// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['packages/**'],
  extends: ['@monorepo-changesets-test/eslint-config/base.js'],
  parserOptions: {
    project: true,
  },
}

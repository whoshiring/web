/** @type {import("eslint").Linter.Config} */
export default {
  extends: ['@repo/eslint-config/index.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  env: {
    jest: true,
  },
}

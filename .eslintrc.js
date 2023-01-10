module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-acme`
  extends: ['whoshiring'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'spaced-comment': ['error', 'always', { markers: ['?', '!', '*'] }],
    indent: ['error', 2, { ignoreComments: true }],
    'no-multiple-empty-lines': ['warn', { max: 2 }]
  }
}

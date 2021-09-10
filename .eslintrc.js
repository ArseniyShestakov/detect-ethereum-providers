module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['json'],
  globals: {
    window: true,
  },
  ignorePatterns: [
    '!.eslintrc.js',
    'package.json',
    'package-lock.json',
    'node_modules/',
    'dist/',
  ],
  overrides: [
    {
      files: [
        '.eslintrc.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      plugins: ['node'],
      files: [
        'test/*.js',
      ],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: [
        'src/*.ts',
      ],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint'
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ]
    }
  ],
};

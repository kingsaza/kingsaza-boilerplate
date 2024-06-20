/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin')
const typescriptEslintParser = require('@typescript-eslint/parser')
const prettierPlugin = require('eslint-plugin-prettier')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

module.exports = [
  js.configs.recommended,
  ...compat.config({
    extends: 'plugin:@typescript-eslint/recommended',
  }),
  ...compat.config({
    extends: 'plugin:prettier/recommended',
  }),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  {
    languageOptions: {
      globals: {
        browser: true,
        node: true,
        jest: true,
      },
    },
  },
]

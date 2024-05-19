import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        require: true,
        module: true,
        __dirname: true,
      },
    },
    rules: {
      'no-console': 'warn',
      'prettier/prettier': ['error', { printWidth: 80 }],
    },
  },
]

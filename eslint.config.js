import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin'; // Ensure you're using the plugin correctly
import tsParser from '@typescript-eslint/parser'; // Add the parser for TypeScript
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 'latest', // Enable parsing of modern JavaScript
      sourceType: 'module', // Use ES module syntax
      jsxPragma: null, // For React 17+ (new JSX runtime)
    },
    plugins: {
      '@typescript-eslint': tseslint, // Use TypeScript ESLint plugin
      react: pluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];

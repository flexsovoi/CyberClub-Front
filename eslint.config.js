/** @type {import('eslint').Linter.FlatConfig[]} */
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';
export default [
    {
        plugins: {
            'react-hooks': eslintReactHooks,
            react: eslintReact,
            // prettier: eslintPluginPrettier,
        },
    },
    { ignores: ['node_modules, dist'] },
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2024,
            },
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            'prefer-const': 'error',
        },
    },
    eslintPluginPrettier,
];

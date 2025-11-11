// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
     {
          ignores: [
               '**/.vscode/*',
               '**/coverage/*',
               './tsconfig.json',
               './*.config.json',
               './*.config.ts',
               'dist/**',
               'dist',
               'node_modules/**',
               'build/**',
               'scripts/**',
          ],
     },
     eslint.configs.recommended,
     ...tseslint.configs.recommended,
]

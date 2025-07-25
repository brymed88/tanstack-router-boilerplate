// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
     eslint.configs.recommended,
     ...tseslint.configs.recommended,
     {
          ignores: [
               '**/.vscode/*',
               '**/coverage/*',
               './tsconfig.json',
               './*.config.json',
               './*.config.ts',
          ],
          rules: {},
     }
)

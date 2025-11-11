import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig(({ mode }) => ({
     plugins: [react()],
     test: {
          globals: true,
          environment: 'jsdom',
          mockReset: true,
          include: ['./**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
          setupFiles: ['./src/mocks/testMocks.ts'],
          env: loadEnv(mode, process.cwd(), ''),
          coverage: {
               reporter: ['json-summary', 'text', 'html'],
               include: [
                    'src/components/shared/**',
                    'src/utils/**',
                    'src/components/templates/**',
               ],
               exclude: [
                    ...coverageConfigDefaults.exclude,
                    'src/components/shared/ThemeProvider.tsx', // Exclude ThemeProvider from coverage
               ],
               thresholds: {
                    lines: 70,
                    functions: 50,
                    branches: 70,
                    statements: 80,
               },
          },
          alias: {
               '@/': new URL('./src/', import.meta.url).pathname,
          },
     },
}))

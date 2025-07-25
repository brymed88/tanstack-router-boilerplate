import react from '@vitejs/plugin-react'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
     plugins: [react()],
     test: {
          globals: true,
          environment: 'jsdom',
          mockReset: true,
          include: ['./**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
          coverage: {
               reporter: ['text', 'html'],
               include: ['**/components/**'],
               exclude: [
                    '**/types.ts', // Exclude type definitions from coverage
                    ...coverageConfigDefaults.exclude,
                    'src/components/shared/ThemeProvider.tsx', // Exclude ThemeProvider from coverage
                    'src/components/ui/**', // Exclude ShadCN UI components from coverage
                    'src/mocks/**', // Exclude mock files from coverage
               ],
          },
          alias: {
               '@/': new URL('./src/', import.meta.url).pathname,
          },
     },
})

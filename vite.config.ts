import { tanstackRouter } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
     plugins: [tanstackRouter(), react()],
     resolve: {
          alias: {
               '@': path.resolve(__dirname, './src'),
          },
     },
})

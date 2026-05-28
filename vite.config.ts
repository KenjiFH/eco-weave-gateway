import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import path from 'path' // 1. Add this import at the top

export default defineConfig({
  plugins: [
    tanstackStart({
      prerender: {
        routes: ['/'],
        crawlLinks: true,
      },
    }),
  ],
  // 2. Add this resolve block to translate the @ symbol
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

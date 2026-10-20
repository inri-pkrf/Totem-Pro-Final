import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' => נתיבים יחסיים, עובד ב-GitHub Pages בכל שם של ריפו
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, 'src') },
  },
  server: { open: true },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this repo at /ammon-resume/, not the domain root —
  // without this, the built JS/CSS files 404 because their paths assume
  // they're hosted at "/". If you ever move to a custom domain at the root,
  // change this back to '/'.
  base: '/ammon-resume/',
  build: {
    outDir: 'dist',
  },
})

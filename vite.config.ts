import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Custom domain (ammonc.com) serves from the root. If this site ever
  // moves back to being served only from the plain github.io/ammon-resume/
  // URL with no custom domain attached, change this back to '/ammon-resume/'.
  base: '/',
  build: {
    outDir: 'dist',
  },
})

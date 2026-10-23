import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using relative base './' makes the build work on ANY GitHub repository name, custom domain, or local server!
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})

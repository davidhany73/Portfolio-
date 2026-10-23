import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using relative base './' makes the build work on ANY GitHub repository name, custom domain, or local server!
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  },
  server: {
    host: '0.0.0.0', // binds to all network interfaces so davidhany.local works!
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})

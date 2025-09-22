import { defineConfig } from 'vite'

export default defineConfig({
  root: './ashley',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
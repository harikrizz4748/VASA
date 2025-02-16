import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  base: '/SnapLogicPlayground1/',
  build: {
    outDir: 'dist',
  },

  plugins: [react()],
  
  define: {
    'process.env': {},
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

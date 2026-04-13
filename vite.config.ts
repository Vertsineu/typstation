import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.VITE_BASE_URL ?? '/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    minify: 'oxc',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react'
          }
          if (
            id.includes('node_modules/codemirror') ||
            id.includes('node_modules/@codemirror/') ||
            id.includes('node_modules/@lezer/')
          ) {
            return 'vendor-codemirror'
          }
          if (id.includes('node_modules/zustand')) {
            return 'vendor-zustand'
          }
        },
      },
    },
  },
  worker: {
    format: 'es',
  },
  optimizeDeps: {
    exclude: [
      '@myriaddreamin/typst-ts-web-compiler',
      '@myriaddreamin/typst-ts-renderer',
    ],
  },
})

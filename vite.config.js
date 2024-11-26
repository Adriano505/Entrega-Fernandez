import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/Entrega-Fernandez/', // Ruta base para GitHub Pages
  server: {
    hmr: {
      overlay: false,
    },
  },
});


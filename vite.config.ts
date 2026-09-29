import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Field-Vist/', // Configured for GitHub Pages https://mmridhula148.github.io/Field-Vist/
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),

    
      '@emotion/react': path.resolve(__dirname, 'node_modules/@emotion/react'),
      '@emotion/react/jsx-runtime': path.resolve(__dirname, 'node_modules/@emotion/react/jsx-runtime'),
    },
  },
  optimizeDeps: {
    include: ['@emotion/react/jsx-runtime'],
  }
});

import react from '@vitejs/plugin-react';
import { unplugin as stylex } from '@stylexjs/unplugin';
import { defineConfig } from 'vite';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    stylex.vite({
      useCSSLayers: true,
      aliases: {
        '@/*': [path.resolve(import.meta.dirname, './src/*')],
        '@styles/*': path.resolve(import.meta.dirname, './src/styles/*'),
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@styles': path.resolve(import.meta.dirname, './src/styles'),
    },
  },
});
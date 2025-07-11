import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@sh4re/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@sh4re/assets': path.resolve(__dirname, '../../packages/assets/src'),
    },
  },
});

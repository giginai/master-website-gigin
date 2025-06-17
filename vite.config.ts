// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // 🔑 NEW: bundle the CJS package into the server build
  ssr: {
    /**
     * Prevent Vite from marking `react-helmet-async` as external.
     * It is converted to ESM during bundling, so the named import works.
     */
    noExternal: ['react-helmet-async'],
  },
}));

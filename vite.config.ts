import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import componentTagger from './plugins/componentTagger'; // if this is a local plugin

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    noExternal: ['react-helmet-async'], // 👈 Add this line
  },
}));

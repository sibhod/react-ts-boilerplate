import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig({
  base: './',
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true,
  },
});

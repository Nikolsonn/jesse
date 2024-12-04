import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  base: '/jesse/',
  plugins: [
    react(),
    tsconfigPaths(),
    mkcert(),
    commonjs({
      include: /node_modules/,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
  },
  publicDir: './public',
  server: {
    host: true,
  },
  define: {
    'process.env.PLAYWRIGHT_TEST': JSON.stringify(true),
  },
});


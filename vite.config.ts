import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

/*
No need to use @rollup/plugin-commonjs - becauce vite use it by default:
https://github.com/vitejs/vite/discussions/11739#discussioncomment-4722002
*/

export default defineConfig({
  base: '/jesse/',
  plugins: [
    react(),
    tsconfigPaths(),
    mkcert(),
  ],
  // build: {
  //   rollupOptions: {
  //     treeshake: false,
  //     output: {
  //       format: 'es',
  //     },
  //   },
  // },
  publicDir: './public',
  server: {
    host: true,
  },
  // define: {
  //   'exports': {},
  //   'process.env.PLAYWRIGHT_TEST': JSON.stringify(true),
  // },
});

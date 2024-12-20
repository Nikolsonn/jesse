// import { defineConfig, devices } from '@playwright/experimental-ct-react';
// import * as path from 'path';

console.log('Vite mode:', process.env.NODE_ENV);

// export default defineConfig({
//   testDir: './playwright/tests/component',
//   snapshotDir: './playwright/screenshot',
//   timeout: 10 * 1000,
//   fullyParallel: true,
//   forbidOnly: !!process.env.CI,
//   retries: process.env.CI ? 2 : 0,
//   workers: process.env.CI ? 1 : undefined,
//   reporter: [['html', { outputFolder: './playwright/playwright-report'}]],
//   outputDir: './playwright/test-results',
//   use: {
//     headless: process.env.CI ? true : false,
//     trace: 'on-first-retry',
//     ctPort: 3100,
//     ctViteConfig: {
//       mode: 'development',
//       resolve: {
//         alias: {
//           '@': path.resolve('./src'),
//         },
//       },
//       define: {
//         'process.env.PLAYWRIGHT_TEST': JSON.stringify(true),
//       },
//     },
//   },
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },
//   ],
// });

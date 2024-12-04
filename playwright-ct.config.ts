import { defineConfig, devices } from '@playwright/experimental-ct-react';
import * as path from 'path';

export default defineConfig({
  expect: {
    timeout: 60000
  },
  testDir: './playwright/tests/component',
  snapshotDir: './playwright/screenshot',
  timeout: 10 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: './playwright/playwright-report'}]],
  outputDir: './playwright/test-results',
  use: {
    headless: process.env.CI ? true : false,
    trace: 'on-first-retry',
    ctPort: 3100,
    ctViteConfig: {
      resolve: {
        alias: {
          '@': path.resolve('./src'),
        },
      },
      define: {
        'process.env.PLAYWRIGHT_TEST': JSON.stringify(true),
      },
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

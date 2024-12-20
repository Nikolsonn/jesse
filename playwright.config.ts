import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/tests/phone',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: './playwright/playwright-report'}]],
  outputDir: './playwright/test-results',
  snapshotPathTemplate: "./playwright/screenshots/{projectName}/{testFilePath}/{testName}{ext}",
  use: {
    headless: process.env.CI ? true : false,
    trace: 'on-first-retry',
    baseURL: 'https://localhost:5173/jesse/',
  },
  projects: [
    {
      name: 'Mobile Chrome',
      use: { ...devices['iPhone 12'], browserName: 'chromium' },
    },
  ],
});

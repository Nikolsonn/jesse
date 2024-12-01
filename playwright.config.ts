import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/tests',
  fullyParallel: true,
  forbidOnly: false,
  retries: 2,
  workers: 1,
  reporter: 'html',
  use: {
    headless: false,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'], browserName: 'webkit' },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['iPhone 12'], browserName: 'chromium' },
    },
  ],
});

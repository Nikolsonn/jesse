import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/tests',
  fullyParallel: true,
  forbidOnly: false,
  retries: 2,
  workers: 1,
  reporter: 'html',
  use: {
    headless: true,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Mobile Chrome',
      use: { ...devices['iPhone 12'], browserName: 'chromium' },
    },
    {
      name: 'Mobile Mozilla',
      use: {...devices['iPhone 15 Pro Max'], browserName: 'firefox' },
    },
  ],
});

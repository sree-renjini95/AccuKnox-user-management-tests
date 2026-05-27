// @ts-check

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 120000,

  use: {

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure'
  },

  projects: [

    {
      name: 'chromium',
      use: {
        browserName: 'chromium'
      }
    }
  ]
});
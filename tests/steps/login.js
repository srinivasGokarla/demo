const { Given, Then, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let page;

Given('I open the app', async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto(process.env.TEST_BASE_URL || 'http://localhost:5000');
});

Then('I should see {string}', async function (text) {
  const content = await page.textContent('body');
  if (!content.includes(text)) {
    await browser.close();
    throw new Error(`Text "${text}" not found on page`);
  }
  await browser.close();
});

After(async function () {
  if (browser) await browser.close();
});

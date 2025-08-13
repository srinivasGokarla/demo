const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

setDefaultTimeout(20000);

Given('I open the app', async function () {
  await this.openBrowser();
  this.page = await global.browser.newPage();
  await this.page.goto('http://localhost:3000');
});

When('I enter {string} in the message field', async function (message) {
  await this.page.fill('input[type="text"]', message);
});

When('I click save', async function () {
  await this.page.click('button[type="submit"]');
  await this.page.waitForURL('http://localhost:3000/greeting', { timeout: 15000 });
});

Then('I should see greeting {string}', async function (expectedText) {
  const locator = this.page.getByText(expectedText, { exact: false });
  await expect(locator).toBeVisible({ timeout: 15000 });
});

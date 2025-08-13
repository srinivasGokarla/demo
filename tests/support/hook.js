const { AfterAll } = require('@cucumber/cucumber');

AfterAll(async function () {
  if (global.browser) {
    await global.browser.close();
  }
  if (global.context) {
    await global.context.close();
  }
  if (global.page) {
    await global.page.close();
  }
  process.exit(0); // Force exit if something is still holding the process
});

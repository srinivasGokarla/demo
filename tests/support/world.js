// tests/support/world.js  (new)
const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.page = null;
  }
  async openBrowser() {
    if (!this.browser) {
      this.browser = await chromium.launch({ headless: true });
      global.browser = this.browser; // for existing steps referencing global.browser
    }
  }
}
setWorldConstructor(CustomWorld);

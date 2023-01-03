// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.AddEmployeePage = class AddEmployeePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://g.hr.dmerej.info/add_employee');
  }
}
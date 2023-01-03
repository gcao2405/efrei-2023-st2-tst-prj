// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.EmployeesPage = class EmployeesPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.employeeList = page.locator('body > table > tbody > tr > td');
  }

  async goto() {
    await this.page.goto('https://g.hr.dmerej.info/employees');
  }
}
// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.EmployeesPage = class EmployeesPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.employeeList = page.locator('body > table > tbody > tr > td');
    this.editLink = page.getByRole('link', { name: 'Edit' });
    this.addToTeamLink = page.getByRole('link', { name: 'Add to team' });
    this.teamSelect = page.getByRole('combobox', { name: 'Team' });
    this.addButton = page.getByRole('button', { name: 'Add' });
  }

  async goto() {
    await this.page.goto('https://g.hr.dmerej.info/employees');
  }

  async addEmployeeToTeam(teamOption) {
    await this.editLink.click();
    await this.addToTeamLink.click();
    await this.teamSelect.selectOption(teamOption);
    await this.addButton.click();
  }
}
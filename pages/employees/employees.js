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
    this.updateBasicInfoLink = page.getByRole('link', { name: 'Update basic info' });
    this.nameField = page.getByPlaceholder('Name');
    this.emailField = page.getByPlaceholder('Email');
    this.updateButton = page.getByRole('button', { name: 'Update' });
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

  async updateBasicInfo(newName, newEmail) {
    await this.editLink.click();
    await this.updateBasicInfoLink.click();
    await this.nameField.fill(newName);
    await this.emailField.fill(newEmail);
    await this.updateButton.click();
  }
}
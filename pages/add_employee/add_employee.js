// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.AddEmployeePage = class AddEmployeePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.nameField = page.getByPlaceholder('Name');
    this.emailField = page.getByPlaceholder('Email');
    this.address1Field = page.locator('#id_address_line1');
    this.address2Field = page.locator('#id_address_line2');
    this.cityField = page.getByPlaceholder('City');
    this.zipCodeField = page.getByPlaceholder('Zip code');
    this.hiringDateField = page.getByPlaceholder('Hiring date');
    this.jobTitleField = page.getByPlaceholder('Job title');
    this.addButton = page.getByRole('button', { name: 'Add' });
  }

  async goto() {
    await this.page.goto('https://g.hr.dmerej.info/add_employee');
  }

  async fillFormAndAdd() {
    await this.nameField.fill('name');
    await this.emailField.fill('email@example.com');
    await this.address1Field.fill('1 rue La Tour');
    await this.address2Field.fill('Batiment A');
    await this.cityField.fill('Paris');
    await this.zipCodeField.fill('75000');
    await this.hiringDateField.fill('2023-01-04');
    await this.jobTitleField.fill('Student');
    await this.addButton.click();
  }
}
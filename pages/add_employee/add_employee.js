// playwright-dev-page.js
const { expect } = require('@playwright/test');
const { User } = require('../../models/user');

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

  /**
   * @param {import('../../models/user').User} user
   */
  async addUser(user = new User(
    'Default User',
    'email@example.com',
    '1 rue La Tour',
    'Batiment A',
    'Paris',
    '75000',
    '2023-01-01',
    'Student',
  )) {
    await this.nameField.fill(user.name);
    await this.emailField.fill(user.email);
    await this.address1Field.fill(user.address1);
    await this.address2Field.fill(user.address2);
    await this.cityField.fill(user.city);
    await this.zipCodeField.fill(user.zipCode);
    await this.hiringDateField.fill(user.hiringDate);
    await this.jobTitleField.fill(user.jobTitle);
    await this.addButton.click();
  }
}
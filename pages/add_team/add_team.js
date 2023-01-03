// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.AddTeamPage = class AddTeamPage {

  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.teamNameField= page.getByPlaceholder('Name');
    this.addButton=page.getByRole('button', { name: 'Add' });
  }

  async goto() {
    await this.page.goto('https://g.hr.dmerej.info/add_team');
  }

  async createTeam() {
    await this.teamNameField.fill('Test1');
    await this.addButton.click();
  }

  async getMessage(){
    await page.getByText('Home Create new team Name a team with the same name already exists');
  }
}
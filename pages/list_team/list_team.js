// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.ListTeamPage = class ListTeamPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.homeLink = page.locator('a', { hasText: 'Home' });
    this.homeHeader = page.locator('h1#title', { hasText: 'HR DB' });
    this.viewMembersLink = page.locator('table.table tbody > tr > td > a', { hasText: 'View members' });
    this.viewMembersHeader = page.locator('h2', { hasText: 'Team Members' });
    this.deleteTeamLink = page.locator('table.table tbody > tr > td > a.btn.btn-danger', { hasText: 'Delete' });
    this.deleteTeamHeader = page.locator('h2', { hasText: 'Delete Team' });
  }

  async goto() {
    await this.page.goto('https://g.hr.dmerej.info/teams');
  }

  async goHome() {
    await this.homeLink.first().click();
    await expect(this.homeHeader).toBeVisible();
  }

  async viewMembers() {
    await this.viewMembersLink.first().click();
    await expect(this.viewMembersHeader).toBeVisible();
  }

  async deleteTeam() {
    await this.deleteTeamLink.first().click();
    await expect(this.deleteTeamHeader).toBeVisible();
  }
}
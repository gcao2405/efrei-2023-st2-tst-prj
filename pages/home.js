const link = 'https://g.hr.dmerej.info/';

exports.HomePage = class HomePage {
  

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.homeLink = page.locator('a', { hasText: 'Home' });

    this.mainHeader = page.locator('h1', { hasText: 'HR DB' });
    this.employeesHeader = page.locator('h2', { hasText: 'Employees' });
    this.teamsHeader = page.locator('h2', { hasText: 'Teams' });
    this.dangerZoneHeader = page.locator('h2', { hasText: 'Employees' });

    this.listEmployeesLink = page.locator('a', { hasText: 'List Employees' });
    this.addNewEmployeeLink = page.locator('a', { hasText: 'Add new employee' });
    this.listTeamsLink = page.locator('a', { hasText: 'List teams' });
    this.createNewTeamLink = page.locator('a', { hasText: 'Create new team' });
    this.resetDatabaseLink = page.locator('a', { hasText: 'Reset database' });

    this.footerText = page.locator('a', { hasText: 'footer' });
  }

  async goto() {
    await this.page.goto(link);
  }

  async navigateToResetDatabase() {
    await this.resetDatabaseLink.click();
  }
}
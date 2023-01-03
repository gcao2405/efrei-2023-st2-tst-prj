// @ts-check
const { test, expect } = require('@playwright/test');
const { AddTeamPage } = require('../pages/add_team/add_team');
const { TeamsPage } = require('../pages/teams/teams');
const { HomePage } = require('../pages/home');

test.beforeEach(async ({ page }, testInfo) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.resetDatabase();
});

test('Add 2 teams successfully', async ({ page }) => {
  const addTeamPage = new AddTeamPage(page);
  await addTeamPage.goto();

  await expect(page).toHaveTitle(/Add Team/);

  await addTeamPage.createTeam('team1');
  await addTeamPage.goto();
  await addTeamPage.createTeam('team2');

  await expect(page).toHaveURL(/teams/);
  const teamsPage = new TeamsPage(page);
  await expect(teamsPage.teamList).toContainText([
    'team1',
    'team2',
  ])
});

// @ts-check
const { test, expect } = require('@playwright/test');
const { AddTeamPage } = require('../pages/add_team/add_team');
const { HomePage } = require('../pages/home');
const { ListTeamPage } = require('../pages/list_team/list_team');

test.beforeEach(async ({ page }, testInfo) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.resetDatabase();
});

test('Add 2 teams successfully', async ({ page }) => {
  const addTeamPage = new AddTeamPage(page);
  await addTeamPage.goto();

  await expect(page).toHaveTitle(/Add Team/);

  await addTeamPage.addTeam('team1');
  await addTeamPage.goto();
  await addTeamPage.addTeam('team2');

  await expect(page).toHaveURL(/teams/);
  const listTeamPage = new ListTeamPage(page);
  await expect(listTeamPage.teamList).toContainText([
    'team1',
    'team2',
  ])
});

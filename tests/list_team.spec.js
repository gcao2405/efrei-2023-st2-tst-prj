const { test, expect } = require('@playwright/test');
const { ListTeamPage } = require('../pages/list_team/list_team')

test('Go to Home page', async ({ page }) => {
    const ListTeamPage = new ListTeamPage(page);
    await ListTeamPage.goto();

    await expect(page).toHaveTitle(/Teams/);

    await ListTeamPage.goHome();

    await expect(page).toHaveTitle("HR DB - HR DB");
});

test('View members', async ({ page }) => {
    const ListTeamPage = new ListTeamPage(page);
    await ListTeamPage.goto();

    await expect(page).toHaveTitle(/Teams/);

    await ListTeamPage.viewMembers();

    await expect(page).toHaveTitle(/Teams members/);
    await expect(page).toHaveURL(/.*members/);
});

test('Delete members', async ({ page }) => {
    const ListTeamPage = new ListTeamPage(page);
    await ListTeamPage.goto();

    await expect(page).toHaveTitle(/Teams/);

    await ListTeamPage.deleteTeam();

    await expect(page).toHaveTitle(/Delete Team/);
    await expect(page).toHaveURL(/.*delete/);
});
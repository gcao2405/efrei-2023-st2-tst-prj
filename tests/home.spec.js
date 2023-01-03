// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home');

test('homepage has title and links to reset Database page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  await expect(page).toHaveTitle("HR DB - HR DB");
  await homePage.navigateToResetDatabase();
  await expect(page).toHaveURL(/.*reset_db/);
});


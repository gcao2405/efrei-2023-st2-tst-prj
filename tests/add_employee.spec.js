// @ts-check
const { test, expect } = require('@playwright/test');
const { AddEmployeePage } = require('../pages/add_employee/add_employee')

test('Go to Employees page after adding employee', async ({ page }) => {
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.goto();

  await expect(page).toHaveTitle(/Add Employee/);

  await addEmployeePage.fillFormAndAdd();

  await expect(page).toHaveURL(/employees/);
});

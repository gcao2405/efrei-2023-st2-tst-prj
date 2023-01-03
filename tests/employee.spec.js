// @ts-check
const { test, expect } = require('@playwright/test');
const { AddEmployeePage } = require('../pages/add_employee/add_employee');
const { EmployeesPage } = require('../pages/employees/employees');
const { User } = require('../models/user');
const { HomePage } = require('../pages/home');

test.beforeEach(async ({ page }, testInfo) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.resetDatabase();
});

test('Update name and email of employee sucessfully', async ({ page }) => {
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.goto();

  await expect(page).toHaveTitle(/Add Employee/);

  const user = new User(
    'Adam Smith',
    'email@example.com',
    '1 rue La Tour',
    'Batiment A',
    'Paris',
    '75000',
    '2023-01-01',
    'Student',
  );
  await addEmployeePage.addUser(user);

  const employeesPage = new EmployeesPage(page);
  employeesPage.goto();
  await employeesPage.updateBasicInfo('New name', 'newemail@example.com');
  employeesPage.goto();
  await expect(employeesPage.employeeList).toContainText([
    'New name',
    'newemail@example.com',
  ])
});

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

test('Add 2 employees sucessfully', async ({ page }) => {
  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.goto();

  await expect(page).toHaveTitle(/Add Employee/);

  const user1 = new User(
    'Adam Smith',
    'email@example.com',
    '1 rue La Tour',
    'Batiment A',
    'Paris',
    '75000',
    '2023-01-01',
    'Student',
  )
  await addEmployeePage.addUser(user1);

  addEmployeePage.goto();

  const user2 = new User(
    'John',
    'email@mail.com',
    '2 rue La Tour',
    'Batiment B',
    'Paris',
    '75000',
    '2023-01-02',
    'Student',
  )
  await addEmployeePage.addUser(user2);

  await expect(page).toHaveURL(/employees/);
  const employeesPage = new EmployeesPage(page);
  await expect(employeesPage.employeeList).toContainText([
    user1.name,
    user1.email,
    user2.name,
    user2.email,
  ])
});

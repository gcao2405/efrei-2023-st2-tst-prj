const { test, expect } = require('@playwright/test');
const { ListTeamPage } = require('../pages/list_team/list_team')
const { HomePage } = require('../pages/home');
const { AddEmployeePage } = require('../pages/add_employee/add_employee');
const { AddTeamPage } = require('../pages/add_team/add_team');
const { EmployeesPage } = require('../pages/employees/employees');
const { User } = require('../models/user');

test.beforeEach(async ({ page }, testInfo) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.resetDatabase();
});

test('Go to Home page', async ({ page }) => {
    const listTeamPage = new ListTeamPage(page);
    await listTeamPage.goto();

    await expect(page).toHaveTitle(/Teams/);

    await listTeamPage.goHome();

    await expect(page).toHaveTitle("HR DB - HR DB");
});

test('Add member to team successfully', async ({ page }) => {
    const addEmployeePage = new AddEmployeePage(page);
    await addEmployeePage.goto();
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

    const addTeamPage = new AddTeamPage(page);
    await addTeamPage.goto();
    await addTeamPage.addTeam();

    const listTeamPage = new ListTeamPage(page);
    await listTeamPage.goto();

    const teamOption = (await listTeamPage.deleteTeamLink.getAttribute('href')).split('/')[3];

    const employeesPage = new EmployeesPage(page);
    await employeesPage.goto();
    await employeesPage.addEmployeeToTeam(teamOption);

    await listTeamPage.goto();

    await listTeamPage.viewMembers();

    await expect(listTeamPage.memberList).toContainText([
        user.name,
    ]);
});

test('Delete team successfully', async ({ page }) => {
    const addTeamPage = new AddTeamPage(page);
    await addTeamPage.goto();
    await addTeamPage.addTeam('should_be_deleted');

    const listTeamPage = new ListTeamPage(page);
    await listTeamPage.goto();

    await expect(page).toHaveTitle(/Teams/);

    await listTeamPage.deleteTeam();

    await listTeamPage.goto();
    await expect(listTeamPage.teamList).not.toBeVisible();
});
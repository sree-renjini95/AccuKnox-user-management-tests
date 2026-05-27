const { test, expect } = require('@playwright/test');

const { LoginPage } = require('./pages/loginPage');

const { AdminPage } = require('./pages/adminPage');

test.describe('OrangeHRM User Management', () => {

    test.setTimeout(120000);

    test('Complete User Management Flow', async ({ page }) => {

        const username = `qauser${Date.now()}`;

        const password = 'Test@123';

        // Open Application
        await page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );

        // Login
        const loginPage = new LoginPage(page);

        await loginPage.login('Admin', 'admin123');

        await page.waitForTimeout(5000);

        // Admin Module
        const adminPage = new AdminPage(page);

        await adminPage.gotoAdmin();

        // Add User
        await adminPage.addUser(username, password);

        // Search User
        await adminPage.searchUser(username);

        // Validation
        await expect(
            page.locator(`text=${username}`)
        ).toBeVisible();
    });
});
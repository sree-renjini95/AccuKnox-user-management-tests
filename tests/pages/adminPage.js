const { expect } = require('@playwright/test');

class AdminPage {

    constructor(page) {

        this.page = page;

        // Menu
        this.adminMenu = page.getByRole('link', { name: 'Admin' });

        // Buttons
        this.addBtn = page.getByRole('button', { name: 'Add' });

        this.saveBtn = page.getByRole('button', { name: 'Save' });

        this.searchBtn = page.getByRole('button', { name: 'Search' });

        // Dropdowns
        this.userRoleDropdown = page.locator(
            '(//div[contains(@class,"oxd-select-text")])[1]'
        );

        // Inputs
        this.employeeName = page.locator(
            'input[placeholder="Type for hints..."]'
        );

        this.usernameInput = page.locator(
            '//label[text()="Username"]/../following-sibling::div/input'
        );

        this.passwordInput = page.locator(
            '(//input[@type="password"])[1]'
        );

        this.confirmPasswordInput = page.locator(
            '(//input[@type="password"])[2]'
        );

        // Search
        this.searchUsername = page.locator(
            '(//input[contains(@class,"oxd-input")])[2]'
        );
    }

    async gotoAdmin() {

        await this.adminMenu.waitFor({ state: 'visible' });

        await this.adminMenu.click();

        await this.page.waitForTimeout(3000);
    }

    async addUser(username, password) {

    await this.addBtn.click();

    await this.page.waitForTimeout(4000);

    // User Role
    await this.userRoleDropdown.click();

    await this.page.waitForTimeout(2000);

    await this.page.locator(
        '//span[text()="ESS"]'
    ).click();

    // Employee Name
    await this.employeeName.fill('a');

    await this.page.waitForTimeout(5000);

    await this.page.locator(
        '.oxd-autocomplete-option'
    ).first().click();

    // Status Dropdown
    await this.page.locator(
        '(//div[contains(@class,"oxd-select-text")])[2]'
    ).click();

    await this.page.waitForTimeout(2000);

    // Select Enabled
    await this.page.locator(
        '//span[text()="Enabled"]'
    ).last().click();

    // Username
    await this.usernameInput.fill(username);

    // Password
    await this.passwordInput.fill(password);

    await this.confirmPasswordInput.fill(password);

    await this.page.waitForTimeout(3000);

    // Save
    await this.saveBtn.click();

    await this.page.waitForTimeout(5000);
}
    async searchUser(username) {

        await this.searchUsername.fill(username);

        await this.searchBtn.click();

        await this.page.waitForTimeout(5000);
    }
}

module.exports = { AdminPage };

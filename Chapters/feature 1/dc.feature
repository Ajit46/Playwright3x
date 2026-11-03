Scenario: Verify Select Value popup for Applicable to field
    When User opens the Maximo application "ESQCR High Risk"
    And User clicks on Quick Search menu
    And User clicks on "More Search Fields"
    And User clicks on Select Value icon for "Applicable to"
    Then Select Value popup heading should be displayed

    ---------------------
    const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class ESQCRHighRiskPage extends BasePage {
    constructor(page) {
        super(page);

        this.quickSearchMenu = this.frame.getByRole('button', {
            name: 'Quick Search menu'
        });

        this.moreSearchFields = this.frame.getByRole('menuitem', {
            name: 'More Search Fields'
        });

        // Codegen locator for the Applicable to magnifying-glass icon
        this.applicableToSelectValueIcon = this.frame.locator('#m9ab876f2-img');

        this.selectValueHeading = this.frame.getByText('Select Value', {
            exact: true
        });
    }

    async clickQuickSearchMenu() {
        await this.quickSearchMenu.click();
    }

    async clickMoreSearchFields() {
        await this.moreSearchFields.click();
    }

    async clickApplicableToSelectValue() {
        await this.applicableToSelectValueIcon.click();
    }

    async verifySelectValueHeadingDisplayed() {
        await expect(this.selectValueHeading).toBeVisible();
    }
}

module.exports = ESQCRHighRiskPage;
-----------------
const { When, Then } = require('@cucumber/cucumber');
const ESQCRHighRiskPage = require('../pages/ESQCRHighRiskPage');

When('User clicks on Quick Search menu', async function () {
    const page = new ESQCRHighRiskPage(this.page);
    await page.clickQuickSearchMenu();
});

When('User clicks on {string}', async function (option) {
    const page = new ESQCRHighRiskPage(this.page);

    if (option === 'More Search Fields') {
        await page.clickMoreSearchFields();
    }
});

When('User clicks on Select Value icon for {string}', async function (fieldName) {
    const page = new ESQCRHighRiskPage(this.page);

    if (fieldName === 'Applicable to') {
        await page.clickApplicableToSelectValue();
    }
});

Then('Select Value popup heading should be displayed', async function () {
    const page = new ESQCRHighRiskPage(this.page);
    await page.verifySelectValueHeadingDisplayed();
});
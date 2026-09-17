const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const ApplicationNavigation = require("../../pageObjects/ApplicationNavigation");
const AssetMeterPage = require("../../pageObjects/AssetMeterPage");


// ============================================================
// APPLICATION NAVIGATION
// ============================================================

When(
    'User opens the Maximo application {string}',
    async function (applicationName) {

        const applicationNavigation =
            new ApplicationNavigation(this.page);

        await applicationNavigation.openApplication(applicationName);

        console.log(
            `Navigated to Maximo application: ${applicationName}`
        );
    }
);


// ============================================================
// ASSET METER APPLICATION
// ============================================================

Then(
    '"Asset Meter" application should be displayed',
    async function () {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        // Wait for the Asset Meter page/frame to be available
        await expect(
            assetMeterPage.frame
        ).toBeVisible({ timeout: 60000 });

        console.log("Asset Meter application is displayed");
    }
);


// ============================================================
// QUICK SEARCH MENU
// ============================================================

When(
    'User clicks on "Quick Search" menu',
    async function () {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        await assetMeterPage.clickQuickSearch();

        console.log("Quick Search menu clicked");
    }
);


// ============================================================
// QUICK SEARCH OPTIONS VALIDATION
// ============================================================

Then(
    'the following Quick Search options should be displayed:',
    async function (dataTable) {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        const options = dataTable.raw().flat();

        for (const option of options) {

            await expect(
                await assetMeterPage.isQuickSearchOptionDisplayed(option),
                `Quick Search option "${option}" should be displayed`
            ).toBeTruthy();

            console.log(
                `Verified Quick Search option: ${option}`
            );
        }
    }
);


// ============================================================
// MORE SEARCH FIELDS
// ============================================================

When(
    'User clicks on "More Search Fields"',
    async function () {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        await assetMeterPage.clickMoreSearchFields();

        console.log("More Search Fields clicked");
    }
);


// ============================================================
// MORE SEARCH FIELDS POPUP VALIDATION
// ============================================================

Then(
    '"More Search Fields" popup should be displayed',
    async function () {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        await expect(
            assetMeterPage.moreSearchFieldsPopup
        ).toBeVisible({ timeout: 30000 });

        console.log(
            '"More Search Fields" popup is displayed'
        );
    }
);


// ============================================================
// POPUP BUTTON VALIDATIONS
// ============================================================

Then(
    '"Find" button should be displayed',
    async function () {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        await expect(
            assetMeterPage.findButton
        ).toBeVisible({ timeout: 30000 });

        console.log('"Find" button is displayed');
    }
);


Then(
    '"Restore Application Defaults" button should be displayed',
    async function () {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        await expect(
            assetMeterPage.restoreApplicationDefaultsButton
        ).toBeVisible({ timeout: 30000 });

        console.log(
            '"Restore Application Defaults" button is displayed'
        );
    }
);


Then(
    '"Revise" button should be displayed',
    async function () {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        await expect(
            assetMeterPage.reviseButton
        ).toBeVisible({ timeout: 30000 });

        console.log('"Revise" button is displayed');
    }
);


Then(
    '"Cancel" button should be displayed',
    async function () {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        await expect(
            assetMeterPage.cancelButton
        ).toBeVisible({ timeout: 30000 });

        console.log('"Cancel" button is displayed');
    }
);
Then(
    'the following More Search Fields should be displayed:',
    async function (dataTable) {

        const fields = dataTable.raw().flat();

        for (const fieldName of fields) {
            await this.assetMeterPage.verifyMoreSearchFieldDisplayed(fieldName);
        }
    }
);
When(
    'User clicks on {string}',
    async function (buttonName) {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        await assetMeterPage.clickButton(buttonName);

        console.log(`Clicked on "${buttonName}"`);
    }
);
Then(
    'the following Revise options should be displayed:',
    async function (dataTable) {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        const options = dataTable.raw().flat();

        for (const optionName of options) {

            console.log(
                "Revise option value:",
                JSON.stringify(optionName)
            );

            await assetMeterPage
                .verifyReviseOptionDisplayed(optionName);
        }
    }
);

When(
    'User clicks on "Where Clause"',
    async function () {

        const assetMeterPage = new AssetMeterPage(this.page);

        await assetMeterPage.clickWhereClause();

        console.log('Clicked on "Where Clause"');
    }
)

Then(
    'the following Where Clause elements should be displayed:',
    async function (dataTable) {

        const assetMeterPage = new AssetMeterPage(this.page);

        const elements = dataTable.raw().flat();

        await assetMeterPage.verifyWhereClauseElementsDisplayed(elements);
    }
);
When(
    'User clicks on "View Search Tips"',
    async function () {

        const assetMeterPage =
            new AssetMeterPage(this.page);

        this.newPage =
            await assetMeterPage.clickViewSearchTips();

        console.log('Clicked on "View Search Tips"');
        console.log('New browser tab opened');
    }
);
Then(
    'a new browser tab should be opened',
    async function () {

        expect(this.newPage).toBeTruthy();

        await this.newPage.waitForLoadState();

        console.log(
            'Verified: View Search Tips opened in a new browser tab'
        );
    }
);
When('User clicks enter', async function () {

    const assetMeterPage = new AssetMeterPage(this.page);

    await assetMeterPage.clickEnter();

    console.log('User pressed Enter');
});


Then('the Asset Meter list should be loaded', async function () {

    const assetMeterPage = new AssetMeterPage(this.page);

    await assetMeterPage.verifyAssetMeterListLoaded();

    console.log('Asset Meter list is loaded');
});


Then(
    'the following List View actions should be displayed:',
    async function (dataTable) {

        const assetMeterPage = new AssetMeterPage(this.page);

        const actions = dataTable.raw().flat();

        await assetMeterPage.verifyListViewActionsDisplayed(actions);

        console.log(
            `Verified List View actions: ${actions.join(', ')}`
        );
    }
);
When('User clicks on the Download icon', async function () {
    const assetMeterPage = new AssetMeterPage(this.page);

    this.download = await assetMeterPage.downloadAssetMeterRecords();
});
Then(
    'the Asset Meter records should be downloaded successfully in Excel format',
    async function () {
        expect(this.download).toBeTruthy();

        const fileName = this.download.suggestedFilename();

        expect(fileName).toMatch(/\.xlsx$/i);

        console.log(
            `Verified: Asset Meter records downloaded successfully in Excel format - ${fileName}`
        );
    }
);
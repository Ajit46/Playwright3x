const BasePage = require("./BasePage");
const fs = require('fs');

class AssetMeterPage extends BasePage {
    constructor(page) {
        super(page);

        // Quick Search menu
        this.quickSearchMenu = this.frame.getByRole("button", {
            name: "Quick Search menu"
        });

        // Quick Search options
        this.moreSearchFields = this.frame.getByText("More Search Fields", {
            exact: true
        });

        this.whereClause = this.frame.getByText("Where clause", {
            exact: true
        });

        this.viewSearchTips = this.frame.getByText("View Search tips", {
            exact: true
        });

        this.saveCurrentQuery = this.frame.getByText("Save Current Query", {
            exact: true
        });

        this.viewManageQueries = this.frame.getByText("View/manage Queries", {
            exact: true
        });

        this.bookmarks = this.frame.getByText("Bookmarks", {
            exact: true
        });

        // More Search Fields popup
        this.moreSearchFieldsPopup = this.frame.getByText(
            "More Search Fields",
            { exact: true }
        );

        // Popup buttons
        this.findButton = this.frame.getByRole("button", {
            name: "Find",
            exact: true
        });

        this.restoreApplicationDefaultsButton = this.frame.getByRole("button", {
            name: "Restore Application Defaults",
            exact: true
        });

        this.reviseButton = this.frame.getByRole("button", {
            name: "Revise",
            exact: true
        });

        this.cancelButton = this.frame.getByRole("button", {
            name: "Cancel",
            exact: true
        });
    }

    async clickQuickSearch() {
        await this.quickSearchMenu.click();
    }

    async isQuickSearchOptionDisplayed(option) {
        switch (option) {
            case "More Search Fields":
                return await this.moreSearchFields.isVisible();

            case "Where clause":
                return await this.whereClause.isVisible();

            case "View Search tips":
                return await this.viewSearchTips.isVisible();

            case "Save Current Query":
                return await this.saveCurrentQuery.isVisible();

            case "View/manage Queries":
                return await this.viewManageQueries.isVisible();

            case "Bookmarks":
                return await this.bookmarks.isVisible();

            default:
                throw new Error(`Unknown Quick Search option: ${option}`);
        }
    }

    async clickMoreSearchFields() {
        await this.moreSearchFields.click();
    }

    async isMoreSearchFieldsPopupDisplayed() {
        return await this.moreSearchFieldsPopup.isVisible();
    }

    async isButtonDisplayed(buttonName) {
        switch (buttonName) {
            case "Find":
                return await this.findButton.isVisible();

            case "Restore Application Defaults":
                return await this.restoreApplicationDefaultsButton.isVisible();

            case "Revise":
                return await this.reviseButton.isVisible();

            case "Cancel":
                return await this.cancelButton.isVisible();

            default:
                throw new Error(`Unknown button: ${buttonName}`);
        }
    }
     async verifyMoreSearchFieldsDisplayed(fields) {

        for (const fieldName of fields) {

            const field = this.frame.getByText(fieldName, {
                exact: true
            });

            await expect(
                field,
                `More Search Field "${fieldName}" should be displayed`
            ).toBeVisible({ timeout: 10000 });

            console.log(`Verified More Search Field: ${fieldName}`);
        }
    }

    async clickButton(buttonName) {

    switch (buttonName) {

        case "Revise":
            await this.reviseButton.click();
            break;

        default:
            throw new Error(`Unknown button: ${buttonName}`);
    }
}

    async verifyReviseOptionDisplayed(optionName) {

        const option = this.frame.getByText(optionName, {
            exact: true
        });

        await expect(
            option,
            `Revise option "${optionName}" should be displayed`
        ).toBeVisible({
            timeout: 10000
        });

        console.log(
            `Verified Revise option: ${optionName}`
        );
    }
async clickWhereClause() {
    const whereClause = this.frame.getByText("Where Clause", {
        exact: true
    });

    await expect(whereClause).toBeVisible({
        timeout: 10000
    });

    await whereClause.click();

    console.log('Clicked on "Where Clause"');
}
async verifyWhereClauseElementsDisplayed(elements) {
    for (const elementName of elements) {

        let element;

        if (elementName === "Current Query") {
            element = this.page.getByText("Current Query", { exact: true });
        } else {
            element = this.page.getByRole("button", {
                name: elementName,
                exact: true
            });
        }

        await expect(
            element,
            `"${elementName}" should be displayed`
        ).toBeVisible({ timeout: 10000 });

        console.log(`Verified Where Clause element: ${elementName}`);
    }
}
async clickViewSearchTips() {

        const context = this.page.context();

        // Start listening BEFORE clicking
        const newPagePromise = context.waitForEvent("page");

        // Same locator type as Where Clause
        await this.frame.getByText("View Search Tips", {
            exact: true
        }).click();

        // Capture newly opened tab
        const newPage = await newPagePromise;

        await newPage.waitForLoadState();

        return newPage;
    }

     async clickEnter() {
        const filterField = this.frame.locator('input:visible').first();

        await filterField.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await filterField.press('Enter');
    }

    /**
     * Wait until Asset Meter records are actually loaded.
     *
     * data-has-data="false" = empty/initial state
     * data-has-data="true"  = records loaded
     */
    async verifyAssetMeterListLoaded() {
        const loadedRow = this.frame.locator(
            'tr[data-has-data="true"]'
        ).first();

        await loadedRow.waitFor({
            state: 'visible',
            timeout: 30000
        });
    }

    /**
     * Verify List View toolbar actions
     */
    async verifyListViewActionsDisplayed(actions) {

        for (const action of actions) {

            let locator;

            switch (action.trim()) {

                case 'Clear Filter':
                    locator = this.frame.locator(
                        'a[title="Clear Filter"], button[title="Clear Filter"]'
                    ).first();
                    break;

                case 'Reload':
                    locator = this.frame.locator(
                        'a[title="Reload"], button[title="Reload"]'
                    ).first();
                    break;

                case 'Download':
                    locator = this.frame.locator(
                        'a[title="Download"], button[title="Download"]'
                    ).first();
                    break;

                case 'Maximize':
                    locator = this.frame.locator(
                        'a[title="Maximize"], button[title="Maximize"]'
                    ).first();
                    break;

                default:
                    throw new Error(`Unsupported List View action: ${action}`);
            }

            await expect(
                locator,
                `"${action}" should be displayed`
            ).toBeVisible({
                timeout: 10000
            });
        }
    }
async downloadAssetMeterRecords() {
    const downloadPromise = this.page.waitForEvent('download');

    await this.frame
        .locator('a[title="Download"], button[title="Download"]')
        .first()
        .click();

    const download = await downloadPromise;

    const fileName = download.suggestedFilename();

    // Verify downloaded file is an Excel file
    expect(fileName).toMatch(/\.xlsx$/i);

    // Get downloaded file path
    const filePath = await download.path();

    // Verify file was downloaded
    expect(filePath).toBeTruthy();

    // Verify file has content
    const fileStats = fs.statSync(filePath);
    expect(fileStats.size).toBeGreaterThan(0);

    console.log(`Downloaded file: ${fileName}`);
    console.log(`Downloaded file size: ${fileStats.size} bytes`);

    return download;
}
async clickAnyAssetMeterRecord() {
    await this.frame
        .locator('tbody tr[data-has-data="true"]')
        .first()
        .click();
}

async getAssetNumber() {
    const assetField = this.frame
        .locator('input[role="textbox"].fld_text.fld_ro')
        .first();

    return await assetField.inputValue();
}

async clickNextRecord() {
    await this.frame
        .locator('#toolactions_NEXT-tbb')
        .first()
        .click();
}

async clickPreviousRecord() {
    await this.frame
        .locator('#toolactions_PREVIOUS-tbb')
        .first()
        .click();
}
}

module.exports = AssetMeterPage;
Then the following sections should be displayed in the List View page:
    | ESQCR High Risk Codes         |
    | Locations (Please be patient) |

----------------
const { expect } = require('@playwright/test');

class ESQCRHighRiskPage {

    constructor(page) {
        this.page = page;
        this.frame = page.frameLocator('iframe[title="Manage"]');
    }

    async verifySectionsDisplayed(sections) {

        for (const row of sections) {

            const sectionName = Object.values(row)[0];

            const section = this.frame.getByRole('heading', {
                name: sectionName,
                exact: true
            });

            await expect(
                section,
                `Section "${sectionName}" should be displayed`
            ).toBeVisible({ timeout: 30000 });

            console.log(`Verified section: ${sectionName}`);
        }
    }
}

module.exports = ESQCRHighRiskPage;

---------------\
Then(
    'the following sections should be displayed in the List View page:',
    async function (dataTable) {

        const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

        await esqcrHighRiskPage.verifySectionsDisplayed(
            dataTable.hashes()
        );
    }
);

---------------------

Feature: ESQCR High Risk - Quick Search

  Scenario: Verify Quick Search options and More Search Fields popup
    Given User is logged into Maximo
    When User opens the Maximo application "ESQCR High Risk"
    And User clicks on Quick Search menu
    Then the following Quick Search options should be displayed:
      | More Search Fields    |
      | Where Clause          |
      | Save Current Query    |
      | View/Manage Queries   |

    When User clicks on "More Search Fields"
    Then the More Search Fields popup should be displayed
    And the following buttons should be displayed in the More Search Fields popup:
      | Find                         |
      | Restore Application Defaults |
      | Revise                       |
      | Cancel                       |

---------------------

const { expect } = require('@playwright/test');
const BasePage = require('../BasePage');

class ESQCRHighRiskPage extends BasePage {

    constructor(page) {
        super(page);

        // Quick Search menu
        this.quickSearchMenu = this.frame.getByRole('button', {
            name: 'Quick Search menu'
        });

        // Quick Search options
        this.moreSearchFields = this.frame.getByText(
            'More Search Fields',
            { exact: true }
        );

        this.whereClause = this.frame.getByText(
            'Where Clause',
            { exact: true }
        );

        this.saveCurrentQuery = this.frame.getByText(
            'Save Current Query',
            { exact: true }
        );

        this.viewManageQueries = this.frame.getByText(
            'View/Manage Queries',
            { exact: true }
        );

        // More Search Fields popup title
        // Exact text from your Codegen screenshot
        this.moreSearchFieldsPopupTitle = this.frame.getByText(
            'More Search Fields | Current'
        );

        // Popup buttons
        this.findButton = this.frame.getByRole('button', {
            name: 'Find',
            exact: true
        });

        this.restoreDefaultsButton = this.frame.getByRole('button', {
            name: 'Restore Application Defaults'
        });

        this.reviseButton = this.frame.getByRole('button', {
            name: 'Revise'
        });

        this.cancelButton = this.frame.getByRole('button', {
            name: 'Cancel'
        });
    }

    async clickQuickSearchMenu() {
        await this.quickSearchMenu.click();
    }

    async verifyQuickSearchOptionDisplayed(option) {

        let locator;

        switch (option.trim().toLowerCase()) {

            case 'more search fields':
                locator = this.moreSearchFields;
                break;

            case 'where clause':
                locator = this.whereClause;
                break;

            case 'save current query':
                locator = this.saveCurrentQuery;
                break;

            case 'view/manage queries':
                locator = this.viewManageQueries;
                break;

            default:
                throw new Error(`Unknown Quick Search option: ${option}`);
        }

        await expect(locator).toBeVisible();
    }

    async clickMoreSearchFields() {
        await this.moreSearchFields.click();
    }

    async verifyMoreSearchFieldsPopup() {
        await expect(this.moreSearchFieldsPopupTitle).toBeVisible();
    }

    async verifyMoreSearchFieldsPopupButton(buttonName) {

        let locator;

        switch (buttonName.trim().toLowerCase()) {

            case 'find':
                locator = this.findButton;
                break;

            case 'restore application defaults':
                locator = this.restoreDefaultsButton;
                break;

            case 'revise':
                locator = this.reviseButton;
                break;

            case 'cancel':
                locator = this.cancelButton;
                break;

            default:
                throw new Error(`Unknown popup button: ${buttonName}`);
        }

        await expect(locator).toBeVisible();
    }
}

module.exports = ESQCRHighRiskPage;

------------------------

const { When, Then } = require('@cucumber/cucumber');
const ESQCRHighRiskPage = require('../pages/ESQCRHighRiskPage');

When('User clicks on Quick Search menu', async function () {

    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.clickQuickSearchMenu();
});

Then(
    'the following Quick Search options should be displayed:',
    async function (dataTable) {

        const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

        const options = dataTable.raw();

        for (const row of options) {

            const optionName = row[0];

            await esqcrHighRiskPage.verifyQuickSearchOptionDisplayed(
                optionName
            );
        }
    }
);

When('User clicks on {string}', async function (optionName) {

    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    if (optionName === 'More Search Fields') {
        await esqcrHighRiskPage.clickMoreSearchFields();
    } else {
        throw new Error(`Unknown option to click: ${optionName}`);
    }
});

Then(
    'the More Search Fields popup should be displayed',
    async function () {

        const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

        await esqcrHighRiskPage.verifyMoreSearchFieldsPopup();
    }
);

Then(
    'the following buttons should be displayed in the More Search Fields popup:',
    async function (dataTable) {

        const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

        const buttons = dataTable.raw();

        for (const row of buttons) {

            const buttonName = row[0];

            await esqcrHighRiskPage.verifyMoreSearchFieldsPopupButton(
                buttonName
            );
        }
    }
);

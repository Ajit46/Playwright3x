Scenario: Verify Revise dropdown options in ESQCR High Risk

    When User opens the Maximo application "ESQCR High Risk"

    When User clicks on Quick Search menu

    Then the following Quick Search options should be displayed:
        | More Search Fields |
        | Where Clause |
        | Save Current Query |
        | View/Manage Queries |

    When User clicks on "More Search Fields"

    Then the More Search Fields popup should be displayed

    And the following buttons should be displayed in the popup:
        | Find |
        | Restore Application Defaults |
        | Revise |
        | Cancel |

    When User clicks on Revise and verifies its dropdown options:
        | Clear Query and Fields |
        | Clear All Fields |
        | Change Query |
        | Restore Default Query |

        -----------------
        async verifyReviseDropdownOptions(options) {
    const reviseButton = this.frame.getByRole('button', {
        name: 'Revise',
        exact: true
    });

    await reviseButton.click();

    for (const row of options) {
        const optionName = row[0];

        const option = this.frame.getByText(optionName, {
            exact: true
        });

        await expect(option).toBeVisible({ timeout: 30000 });
    }
}

-------------------------------

const { When, Then } = require('@cucumber/cucumber');
const ESQCRHighRiskPage = require('../pages/ESQCRHighRiskPage');

When('User clicks on Quick Search menu', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.clickQuickSearchMenu();
});

Then('the following Quick Search options should be displayed:', async function (dataTable) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.verifyQuickSearchOptions(dataTable.raw());
});

When('User clicks on {string}', async function (optionName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    if (optionName === 'More Search Fields') {
        await esqcrHighRiskPage.clickMoreSearchFields();
    } else {
        throw new Error(`Unsupported option: ${optionName}`);
    }
});

Then('the More Search Fields popup should be displayed', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.verifyMoreSearchFieldsPopup();
});

Then('the following buttons should be displayed in the popup:', async function (dataTable) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.verifyMoreSearchFieldsButtons(dataTable.raw());
});

When('User clicks on Revise and verifies its dropdown options:', async function (dataTable) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.verifyReviseDropdownOptions(dataTable.raw());
});

async clickLandUsageDropdown() {
    const landUsageDropdown = this.frame.locator('#mb93befe3-img');

    await landUsageDropdown.click();
}

async clickSelectValue() {
    const selectValueOption = this.frame.getByRole('menuitem', {
        name: 'Select Value'
    });

    await selectValueOption.click();
}

async verifySelectValuePage() {
    const selectValueHeading = this.frame.getByText('Select Value');

    await expect(selectValueHeading).toBeVisible();
}

async clickSelectValueCancel() {
    const cancelButton = this.frame
        .getByRole('group', { name: 'Select Value Dialog Button' })
        .getByRole('button', { name: 'Cancel' });

    await cancelButton.click();
}

async clickGoToDomains() {
    const goToDomainsOption = this.frame.getByRole('menuitem', {
        name: 'Go To Domains'
    });

    await goToDomainsOption.click();
}

async verifyDomainsPage() {
    const domainsHeading = this.frame
        .locator('#toolbar2-chld_appName')
        .getByRole('heading', { name: 'Domains' });

    await expect(domainsHeading).toBeVisible();
}
--------------
When User clicks on ESQCR Land Usage dropdown

When User selects "Select Value" from the dropdown

Then the Select Value page should be displayed

When User clicks on Cancel in Select Value popup

When User clicks on ESQCR Land Usage dropdown

When User selects "Go To Domains" from the dropdown

Then the Domains page should be displayed

-----------------\

When('User clicks on ESQCR Land Usage dropdown', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.clickLandUsageDropdown();
});

When('User selects {string} from the dropdown', async function (optionName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    if (optionName === 'Select Value') {
        await esqcrHighRiskPage.clickSelectValue();
    } else if (optionName === 'Go To Domains') {
        await esqcrHighRiskPage.clickGoToDomains();
    } else {
        throw new Error(`Unsupported dropdown option: ${optionName}`);
    }
});

Then('the Select Value page should be displayed', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.verifySelectValuePage();
});

When('User clicks on Cancel in Select Value popup', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.clickSelectValueCancel();
});

Then('the Domains page should be displayed', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.verifyDomainsPage();
});
---------------

 When User selects domain value "TCKT2TCKT"

    And User clicks on Return With Value

    Then ESQCR Land Usage should contain the selected value "=TCKT2TCKT"

    -----------


    async selectDomainValue(domainValue) {
        const domain = this.frame.getByRole('textbox', {
            name: 'Domain',
            description: domainValue
        });

        await domain.click();
    }

    // Click Return With Value
    async clickReturnWithValue() {
        const returnWithValueButton = this.frame.getByRole('button', {
            name: 'Return With Value'
        });

        await returnWithValueButton.click();
    }

    // Verify returned value in ESQCR Land Usage field
    async verifySelectedLandUsageValue(expectedValue) {
        const landUsageField = this.frame.getByRole('textbox', {
            name: 'ESQCR Land Usage'
        });

        await expect(landUsageField).toBeVisible({ timeout: 30000 });

        await expect(landUsageField).toHaveValue(expectedValue, {
            timeout: 30000
        });
    }

    -----------
    // Select domain value
When('User selects domain value {string}', async function (domainValue) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.selectDomainValue(domainValue);
});

// Click Return With Value
When('User clicks on Return With Value', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.clickReturnWithValue();
});

// Verify returned ESQCR Land Usage value
Then('ESQCR Land Usage should contain the selected value {string}', async function (expectedValue) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    await esqcrHighRiskPage.verifySelectedLandUsageValue(expectedValue);
});


-----------------
Feature: Validate Item Stewards domain navigation in ESQCR High Risk

  Scenario: Verify Select Value and Go To Person Groups for Item Stewards
    When User opens the Maximo application "ESQCR High Risk"
    And User clicks on Quick Search menu
    And User clicks on "More Search Fields"
    And User opens the dropdown for "Item Stewards"
    And User selects "Select Value"
    Then "Select Value" popup should be displayed
    When User closes the Select Value popup
    And User opens the dropdown for "Item Stewards"
    And User selects "Go To Person Groups"
    Then "Persons Groups" page should be displayed
    When User searches for Person Group "ELEC"
    And User selects Person Group "ELEC"
    And User clicks on "Return With Value"
    Then Item Stewards field should contain "=ELEC"


----------------------
const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class ESQCRHighRiskPage extends BasePage {

    async openItemStewardsDropdown() {
        await this.frame.locator('#m9542e964-img').click();
    }

    async selectDropdownOption(optionName) {
        await this.frame.getByRole('menuitem', {
            name: optionName,
            exact: true
        }).click();
    }

    async verifySelectValuePopup() {
        const selectValuePopup = this.frame.getByRole('group', {
            name: 'Select Value Dialog Button'
        });

        await expect(selectValuePopup).toContainText('Select Value');
    }

    async closeSelectValuePopup() {
        const selectValuePopup = this.frame.getByRole('group', {
            name: 'Select Value Dialog Button'
        });

        await selectValuePopup.getByRole('button', {
            name: 'Cancel'
        }).click();
    }

    async verifyPersonsGroupsPage() {
        await expect(
            this.frame.getByRole('heading', {
                name: 'Persons Groups',
                exact: true
            })
        ).toBeVisible();
    }

    async searchPersonGroup(groupName) {
        const personGroupSearch = this.frame.getByRole('textbox', {
            name: 'Person Group'
        });

        await personGroupSearch.fill(groupName);
        await personGroupSearch.press('Enter');
    }

    async selectPersonGroup(groupName) {
        await this.frame.getByText(groupName, {
            exact: true
        }).click();
    }

    async clickReturnWithValue() {
        await this.frame.getByRole('button', {
            name: 'Return With Value',
            exact: true
        }).click();
    }

    async verifyItemStewardsValue(expectedValue) {
        const itemStewardsField = this.frame.getByRole('textbox', {
            name: 'Item Stewards',
            description: '=ELEC'
        });

        await expect(itemStewardsField).toBeVisible();
        await expect(itemStewardsField).toHaveValue(expectedValue);
    }
}

module.exports = ESQCRHighRiskPage;

---------------------------------------
const { When, Then } = require('@cucumber/cucumber');
const ESQCRHighRiskPage = require('../pages/ESQCRHighRiskPage');

When('User opens the dropdown for {string}', async function (fieldName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    if (fieldName === 'Item Stewards') {
        await esqcrHighRiskPage.openItemStewardsDropdown();
    }
});

When('User selects {string}', async function (optionName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.selectDropdownOption(optionName);
});

Then('{string} popup should be displayed', async function (popupName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    if (popupName === 'Select Value') {
        await esqcrHighRiskPage.verifySelectValuePopup();
    }
});

When('User closes the Select Value popup', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.closeSelectValuePopup();
});

Then('{string} page should be displayed', async function (pageName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    if (pageName === 'Persons Groups') {
        await esqcrHighRiskPage.verifyPersonsGroupsPage();
    }
});

When('User searches for Person Group {string}', async function (groupName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.searchPersonGroup(groupName);
});

When('User selects Person Group {string}', async function (groupName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.selectPersonGroup(groupName);
});

When('User clicks on {string}', async function (buttonName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

    if (buttonName === 'Return With Value') {
        await esqcrHighRiskPage.clickReturnWithValue();
    }
});

Then('Item Stewards field should contain {string}', async function (expectedValue) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.verifyItemStewardsValue(expectedValue);
});



----------
async openItemStewardsDropdown() {
    await this.frame.locator('#m9542e964-img').click();
}

async clickSelectValue() {
    await this.frame.getByRole('menuitem', {
        name: 'Select Value',
        exact: true
    }).click();
}

async verifySelectValuePage() {
    await expect(
        this.frame.getByRole('heading', {
            name: 'Select Value',
            exact: true
        })
    ).toBeVisible();
}

async clickCancel() {
    await this.frame.getByRole('button', {
        name: 'Cancel',
        exact: true
    }).click();
}

async clickGoToPersonGroups() {
    await this.frame.getByRole('menuitem', {
        name: 'Go To Person Groups',
        exact: true
    }).click();
}

async verifyPersonsGroupsPage() {
    await expect(
        this.frame.getByRole('heading', {
            name: 'Persons Groups',
            exact: true
        })
    ).toBeVisible();
}

async searchPersonGroup(groupName) {
    await this.frame.getByRole('textbox', {
        name: 'Person Group'
    }).fill(groupName);

    await this.frame.getByRole('textbox', {
        name: 'Person Group'
    }).press('Enter');
}

async selectPersonGroup(groupName) {
    await this.frame.getByText(groupName, {
        exact: true
    }).click();
}

async clickReturnWithValue() {
    await this.frame.getByRole('button', {
        name: 'Return With Value',
        exact: true
    }).click();
}

async verifyItemStewardsValue(expectedValue) {
    const itemStewardsField = this.frame.getByRole('textbox', {
        name: 'Item Stewards'
    });

    await expect(itemStewardsField).toBeVisible();
    await expect(itemStewardsField).toHaveValue(expectedValue);
}

------------\


When('User opens Item Stewards dropdown', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.openItemStewardsDropdown();
});

When('User clicks Select Value', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.clickSelectValue();
});

Then('Select Value page should be displayed', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.verifySelectValuePage();
});

When('User clicks Cancel in Select Value popup', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.clickCancel();
});

When('User clicks Go To Person Groups', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.clickGoToPersonGroups();
});

Then('Persons Groups page should be displayed', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.verifyPersonsGroupsPage();
});

When('User searches Person Group {string}', async function (groupName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.searchPersonGroup(groupName);
});

When('User selects Person Group {string}', async function (groupName) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.selectPersonGroup(groupName);
});

When('User clicks Return With Value', async function () {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.clickReturnWithValue();
});

Then('Item Stewards field should contain {string}', async function (expectedValue) {
    const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);
    await esqcrHighRiskPage.verifyItemStewardsValue(expectedValue);

});
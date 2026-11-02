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
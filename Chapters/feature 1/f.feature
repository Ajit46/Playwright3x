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

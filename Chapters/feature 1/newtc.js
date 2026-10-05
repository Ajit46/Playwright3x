Scenario: Verify PEAR and Likelihood fields are editable

    Given User logs in to Maximo with the required credentials
    When User navigates to Assets -> Defect Matrix Settings (SSEN)
    And User clicks on "View Details"
    Then the PEAR and Likelihood fields should be editable



    --------------
    When('User clicks on "View Details"', async function () {
    const defectMatrixPage = new DefectMatrixPage(this.page);

    await defectMatrixPage.clickViewDetails();
});

Then('the PEAR and Likelihood fields should be editable', async function () {
    const defectMatrixPage = new DefectMatrixPage(this.page);

    await defectMatrixPage.verifyPearFieldsAreEditable();
});

-----------
async clickViewDetails() {
    await this.frame
        .getByRole('link', { name: 'View Details' })
        .first()
        .click();
}

async verifyPearFieldsAreEditable() {
    const fields = [
        'P (People)',
        'E (Environment)',
        'A (Asset)',
        'R (Reputation)',
        'Likelihood'
    ];

    for (const fieldName of fields) {
        const field = this.frame.getByRole('textbox', {
            name: fieldName
        });

        await expect(field).toBeEditable();

        console.log(`Verified "${fieldName}" field is editable`);
    }
}

-----------------------
When User clicks on the Priority Select Value icon

Then the Select Value popup should be displayed

When User filters Select Value Description with "Low"

Then the Select Value result "Low" should be displayed

When User clicks on "Cancel"

Then the Select Value popup should be closed

---------------------
async clickPrioritySelectValue() {
    await this.frame.locator('#m30c0a873-img').click();

    console.log('Clicked Priority Select Value icon');
}


async verifySelectValuePopupDisplayed() {
    const selectValuePopup = this.frame.getByRole('table', {
        name: 'Select Value'
    });

    await expect(selectValuePopup).toBeVisible();

    console.log('Verified Select Value popup is displayed');
}


async filterSelectValueDescription(description) {
    const selectValuePopup = this.frame.getByRole('table', {
        name: 'Select Value'
    });

    const descriptionField = selectValuePopup.getByRole('textbox', {
        name: 'Description'
    });

    await descriptionField.click();
    await descriptionField.fill(description);
    await descriptionField.press('Enter');

    console.log(`Filtered Select Value Description with "${description}"`);
}


async verifySelectValueResult(value) {
    await expect(
        this.frame.getByText(value, { exact: true })
    ).toBeVisible();

    console.log(`Verified Select Value result: ${value}`);
}


async clickSelectValueCancel() {
    await this.frame.getByRole('button', {
        name: 'Cancel'
    }).click();

    console.log('Clicked Cancel on Select Value popup');
}


async verifySelectValuePopupClosed() {
    await expect(
        this.frame.getByRole('table', {
            name: 'Select Value'
        })
    ).not.toBeVisible();

    console.log('Verified Select Value popup is closed');
}
------------------
When(
    'User clicks on the Priority Select Value icon',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);
        await defectMatrixPage.clickPrioritySelectValue();
    }
);


Then(
    'the Select Value popup should be displayed',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);
        await defectMatrixPage.verifySelectValuePopupDisplayed();
    }
);


When(
    'User filters Select Value Description with {string}',
    async function (description) {
        const defectMatrixPage = new DefectMatrixPage(this.page);
        await defectMatrixPage.filterSelectValueDescription(description);
    }
);


Then(
    'the Select Value result {string} should be displayed',
    async function (value) {
        const defectMatrixPage = new DefectMatrixPage(this.page);
        await defectMatrixPage.verifySelectValueResult(value);
    }
);


When(
    'User clicks on {string}',
    async function (buttonName) {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        if (buttonName === 'Cancel') {
            await defectMatrixPage.clickSelectValueCancel();
        }
    }
);


Then(
    'the Select Value popup should be closed',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);
        await defectMatrixPage.verifySelectValuePopupClosed();
    }
);

--@MAS9UPG-CUSTAPPS-SI-TC-115
Scenario: Verify Priority Select Value popup in Defect Matrix Settings (SSEN)

    Given Default information is set to "THAM"
    And Click ok to Default Information

    When User opens the Maximo application "Defect Matrix Settings"

    Then the Defect Matrix Settings header should be displayed
    And the Defect Matrix Settings list should be loaded

    When User clicks on "View Details"

    Then the Safety (PEAR) Details section should be displayed

    When User clicks on the Priority Select Value icon

    Then the Select Value popup should be displayed

    When User filters Select Value Description with "Low"

    Then the Select Value result "Low" should be displayed

    When User clicks on "Cancel"

    Then the Select Value popup should be closed


    --------------
    async verifySafetyPearDetailsDisplayed() {
    const safetyPearDetails = this.frame.getByText(
        'Safety (PEAR) Details',
        { exact: true }
    );

    await expect(safetyPearDetails).toBeVisible();

    console.log('Verified: Safety (PEAR) Details section is displayed');
}
------------
Then(
    'the Safety (PEAR) Details section should be displayed',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);
        await defectMatrixPage.verifySafetyPearDetailsDisplayed();
    }
);
---------

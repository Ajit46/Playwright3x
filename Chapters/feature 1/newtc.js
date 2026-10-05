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
async verifyAssetFieldEditable() {
    const assetField = this.frame.getByRole('textbox', {
        name: 'Object'
    });

    await expect(assetField).toBeEditable();

    console.log('Verified Asset field is editable');
}


async clickAssetSelectValue() {
    await this.frame.locator('#mc2fc3c15-img').click();

    console.log('Clicked Asset Select Value icon');
}


async verifySelectValuePopupDisplayed() {
    await expect(
        this.frame.getByText('Select Value', {
            exact: true
        })
    ).toBeVisible();

    console.log('Verified Select Value popup is displayed');
}


async verifySelectValuePopupControlsDisplayed() {
    // Filter
    await expect(
        this.frame.locator('img[title="Filter"]').first()
    ).toBeVisible();

    // Download
    await expect(
        this.frame.locator('img[title="Download"]').first()
    ).toBeVisible();

    // Minimize
    await expect(
        this.frame.locator('img[title="Minimize"]').first()
    ).toBeVisible();

    console.log('Verified Filter, Download and Minimize controls');
}


async clickSelectValueCancel() {
    await this.frame.getByRole('button', {
        name: 'Cancel'
    }).click();

    console.log('Clicked Cancel on Select Value popup');
}


async verifySelectValuePopupClosed() {
    await expect(
        this.frame.getByText('Select Value', {
            exact: true
        })
    ).not.toBeVisible();

    console.log('Verified Select Value popup is closed');
}
------------
Then(
    'the Asset field should be editable',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyAssetFieldEditable();
    }
);


When(
    'User clicks on the Asset Select Value icon',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.clickAssetSelectValue();
    }
);


Then(
    'the Select Value popup should be displayed',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.verifySelectValuePopupDisplayed();
    }
);


Then(
    'the following Select Value popup controls should be displayed:',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.verifySelectValuePopupControlsDisplayed();
    }
);


Then(
    'the Select Value popup should be closed',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.verifySelectValuePopupClosed();
    }
);
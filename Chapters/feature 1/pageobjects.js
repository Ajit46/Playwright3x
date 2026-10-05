const BasePage = require("./BasePage");
const { expect } = require("@playwright/test");

class DefectMatrixPage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
    }

    async verifyDefectMatrixHeaderDisplayed() {
        const header = this.frame.getByText(
            "Defect Matrix Settings (SSEN)",
            { exact: true }
        );

        await expect(
            header,
            "Defect Matrix Settings (SSEN) header should be displayed"
        ).toBeVisible({ timeout: 10000 });

        console.log("Verified: Defect Matrix Settings (SSEN) header");
    }

    async verifyDefectMatrixListLoaded() {
        const loadedRow = this.frame
            .locator('tr[data-has-data="true"]')
            .first();

        await loadedRow.waitFor({
            state: "visible",
            timeout: 30000
        });

        console.log("Verified: Defect Matrix Settings list is loaded");
    }
}

module.exports = DefectMatrixPage;

//custom.js

Then the Defect Matrix Settings header should be displayed
const DefectMatrixPage = require("../../pageObjects/DefectMatrixPage");

Then(
    'the Defect Matrix Settings header should be displayed',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyDefectMatrixHeaderDisplayed();
    }
);

Then(
    'the Defect Matrix Settings list should be loaded',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyDefectMatrixListLoaded();
    }
);
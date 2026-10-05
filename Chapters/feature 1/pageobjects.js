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


-------------
    async applyColumnFilter(columnName, filterValue) {
        if (!filterValue) {
            return;
        }

        const filterField = this.frame.getByRole("textbox", {
            name: columnName
        });

        await filterField.fill(filterValue);
        await filterField.press("Enter");

        console.log(
            `Applied filter "${filterValue}" on "${columnName}"`
        );
    }

    ------------------
    When(
    'User filters the following Defect Matrix Settings columns:',
    async function (dataTable) {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        for (const row of dataTable.hashes()) {
            await defectMatrixPage.applyColumnFilter(
                row["Column Name"],
                row["Filter Value"]
            );
        }
    }
);

---------------------------
async verifyFilteredResults(filters) {

    const resultRow = this.frame
        .locator('tr[data-has-data="true"]')
        .first();

    await resultRow.waitFor({
        state: 'visible',
        timeout: 30000
    });

    for (const row of filters) {

        const filterValue = row["Filter Value"];

        const field = resultRow
            .getByDisplayValue(filterValue, { exact: true })
            .first();

        await expect(
            field,
            `Filtered value "${filterValue}" should be displayed`
        ).toBeVisible({ timeout: 10000 });

        console.log(
            `Verified ${row["Column Name"]}: ${filterValue}`
        );
    }
}
-----------
custom.js
Then(
    'the filtered results should be displayed for each column',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyFilteredResults(
            this.defectMatrixFilters
        );
    }
);
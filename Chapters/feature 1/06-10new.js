feature
@MAS9UPG-CUSTAPPS-SI-TC-117
Scenario: Verify fields and Select Value functionality in Defect Matrix Settings

    Given Default information is set to "THAM"
    And Click ok to Default Information

    When User opens the Maximo application "Defect Matrix Settings"

    Then the Defect Matrix Settings header should be displayed
    And the Defect Matrix Settings list should be loaded

    When User clicks on "View Details"

    Then the "HI" field should be editable
    And the "CI" field should be editable
    And the "Land code" field should be editable
    And the "Asset category" field should be editable

    When User selects a value for "HI"
    When User selects a value for "CI"
    When User selects a value for "Land code"
    When User selects a value for "Asset category"

    When User clicks on "Cancel"

    Then the Select Value popup should be closed

    -------------------
    const { When, Then } = require("@cucumber/cucumber");
const DefectMatrixPage = require("../pages/DefectMatrixPage");

// --------------------------------------------------
// View Details
// --------------------------------------------------

When(
    'User clicks on "View Details"',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.clickViewDetails();
    }
);

// --------------------------------------------------
// Editable fields
// --------------------------------------------------

Then(
    'the "HI" field should be editable',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyHIFieldEditable();
    }
);

Then(
    'the "CI" field should be editable',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyCIFieldEditable();
    }
);

Then(
    'the "Land code" field should be editable',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyLandCodeFieldEditable();
    }
);

Then(
    'the "Asset category" field should be editable',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyAssetCategoryFieldEditable();
    }
);

// --------------------------------------------------
// Select values
// --------------------------------------------------

When(
    'User selects a value for "HI"',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.selectHIValue();
    }
);

When(
    'User selects a value for "CI"',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.selectCIValue();
    }
);

When(
    'User selects a value for "Land code"',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.selectLandCodeValue();
    }
);

When(
    'User selects a value for "Asset category"',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.selectAssetCategoryValue();
    }
);

// --------------------------------------------------
// Cancel
// --------------------------------------------------

When(
    'User clicks on "Cancel"',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.clickCancel();
    }
);

Then(
    'the Select Value popup should be closed',
    async function () {

        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.verifySelectValuePopupClosed();
    }
);
-------------
const BasePage = require("./BasePage");
const { expect } = require("@playwright/test");

class DefectMatrixPage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
    }

    // --------------------------------------------------
    // Header
    // --------------------------------------------------

    async verifyDefectMatrixHeaderDisplayed() {
        const header = this.frame.getByRole("heading", {
            name: "Defect Matrix Settings (SSEN)",
            exact: true
        });

        await expect(header).toBeVisible();

        console.log("Verified Defect Matrix Settings header");
    }

    // --------------------------------------------------
    // List
    // --------------------------------------------------

    async verifyDefectMatrixListLoaded() {
        const loadedRow = this.frame
            .locator('tr[data-has-data="true"]')
            .first();

        await loadedRow.waitFor({
            state: "visible",
            timeout: 30000
        });

        console.log("Verified Defect Matrix Settings list is loaded");
    }

    // --------------------------------------------------
    // View Details
    // --------------------------------------------------

    async clickViewDetails() {
        await this.frame
            .getByRole("link", {
                name: "View Details"
            })
            .first()
            .click();

        console.log("Clicked View Details");
    }

    // --------------------------------------------------
    // Editable fields
    // --------------------------------------------------

    async verifyHIFieldEditable() {
        const field = this.frame.getByRole("textbox", {
            name: "HI",
            description: "5"
        });

        await expect(field).toBeEditable();

        console.log("Verified HI field is editable");
    }

    async verifyCIFieldEditable() {
        const field = this.frame.getByRole("textbox", {
            name: "CI",
            exact: true
        });

        await expect(field).toBeEditable();

        console.log("Verified CI field is editable");
    }

    async verifyLandCodeFieldEditable() {
        const field = this.frame.getByRole("textbox", {
            name: "Land Code",
            description: "NARABLECROPS"
        });

        await expect(field).toBeEditable();

        console.log("Verified Land Code field is editable");
    }

    async verifyAssetCategoryFieldEditable() {
        const field = this.frame.getByRole("textbox", {
            name: "Asset Category",
            description: "PILNATSUBST"
        });

        await expect(field).toBeEditable();

        console.log("Verified Asset Category field is editable");
    }

    // --------------------------------------------------
    // HI - Select Value
    // --------------------------------------------------

    async selectHIValue() {

        const field = this.frame.getByRole("textbox", {
            name: "HI",
            description: "5"
        });

        // Click HI field
        await field.click();

        // Click HI magnifying glass
        await this.frame
            .locator("#m32a3675c-img")
            .click();

        // Select value 3
        await this.frame
            .getByText("3")
            .nth(2)
            .click();

        // Verify selected value populated
        await expect(field).toHaveValue("3");

        console.log("Verified HI value: 3");
    }

    // --------------------------------------------------
    // CI - Select Value
    // --------------------------------------------------

    async selectCIValue() {

        const field = this.frame.getByRole("textbox", {
            name: "CI",
            exact: true
        });

        // Click CI field
        await field.click();

        // Click CI magnifying glass
        await this.frame
            .locator("#ma19fdffb-img")
            .click();

        // Select value 2
        await this.frame
            .getByText("2")
            .nth(4)
            .click();

        // Verify selected value populated
        await expect(field).toHaveValue("2");

        console.log("Verified CI value: 2");
    }

    // --------------------------------------------------
    // Land Code - Select Value
    // --------------------------------------------------

    async selectLandCodeValue() {

        const field = this.frame.getByRole("textbox", {
            name: "Land Code",
            description: "NARABLECROPS"
        });

        // Click Land Code field
        await field.click();

        // Click Land Code magnifying glass
        await this.frame
            .locator("#mf7578268-img")
            .click();

        // Select value
        await this.frame
            .getByText("CDENSHOUSING", {
                exact: true
            })
            .click();

        // Verify selected value populated
        await expect(field).toHaveValue("CDENSHOUSING");

        console.log("Verified Land Code value: CDENSHOUSING");
    }

    // --------------------------------------------------
    // Asset Category - Select Value
    // --------------------------------------------------

    async selectAssetCategoryValue() {

        const field = this.frame.getByRole("textbox", {
            name: "Asset Category",
            description: "PILNATSUBST"
        });

        // Click Asset Category field
        await field.click();

        // Click Asset Category magnifying glass
        await this.frame
            .locator("#m2dcac45a-img")
            .click();

        // Select value
        await this.frame
            .getByText("MATCTRANS", {
                exact: true
            })
            .click();

        // Verify selected value populated
        await expect(field).toHaveValue("MATCTRANS");

        console.log("Verified Asset Category value: MATCTRANS");
    }

    // --------------------------------------------------
    // Cancel Select Value popup
    // --------------------------------------------------

    async clickCancel() {

        await this.frame
            .getByRole("button", {
                name: "Cancel",
                exact: true
            })
            .click();

        console.log("Clicked Cancel");
    }

    async verifySelectValuePopupClosed() {

        const cancelButton = this.frame.getByRole("button", {
            name: "Cancel",
            exact: true
        });

        await expect(cancelButton).toBeHidden();

        console.log("Verified Select Value popup is closed");
    }
}

module.exports = DefectMatrixPage;
@MAS9UPG-CUSTAPPS-SI-TC-115
Scenario: Verify Attribute and Attribute Value fields in Defect Matrix Settings

    Given Default information is set to "THAM"
    And Click ok to Default Information

    When User opens the Maximo application "Defect Matrix Settings"

    Then the Defect Matrix Settings header should be displayed
    And the Defect Matrix Settings list should be loaded

    When User clicks on "View Details"

    Then the "Attribute" field should be editable
    When User selects an Attribute value
    Then Filter, Download and Hide options should be displayed for Attribute

    Then the "Attribute Value" field should be editable
    When User selects an Attribute Value
    Then Filter, Download and Hide options should be displayed for Attribute Value


    -------------
    const BasePage = require("./BasePage");
const { expect } = require("@playwright/test");

class DefectMatrixPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    // --------------------------------------------------
    // Attribute
    // --------------------------------------------------

    async verifyAttributeFieldEditable() {
        const field = this.frame.getByRole("textbox", {
            name: "Attribute"
        });

        await expect(field).toBeEditable();

        console.log("Verified Attribute field is editable");
    }

    async selectAttributeValue() {
        const attributeField = this.frame.getByRole("textbox", {
            name: "Attribute"
        });

        // Click Attribute field
        await attributeField.click();

        // Click Attribute magnifying glass
        await this.frame.locator("#m552f8b82-img").click();

        // Select predefined Attribute value
        await this.frame
            .getByText("BATTERYDCDISTRIBUTIONBOARDYN", { exact: true })
            .click();

        // Verify selected value populated
        await expect(attributeField).toHaveValue(
            "BATTERYDCDISTRIBUTIONBOARDYN"
        );

        console.log(
            "Verified Attribute value: BATTERYDCDISTRIBUTIONBOARDYN"
        );
    }

    // --------------------------------------------------
    // Attribute Value
    // --------------------------------------------------

    async verifyAttributeValueFieldEditable() {
        const field = this.frame
            .getByRole("cell", {
                name: "Defect Setup Section Safety ("
            })
            .getByLabel("Attribute Value");

        await expect(field).toBeEditable();

        console.log("Verified Attribute Value field is editable");
    }

    async selectAttributeValueFieldValue() {
        const attributeValueField = this.frame
            .getByRole("cell", {
                name: "Defect Setup Section Safety ("
            })
            .getByLabel("Attribute Value");

        // Click Attribute Value field
        await attributeValueField.click();

        // Click Attribute Value magnifying glass
        await this.frame.locator("#mc6ccee01-img").click();

        // Select predefined value
        await this.frame
            .getByText("0", { exact: true })
            .click();

        // Verify selected value populated
        await expect(attributeValueField).toHaveValue("0");

        console.log("Verified Attribute Value: 0");
    }

    // --------------------------------------------------
    // Lookup popup options
    // Filter / Download / Hide
    // --------------------------------------------------

    async verifyLookupOptions() {
        await expect(
            this.frame.getByRole("link", {
                name: "Open Filter CTRL+Z"
            })
        ).toBeVisible();

        await expect(
            this.frame.locator("#lookup_page1-lb4")
        ).toBeVisible();

        await expect(
            this.frame.getByRole("link", {
                name: "Hide Table",
                exact: true
            })
        ).toBeVisible();

        console.log(
            "Verified Filter, Download and Hide options are visible"
        );
    }

    // --------------------------------------------------
    // Attribute lookup
    // --------------------------------------------------

    async verifyAttributeLookupOptions() {
        const attributeField = this.frame.getByRole("textbox", {
            name: "Attribute"
        });

        // Click Attribute
        await attributeField.click();

        // Click Attribute magnifying glass
        await this.frame.locator("#m552f8b82-img").click();

        // Verify lookup options
        await this.verifyLookupOptions();
    }

    // --------------------------------------------------
    // Attribute Value lookup
    // --------------------------------------------------

    async verifyAttributeValueLookupOptions() {
        const attributeValueField = this.frame
            .getByRole("cell", {
                name: "Defect Setup Section Safety ("
            })
            .getByLabel("Attribute Value");

        // Click Attribute Value
        await attributeValueField.click();

        // Click Attribute Value magnifying glass
        await this.frame.locator("#mc6ccee01-img").click();

        // Verify lookup options
        await this.verifyLookupOptions();
    }
}

module.exports = DefectMatrixPage;
-------------
const { Then, When } = require("@cucumber/cucumber");
const DefectMatrixPage = require("../pages/DefectMatrixPage");


// --------------------------------------------------
// Attribute field
// --------------------------------------------------

Then(
    'the "Attribute" field should be editable',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyAttributeFieldEditable();
    }
);

When(
    'User selects an Attribute value',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.selectAttributeValue();
    }
);


// --------------------------------------------------
// Attribute Value field
// --------------------------------------------------

Then(
    'the "Attribute Value" field should be editable',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyAttributeValueFieldEditable();
    }
);

When(
    'User selects an Attribute Value',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.selectAttributeValueFieldValue();
    }
);


// --------------------------------------------------
// Lookup options
// --------------------------------------------------

Then(
    'Filter, Download and Hide options should be displayed for Attribute',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyAttributeLookupOptions();
    }
);

Then(
    'Filter, Download and Hide options should be displayed for Attribute Value',
    async function () {
        const defectMatrixPage = new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyAttributeValueLookupOptions();
    }
);
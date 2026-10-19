```gherkin
Feature: Data Quality Resultset - Rule List Filter

  Scenario: Verify Filter functionality in Rule List
    Given Default information is set to "THAM"
    And Click ok to Default Information

    When User opens the Maximo application "Data Quality Resultset"
    Then the "Rule List" section should be displayed
    And the "Asset Records" section should be displayed
    And the "Location Records" section should be displayed

    When User clicks on any rule set number
    Then the Rule List details should be displayed

    When User filters the Rule List by internal value "2"
    Then the Rule List should display records with internal value "2"

    -------------------

    const { expect } = require('@playwright/test');

class DataQualityResultsetPage {
    constructor(page) {
        this.page = page;
        this.frame = page.frameLocator('iframe[title="Manage"]');
    }

    // Rule List table
    get ruleListTable() {
        return this.frame.getByRole('table', {
            name: 'Rule List'
        });
    }

    // Filter icon for Rule List
    async clickRuleListFilter() {
        await this.frame.getByRole('link', {
            name: 'Open Filter CTRL+Z'
        }).first().click();
    }

    // Apply filter on Rule's internal Value
    async filterRuleListByInternalValue(value) {
        const filterField = this.ruleListTable.getByRole('textbox', {
            name: "Rule's internal Value"
        });

        await filterField.fill(value);
        await filterField.press('Enter');

        await this.page.waitForTimeout(1000);

        console.log(`Applied Rule List filter: ${value}`);
    }

    // Verify the filter field contains the expected value
    async verifyRuleListFilterValue(expectedValue) {
        const filterField = this.ruleListTable.getByRole('textbox', {
            name: "Rule's internal Value"
        });

        await expect(filterField).toHaveValue(expectedValue);
    }

    // Verify Rule List has results after filtering
    async verifyRuleListHasResults() {
        const rows = this.ruleListTable.getByRole('row');
        await expect(rows.nth(1)).toBeVisible();
    }
}

module.exports = DataQualityResultsetPage;
```

const { Given, When, Then } = require('@cucumber/cucumber');
const DataQualityResultsetPage = require('../pages/DataQualityResultsetPage');

When(
    'User clicks on the Rule List Filter icon',
    async function () {
        const dataQualityPage = new DataQualityResultsetPage(this.page);
        await dataQualityPage.clickRuleListFilter();
    }
);

When(
    'User filters the Rule List by internal value {string}',
    async function (value) {
        const dataQualityPage = new DataQualityResultsetPage(this.page);
        await dataQualityPage.filterRuleListByInternalValue(value);
    }
);

Then(
    'the Rule List filter field should contain {string}',
    async function (expectedValue) {
        const dataQualityPage = new DataQualityResultsetPage(this.page);
        await dataQualityPage.verifyRuleListFilterValue(expectedValue);
    }
);

Then(
    'the Rule List should contain results',
    async function () {
        const dataQualityPage = new DataQualityResultsetPage(this.page);
        await dataQualityPage.verifyRuleListHasResults();
    }
);
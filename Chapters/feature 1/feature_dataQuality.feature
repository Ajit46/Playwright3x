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

------------------------
const { Given, When, Then } = require('@cucumber/cucumber');
const DataQualityResultsetPage =
    require('../pages/DataQualityResultsetPage');


// Verify Rule List, Asset Records and Location Records sections
Then(
    'the {string} section should be displayed',
    async function (sectionName) {
        const dataQualityPage =
            new DataQualityResultsetPage(this.page);

        await dataQualityPage.verifySectionDisplayed(sectionName);
    }
);


// Click any rule set number
When(
    'User clicks on any rule set number',
    async function () {
        const dataQualityPage =
            new DataQualityResultsetPage(this.page);

        await dataQualityPage.clickAnyRuleSetNumber();
    }
);


// Verify Rule List details
Then(
    'the Rule List details should be displayed',
    async function () {
        const dataQualityPage =
            new DataQualityResultsetPage(this.page);

        await dataQualityPage.verifyRuleListDetailsDisplayed();
    }
);


// Apply the Rule List filter
When(
    'User filters the Rule List by internal value {string}',
    async function (value) {
        const dataQualityPage =
            new DataQualityResultsetPage(this.page);

        await dataQualityPage.clickRuleListFilter();
        await dataQualityPage.filterRuleListByInternalValue(value);
    }
);


// Validate filtered results
Then(
    'the Rule List should display records with internal value {string}',
    async function (expectedValue) {
        const dataQualityPage =
            new DataQualityResultsetPage(this.page);

        await dataQualityPage.verifyRuleListFilteredByInternalValue(
            expectedValue
        );
    }
);

-----------     
const { expect } = require('@playwright/test');

class DataQualityResultsetPage {
    constructor(page) {
        this.page = page;
        this.frame = page.frameLocator('iframe[title="Manage"]');

        this.ruleListTable = this.frame.getByRole('table', {
            name: 'Rule List'
        });

        this.assetRecordsTable = this.frame.getByRole('table', {
            name: 'Asset Records'
        });

        this.locationRecordsTable = this.frame.getByRole('table', {
            name: 'Location Records'
        });
    }

    // Verify Rule List, Asset Records or Location Records section
    async verifySectionDisplayed(sectionName) {
        const section = this.frame.getByRole('table', {
            name: sectionName,
            exact: true
        });

        await expect(section).toBeVisible({ timeout: 10000 });
        console.log(`Verified section displayed: ${sectionName}`);
    }

    // Click any rule set number in Rule List
    async clickAnyRuleSetNumber() {
        const ruleSetNumber = this.ruleListTable
            .getByRole('row')
            .nth(1)
            .getByRole('cell')
            .first();

        await expect(ruleSetNumber).toBeVisible({ timeout: 10000 });
        await ruleSetNumber.click();

        await this.page.waitForTimeout(1000);

        console.log('Clicked a rule set number');
    }

    // Verify Rule List details are displayed
    async verifyRuleListDetailsDisplayed() {
        await expect(this.ruleListTable).toBeVisible({
            timeout: 10000
        });

        console.log('Verified Rule List details are displayed');
    }

    // Open the Rule List Filter
    async clickRuleListFilter() {
        await this.frame.getByRole('link', {
            name: 'Open Filter CTRL+Z'
        }).first().click();

        console.log('Opened Rule List Filter');
    }

    // Apply filter on Rule's internal Value
    async filterRuleListByInternalValue(value) {
        const filterField = this.ruleListTable.getByRole('textbox', {
            name: "Rule's internal Value"
        });

        await expect(filterField).toBeVisible({ timeout: 10000 });
        await filterField.fill(value);
        await filterField.press('Enter');

        await this.page.waitForTimeout(1000);

        console.log(`Applied Rule List filter: ${value}`);
    }

    // Verify filtered results
    async verifyRuleListFilteredByInternalValue(expectedValue) {
        const rows = this.ruleListTable.getByRole('row');

        await expect(rows.nth(1)).toBeVisible({ timeout: 10000 });

        const rowCount = await rows.count();
        expect(rowCount).toBeGreaterThan(1);

        console.log(
            `Rule List contains ${rowCount - 1} data row(s) after filtering by ${expectedValue}`
        );

        // TODO: Add column-specific assertions after confirming
        // the exact locator for Rule's internal Value cells.
    }
}

module.exports = DataQualityResultsetPage;

--------------
```gherkin
@MASQUPG-CUSTAPPS-SI-TC-122
Scenario: Verify Filter functionality in Location Records
    Given Default information is set to "THAM"
    And Click ok to Default Information
    When User opens the Maximo application "Data Quality Resultset"
    Then the Data Quality Resultset header should be displayed
    When User clicks on the Filter icon in "Location Records" section
    And User filters Location Records by Status "OPERATING"
    Then all displayed Location Records should have Status "OPERATING"
```
 async clickLocationRecordsFilter() {
        const filterIcon = this.frame
            .locator('#m24cfeb-to-holder')
            .getByRole('link', {
                name: 'Open Filter CTRL+Z'
            });

        await filterIcon.click();
    }

    async enterLocationRecordsStatusFilter(status) {
        const statusFilter = this.frame.getByRole('textbox', {
            name: 'Status',
            exact: true
        });

        await expect(statusFilter).toBeVisible({ timeout: 10000 });
        await statusFilter.fill(status);
        await statusFilter.press('Enter');

        console.log(`Applied Location Records Status filter: ${status}`);
    }

    async verifyLocationRecordsStatus(expectedStatus) {
        const rows = this.frame.locator(
            'tr[data-has-data="true"][currentrow="true"]'
        );

        await expect(rows.first()).toBeVisible({ timeout: 15000 });

        const rowCount = await rows.count();
        expect(rowCount).toBeGreaterThan(0);

        const statusHeader = this.frame.getByRole('columnheader', {
            name: 'Status',
            exact: true
        }).first();

        const headerId = await statusHeader.getAttribute('id');

        for (let i = 0; i < rowCount; i++) {
            const statusCell = rows.nth(i).locator(
                `td[headers="${headerId}"]`
            );

            await expect(statusCell).toContainText(expectedStatus);
        }

        console.log(
            `Verified ${rowCount} displayed Location Records have Status "${expectedStatus}"`
        );
    }
----
When(
    'User clicks on the Filter icon in {string} section',
    async function (sectionName) {
        if (sectionName !== 'Location Records') {
            throw new Error(
                `This step implementation supports Location Records only, received: ${sectionName}`
            );
        }

        const dataQualityPage = new DataQualityResultsetPage(this.page);
        await dataQualityPage.clickLocationRecordsFilter();
    }
);

When(
    'User filters Location Records by Status {string}',
    async function (status) {
        const dataQualityPage = new DataQualityResultsetPage(this.page);
        await dataQualityPage.enterLocationRecordsStatusFilter(status);
    }
);

Then(
    'all displayed Location Records should have Status {string}',
    async function (status) {
        const dataQualityPage = new DataQualityResultsetPage(this.page);
        await dataQualityPage.verifyLocationRecordsStatus(status);
    }
);
---------------------------------------------------------------------------------]

@MASQUPG-CUSTAPPS-SI-TC-124
Feature: Location View validation in Data Quality ResultsSet

  Scenario: Verify Location View and Issue List for Location
    Given Default information is set to "THAM"
    And User clicks ok to Default Information
    When User opens the Maximo application "Data Quality ResultsSet"
    And User clicks on the "Location View" tab
    Then the "Locations" section should be displayed
    And the "Issue List for Location" section should be displayed
------------------------------------------------
  async clickLocationViewTab() {
        await this.frame
            .getByRole('tab', { name: 'Location View' })
            .click();
    }

    async verifyLocationsSectionDisplayed() {
        await expect(
            this.frame
                .getByRole('form', { name: 'main form' })
                .getByText('Locations', { exact: true })
        ).toBeVisible();
    }

    async verifyIssueListForLocationDisplayed() {
        await expect(
            this.frame.getByText('Issue List for Location', {
                exact: true
            })
        ).toBeVisible();
    }
    -------------------------------------
    When('User clicks on the {string} tab', async function (tabName) {
    if (tabName === 'Location View') {
        const locationViewPage = new LocationViewPage(this.page);
        await locationViewPage.clickLocationViewTab();
    }
});

Then('the {string} section should be displayed', async function (sectionName) {
    const locationViewPage = new LocationViewPage(this.page);

    if (sectionName === 'Locations') {
        await locationViewPage.verifyLocationsSectionDisplayed();
    } else if (sectionName === 'Issue List for Location') {
        await locationViewPage.verifyIssueListForLocationDisplayed();
    } else {
        throw new Error(`Unsupported section: ${sectionName}`);
    }
});

feature
@MAS9UPG-CUSTAPPS-SI-TC-XXX
Scenario: Verify Event, Work Type and Job Plan details in Defect Matrix Settings

    Given Default information is set to "THAM"
    And Click ok to Default Information

    When User opens the Maximo application "Defect Matrix Settings"

    Then the Defect Matrix Settings header should be displayed
    And the Defect Matrix Settings list should be loaded

    When User clicks on "View Details"

    Then the "Event" field should be editable

    When User clicks on the magnifying glass next to "Event" field

    Then Filter, Download and Hide options should be displayed

    When User clicks on "Cancel"

    Then the "Work type" field should be editable

    When User clicks on the magnifying glass next to "Work type" field

    Then Filter, Download and Hide options should be displayed

    When User clicks on "Cancel"

    Then the "Job plan" field should be editable

    When User clicks on the Arrow symbol next to "Job plan" field

    When User clicks on the "Go To" section under the dropdown arrow

    Then the following Go To options should be displayed:
        | Job Plans |
        | Job Plans (HSE) |
        | Job Plans (T&D) |

        ---------------------------------------

    // ---------------------------------------------------------
// Event
// ---------------------------------------------------------

async verifyEventFieldEditable() {
    const field = this.frame.getByRole("textbox", {
        name: "Event"
    });

    await expect(field).toBeEditable();

    console.log("Verified Event field is editable");
}

async clickEventMagnifyingGlass() {
    const field = this.frame.getByRole("textbox", {
        name: "Event"
    });

    await field.click();

    // Use the exact Event lookup locator from Codegen
    await this.frame.getByRole("img", {
        name: "Detail Menu"
    }).click();

    console.log("Opened Event Select Value popup");
}


// ---------------------------------------------------------
// Work Type
// ---------------------------------------------------------

async verifyWorkTypeFieldEditable() {
    const field = this.frame.getByRole("textbox", {
        name: "Work Type"
    });

    await expect(field).toBeEditable();

    console.log("Verified Work Type field is editable");
}

async clickWorkTypeMagnifyingGlass() {
    const field = this.frame.getByRole("textbox", {
        name: "Work Type"
    });

    await field.click();

    // Use the exact Work Type lookup locator from Codegen
    await this.frame.getByRole("img", {
        name: "Detail Menu"
    }).click();

    console.log("Opened Work Type Select Value popup");
}


// ---------------------------------------------------------
// Common Filter / Download / Hide validation
// ---------------------------------------------------------

async verifyFilterDownloadHideOptions() {

    // Filter
    await expect(
        this.frame.getByRole("link", {
            name: "Open Filter CTRL+Z"
        })
    ).toBeVisible();

    // Download
    await expect(
        this.frame.locator("#lookup_page1-lb4")
    ).toBeVisible();

    // Hide
    await expect(
        this.frame.getByRole("link", {
            name: "Hide Table",
            exact: true
        })
    ).toBeVisible();

    console.log(
        "Verified Filter, Download and Hide options"
    );
}


// ---------------------------------------------------------
// Cancel
// ---------------------------------------------------------

async clickCancel() {
    await this.frame.getByRole("button", {
        name: "Cancel",
        exact: true
    }).click();

    console.log("Clicked Cancel");
}


// ---------------------------------------------------------
// Job Plan
// ---------------------------------------------------------

async verifyJobPlanFieldEditable() {
    const field = this.frame.getByRole("textbox", {
        name: "Job Plan",
        exact: true
    });

    await expect(field).toBeEditable();

    console.log("Verified Job Plan field is editable");
}


// ---------------------------------------------------------
// Job Plan Arrow / Go To
// ---------------------------------------------------------

async clickJobPlanArrow() {

    await this.frame.getByRole("img", {
        name: "Detail Menu"
    }).click();

    console.log("Clicked Job Plan arrow");
}


async clickGoTo() {

    await this.frame.getByRole("menuitem", {
        name: "Go To",
        exact: true
    }).click();

    console.log("Clicked Go To");
}


async verifyGoToOptions(options) {

    for (const option of options) {

        const menuOption = this.frame.getByRole("menuitem", {
            name: option,
            exact: true
        });

        await expect(
            menuOption,
            `Go To option "${option}" should be displayed`
        ).toBeVisible();

        console.log(
            `Verified Go To option: ${option}`
        );
    }
}
---------------------------
// ---------------------------------------------------------
// Event
// ---------------------------------------------------------

Then(
    'the "Event" field should be editable',
    async function () {
        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyEventFieldEditable();
    }
);

When(
    'User clicks on the magnifying glass next to "Event" field',
    async function () {
        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.clickEventMagnifyingGlass();
    }
);


// ---------------------------------------------------------
// Work Type
// ---------------------------------------------------------

Then(
    'the "Work type" field should be editable',
    async function () {
        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyWorkTypeFieldEditable();
    }
);

When(
    'User clicks on the magnifying glass next to "Work type" field',
    async function () {
        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.clickWorkTypeMagnifyingGlass();
    }
);


// ---------------------------------------------------------
// Filter / Download / Hide
// ---------------------------------------------------------

Then(
    'Filter, Download and Hide options should be displayed',
    async function () {
        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyFilterDownloadHideOptions();
    }
);


// ---------------------------------------------------------
// Cancel
// ---------------------------------------------------------

When(
    'User clicks on "Cancel"',
    async function () {
        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.clickCancel();
    }
);


// ---------------------------------------------------------
// Job Plan
// ---------------------------------------------------------

Then(
    'the "Job plan" field should be editable',
    async function () {
        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.verifyJobPlanFieldEditable();
    }
);


// ---------------------------------------------------------
// Job Plan Arrow
// ---------------------------------------------------------

When(
    'User clicks on the Arrow symbol next to "Job plan" field',
    async function () {
        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.clickJobPlanArrow();
    }
);


// ---------------------------------------------------------
// Go To
// ---------------------------------------------------------

When(
    'User clicks on the "Go To" section under the dropdown arrow',
    async function () {
        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        await defectMatrixPage.clickGoTo();
    }
);


Then(
    'the following Go To options should be displayed:',
    async function (dataTable) {
        const defectMatrixPage =
            new DefectMatrixPage(this.page);

        const options = dataTable.raw().flat();

        await defectMatrixPage.verifyGoToOptions(options);
    }
);
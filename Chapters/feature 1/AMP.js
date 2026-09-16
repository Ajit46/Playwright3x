const BasePage = require("./BasePage");

class AssetMeterPage extends BasePage {
    constructor(page) {
        super(page);

        // Quick Search menu
        this.quickSearchMenu = this.frame.getByRole("button", {
            name: "Quick Search menu"
        });

        // Quick Search options
        this.moreSearchFields = this.frame.getByText("More Search Fields", {
            exact: true
        });

        this.whereClause = this.frame.getByText("Where clause", {
            exact: true
        });

        this.viewSearchTips = this.frame.getByText("View Search tips", {
            exact: true
        });

        this.saveCurrentQuery = this.frame.getByText("Save Current Query", {
            exact: true
        });

        this.viewManageQueries = this.frame.getByText("View/manage Queries", {
            exact: true
        });

        this.bookmarks = this.frame.getByText("Bookmarks", {
            exact: true
        });

        // More Search Fields popup
        this.moreSearchFieldsPopup = this.frame.getByText(
            "More Search Fields",
            { exact: true }
        );

        // Popup buttons
        this.findButton = this.frame.getByRole("button", {
            name: "Find",
            exact: true
        });

        this.restoreApplicationDefaultsButton = this.frame.getByRole("button", {
            name: "Restore Application Defaults",
            exact: true
        });

        this.reviseButton = this.frame.getByRole("button", {
            name: "Revise",
            exact: true
        });

        this.cancelButton = this.frame.getByRole("button", {
            name: "Cancel",
            exact: true
        });
    }

    async clickQuickSearch() {
        await this.quickSearchMenu.click();
    }

    async isQuickSearchOptionDisplayed(option) {
        switch (option) {
            case "More Search Fields":
                return await this.moreSearchFields.isVisible();

            case "Where clause":
                return await this.whereClause.isVisible();

            case "View Search tips":
                return await this.viewSearchTips.isVisible();

            case "Save Current Query":
                return await this.saveCurrentQuery.isVisible();

            case "View/manage Queries":
                return await this.viewManageQueries.isVisible();

            case "Bookmarks":
                return await this.bookmarks.isVisible();

            default:
                throw new Error(`Unknown Quick Search option: ${option}`);
        }
    }

    async clickMoreSearchFields() {
        await this.moreSearchFields.click();
    }

    async isMoreSearchFieldsPopupDisplayed() {
        return await this.moreSearchFieldsPopup.isVisible();
    }

    async isButtonDisplayed(buttonName) {
        switch (buttonName) {
            case "Find":
                return await this.findButton.isVisible();

            case "Restore Application Defaults":
                return await this.restoreApplicationDefaultsButton.isVisible();

            case "Revise":
                return await this.reviseButton.isVisible();

            case "Cancel":
                return await this.cancelButton.isVisible();

            default:
                throw new Error(`Unknown button: ${buttonName}`);
        }
    }
}

module.exports = AssetMeterPage;
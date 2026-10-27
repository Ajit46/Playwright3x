Then the following sections should be displayed in the List View page:
    | ESQCR High Risk Codes         |
    | Locations (Please be patient) |

----------------
const { expect } = require('@playwright/test');

class ESQCRHighRiskPage {

    constructor(page) {
        this.page = page;
        this.frame = page.frameLocator('iframe[title="Manage"]');
    }

    async verifySectionsDisplayed(sections) {

        for (const row of sections) {

            const sectionName = Object.values(row)[0];

            const section = this.frame.getByRole('heading', {
                name: sectionName,
                exact: true
            });

            await expect(
                section,
                `Section "${sectionName}" should be displayed`
            ).toBeVisible({ timeout: 30000 });

            console.log(`Verified section: ${sectionName}`);
        }
    }
}

module.exports = ESQCRHighRiskPage;

---------------\
Then(
    'the following sections should be displayed in the List View page:',
    async function (dataTable) {

        const esqcrHighRiskPage = new ESQCRHighRiskPage(this.page);

        await esqcrHighRiskPage.verifySectionsDisplayed(
            dataTable.hashes()
        );
    }
);
@MASUPG-CUSTAPPS-SI-TC-102
Scenario: Verify all fields displayed in More Search Fields for Asset Meter application

    Given Default information is set to "THAM"
    And Click ok to Default Information

    When User opens the Maximo application "Asset Meter"

    When User clicks on "Quick Search" menu

    Then the following Quick Search options should be displayed:
        | More Search Fields |
        | Where Clause |
        | View Search Tips |
        | Save Current Query |
        | View/manage Queries |
        | Bookmarks |

    When User clicks on "More Search Fields"

    Then all More Search Fields should be displayed
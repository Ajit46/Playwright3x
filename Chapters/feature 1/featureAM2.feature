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

    @MASUPG-CUSTAPPS-SI-TC-103
Scenario: Verify options displayed after clicking Revise in More Search Fields for Asset Meter application

    Given Default information is set to "THAM"
    And Click ok to Default Information
    When User opens the Maximo application "Asset Meter"
    When User clicks on "Quick Search" menu
    When User clicks on "More Search Fields"
    When User clicks on "Revise"
    Then the following Revise options should be displayed:
        | Clear Query and Fields |
        | Clear All Fields |
        | Change Query |
        | Restore Default Query |


Scenario: Verify Where Clause popup for Asset Meter
  Given Default information is set to "THAM"
  And Click ok to Default Information
  When User opens the Maximo application "Asset Meter"
  When User clicks on "Quick Search"
  When User clicks on "Where Clause"
  Then the following Where Clause elements should be displayed:
    | Current Query |
    | Find |
    | Cancel |

@MAS9UPG-CUSTAPPS-ST-05
Scenario: Verify View Search Tips opens in a new browser tab
    Given Default information is set to "THAM"
    And Click ok to Default Information
    When User opens the Maximo application "Asset Meter"
    When User clicks on "Quick Search"
    When User clicks on "View Search Tips"
    Then a new browser tab should be opened

@MAS9UPG-CUSTAPPS-ST-106
Scenario: Verify icons and action items available in List View

    Given Default information is set to "THAM"
    And Click ok to Default Information
    When User opens the Maximo application "Asset Meter"
    When User clicks enter
    Then the Asset Meter list should be loaded
    And the following List View actions should be displayed:
      | Clear Filter |
      | Reload |
      | Download |
      | Maximize |

@MASUPG-CUSTAPPS-SI-TC-107
Scenario: Verify Asset Meter records can be downloaded in Excel format

    Given User logs in to Maximo with the required credentials
    When User navigates to Assets -> Asset Meter
    When User clicks enter
    Then the Asset Meter list should be loaded
    When User clicks on the Download icon
    Then the Asset Meter records should be downloaded successfully in Excel format
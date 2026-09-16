Feature: Asset Meter Application

  @MAS9UPG-CUSTAPPS-SI-TC-101
  Scenario: Verify Asset Meter application and More Search Fields functionality

    Given Default information is set to "THAM"
    And Click ok to Default Information

    When User opens the Maximo application "Asset Meter"

    Then "Asset Meter" application should be displayed

    When User clicks on "Quick Search" menu

    Then the following Quick Search options should be displayed:
      | More Search Fields |
      | Where clause       |
      | View Search tips   |
      | Save Current Query |
      | View/manage Queries|
      | Bookmarks          |

    When User clicks on "More Search Fields"

    Then "More Search Fields" popup should be displayed

    And "Find" button should be displayed
    And "Restore Application Defaults" button should be displayed
    And "Revise" button should be displayed
    And "Cancel" button should be displayed
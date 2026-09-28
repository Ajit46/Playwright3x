@MASUPG-CUSTAPPS-SI-TC-109
Scenario: Verify Asset Meter list is refreshed using Reload icon

    Given Default information is set to "THAM"
    And Click ok to Default Information
    When User opens the Maximo application "Asset Meter"
    When User clicks enter
    Then the Asset Meter list should be loaded
    When User clicks on the Reload icon
    Then the Asset Meter list should be refreshed
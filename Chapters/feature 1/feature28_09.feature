@MASUPG-CUSTAPPS-SI-TC-109
Scenario: Verify Asset Meter list is refreshed using Reload icon

    Given Default information is set to "THAM"
    And Click ok to Default Information
    When User opens the Maximo application "Asset Meter"
    When User clicks enter
    Then the Asset Meter list should be loaded
    When User clicks on the Reload icon
    Then the Asset Meter list should be refreshed

    @MASUPG-CUSTAPPS-SI-TC-10
Scenario: Screen Validation for Asset Meter (AFM) Application

    Given Default information is set to "THAM"
    And Click ok to Default Information
    When User opens the Maximo application "Asset Meter"
    When User clicks enter
    Then the Asset Meter list should be loaded
    When User clicks on the first Asset from the list
    Then Asset Details screen should be opened
    When User clicks on the "Long Description" icon
    Then Long Description window should be opened
    When User clicks on the "Minimize/Maximize" button under Asset Details
    Then the "Serial #" field should be displayed
    When User clicks on the "Minimize/Maximize" button under Asset Details
    Then the "Serial #" field should not be displayed
    Then the "Operating/Primary Voltage" field should be displayed
    When User clicks on the "Minimize/Maximize" button under After Fault Maintenance
    Then the "Operating/Primary Voltage" field should not be displayed\
    Then the "Full trips" field should be displayed
    When User clicks on the "Minimize/Maximize" button under Enter New Reading
    Then the "Full trips" field should not be displayed
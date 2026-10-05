@MAS9UPG-CUSTAPPS-SI-TC-113
Scenario: Screen Validation for Defect Matrix Settings (SSEN) Application

    Given Default information is set to "THAM"
    And Click ok to Default Information

    When User opens the Maximo application "Defect Matrix Settings (SSEN)"

    Then the Defect Matrix Settings list should be loaded

    And the following columns should be displayed:
        | Matrix Number |
        | Attribute |
        | Land Code |
        | Description |
        | Attribute Value |
        | Asset Category |
        | Location Type |
        | Sub-Work Type |
        | HCI |
        | Default Priority |
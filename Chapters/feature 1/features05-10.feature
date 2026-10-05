@MAS9UPG-CUSTAPPS-SI-TC-113
Scenario: Screen Validation for Defect Matrix Settings (SSEN) Application

    Given Default information is set to "THAM"
    And Click ok to Default Information

    When User opens the Maximo application "Defect Matrix Settings (SSEN)"

    Then the Defect Matrix Settings list should be loaded

    When User filters the following Defect Matrix Settings columns:
        | Column Name      | Filter Value |
        | Matrix Number    | 198339 |
        | Attribute        | INSULATIONCONDIT |
        | Land Code        | MBEACH |
        | Description      | Medium |
        | Attribute Value  | SUBSTANTIALDETERIORATION |
        | Asset Category   | PILNATSUBST |
        | Location Type    | |
        | Sub-Work Type    | DSS |
        | HCI              | 510 |
        | Default Priority | N |

    Then the filtered results should be displayed for each column
```gherkin
Feature: Data Quality Resultset - Rule List Filter

  Scenario: Verify Filter functionality in Rule List
    Given Default information is set to "THAM"
    And Click ok to Default Information

    When User opens the Maximo application "Data Quality Resultset"
    Then the "Rule List" section should be displayed
    And the "Asset Records" section should be displayed
    And the "Location Records" section should be displayed

    When User clicks on any rule set number
    Then the Rule List details should be displayed

    When User filters the Rule List by internal value "2"
    Then the Rule List should display records with internal value "2"
```
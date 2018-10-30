Feature: Go to lexpress.fr homepage

  Scenario: I can find pub on homepage
    Given I go to "https://lexpress.fr"
    Then I check if "29000" pub id is in page
    Then I check if "29001" pub id is in page
    Then I check if "28992" pub id is in page
    Then I check if "28991" pub id is in page
    Then I check if "28993" pub id is in page
    Then I check if "28999" pub id is in page
    Then I check that all sas declared in smart are present
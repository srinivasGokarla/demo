Feature: Greeting Flow

  Scenario: User enters a message and sees their greeting
    Given I open the app
    When I enter "John Doe" in the message field
    And I click save
    Then I should see greeting "Hello, John Doe"

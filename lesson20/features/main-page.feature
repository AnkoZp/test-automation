Feature: Main Page Functionality
  As a user
  I want to interact with the main page
  So that I can verify page elements and change settings

  Background:
    Given I am on the main page

  Scenario: Check elements on the Main page
    Then I should see the currency selector
    And I should see the language selector

  Scenario: Change currency to EUR
    When I change the currency to "EUR"
    Then the product price should display the "€" symbol

  Scenario: Change language to Polish
    When I change the language to "pl"
    Then the URL should contain "pl/"

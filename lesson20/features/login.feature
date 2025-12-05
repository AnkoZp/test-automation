Feature: Login Functionality
  As a user
  I want to log in to the application
  So that I can access my account

  Background:
    Given I am on the main page
    And I click on the login link

  Scenario: Check elements on the Login page
    Then I should see the email field
    And I should see the password field
    And I should see the login button

  Scenario: Login as registered user
    When I fill in the email field with valid credentials
    And I fill in the password field with valid credentials
    And I click the login button
    Then I should be logged in successfully
    And I should see the log off link
    And the page title should contain "Solomono Template demo"
    And the URL should contain "https://demo.solomono.net"
    When I click the log off link
    Then I should see the login link

  Scenario: Login with invalid credentials
    When I fill in the email field with "aapo.invalid@gamil.com"
    And I fill in the password field with "invalidPassword123"
    And I click the login button
    Then the URL should contain "/login.php?action=process"
    And I should see an invalid credentials alert
    And I should see the login link

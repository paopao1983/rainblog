Feature: Category details
  Allows the users to search for posts typing any text

  Background:
    Given the user is on the Rains Blog page

  Scenario: The user search for match text
    When the user enters the text "<word>" into the magnifying field
    And clicks on the search CTA
    Then the user is displayed with a grid of results for the text "<word>"
  
  Examples:
  | word    |
  | Mosaic  |
  | Rain    | 
 
  Scenario: The user search for unmatch text
    When the user enters the text "<word>" into the magnifying field
    And clicks on the search CTA
    Then the user is displayed with the search results We've found 0 articles for "<word>"
  
  Examples:
  | word    |
  | SandraC |
  | xxxx    | 
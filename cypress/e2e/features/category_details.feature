Feature: Category details
  Allow the users to filter the articles by category

  Background:
    Given the user is on the Rain’s Blog page

  Scenario Outline: The user filter by category
    When the user clicks on the "<category>" category
    Then the user is redirected to the "<category>" page and a grid with a list of posts is displayed

  Examples:
  | category            |
  | Announcements       |
  | Financial-Wellness  |
  | Business            |
  | Human-Resources     |    
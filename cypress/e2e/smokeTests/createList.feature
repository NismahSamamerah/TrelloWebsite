Feature: Create New List

    Scenario: Validate that the user can create new list
        Given Open the board
        When Type the list name in the list title input
        And Click Add list button
        Then The list will be created successfuly 

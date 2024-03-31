Feature: Create New Board

    Scenario: Validate that the user can create new board
        Given the user login in trello website 
        When click on the create button in navbar
        And choose create board option 
        And type the board name in the board title input
        And click create button
        Then the board will be created successfuly 

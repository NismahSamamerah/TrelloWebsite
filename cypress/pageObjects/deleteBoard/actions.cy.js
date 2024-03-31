class deleteExsitingBoardActions {
    clickOnShowMenuButton(){
        cy.findByTestId('board-share-button').next().click();
        return this;
    }
    chooseCloseBoardOption(){
        cy.contains('a','Close board').click();
    }
    clickOnCloseButton(){
        cy.findByTestId('close-board-confirm-button').click();
    }
    
}
export default deleteExsitingBoardActions;
class deleteListAssertions{
    checkListIsNotVisibleInTheBoard(){
        cy.findByTestId('list-wrapper').should('not.be.visible');
        return this;
    }
    
}
export default deleteListAssertions ;
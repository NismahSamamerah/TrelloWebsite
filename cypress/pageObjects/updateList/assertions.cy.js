class updateListAssertions {
    checkListNameContainNewValue(newListName){
        cy.findByTestId('list-name').should('contain',newListName);
        return this;
    }
}
export default updateListAssertions;
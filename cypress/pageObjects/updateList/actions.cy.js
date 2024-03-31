class updateListActions {
    typeInListTitleInputFeild(newListName){
        cy.findByTestId('list-name').type(`${newListName} {enter}`);
        return this;
    }
    
}
export default updateListActions;
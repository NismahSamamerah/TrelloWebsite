class createListActions{
    typeInListTitleInputFeild(listName){
        cy.findByTestId('list-name-textarea').type(listName);
        return this;
    }
    clickOnAddListButton(){
        cy.findByTestId('list-composer-add-list-button').click();
        return this;
    }
}
export default createListActions ;
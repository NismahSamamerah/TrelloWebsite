class deleteListActions{
    clickOnMenuButton(){
        cy.findByTestId('list-edit-menu-button').click();
        return this;
    }
    chooseArchiveThisListOption(){
        cy.get('.js-close-list').click();
    }
}
export default deleteListActions ;
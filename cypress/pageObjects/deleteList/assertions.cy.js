class deleteListAssertions{
    checkListIsNotVisibleInTheBoard(listName){
        cy.get(".bi0h3HALKXjfDq").should("not.be.visible");
        return this;
        
    }
}
export default deleteListAssertions ;
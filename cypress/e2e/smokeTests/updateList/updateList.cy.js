/// <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/assertions.cy";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";
import updateListActions from "../../../pageObjects/updateList/actions.cy";
import updateListAssertions from "../../../pageObjects/updateList/assertions.cy";
import deleteExsitingBoardActions from "../../../pageObjects/deleteBoard/actions.cy";

const createBoardAction = new createBoardActions()
const createBoardAssertion = new createBoardAssertions()
const createListAction = new createListActions()
const createListAssertion = new createListAssertions()
const updateListAction = new updateListActions()
const updateListAssertion = new updateListAssertions()
const deleteExsitingBoardAction = new deleteExsitingBoardActions();
const boardName = 'Testing Board';
const listName = 'First List';
const updatedListName = 'Second List'

before(()=>{
    cy.loginToTrello();
    cy.wait(3000);
    createBoardAction.clickOnCreateButton();
    createBoardAction.chooseCreateBoardOption();
    createBoardAction.typeInBoardTitleInputFeild(boardName);
    createBoardAction.clickOnCreateBoardButton();
    cy.wait(3000);
    createBoardAssertion.checkBoardNameContainValue(boardName).checkBoardNameIsVisible();

    createListAction.typeInListTitleInputFeild(listName);
    createListAction.clickOnAddListButton();
    createListAssertion.checkListNameContainValue(listName).checkListNameIsVisible();
})

When('Click on the list name input and Type the new name',()=>{
    cy.wait(3000)
    updateListAction.typeInListTitleInputFeild(updatedListName);
})

Then('The name of list will be updated',()=>{
    updateListAssertion.checkListNameContainNewValue(updatedListName);
})

after(()=>{
    deleteExsitingBoardAction.clickOnShowMenuButton();
    deleteExsitingBoardAction.chooseCloseBoardOption();
    deleteExsitingBoardAction.clickOnCloseButton();
})
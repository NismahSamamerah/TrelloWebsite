/// <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/assertions.cy";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";
import deleteListActions from "../../../pageObjects/deleteList/actions.cy";
import deleteListAssertions from "../../../pageObjects/deleteList/assertions.cy";
import deleteExsitingBoardActions from "../../../pageObjects/deleteBoard/actions.cy";

const createBoardAction = new createBoardActions
const createBoardAssertion = new createBoardAssertions
const createListAction = new createListActions
const createListAssertion = new createListAssertions
const deleteListAction = new deleteListActions
const deleteListAssertion = new deleteListAssertions
const deleteExsitingBoardAction = new deleteExsitingBoardActions;
const boardName = 'Testing Board';
const listName = 'First List';

before(()=>{
    cy.loginToTrello();
    cy.wait(3000);
    createBoardAction.clickOnCreateButton();
    createBoardAction.chooseCreateBoardOption();
    createBoardAction.typeInBoardTitleInputFeild(boardName);
    createBoardAction.clickOnCreateBoardButton();
    createBoardAssertion.checkBoardNameContainValue(boardName).checkBoardNameIsVisible();

    createListAction.typeInListTitleInputFeild(listName);
    createListAction.clickOnAddListButton();
    cy.wait(3000)
    createListAssertion.checkListNameContainValue(listName).checkListNameIsVisible();
})

When('Click on menu button in the list',()=>{
    deleteListAction.clickOnMenuButton();
    cy.wait(3000)
})
When('Choose Archive this list option',()=>{
    deleteListAction.chooseArchiveThisListOption();
})
Then('The list will be deleted successfuly',()=>{
    // deleteListAssertion.checkListIsNotVisibleInTheBoard();
})

after(()=>{
    deleteExsitingBoardAction.clickOnShowMenuButton();
    deleteExsitingBoardAction.chooseCloseBoardOption();
    deleteExsitingBoardAction.clickOnCloseButton();
})
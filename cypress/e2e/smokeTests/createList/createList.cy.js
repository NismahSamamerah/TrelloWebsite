/// <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/assertions.cy";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";


const createBoardAction = new createBoardActions
const createBoardAssertion = new createBoardAssertions
const createListAction = new createListActions
const createListAssertion = new createListAssertions
const boardName = 'Testing Board';
const listName = 'First List'

before(()=>{
    cy.loginToTrello();
    cy.wait(3000);
    createBoardAction.clickOnCreateButton();
    createBoardAction.chooseCreateBoardOption();
    createBoardAction.typeInBoardTitleInputFeild(boardName);
    createBoardAction.clickOnCreateBoardButton();
    
})
Given('Open the board',()=>{
    createBoardAssertion.checkBoardNameContainValue(boardName).checkBoardNameIsVisible();
})
When('type the list name in the list title input',()=>{
    createListAction.typeInListTitleInputFeild(listName);
})
When('click Add list button',()=>{
    createListAction.clickOnAddListButton();
})
Then('the list will be created successfuly',()=>{
    createListAssertion.checkListNameContainValue(listName).checkListNameIsVisible();
})

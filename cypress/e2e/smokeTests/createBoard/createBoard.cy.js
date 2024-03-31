/// <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/assertions.cy";

const createBoardAction = new createBoardActions
const createBoardAssertion = new createBoardAssertions
const boardName = 'Testing Board';

Given('the user login in trello website',()=>{
    // createBoardAction.openTrelloWebsite();
    cy.loginToTrello();
    cy.wait(3000);
})
When('click on the create button in navbar',()=>{
    createBoardAction.clickOnCreateButton();
})
When('choose create board option',()=>{
    createBoardAction.chooseCreateBoardOption();
})
When('type the board name in the board title input',()=>{
    createBoardAction.typeInBoardTitleInputFeild(boardName);
})
When('click create button',()=>{
    createBoardAction.clickOnCreateBoardButton();
    cy.wait(3000);
})
Then('the board will be created successfuly',()=>{
    createBoardAssertion.checkBoardNameContainValue(boardName).checkBoardNameIsVisible();
})
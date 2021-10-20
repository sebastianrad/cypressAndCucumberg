const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps")
const { MainPage } = require("../../page_model/main_page")

Given('main page is loaded',()=>{
    MainPage.visitPage()
    })
    
    Then('{string} is displayed',(string)=>{
    MainPage.getLogoImage().should('be.visible')
    })
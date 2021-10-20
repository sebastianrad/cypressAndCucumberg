const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps")
const { Header } = require("../../page_model/header")
const { MainPage } = require("../../page_model/main_page")

Given('main page is loaded', () => {
    MainPage.visitPage()
})

Then('{string} is displayed', (string) => {
    MainPage.getLogoImage().should('be.visible')
})
When('{string} menu is displayed',(string)=>{

})
Then('the elements are visible',()=>{
    cy.wait(4000)
   Header.getLogoViaTransilvanica().should('be.visible')
   Header.getRoButton().should('be.visible')
   Header.getEnButton().should('be.visible')
   Header.getContribuieButton().should('be.visible')
   Header.getMagazinButton().should('be.visible')
   Header.getMenu().should('be.visible')
})
When('click the navigation menu {int}',(int)=>{
    MainPage.clickNavigationItem(int)
})
Then('the {string} {int} is visible',(string, int)=>{
    MainPage.getPageTitle(int).should('contain', string)
    MainPage.getPageTitle(int).should('be.visible')
})
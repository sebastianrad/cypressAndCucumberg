const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps")
const { Cookies } = require("../../page_model/cookies")
const { Header } = require("../../page_model/header")
const { MainPage } = require("../../page_model/main_page")

Given('main page is loaded', () => {
    MainPage.visitPage()
})

Then('{string} is displayed', (string) => {
    MainPage.getLogoImage().should('be.visible')
})
When('{string} menu is displayed', (string) => {

})
Then('the elements are visible', () => {
    cy.wait(4000)
    Header.getLogoViaTransilvanica().should('be.visible')
    Header.getLaguageButton('RO').should('be.visible')
    Header.getLaguageButton('EN').should('be.visible')
    Header.getContribuieButton().should('be.visible')
    Header.getMagazinButton().should('be.visible')
    Header.getMenu().should('be.visible')
})
When('click the navigation menu {int}', (int) => {
    MainPage.clickNavigationItem(int)
})
Then('the {string} {int} is visible', (string, int) => {
    MainPage.getPageTitle(int).should('contain', string)
    MainPage.getPageTitle(int).should('be.visible')
})
Then('cookies popup is displayed', () => {
    Cookies.getCookiesPopup().should('be.visible')
    Cookies.getAcceptButton().should('be.visible')
    Cookies.getTermeniSiConditii().should('be.visible')
})
When('I check the color for {string}',(language)=>{ 
    Header.getLaguageButton(language)

})
Then('The {string} {string} is:',(language, rgbColor)=>{
    Header.getLaguageButton(language).should('have.css', 'color').and('eq',rgbColor)
})
When('I click on En button',()=>{ 
    Header.clickLanguageButton('EN')
})


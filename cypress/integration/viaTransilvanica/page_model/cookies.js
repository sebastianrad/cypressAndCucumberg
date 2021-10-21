const COOKIES= '[class*=cookies-popup][class*=flex]'
const ACCEPT_BUTTON = '[class*=cookies-popup__wrapper]> [class*=secondary-button]'
const TERMENI_SI_CONDITII = '[class*=cookies-popup__wrapper] > p>p>a'

export const Cookies= {
    getCookiesPopup(){
        return cy.get(COOKIES)
    },
    getAcceptButton(){
        return cy.get(ACCEPT_BUTTON)
    },
    clickAccept(){
        this.getAcceptButton().click()
    },
    getTermeniSiConditii(){
        return cy.get(TERMENI_SI_CONDITII)
    },
    clickTrmeniSiConditii(){
        this.getTermeniSiConditii().click()
    },

}
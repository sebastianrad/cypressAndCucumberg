const LOGO_VIA_TRANSILVANICA = '[class=header__iconButton]'
const SWITCH_LANGUAGE_BUTTON = '[class*=c-language-btn--default]'
const CONTRIBUIE_MAGAZIN_BUTTON = '[class*=primary-button]'
const MENU = '[id*=menu-toggle]'
export const Header = {
    getLogoViaTransilvanica(){
        return cy.get(LOGO_VIA_TRANSILVANICA)
    },
    clickLogoViaTransilvanica(){
        this.getLogoViaTransilvanica().click()
    },
    getRoButton(){
        return cy.get(SWITCH_LANGUAGE_BUTTON).contains('RO')
    },
    clickRO(){
        this.getRoButton().click()
    },
    getEnButton(){
        return cy.get(SWITCH_LANGUAGE_BUTTON).contains('EN')
    },
    clickEn(){
        this.getEnButton().click()
    },
    getContribuieButton(){
        return cy.get(CONTRIBUIE_MAGAZIN_BUTTON).contains('Contribuie')
    },
    clickContribuie(){
        this.getContribuieButton().click({force: true})
    }, 
    getMagazinButton(){
        return cy.get(CONTRIBUIE_MAGAZIN_BUTTON).contains('Magazin')
    },
    clickMagazin(){
        this.getMagazinButton().click()
    },
    getMenu(){
        return cy.get(MENU)
    },
    clickMenu(){
        this.getMenu().click()
    }
}
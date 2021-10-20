import { URL } from "./routes"

const LOGO = '[class*=header__iconButton]'
const PAGE_TITLE = '[class*= homepage-slider]  > h2'
const NAVIGATION_ITEM = '[class=nav-item]'

export const MainPage = {
    visitPage(){
        return cy.visit(URL)
    },
    getLogoImage(){
        return cy.get(LOGO)
    },
    getPageTitle(nth){
        return cy.get(PAGE_TITLE).eq(nth)
    },
    getNavigationItem(nth){
        return cy.get(NAVIGATION_ITEM).eq(nth)
    },
    clickNavigationItem(nth){
        this.getNavigationItem(nth).click()
    },
}
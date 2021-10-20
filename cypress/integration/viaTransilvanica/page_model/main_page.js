import { URL } from "./routes"

const LOGO = '[class*=header__iconButton]'
export const MainPage = {
    visitPage(){
        return cy.visit(URL)
    },
    getLogoImage(){
        return cy.get(LOGO)
    }
}
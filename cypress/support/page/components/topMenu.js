import { allMenu } from "./allMenu";

export class TopMenu {

    constructor() {
        this.topMenuLocator = '#nav-main';

        this.allMenuButton = '#nav-hamburger-menu';

        this.allMenu = allMenu;
    }

    validateTopMenu() {
        //async
        cy.get(this.topMenuLocator).should('exist').should('be.visible');
        cy.get(this.allMenuButton).should('exist').should('be.visible');

        //sync
        cy.get(this.topMenuLocator).then(topMenuLocator => {
            expect(topMenuLocator).exist;
            expect(topMenuLocator).is.visible;
        })
        cy.get(this.allMenuButton).then(allMenuButton => {
            expect(allMenuButton).exist;
            expect(allMenuButton).is.visible;
        })
    }

    clickAllMenuButton() {
        cy.get(this.allMenuButton).should('exist').should('be.visible').click();
    }

    getAllMenu() {
        return this.allMenu;
    }

    locator() {
        return this.topMenuLocator;
    }

}

export const topMenu = new TopMenu();
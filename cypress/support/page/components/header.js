import { topMenu } from "./topMenu";

export class Header {

    constructor() {
        this.headerLocator = '#navbar-main';

        this.topMenu = topMenu;

        this.logo = '#nav-logo-sprites';
        this.cart = '#nav-cart';
        this.searchLine = '#twotabsearchtextbox';
        this.searchSubmitButton = '#nav-search-submit-button';
    }


    validateHeader() {
        //async
        cy.log('ASYNC: ');
        cy.get(this.headerLocator).should('exist').should('be.visible');
        cy.get(this.logo).should('exist').should('be.visible');
        cy.get(this.cart).should('exist').should('be.visible');
        cy.get(this.searchLine).should('exist').should('be.visible');
        cy.get(this.searchSubmitButton).should('exist').should('be.visible');

         //sync
         cy.log('SYNC: ');
         cy.get(this.headerLocator).then(headerLocator => {
            expect(headerLocator).exist;
            expect(headerLocator).is.visible;
        })
        cy.get(this.logo).then(logo => {
            expect(logo).exist;
            expect(logo).is.visible;
        })
        cy.get(this.cart).then(cart => {
            expect(cart).exist;
            expect(cart).is.visible;
        })
        cy.get(this.searchLine).then(searchLine => {
            expect(searchLine).exist;
            expect(searchLine).is.visible;
        })
        cy.get(this.searchSubmitButton).then(searchSubmitButton => {
            expect(searchSubmitButton).exist;
            expect(searchSubmitButton).is.visible;
        })
    }

    typeSearchLine(string) {
        cy.get(this.searchLine).should('exist').clear().type(string);
    }

    clickSubmitButton() {
        cy.get(this.searchSubmitButton).should('exist').click();
    }

    clickLogo() {
        cy.get(this.logo).should('exist').click();
    }

    clickCart() {
        cy.get(this.cart).should('exist').click();
    }

    getTopMenu() {
        return this.topMenu;
    }

    locator() {
        return this.headerLocator;
    }

}

export const header = new Header();
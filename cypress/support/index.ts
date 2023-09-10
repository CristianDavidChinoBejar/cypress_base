declare namespace Cypress {
    interface Chainable {
    /**
     * Custom command to enter the page
     * @example cy.login('https://example.cypress.io')
     * @param urlPage the name of the page
     */

        login: (urlPage: 'dev'|'qa') => void
    }
}

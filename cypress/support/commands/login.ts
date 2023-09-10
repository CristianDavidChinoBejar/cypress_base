Cypress.Commands.add('login',(urlPage) => {
    cy.visit('https://example.cypress.io')
    if (urlPage == 'dev') {
        cy.get('h1')
            .should('have.text', 'Kitchen Sink')    }
        cy.url().should('include','https://example.cypress.io/')
    if (urlPage == 'qa') {
        cy.get('.navbar-brand')
            .should('have.text', 'cypress.io')    
        cy.url().should('include','holi')
    }
    cy.screenshot()
})
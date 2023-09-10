import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on empty home page", () => {
    cy.visit("https://example.cypress.io");
  });
  
  When("I type and submit in the board name", () => {
    cy.get(':nth-child(3) > .container > .row > #utilities > h2').should('have.text', 'Commands')
  });
  
  Then("I should be redirected to the board detail", () => {
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').should('have.text', 'Querying')
  });
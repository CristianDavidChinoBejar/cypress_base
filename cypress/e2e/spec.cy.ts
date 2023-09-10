describe('template spec', () => {
  it('ID: 1 - Login', () => {
    cy.login('dev')
  })
  it('ID: 2 - Login', () => {
    cy.login('qa')
  })
})
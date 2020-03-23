describe('Check user status', () => {
  it('checks that user status is newcomer', () => {
    cy.visit('http://localhost:3000/create-profile')

    cy.get('input[value="newcomer"]')
      .check({ force: true })
      .should('be.checked')
  })
})

//check checkboxes

describe('Check checkboxes', () => {
  it('Testing checkboxes', () => {
    cy.visit('http://localhost:3000/create-profile')

    cy.get('[type="checkbox"]')
      .check({ force: true })
      .should('be.checked')
  })
})

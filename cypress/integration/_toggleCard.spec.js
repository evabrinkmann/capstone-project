//unfold card

describe('unfold card', () => {
  it('shows card content when card is clicked', () => {
    cy.visit('http://localhost:3000/profile-pool')

    cy.get('[data-cy="cardhead"]')
      .first()
      .click()
    cy.should('be.visible', '[data-cy="cardbody"]')
  })
})

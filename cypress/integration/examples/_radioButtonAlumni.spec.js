//check radio box alumni

describe('Check radio box alumni', () => {
  it('Testing alumni', () => {
    cy.visit('http://localhost:3000/create-profile')

    // cy.get('input[value="alumni"]')
    //   .check({ force: true })
    //   .should('be.checked')

    cy.get('label[for="newcomer"]').click()
  })
})

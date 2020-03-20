//check checkboxes

describe('Check checkboxes', () => {
  it('Testing checkboxes', () => {
    cy.visit('http://localhost:3000/create-profile')

    // cy.get('[type="checkbox"]')
    //   .check({ force: true })
    //   .should('be.checked')

    cy.get('label[for="html5"]').click()

    cy.get('label[for="css3"]').click()
  })
})

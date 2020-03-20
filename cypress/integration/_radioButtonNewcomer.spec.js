//check radio box newcomer

describe('Check radio box newcomer', () => {
  it('Testing alunewcomermni', () => {
    cy.visit('http://localhost:3000/create-profile')

    cy.get('input[value="newcomer"]')
      .check({ force: true })
      .should('be.checked')
  })
})

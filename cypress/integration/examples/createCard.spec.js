describe('Create a card', () => {
  it('clears all form fields after creation', () => {
    cy.visit('http://localhost:3000/create-profile')

    cy.get('input[value="newcomer"]').check()

    // cy.get('input[name="name"]').type('Hans Peter')

    // cy.get('input[name="title"]').type('Frontend')

    // cy.get('input[name="company"]').type('neuefische')

    // cy.get('form > button').click()
  })
})

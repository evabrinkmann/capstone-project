describe('Check user status alumni', () => {
  it('checks that user status is alumni', () => {
    cy.visit('http://localhost:3000/create-profile')

    cy.get('label[for="alumni"]').click()
  })
})

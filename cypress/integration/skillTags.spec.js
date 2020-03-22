describe('Check skill tags', () => {
  it('should be highlighted on click', () => {
    cy.visit('http://localhost:3000/create-profile')

    cy.get('label[for="html5"]').click()

    cy.get('label[for="css3"]').click()

    cy.get('label[for="javascript"]').click()
  })
})

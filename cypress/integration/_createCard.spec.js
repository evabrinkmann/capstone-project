// create new profile

describe('Create new profile', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create-profile')

    cy.get('label[for="newcomer"]').click()

    cy.get('input[name="name"]').type('Hans Peter')

    cy.get('input[name="title"]').type('Frontend')

    cy.get('input[name="company"]').type('neuefische gmbh')

    cy.get('input[name="location"]').type('Hamburg, Germany')

    cy.get('input[name="email"]').type('Hans.Peter@gmail.com')

    cy.get('input[name="capstoneName"]').type('HansPeter App')

    cy.get('input[name="capstoneLink"]').type('HansPeter App')

    cy.get('input[name="personalWebsite"]').type('personal-website')

    cy.get('input[name="github"]').type('github')

    cy.get('input[name="codepen"]').type('codepen')

    cy.get('label[for="html5"]').click()

    cy.get('label[for="css3"]').click()

    cy.get('form > button').click()
  })

  it('shows the new profile', () => {
    cy.url().should('eq', 'http://localhost:3000/profile-pool')

    cy.contains('Hans Peter').should('exist')
  })
})

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  
  it('displays an explore titles button', () => {
    cy.contains('a', 'Explore Titles')
  })

  it('it navigates through to Title List view', () => {
    cy.get('.v-btn').should('contain', 'Explore Titles')
  })
})
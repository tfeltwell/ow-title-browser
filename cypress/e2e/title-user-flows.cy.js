/// <reference types="cypress" />

describe('Title app user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('it navigates through to Title List view', () => {
    cy.get('.v-btn').should('contain', 'Explore Titles').click()
  })

  it('it navigates welcome -> title list -> detail', () => {
    cy.get('.v-btn').should('contain', 'Explore Titles').click()
    cy.get('th.text-left').first().should('contain', 'Title number');
  })
})
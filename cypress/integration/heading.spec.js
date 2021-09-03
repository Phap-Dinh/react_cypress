/// <reference types="cypress" />

const SIGNIN = Cypress.env("signin")

describe("home page", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("render correctly heading", () => {
        cy.get('[data-testid=heading]').should("exist")
    })

    it("doesn't find heading", () => {
        cy.get('React and Cypress de').should("exist")
    })
})
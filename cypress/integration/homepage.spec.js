/// <reference types="cypress" />

const SIGNIN = Cypress.env("signin")

describe("home page", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("render correctly", () => {
        cy.get(".App").should("exist")
    })

    it("allow the input to be used", () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get("#myInput").type("phap");
        /* ==== End Cypress Studio ==== */
        cy.get("#myButton").click()
        cy.findByText("phap").should("exist")
    })

    it("render a fail test", () => {
        cy.get("#myInput").type("thuy");
        cy.get("#myButton").click()
        cy.findByText("thui").should("exist")
    })

    it("render link", () => {
        cy
            .get(".App-link")
            .within(() => {
                cy.contains("Sign In")
            })
        
    })

    it("route to a sign in page", () => {
        cy.findByText(SIGNIN).should("exist")
        cy.findByText(SIGNIN).click()
        cy.url().should("include", "signin")
    })
})
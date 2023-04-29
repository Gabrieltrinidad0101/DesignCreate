import { auth,pageUrl } from "./help/auth.cy"

const createdDesign = ({shape,name,cards})=>{
    cy.get('.fa-solid.fa-trash').should('have.length', cards)
    cy.contains("New Program").click({force: true});
    cy.get(shape).click();
    cy.get("#editor").then($editor => {
        const {left,top, width, height} = $editor[0].getBoundingClientRect()
        const x = left + width / 2;
        const y = top + height / 2;
        cy.window().trigger("mousedown",x,y)
    })
    cy.get("input[placeholder='Design name']").type(name)
    cy.get(".fa-solid.fa-floppy-disk").click();
}

describe('Design', () => {
    beforeEach(() => {
        cy.visit(`${pageUrl}/login`)
        cy.viewport(1001,800)
        auth({});
    })
    
    it("creates a rect", () => {
        createdDesign({
            cards: 0,
            shape: ".fa-solid.fa-square",
            name: "rect"
        })
    })

    it("creates a circle", () => {
        createdDesign({
            shape: ".fa-solid.fa-circle",
            name: "circle",
            cards: 1
        })
    })

    it("creates a triangule", () => {
        createdDesign({
            shape: ".fa-solid.fa-caret-up",
            name: "triangule",
            cards: 2
        })
    })
})


describe("Design other user", () => {
    beforeEach(() => {
        cy.visit(`${pageUrl}/login`)
        cy.viewport(1001,800)
        auth({
            name: "jose",
            password: "jose"
        });
    })

    it("creates a star5", () => {
        createdDesign({
            shape: ".fa-solid.fa-star",
            name: "star",
            cards: 0
        })
    })

    it("explore", () => {
        cy.contains("Explote").click()
        cy.get('.fa-solid.fa-trash').should('have.length', 3)
    })
})

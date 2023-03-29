describe('Authentication', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/login')

  })
  it('login without name', () => {
    cy.get("input[name='password']").type("juan")
    cy.get("#auth-button").click();
    cy.contains("All the inputs are required");
  })

  it('login without password', () => {
    cy.get("input[name='name']").type("juan")
    cy.get("#auth-button").click();
    cy.contains("All the inputs are required");
  })

  it('login', () => {
    cy.get("input[name='name']").type("juan")
    cy.get("input[name='password']").type("juan")
    cy.get("#auth-button").click();
    cy.contains("Welcome juan");
  })

})

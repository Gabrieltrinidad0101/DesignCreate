describe('Authentication', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/register')

  })
  it('register without name', () => {
    cy.get("input[name='password']").type("juan")
    cy.get("#auth-button").click();
    cy.contains("All the inputs are required");
  })

  it('register without password', () => {
    cy.get("input[name='name']").type("juan")
    cy.get("#auth-button").click();
    cy.contains("All the inputs are required");
  })

  it('register', () => {
    register("Welcome juan")
  })
  it("register user exists",()=>{
    register("The user exists")
  })

})


const register = (spectedText)=>{
  cy.get("input[name='name']").type("juan")
  cy.get("input[name='password']").type("juan")
  cy.get("#auth-button").click();
  cy.contains(spectedText);
}

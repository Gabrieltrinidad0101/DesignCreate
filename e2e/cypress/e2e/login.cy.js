const url = 'http://localhost:3000';
describe('Authentication register', () => {
  beforeEach(() => {
    cy.visit(`${url}/register`)
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

    cy.getAllLocalStorage().then((result) => {
      console.log(result)
      expect(result[url]["token"]).to.exist
    })
  })

  it("register user exists", () => {
    register("The user exists")
  })

})

describe('Authentication login', () => {
  beforeEach(() => {
    cy.visit(`${url}/login`)
  })

  it("login user no exists", () => {
    register("The username or password is incorrect","peppe")
  })

  it('login', () => {
    register("Welcome juan")
    cy.getAllLocalStorage().then((result) => {
      expect(result[url]["token"]).to.exist
    })
  })
})


describe('Authentication', () => {
  beforeEach(() => {
    cy.visit(`${url}/home`)
  })

  it('Verify Redirect', async () => {
    cy.wait(1000);
    cy.contains("Error try to login");
    cy.url().should('include', '/register')
  })
})

const register = (spectedText, name = "juan") => {
  cy.get("input[name='name']").type(name)
  cy.get("input[name='password']").type("juan")
  cy.get("#auth-button").click();
  cy.contains(spectedText);
}

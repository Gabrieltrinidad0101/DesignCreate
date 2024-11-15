import { auth,pageUrl } from "./help/auth.cy";

describe('Authentication register', () => {
  beforeEach(() => {
    cy.visit(`${pageUrl}/register`)
  })

  it('register without name', () => {
    auth({
      name: "juan",
      password: "",
      spectedText: "All the inputs are required" 
    })
  })

  it('register without password', () => {
    auth({
      name: "",
      password: "juan",
      spectedText: "All the inputs are required" 
    })
  })

  it('register', () => {
    auth({
      spectedText: "Welcome juan" 
    })
  })

  it("register user exists", () => {
    auth({
      spectedText: "The user exists" 
    })
  })

  it("register other user",()=>{
    auth({
      name: "jose",
      password: "jose",
      spectedText: "Welcome jose"
    })
  })

})

describe('Authentication login', () => {
  beforeEach(() => {
    cy.visit(`${pageUrl}/login`)
  })

  it("login user no exists", () => {
    auth({
      name: "peppe",
      spectedText: "The username or password is incorrect" 
    })
  })

  it('login', () => {
    auth({
      spectedText: "Welcome juan" 
    })
  })
})

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit(`${pageUrl}/home`)
  })

  it('Verify Redirect', async () => {
    cy.wait(1000);
    cy.contains("Error try to login");
    cy.url().should('include', '/register')
  })
})
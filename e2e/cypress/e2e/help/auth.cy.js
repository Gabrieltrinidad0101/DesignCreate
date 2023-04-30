export const pageUrl = 'http://localhost:3000';
export const auth = ({spectedText = "", name = "juan", password = "juan"}) => {
    if(name != "") cy.get("input[name='name']").type(name)
    if(password != "") cy.get("input[name='password']").type(password)
    cy.get("#auth-button").click();
    if(spectedText != "") cy.contains(spectedText);
}
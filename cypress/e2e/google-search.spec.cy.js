describe("Google Search", () => {

  //Access and validate Google URL
  it("Access Google URL", () => {
    cy.visit("https://www.google.com.br/");
    cy.url().should("be.equal", "https://www.google.com.br/");
  });

  //Find the input and type the text
  it("Type Trustly", () => {
    cy.get(".gLFyf").type("Trustly");
  });
  
  //Click on "Google Search" button and validate the results
  it("Click on 'Google Search'", () => {
    cy.get('input').contains('Pesquisa Google').click();
  });
});

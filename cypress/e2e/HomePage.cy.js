describe("Home page test", () => {
  it("Home page is visible", () => {
    // Navigate to shop
    cy.visit("https://sweetshop.netlify.app/");

    // Check if navigation bar and links is visible
    cy.get(".navbar").should("be.visible");
    cy.get(".navbar-brand").should("be.visible");
    cy.contains(".nav-link", "Sweets").should("be.visible");
    cy.contains(".nav-link", "About").should("be.visible");
    cy.contains(".nav-link", "Login").should("be.visible");
    cy.contains(".nav-link", "Basket").should("be.visible");

    // Check if title is visible
    cy.contains("h1", "Welcome to the sweet shop!").should("be.visible");

    // Check if advertisement is visible
    cy.get(".advertising").should("be.visible");

    // Check if footer information is visible
    cy.contains("p", "Sweet Shop Project 2018").should("be.visible");
  });
});

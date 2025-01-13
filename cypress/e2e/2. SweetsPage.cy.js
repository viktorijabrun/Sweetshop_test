describe("2. Sweets page", () => {
  it("2.1. Verify that Sweets page is visible", () => {
    // Navigate to shop
    cy.visit("https://sweetshop.netlify.app/");

    // Click on Sweets page.
    cy.contains(".nav-link", "Sweets").click();

    //Check page has title.
    cy.contains("h1", "Browse sweets").should("be.visible");

    //Check if all products list is visible.
    cy.get(".card").should("be.visible");

    //Verify that first product detail is visible: image, title, description, price.
    cy.get(".card").first().should("be.visible");
    cy.get(".card-img-top").first().should("be.visible");
    cy.get(".card-title").first().should("be.visible");
    cy.get(".card-text").first().should("be.visible");
    cy.get(".text-muted").first().should("be.visible");

    // Verify that first product "Add to Basket" button is visible.
    cy.get(".btn").first().should("be.visible");
  });
});

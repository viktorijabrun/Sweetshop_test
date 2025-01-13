describe("3. About page", () => {
  it("3.1. About page is visible", () => {
    // Navigate to shop.
    cy.visit("https://sweetshop.netlify.app/");

    // Click on About page.
    cy.contains(".nav-link", "About").click();

    // Check if title is visible.
    cy.contains("h1", "Sweet Shop Project").should("be.visible");

    // Check if description is visible.
    cy.get(".lead").should("be.visible");

    // Check if footer information is visible.
    cy.contains("p", "Sweet Shop Project 2018").should("be.visible");
  });
});

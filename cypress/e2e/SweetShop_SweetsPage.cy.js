describe("Sweets page", () => {
  it("passes", () => {
    // Navigate to shop
    cy.visit("https://sweetshop.netlify.app/");

    // Click on Sweets page.
    cy.contains(".nav-link", "Sweets").click();

    //Check page has title.
    cy.contains("h1", "Browse sweets").should("be.visible");

    //Check if all products list is visible.
    cy.get(".col-lg-3").should("be.visible");
  });
});

// Test case 2: Sweets page:
// 2.1. Navigate to https://sweetshop.netlify.app/
// 2.2. Click on "Sweets" button on navigation bar.
// 2.3. Verify user is navigated to "Sweets" page successfully.
//     2.3.1 Check the page has title "Browse sweets".
// 2.4. Check if all products list is visible.
// 2.5. Verify that first product detail is visible: image, title, description, price.
// 2.6. Verify that first product "Add to Basket" button is visible.

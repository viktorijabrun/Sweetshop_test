describe("Your Account page test", () => {
  it("Your account page is visible", () => {
    //Navigate to shop
    cy.visit("https://sweetshop.netlify.app/");

    cy.contains(".nav-link", "Login").click();

    //Login with your account.
    cy.login("a@a.com", "pass");

    //Verify that "Previous Orders" is visible.
    cy.contains("h4", "Previous Orders").should("be.visible");

    //Verify that previous orders table is visible.
    cy.get(".table").should("be.visible");

    //Verify that title "Item Order Breakdown" is visible.
    cy.contains("h4", "Item Order Breakdown").should("be.visible");

    //Verify that chart is visible.
    cy.get("#transactionChart").should("be.visible");

    // Verify that "Your Basket" is visible.
    cy.contains("span", "Your Basket").should("be.visible");

    //Verify that number with item number is visible.
    cy.get(".badge").should("be.visible");

    //Check if footer "Sweet Shop Project 2018"is visible.
    cy.contains("p", "Sweet Shop Project 2018").should("be.visible");
  });
});

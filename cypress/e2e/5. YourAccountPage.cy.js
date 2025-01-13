describe("5. Your Account page test", () => {
  beforeEach(() => {
    cy.visit("https://sweetshop.netlify.app/");
  });

  it("5.1. Your account page is visible", () => {
    cy.contains(".nav-link", "Login").click();

    //Login with your account.
    cy.login("joesmith@gmail.com", "pass");

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

  it("5.2. Added item displayed at 'Your Basket'", () => {
    //Navigate to Sweets page
    cy.contains(".nav-link", "Sweets").click();

    //Choose first product and add to basket.
    const selectedItem = "Chocolate Cups";

    cy.contains(".card-title", selectedItem)
      .closest(".card")
      .find(".addItem")
      .click();

    // Verify that the item is added to the cart and the cart icon is updated.
    cy.contains(".badge", "1").should("be.visible");

    //Click on "Login" button on navigation bar.
    cy.contains(".nav-link", "Login").click();

    //Login to your account
    cy.login("test@gmail.com", "password1");

    //Verify that the item is in the basket.
    cy.get(".list-group-item").should("contain", selectedItem);
  });
});

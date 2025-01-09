describe("Basket page test", () => {
  beforeEach(() => {
    cy.visit("https://sweetshop.netlify.app/");
  });

  it("Verify that items count is correct", () => {
    // Choose first two product and click "Add to basket".
    cy.get(".addItem").eq(0).click();
    cy.get(".addItem").eq(1).click();

    // Verify that the item is added to the cart and the cart icon is updated.
    cy.contains(".badge", "2").should("be.visible");

    //Click on "Basket" button on navigation bar.
    cy.contains(".nav-link", "Basket").click();

    //Verify that Basket page is displayed.
    cy.contains("h1", "Your Basket").should("be.visible");

    //Verify that product count matches 2.
    cy.contains("#basketCount", "2").should("be.visible");
  });

  it("Verify that total price is correct", () => {
    // Choose first two product and click "Add to basket".
    cy.addItemToBasket([0, 1]);

    // Verify that total price is correct.
    //????????????????????????
  });

  it("Successfull product delete from basket", () => {
    //Adds one product in basket and navigates to basket.
    cy.addItemToBasket([0]);

    //Click on "Delete item".
    cy.contains("a", "Delete Item").click();

    // Verify that product is removed from the cart.
    cy.contains("#basketCount", "0").should("be.visible");
  });

  it("Successfully remove all products", () => {
    //Adds two products in basket and navigates to basket.
    cy.addItemToBasket([0, 1]);

    // Click on "Empty Basket".
    cy.contains("a", "Empty Basket").click();

    // Verify that products is removed from the cart.
    cy.contains("#basketCount", "0").should("be.visible");
  });

  it("Successfull payment scenario", () => {
    //Add one product in basket and navigates to basket.
    cy.addItemToBasket([0]);

    // Enter address details: "First Name", "Last Name", "Email", "Address", "Address 2", "Country", "City", "Zip".
    cy.get("#name").type("Joe");
    cy.get(".col-md-6").eq(1).find("input").type("Smith");
    cy.get("#email").type("a@a.com");
    cy.get("#address").type("Home st. 1");
    cy.get("#address2").type("Silicon valley st. 7");
    cy.get("#country").select("United Kingdom");
    cy.get("#city").select("Bristol");
    cy.get("#zip").type("12345");

    // Enter payment details: "Name on card", "Credit card number", "Expiration", "CCV".
    cy.get("#cc-name").type("Joes Smith");
    cy.get(".col-md-6").eq(3).find("input").type("123456789");
    cy.get("#cc-expiration").type("07/2027");
    cy.get("#cc-cvv").type(777);

    // Click on "Continue to checkout" button.
    cy.contains(".btn", "Continue to checkout").click();
  });

  it("Unsuccessfull payment scenario", () => {
    //Add one product in basket and navigates to basket.
    cy.addItemToBasket([0]);

    //Leave all inputs empty and click button "Continue to checkout".
    cy.contains(".btn", "Continue to checkout").click();

    //Verify that messages indicating invalid feedback are visible next to the required inputs.
    cy.get(".invalid-feedback").should("be.visible");
  });
});

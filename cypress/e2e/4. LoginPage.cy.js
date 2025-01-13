describe("4. Login page test", () => {
  beforeEach(() => {
    cy.visit("https://sweetshop.netlify.app/");
    cy.contains(".nav-link", "Login").click();
  });
  it("4.1. Page content is visible", () => {
    //Check page has 'Login' title, description.
    cy.contains("h1", "Login").should("be.visible");
    cy.get(".lead").should("be.visible");

    // Check the page has 'Email address' and 'Password' text boxes.
    cy.contains("label", "Email address").should("be.visible");
    cy.contains("label", "Password").should("be.visible");
    cy.get("#exampleInputEmail").should("be.visible");
    cy.get("#exampleInputPassword").should("be.visible");

    // Check if the "Login" button is visible.
    cy.contains("button", "Login").should("be.visible");

    //Check if social quick login images is visible.
    cy.get(".social").should("be.visible");

    //Check if footer "Sweet Shop Project 2018"is visible.
    cy.contains("p", "Sweet Shop Project 2018").should("be.visible");
  });

  it("4.2. Successful login Scenario", () => {
    //Enter correct email address and password.
    cy.get("#exampleInputEmail").type("a@a.com");
    cy.get("#exampleInputPassword").type("pass");

    //Click login button
    cy.contains("button", "Login").click();
    // Verify that "Your Account" is visible.
    cy.contains("h1", "Your Account").should("be.visible");
  });

  it("4.3. Unsuccessful login scenario", () => {
    ///Leave empty email address and password inputs and click login button.
    cy.contains("button", "Login").click();

    //Verify that error message appears next to email address input.
    cy.get(".invalid-email").should("be.visible");

    // Verify error message appears next to password input.
    cy.get(".invalid-password").should("be.visible");
  });
});

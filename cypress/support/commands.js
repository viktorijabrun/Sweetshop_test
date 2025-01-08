// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.get("#exampleInputEmail").type(email);

  cy.get("#exampleInputPassword").type(password);

  cy.contains("button", "Login").click();

  cy.contains("h1", "Your Account").should("be.visible");
});

// cypress/support/commands.js

Cypress.Commands.add("addItemToBasket", (itemIndexes) => {
  itemIndexes.forEach((index) => {
    cy.get(".addItem").eq(index).click();
  });

  cy.contains(".badge", itemIndexes.length.toString()).should("be.visible");

  cy.contains(".nav-link", "Basket").click();

  cy.contains("h1", "Your Basket").should("be.visible");
});

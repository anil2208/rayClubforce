import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given(`I open Post page`, () => {
  cy.visit('http://localhost:4200/');
});

Then(`I see "POST" in the title`, () => {
  cy.title().should("include", "CRUD");
});
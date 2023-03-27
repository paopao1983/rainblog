import {
  Given,
  When,
  Then, 
} from "@badeball/cypress-cucumber-preprocessor";

Given('the user is on the Rain’s Blog page', function () {
    cy.visit("/blog/");
  });

  When('the user clicks on the {string} category', function (givenCategory) {
    cy.get(`nav a[href*="${givenCategory.toLowerCase()}"]`)
      .click({force:true}); 
  }); 

  Then('the user is redirected to the {string} page and a grid with a list of posts is displayed', function (givenCategory) {
    cy.url().should("contains",`/${givenCategory.toLowerCase()}`);
    cy.get("article section div.ezjvwax0").should("have.length.greaterThan", 0);
  }); 
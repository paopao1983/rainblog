import {
  Given,
  When,
  Then, 
} from "@badeball/cypress-cucumber-preprocessor";

Given('the user is on the Rains Blog page', function () {
  cy.visit('/blog/');
});

  When('the user enters the text {string} into the magnifying field', function (givenWord) {
     cy.get('button.css-1fpkgvp').click({force:true});
     cy.get('input[placeholder="Search in blog..."]')  
     .type(givenWord,{force:true});
  });

  When('clicks on the search CTA', function () {
    cy.get('button').contains("Search").click({force:true});
  });

  Then('the user is displayed with a grid of results for the text {string}', function (givenWord) {
    cy.url().should("contain",`/search?q=${givenWord}`);
    cy.get("main p.css-1nzgxw5").should("contain",givenWord);
    cy.get("article section div.css-t5uy1u").should("have.length.greaterThan", 0); 
  }); 

  Then('the user is displayed with the search results We\'ve found 0 articles for {string}', function (givenWord) {
    cy.url().should("contains",`/search?q=${givenWord}`);
    cy.get("main p.css-1nzgxw5").should("contain",`We've found 0 articles for "${givenWord}"`);
  }); 
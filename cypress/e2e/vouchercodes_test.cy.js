/// <reference types="cypress"/>

describe("Search offers", function () {

  it("Search restaurant in London", () => {
    cy.visit("https://www.vouchercodes.co.uk/restaurant-vouchers.html")
    cy.get('[data-qa="el:restaurantHeading"]').should("contain.text", "Find restaurant vouchers & offers near you");
    cy.get('[data-qa="el:locationDropdown enabled:true"]')
      .type('London', { delay: 300 })
      .type('{downArrow}')
      .type('{enter}');
    cy.get('[data-qa="el:dayDropdown"]').select('');
    cy.get('[data-qa="el:peopleDropdown"]').select('2');
    cy.get('[data-qa="el:findRestaurantsVoucherButton"]').click();

    // next steps it is an assumption that there are no results(expected result)
    cy.get('[data-qa="el:infoBannerTitle"]').should("contain.text", "Sorry, we couldn't find any offers that match your criteria");
  })

  it("Get student sign-in page", () => {
    cy.visit("https://www.vouchercodes.co.uk/")
    cy.get('[data-qa="el:studentsHeader active:false"]').click();
    cy.get('[data-qa="el:slideUrl link:/campaign/student-sign-up"]').click();
    cy.url().should('include', '/campaign/student-sign-in');
  })
})
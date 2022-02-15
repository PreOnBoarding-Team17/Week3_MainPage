/* eslint-disable no-undef */

describe('bestSeller', () => {
  it('베스트셀러 컴포넌트 테스트', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    const sample = 'assets/BestSeller/img_book_1.png';

    cy.get("[data-test-id='BestSeller']").scrollIntoView();

    cy.get("[data-test-id='BestSeller:ImageContainer']").should(
      'have.css',
      'animation',
      '24s linear 0s infinite normal none running FSdjW'
    );

    cy.get("[data-test-id = 'BestSeller:Image']")
      .should('be.visible')
      .should('have.attr', 'src', sample);
  });
});

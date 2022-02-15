/* eslint-disable no-undef */

describe('About', () => {
  it('소개 컴포넌트 테스트', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    const src = [
      '/assets/About/second-logo.png',
      'http://localhost:3000/assets/About/second-logo.gif',
    ];

    cy.get("[data-test-id = 'About:logo']").should('have.attr', 'src', src[0]);

    cy.get("[data-test-id = 'About']").scrollIntoView();
    cy.get("[data-test-id = 'About:logo']").should('have.attr', 'src', src[1]);
  });
});

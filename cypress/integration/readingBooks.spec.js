/* eslint-disable no-undef */

describe('ReadingBooks', () => {
  it('책 읽기 컴포넌트 테스트', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    const src = [
      'assets/ReadingBooks/tablet.png',
      'assets/ReadingBooks/phone.png',
    ];

    cy.get("[data-test-id='ReadingBooks']").scrollIntoView();

    cy.get("[data-test-id='ReadingBooks:Tablet']").should(
      'have.attr',
      'src',
      src[0]
    );
    cy.get("[data-test-id='ReadingBooks:Mobile']").should(
      'have.attr',
      'src',
      src[1]
    );
    cy.get("[data-test-id='ReadingBooks:TextContainer']").should('be.visible');
  });
});

/* eslint-disable no-undef */

describe('Feature', () => {
  it('특징 컴포넌트 테스트', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.get("[data-test-id='Feature']").scrollIntoView();

    cy.get("[data-test-id='Feature:Card']").should(
      'have.css',
      'background-image',
      'url("http://localhost:3000/assets/Feature/Image.png")'
    );

    cy.get("[data-test-id = 'Feature:CardIcon']").should('is.visible');

    cy.get("[data-test-id = 'Feature:CardTitle']").should(
      'have.text',
      '화상수업양방향캐릭터'
    );

    cy.get("[data-test-id = 'Feature:CardText']").should('is.visible');
  });
});

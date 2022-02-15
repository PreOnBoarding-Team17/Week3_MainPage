/* eslint-disable no-undef */

describe('Main', () => {
  it('메인 컴포넌트 테스트', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.viewport(1920, 1080);
    cy.get("[data-test-id = 'Main:text']").should('be.visible');
    cy.get("[data-test-id = 'Main:star']").should('be.visible');
    cy.get("[data-test-id = 'Main:mouse']").should(
      'have.css',
      'animation-name'
    );

    cy.viewport(1200, 1080);
    cy.get("[data-test-id = 'Main:text']").should('be.visible');
    cy.get("[data-test-id = 'Main:star']").should('be.visible');
    cy.get("[data-test-id = 'Main:mouse']").should(
      'have.css',
      'animation-name'
    );
    cy.viewport(1200, 1000);
    cy.get("[data-test-id = 'Main:text']").should('be.visible');
    cy.get("[data-test-id = 'Main:star']").should('be.visible');
    cy.get("[data-test-id = 'Main:mouse']").should(
      'have.css',
      'animation-name'
    );

    cy.viewport(768, 1080);
    cy.get("[data-test-id = 'Main:text']").should('be.visible');
    cy.get("[data-test-id = 'Main:star']").should('be.visible');
    cy.get("[data-test-id = 'Main:mouse']").should(
      'have.css',
      'animation-name'
    );
  });
});

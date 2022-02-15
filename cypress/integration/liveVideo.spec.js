/* eslint-disable no-undef */

describe('LiveVideo', () => {
  it('비디오 컴포넌트 테스트', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.scrollTo(0, 1670);

    cy.get("[data-test-id = 'LiveVideo:Title']")
      .should('be.visible')
      .should('have.text', '랜선 라이브 북클래스');
    cy.get("[data-test-id = 'LiveVideo:Text']")
      .should('be.visible')
      .should(
        'have.text',
        '친구들과 함께 그림 그리기, 퀴즈 풀기,\n선생님과 대화하며 경험해요!'
      );
    cy.get('video').then((video) => video[0].play());
    cy.get('video').should('be.visible').should('have.attr', 'autoPlay');
  });
});

/* eslint-disable no-undef */

describe('ReadingDiary', () => {
  it('일기 컴포넌트 테스트', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    const src = 'assets/ReadingDiary/Diary.png';

    cy.get("[data-test-id='ReadingDiary']").scrollIntoView();

    cy.get("[data-test-id='ReadingDiary:Image']").should(
      'have.attr',
      'src',
      src
    );
    cy.get("[data-test-id='ReadingDiary:TextContainer']").should('be.visible');
  });
});

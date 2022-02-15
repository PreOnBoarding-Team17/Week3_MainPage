/* eslint-disable no-undef */

describe('Navigation', () => {
  it('스크롤 테스트', () => {
    cy.visit('http://localhost:3000/');

    cy.scrollTo(0, 0)
      .get('nav')
      .should('be.visible')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');

    cy.scrollTo(0, 500)
      .get('nav')
      .should('be.visible')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)');

    cy.viewport(1280, 720)
      .get('nav img:first-child')
      .should('have.attr', 'src', 'assets/Navigation/logo-black.png');
  });

  it('Navigation 반응형 테스트', () => {
    cy.scrollTo(0, 0)
      .viewport(1280, 720)
      .get('nav img:first-child')
      .should('have.attr', 'src', 'assets/Navigation/logo-white.png')
      .should('have.attr', 'alt', '땅콩스쿨')
      .should('have.css', 'width', '154.5px')
      .should('have.css', 'height', '50px');

    cy.get('nav').contains('도서구매').and('be.visible');
    cy.get('nav').contains('장바구니').and('be.visible');
    cy.get('nav').contains('이용권 관리').and('be.visible');
    cy.get('nav').contains('로그인/회원가입').and('be.visible');

    cy.viewport(1080, 720)
      .get('nav img:first-child')
      .should('have.attr', 'src', 'assets/Navigation/logo-white.png')
      .should('have.attr', 'alt', '땅콩스쿨')
      .should('have.css', 'width', '154.5px')
      .should('have.css', 'height', '50px');

    cy.get('nav').contains('도서구매').not('be.visible');
    cy.get('nav').contains('장바구니').not('be.visible');
    cy.get('nav').contains('이용권 관리').not('be.visible');
    cy.get('nav').contains('로그인/회원가입').not('be.visible');

    cy.viewport(680, 480)
      .get('nav img:first-child')
      .should('have.attr', 'src', 'assets/Navigation/logo-white.png')
      .should('have.attr', 'alt', '땅콩스쿨')
      .should('have.css', 'height', '36px');
  });
});

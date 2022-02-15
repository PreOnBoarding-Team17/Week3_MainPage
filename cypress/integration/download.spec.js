/* eslint-disable no-undef */

describe('Download', () => {
  it('다운로드 컴포넌트 테스트', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    const src = [
      'url("http://localhost:3000/assets/Download/coupon-phone.png")',
      'url("http://localhost:3000/assets/Download/coupon-tablet.png")',
      'url("http://localhost:3000/assets/Download/coupon-pc.png")',
    ];

    cy.visit('http://localhost:3000/');
    cy.get("[data-test-id = 'Download:coupon']").scrollIntoView();
    cy.viewport(1920, 1080);
    cy.get("[data-test-id = 'Download:coupon']").should(
      'have.css',
      'background-image',
      src[2]
    );
    cy.viewport(1199, 1080);
    cy.get("[data-test-id = 'Download:coupon']").should(
      'have.css',
      'background-image',
      src[1]
    );
    cy.viewport(767, 1080);
    cy.get("[data-test-id = 'Download:coupon']").should(
      'have.css',
      'background-image',
      src[0]
    );
  });
});

/* eslint-disable no-undef */

describe('SSR Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('renders 6 items on the server', () => {
    cy.request('/')
      .its('body')
      .then((html) => {
        const $sec = Cypress.$(html).find('section');
        expect($sec).to.have.property('length').equal(6);
        cy.state('document').write(html);
        cy.document().invoke({ log: false }, 'write', html);
      });
  });

  it('skips client-side bundle', () => {
    cy.request('/')
      .its('body')
      .then((html) => {
        // remove the application code bundle
        html = html.replace('<script src="/bundle.js"></script>', '');
        html = html.replace(
          '<script src="/_next/static/chunks/webpack.js',
          '<script src=""'
        );
        cy.state('document').write(html);
      });
    // now we can use "normal" Cypress api to confirm
    // number of list element
    cy.get('section').should('have.length', 6);
  });
});

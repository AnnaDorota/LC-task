describe('LC', () => {
  before(() => {
    cy.visit('https://accounts.labs.livechat.com');
  });

  it('open login page', () => {
    cy.url()
      .should('include', 'https://accounts.labs.livechat.com');
  });
});
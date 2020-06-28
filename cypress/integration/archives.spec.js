import { login } from '../helpers/auth';

describe('Archives', () => {
  before(() => {
    login();
  });

  beforeEach(() => {
    cy.visit('https://my.labs.livechatinc.com/archives/');

    cy.url()
      .should('include', 'https://my.labs.livechatinc.com/archives/');
  });

  it('filter 1', () => {
    cy.url()
      .should('include', 'https://my.labs.livechatinc.com/archives/');
  });
});

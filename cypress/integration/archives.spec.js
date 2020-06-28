import { login } from '../helpers/auth';

const ARCHIVES_URL = 'https://my.labs.livechatinc.com/archives/';
const SELECTORS = {
  LIST: '.css-qhtaej0',
  LIST_ELEMENT: '.css-qhtaej0 > li',
  SEARCH: 'input[placeholder="Search in archives…"]'
};

describe('Archives', () => {
  before(() => {
    login();
  });

  beforeEach(() => {
    cy.visit(ARCHIVES_URL);

    cy.url()
      .should('include', ARCHIVES_URL);
  });

  it('Searchbar', () => {
    //This is wrong, we need better selector, here preferably hook. 
    //It is not avalable for me on this level or any close parent so I used this generated class
    cy.get(SELECTORS.LIST_ELEMENT)
      .should('have.length', 5);

    cy.get(SELECTORS.SEARCH)
      .type('Client')
      .should('have.value', 'Client');
    
    cy.get(SELECTORS.LIST_ELEMENT)
      .should('have.length', 3);
    //The outcome of test is correct under condition this list is static. 
    //Searchbar engine searches for everything (Client name, chat conversations) so it difficult to cover 100% of outcomes.
  });
});

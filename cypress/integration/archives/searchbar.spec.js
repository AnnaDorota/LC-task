import { login } from '../../helpers/auth';
import { archivesBeforeEach } from '../../helpers/archives';

const SELECTORS = {
  LIST: '.css-qhtaej0',
  LIST_ELEMENT: '.css-qhtaej0 > li',
  SEARCH: 'input[placeholder="Search in archives…"]'
};

describe('Archives | Searchbar', () => {
  before(() => {
    login();
  });

  beforeEach(() => {
    archivesBeforeEach();
  });

  it('Searchbar', () => {
    //This is wrong, we need better selector, here preferably hook. 
    //It is not avalable for me on this level or any close parent so I used this generated class
    cy.get(SELECTORS.LIST_ELEMENT)
      .should('be.visible')
      .should('have.length', 5);

    cy.get(SELECTORS.SEARCH)
      .should('be.visible')
      .type('Client')
      .should('have.value', 'Client');
    
    cy.get(SELECTORS.LIST_ELEMENT)
      .should('be.visible')
      .should('have.length', 3);
    //The outcome of test is correct under condition this list is static. 
    //Searchbar engine searches for everything (Client name, chat conversations) so it difficult to cover 100% of outcomes.
  });
});

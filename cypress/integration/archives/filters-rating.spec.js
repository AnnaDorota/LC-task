import { login } from '../../helpers/auth';
import { archivesBeforeEach } from '../../helpers/archives';

const FILTER_NAME = 'Rating';
const RATE_NAME = 'Any rating';

const SELECTORS = {
  BUTTON: '#archives button',
  FILTERS_LIST_ELEMENTS: '.lc-dropdown__list > li .lc-dropdown__list-item__title',
  RATING_NAMES_LIST: '.lc-select-body__list > li',
  // ARCHIVE_LIST_ELEMENTS: '#archives ul.css-1a35ai7.css-qhtaej0 > li',
  // ARCHIVE_ELEMENT_RATE: '[data-e2e="rate"]',
};

describe('Archives | Filters | Rating', () => {
  before(() => {
    login();
  });

  beforeEach(() => {
    archivesBeforeEach();
  });

  it('Filter archives by rating', () => {
    cy.contains(SELECTORS.BUTTON, 'Add filter')
      .click();

    cy.get(SELECTORS.FILTERS_LIST_ELEMENTS)
      .contains(FILTER_NAME)
      .should('be.visible')
      .click();

    cy.get(SELECTORS.RATING_NAMES_LIST)
      .contains(RATE_NAME)
      .should('be.visible')
      .click();

    cy.contains(SELECTORS.BUTTON, 'Done')
      .click({force: true}); //Button hidden by drop down list hence force

    // As rate information is displayed as icon on generated list I cannot find element which I could refer in test to
    // I would put hook next to icon and describe with below commands:
    // cy.get(SELECTORS.ARCHIVE_LIST_ELEMENTS)
    //   .each((archiveElement) => {
    //     cy.wrap(archiveElement)
    //       .get(SELECTORS.ARCHIVE_ELEMENT_RATE)
    //       .should('be.visible);
  });

  it('Filter archives by multiple rates', () => {
  //   //TODO: There is possibility to choose multiple rates. It can be tested in analogical way
  });
});
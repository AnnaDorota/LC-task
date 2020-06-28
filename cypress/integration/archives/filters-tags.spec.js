import { login } from '../../helpers/auth';
import { archivesBeforeEach } from '../../helpers/archives';

const FILTER_NAME = 'Tag';

const SELECTORS = {
  BUTTON: '#archives button',
  FILTERS_LIST_ELEMENTS: '.lc-dropdown__list > li .lc-dropdown__list-item__title',
  TAGS_NAMES_LIST: '.lc-multiselect-body__list > li',
  ARCHIVE_LIST_ELEMENTS: '#archives ul.css-1a35ai7.css-qhtaej0 > li',
  TAGS_CHAT_CHOSEN: '[data-testid="tag-badge"] span.css-hyz9fq',
};

const TAGS_NAMES = [
  'complaint',
  'spam',
  'positive feedback',
  'sales',
  'support',
];

const TAG_NOT_TAGGED = 'Not tagged';

describe('Archives | Filters | Tags', () => {
  before(() => {
    login();
  });

  beforeEach(() => {
    archivesBeforeEach();
  });

  TAGS_NAMES.forEach((TAG_NAME) => {
    it('Filter archives by tag ' + TAG_NAME, () => {
      cy.contains(SELECTORS.BUTTON, 'Add filter')
        .click();
  
      cy.get(SELECTORS.FILTERS_LIST_ELEMENTS)
        .contains(FILTER_NAME)
        .should('be.visible')
        .click();
  
      cy.get(SELECTORS.TAGS_NAMES_LIST)
        .contains(TAG_NAME)
        .should('be.visible')
        .click();
  
      cy.contains(SELECTORS.BUTTON, 'Done')
        .click({force: true}); //Button hidden by drop down list hence force
  
      cy.get(SELECTORS.ARCHIVE_LIST_ELEMENTS)
        .each((archiveElement) => {
          cy.wrap(archiveElement)
            .click()
            .get(SELECTORS.TAGS_CHAT_CHOSEN)
            .contains(TAG_NAME);
        });
    });
  });

  it('Filter archives by not tagged', () => {
    cy.contains(SELECTORS.BUTTON, 'Add filter')
      .click();

    cy.get(SELECTORS.FILTERS_LIST_ELEMENTS)
      .contains(FILTER_NAME)
      .should('be.visible')
      .click();

    cy.get(SELECTORS.TAGS_NAMES_LIST)
      .contains(TAG_NOT_TAGGED)
      .should('be.visible')
      .click();

    cy.contains(SELECTORS.BUTTON, 'Done')
      .click({force: true}); //Button hidden by drop down list hence force

    cy.get(SELECTORS.ARCHIVE_LIST_ELEMENTS)
      .each((archiveElement) => {
        cy.wrap(archiveElement)
          .click()
          .get(SELECTORS.TAGS_CHAT_CHOSEN)
          .should('not.exist');
      });
  });

  it('Filter archives by multiple tags', () => {
  //TODO: There is possibility to choose multiple tags. It can be tested in analogical way
  });
});
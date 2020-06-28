import { login } from '../../helpers/auth';
import { archivesBeforeEach } from '../../helpers/archives';

const FILTER_NAME = 'Agent';
const AGENT_NAME = 'AgentTestowy';

const SELECTORS = {
  BUTTON: '#archives button',
  FILTERS_LIST_ELEMENTS: '.lc-dropdown__list > li .lc-dropdown__list-item__title',
  AGENT_NAMES_LIST: '.lc-multiselect-body__list > li',
  ARCHIVE_LIST_ELEMENTS: '#archives ul.css-1a35ai7.css-qhtaej0 > li',
  ARCHIVE_ELEMENT_AGENTS: 'p.css-oefc55',
};

describe('Archives | Filters | Agents', () => {
  before(() => {
    login();
  });

  beforeEach(() => {
    archivesBeforeEach();
  });

  it('Filter archives by agent', () => {
    cy.contains(SELECTORS.BUTTON, 'Add filter')
      .click();

    cy.get(SELECTORS.FILTERS_LIST_ELEMENTS)
      .contains(FILTER_NAME)
      .should('be.visible')
      .click();

    cy.get(SELECTORS.AGENT_NAMES_LIST)
      .contains(AGENT_NAME)
      .should('be.visible')
      .click();

    cy.contains(SELECTORS.BUTTON, 'Done')
      .click({force: true}); //Button hidden by drop down list hence force

    cy.get(SELECTORS.ARCHIVE_LIST_ELEMENTS)
      .each((archiveElement) => {
        cy.wrap(archiveElement)
          .get(SELECTORS.ARCHIVE_ELEMENT_AGENTS)
          .contains(AGENT_NAME);
      });
  });

  it('Filter archives by multiple agents', () => {
    //TODO: There is possibility to choose multiple agents. It can be tested in analogical way
  });
});
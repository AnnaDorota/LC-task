import { login } from '../../helpers/auth';
import { archivesBeforeEach } from '../../helpers/archives';

const FILTER_NAME = 'Date';
const DATE_TODAY_NAME = 'Today';
const DATE_CUSTOM_PERIOD_NAME = 'Custom period';
const START_DATE_INPUT = '2019-09-01';
const END_DATE_INPUT = '2019-12-01';

const SELECTORS = {
  BUTTON: '#archives button',
  FILTERS_LIST_ELEMENTS: '.lc-dropdown__list > li .lc-dropdown__list-item__title',
  DATES_NAMES_LIST: '.lc-select-body__list > li',
  ARCHIVE_LIST_ELEMENTS: '#archives ul.css-1a35ai7.css-qhtaej0 > li',
  START_END_DATE_INPUT:'#date-range-filter input.lc-input.lc-date-picker--range__select-input',
  DATE_CHOSEN: '.css-quceq6'
};

describe('Archives | Filters | Dates', () => {
  before(() => {
    login();
  });

  beforeEach(() => {
    archivesBeforeEach();
  });

  it('Filter archives by custom period', () => {
    cy.contains(SELECTORS.BUTTON, 'Add filter')
      .click();

    cy.get(SELECTORS.FILTERS_LIST_ELEMENTS)
      .contains(FILTER_NAME)
      .should('be.visible')
      .click();

    cy.get(SELECTORS.DATES_NAMES_LIST)
      .contains(DATE_CUSTOM_PERIOD_NAME)
      .should('be.visible')
      .click();

    cy.get(SELECTORS.START_END_DATE_INPUT)
      .first()
      .should('be.visible')
      .type(START_DATE_INPUT)
      .should('have.value', START_DATE_INPUT);

    cy.get(SELECTORS.START_END_DATE_INPUT)
      .last()
      .should('be.visible')
      .type(END_DATE_INPUT);

    cy.get(SELECTORS.ARCHIVE_LIST_ELEMENTS)
      .each((archiveElement) => {
        cy.wrap(archiveElement)
          .find(SELECTORS.DATE_CHOSEN)
            //I would compare start and end date in some function but I don't know how to write it
      });
  });
});
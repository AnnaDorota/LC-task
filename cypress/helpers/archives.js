const ARCHIVES_URL = 'https://my.labs.livechatinc.com/archives/';

export const archivesBeforeEach = () => {
  cy.visit(ARCHIVES_URL);

  cy.url()
    .should('include', ARCHIVES_URL);
}

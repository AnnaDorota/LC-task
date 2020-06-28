export const login = () => {
  cy.visit('https://accounts.labs.livechatinc.com');

  cy.url().then(url => {
    if (url.includes('https://accounts.labs.livechat.com')) {
      cy.get('input[name="email"]')
        .type('m.debski+frontend_tests@livechatinc.com')
        .should('have.value', 'm.debski+frontend_tests@livechatinc.com');

      cy.get('input[name="password"]')
        .type('test1@3$')
        .should('have.value', 'test1@3$');

      cy.get('.form__row--submit > button')
        .click();
    }

    cy.url()
      .should('include', 'https://my.labs.livechatinc.com');
  });
}

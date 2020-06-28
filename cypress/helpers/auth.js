const LC_LOGIN_URL_1 = 'https://accounts.labs.livechatinc.com';
const LC_LOGIN_URL_2 = 'https://accounts.labs.livechat.com';
const LC_URL = 'https://my.labs.livechatinc.com';
const SELECTORS = {
  INPUT_EMAIL: 'input[name="email"]',
  INPUT_PASSWORD: 'input[name="password"]',
  BUTTON_SUBMIT: '.form__row--submit > button'
};
const AUTH = {
  EMAIL: 'm.debski+frontend_tests@livechatinc.com',
  PASSWORD: 'test1@3$'
};

export const login = () => {
  cy.visit(LC_LOGIN_URL_1);

  cy.url().then(url => {
    if (url.includes(LC_LOGIN_URL_2)) {
      cy.get(SELECTORS.INPUT_EMAIL)
        .type(AUTH.EMAIL)
        .should('have.value', AUTH.EMAIL);

      cy.get(SELECTORS.INPUT_PASSWORD)
        .type(AUTH.PASSWORD)
        .should('have.value', AUTH.PASSWORD);

      cy.get(SELECTORS.BUTTON_SUBMIT)
        .click();
    }

    cy.url()
      .should('include', LC_URL);
  });
}

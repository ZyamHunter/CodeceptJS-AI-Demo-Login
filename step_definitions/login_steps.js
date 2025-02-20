const { I, loginPage } = inject();

Given('que o usuário esteja na página de Login', () => {
  I.amOnPage(`${process.env.BASE_URL}/login`);
});

When('clicar em Fazer login com o google', () => {
  loginPage.clickButtonGoogle();
})

When('confirmar o usuário corretamente', () => {
  loginPage.confirmEmailAdmin();
})

When('confirmar a senha corretamente', () => {
  loginPage.confimPasswordAdmin();
})

Then('será logado no sistema', () => {
  I.waitForElement('//*[@id="rc-menu-uuid-93690-1-/anuncios-popup"]/li[1]', 10);
})

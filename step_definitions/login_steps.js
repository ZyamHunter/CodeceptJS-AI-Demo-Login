const { I, loginPage } = inject();
// Add in your custom step files

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

})

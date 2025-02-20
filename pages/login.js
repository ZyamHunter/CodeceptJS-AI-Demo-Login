const { I } = inject();

module.exports = {
  clickButtonGoogle() {
    I.wait(2);
    I.click('//*[@id="__next"]/div/div[2]/div/div');
    I.wait(15);
    I.switchToNextTab();
  },
  confirmEmailAdmin() {
    I.fillField('email', process.env.EMAIL_ADMIN);
    I.click('next');
    I.wait(7);
  },
  confimPasswordAdmin() {
    I.fillField('password', process.env.PASSWORD_ADMIN);
    I.click('next');
    I.wait(15);
    I.switchToNextTab();
    I.wait(15);
  }
}
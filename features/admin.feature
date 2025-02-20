@adminLogin
Feature: Login Admin

  Scenario: Logar no admin
    Given que o usuário esteja na página de Login
    When clicar em Fazer login com o google
    And confirmar o usuário corretamente
    And confirmar a senha corretamente
    Then será logado no sistema

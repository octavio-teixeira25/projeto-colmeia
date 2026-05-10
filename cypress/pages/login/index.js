import {elements as el} from './elements';

class Login {

    visitarPagina() {
        cy.visit('http://teste-colmeia-qa.colmeia-corp.com/');
    };
    preencherCredenciaisValidas() {
        cy.get(el.emailInput).type('qa@test.com');
        cy.get(el.passwordInput).type('123456');
        cy.get(el.loginButton).click();
        cy.get(el.confirmationButton).click();
        cy.screenshot('Login Bem Sucedido');
    };

    preencherCredenciaisInvalidas() {
        cy.get(el.emailInput).type('user.invalid');
        cy.get(el.passwordInput).type('abc123');
        cy.get(el.loginButton).click();
        cy.screenshot('Login Inválido');
    };

    validarMensagensDeErro() {
        cy.get(el.errorMessageEmail).should('contain.text', 'Usuário ou senha inválidos');
        cy.get(el.errorMessagePassword).should('contain.text', 'Usuário ou senha inválidos');
        cy.url().should('eq', 'http://teste-colmeia-qa.colmeia-corp.com/');
        cy.screenshot('Validação de Mensagens de Erro');
    };
};

export default new Login();
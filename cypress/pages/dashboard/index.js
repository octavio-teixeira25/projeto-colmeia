import {buttons} from "./elements";

class Dashboard {
    
    validarAcessoAPagina() {
        cy.url().should('eq', 'http://teste-colmeia-qa.colmeia-corp.com/dashboard');
    };

    validarAcessoAoMenuDeCampanha() {
        cy.get(buttons.campanhaButton).click();
        cy.url().should('eq', 'http://teste-colmeia-qa.colmeia-corp.com/dashboard/campanha');
    };

    validarAcessoAoMenuDeBancosDeDados() {
        cy.get(buttons.bancosDeDadosButton).click();
        cy.url().should('eq', 'http://teste-colmeia-qa.colmeia-corp.com/dashboard/campanha/bancos-de-dados');
    };

    validarAcessoAoColmeiaForms() {
        cy.get(buttons.colmeiaFormsButton).click();
        cy.url().should('eq', 'http://teste-colmeia-qa.colmeia-corp.com/dashboard/campanha/colmeia-forms');
    };
};

export default new Dashboard();
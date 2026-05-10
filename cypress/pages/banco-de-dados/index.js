import {elements as el} from './elements';
import {buttons} from '../dashboard/elements';
class BancoDeDados {
    criarItem() {
        cy.get(el.criarButton).click();
        cy.get(el.nomeDoItemInput).type('Item 1');
        cy.get(el.salvarButton).click();
        cy.screenshot('Item Criado com Sucesso');
    };

    pesquisarItem() {
        cy.get(el.pesquisarItemInput).click();
        cy.get(el.pesquisarItemInput).type('Item 1').should('be.visible');
        cy.get(el.pesquisarButton).click();
    };

    acessarItensArquivados() {
        cy.get(el.itensArquivadosButton).click();
        cy.contains('Itens Arquivados').should('be.visible');
    };

    arquivarItem() {
        cy.get(el.arquivarButton).click();
    };
    excluirItem() {
        cy.get(el.excluirButton).click();
    };
};

export default new BancoDeDados();
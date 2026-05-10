//Neste teste, estamos validando as funcionalidades do menu de Banco de Dados, incluindo a criação, pesquisa, arquivamento e exclusão de itens. 
//O teste é estruturado para garantir que cada funcionalidade seja testada de forma independente, garantindo a integridade dos testes e a confiabilidade dos resultados.

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import BancoDeDados from '../pages//banco-de-dados';

describe('Banco de Dados', () => {

  beforeEach(() => {
    Login.visitarPagina();
    Login.preencherCredenciaisValidas();
    Dashboard.validarAcessoAPagina();
    Dashboard.validarAcessoAoMenuDeCampanha();
    Dashboard.validarAcessoAoMenuDeBancosDeDados();
  });

  it('Adicionar um Item no Menu de Banco de Dados e Pesquisar o Item', () => {
    BancoDeDados.criarItem();
    BancoDeDados.pesquisarItem();
  });

  it('Arquivar um Item no Menu de Banco de Dados', () => {
    BancoDeDados.criarItem();
    BancoDeDados.arquivarItem();
  });

  it('Acessar Itens Arquivados no Menu de Banco de Dados', () => {
    BancoDeDados.criarItem();
    BancoDeDados.acessarItensArquivados();
  });

  it('Excluir um Item no Menu de Banco de Dados', () => {
    BancoDeDados.criarItem();
    BancoDeDados.excluirItem();
  });
});
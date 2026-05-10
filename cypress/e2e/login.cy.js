//Neste teste, estamos verificando o processo de login em um ambiente de teste. O teste inclui dois cenários: login bem-sucedido e login com credenciais inválidas. 
//Para cada cenário, o teste visita a página de login, insere as credenciais apropriadas, clica no botão de login e verifica se a URL resultante é a esperada e se as mensagens de erro são exibidas corretamente.
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

describe('Login', () => {

  beforeEach(() => {
    Login.visitarPagina();
  });

  it('Realizar Login com Sucesso', () => {
    Login.preencherCredenciaisValidas();

    Dashboard.validarAcessoAPagina();
  });

  it('Realizar Login com Email e Senha Inválidos', () => {
    Login.preencherCredenciaisInvalidas();

    Login.validarMensagensDeErro();
  });
});
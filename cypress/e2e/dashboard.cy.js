//Neste teste, estamos acessando o menu de campanha na página dashboard, verificando se as urls estão corretas 
//e se os elementos presentes no menu estão sendo clicados corretamente.
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

describe('Dashboard', () => {

  beforeEach(() => {
    Login.visitarPagina();
    Login.preencherCredenciaisValidas();
    Dashboard.validarAcessoAPagina();
  });

  it('Acessar o Menu de Campanha na Página Dashboard e Suas Funcionalidades', () => {
    Dashboard.validarAcessoAoMenuDeCampanha();
    Dashboard.validarAcessoAoMenuDeBancosDeDados();
    Dashboard.validarAcessoAoColmeiaForms();
  });
});
# Projeto Colmeia 🐝 - Cypress

![Cypress](https://img.shields.io/badge/Cypress-Automation-green?logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![NodeJS](https://img.shields.io/badge/Node.js-runtime-green?logo=node.js)

Esse projeto foi desenvolvido utilizando Cypress com JavaScript para automação de testes end-to-end, passando por:
- Tela de Login;
- Validação de Usuário;
- Navegação do Dashboard;
- Criação de Itens;
- Arquivamento de Itens e Exclusão;

Além disso, foi utilizado algumas bibliotecas auxiliares para criação de Reports que atuam na verificação dos testes que foram executados com sucesso, e para aqueles que falharam também. Sendo assim, o Cypress foi configurado para realizar Screenshots em png e criar esses Reports em HTML, que podem ser acessados via navegador local. As bibliotecas usadas foram:
- https://www.npmjs.com/package/cypress-mochawesome-reporter
- https://www.npmjs.com/package/cypress-multi-reporters
- https://www.npmjs.com/package/mocha-junit-reporter

Tudo foi estruturado visando organização, escalabilidade e facilidade de manutenção da suíte dos testes automatizados.

Além da implementação técnica, o projeto também busca apresentar uma arquitetura limpa e legível, priorizando escalabilidade e manutenção do código.

## 💻 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- Cypress
- Git & GitHub
- JavaScript
- HTML5
- Mochawesome Reporter
- Node.js

## 📁 Estrutura do Projeto

```bash
cypress/
 ├── e2e/
 ├── fixtures/
 ├── pages/
 ├── reports/
 ├── screenshots/
 └── support/
config-qa.js
cypress.config.js
jsconfig.json
package.json
```

## 🧠 Conceitos Aplicados

- Boas práticas de código
- Captura de evidências (Screenshots)
- Clean Code
- Estruturação de pastas
- Geração de relatórios automatizados
- Page Objects
- Testes End-to-end (e2e)
- Versionamento com Git
  
## ⚙️ Funcionalidades

- ✅ Navegação entre páginas
- ✅ Estrutura modular
- ✅ Integração entre componentes
- ✅ Responsividade
- ✅ Validação de dados

## 🔛 Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- Node.js
- npm
- Google Chrome

---

### Clone o repositório

```bash
git clone https://github.com/octavio-teixeira25/projeto-colmeia.git
```

### Acesse a pasta do projeto

```bash
cd projeto-colmeia
```

### Instale as dependências

```bash
npm install
```

---

## 🚀 Executando os testes

### Abrir o Cypress no navegador Chrome

```bash
npm run cy:open:chrome
```

---

### Executar os testes em modo headless no Chrome

```bash
npm run cy:run:chrome
```

---

### Executar utilizando o ambiente QA

```bash
npm run cypress:open:qa
```

## 👨🏻‍💻 Autor

### Octávio Silva Teixeira

- GitHub: https://github.com/octavio-teixeira25
- LinkedIn: https://www.linkedin.com/in/octavio-silva-teixeira/

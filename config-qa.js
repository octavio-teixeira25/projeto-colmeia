const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config');

const e2e = {
  baseUrl: 'https://teste-colmeia-qa.colmeia-corp.com/',
  env: {
    email: 'qa@test.com',
    password: '123456'
  }
};

module.exports = defineConfig({
  ...baseConfig,
  e2e
});
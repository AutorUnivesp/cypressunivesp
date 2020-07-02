// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  let disciplinas = ['PEC008', 'PEP008', 'PEC006', 'PEP006', 'TPS508', 'TPS008', 'PEC005', 'PEP005', 'PEC004', 
  'PEP004', 'TPS507', 'TPS506', 'TPS007', 'TPS006', 'PGP002', 'PGP101', 'TPL502', 'TPL501']

describe("Teste de verificação das páginas das semanas", () => {
    beforeEach(() => {
        cy.login()
    })

    disciplinas.map(disciplina => {
        it(`Deve verificar desbloqueio da disciplina ${disciplina}`, () => {
            cy.verificaDesbloqueio(disciplina, '.semana-4')
        })
    })
    
})
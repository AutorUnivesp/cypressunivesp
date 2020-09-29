// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  let disciplinas = ['EEI101', 'EEL101', 'CEN001', 'EID003', 'CEE001', 'EPS001', 'AGD001', 'CEJ001', 'EES101', 'EET101', 'EIR101', 'EIR001', 'EPP201', 'AGA001', 'AGL001', 'EPP102', 'MHM001', 'MAL001', 'MGA101', 'SDE001', 'SOT001', 'EEE001', 'EEP101', 'EEP001', 'EEO001', 'EPE501', 'AGI001', 'AGC001', 'EPP002', 'SEJ001', 'EPU001', 'GDC001', 'LIS001', 'AGF021', 'MCN001', 'SEB001', 'MCA003', 'MGD001', 'EEC101', 'EET001', 'EPG001', 'EIC001', 'SFG001', 'SHT001', 'EPO002', 'EPP001', 'RST001', 'ECP001', 'GCP001', 'AGF020', 'LET120', 'LET130', 'HFE001', 'HSE001', 'MEE001', 'MHM001', 'COM120', 'COM130', 'COM150', 'SAA001', 'SPO002', 'SPS001']

describe("Teste de verificação das páginas das semanas", () => {
    beforeEach(() => {
        cy.login()
    })

    disciplinas.map(disciplina => {
        it(`Deve verificar desbloqueio da disciplina ${disciplina}`, () => {
            cy.verificaDesbloqueio(disciplina, '.semana-1')
        })
    })

})

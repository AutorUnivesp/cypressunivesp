// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  let disciplinas = ['EEA001', 'EEI002', 'EES102', 'DAI001', 'PMO001', 'AGR001', 'AGE101', 'EPP501', 'EES001', 
  'EEL001', 'EEM101', 'EEM002', 'BMS001', 'AGQ001', 'EPO102', 'EPP101', 'MCA004', 'SGE001', 'LET100', 'EID002', 
  'EED001', 'CEE002', 'EEM001', 'AAG002', 'CEG002', 'EEM501', 'EPO101', 'EEC001', 'EPE001', 'EID001', 'EPQ501', 
  'EPM001', 'BMT002', 'EPO001', 'SEC411', 'SMN001', 'MDL001', 'SEB001', 'SCC001', 'SNF001', 'SCN001', 'SEN001', 
  'CON103', 'QUA012', 'GCC001', 'ACE013', 'COM100', 'LET140', 'MMB001', 'SHE001', 'COM110', 'MCA501', 'COM140',
  'SDD001', 'SES001', 'SFH001']

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
describe('Calculadora de cadena', () => {

    it('Para una cadema ingresada basica debe devolver la suma', () => {
        cy.visit('/index.html');
        cy.get('#input-cadena').type("1,2,4,8");
        cy.get('#btn-calcular').click();
        cy.get('#resultado').should("contain", "15");
    });

});

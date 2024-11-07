import { calcularCadena } from "./calcularCadena";

describe('Calculadora de cadena', () => {
    it('debe devolver 0 para una cadena vacía', () => {
        expect(calcularCadena("")).toBe(0);
    });
});

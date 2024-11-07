import { calcularCadena } from "./calcularCadena";

describe('Calculadora de cadena', () => {
    it('debe devolver 0 para una cadena vacía', () => {
        expect(calcularCadena("")).toBe(0);
    });

    it('debe devolver el número para una cadena con un solo número', () => {
        expect(calcularCadena("2")).toBe(2);
    });

    it('debe devolver la suma de números separados por comas', () => {
        expect(calcularCadena("1,2,4,8")).toBe(15);
    });

    it('debe manejar el delimitador "-" y devolver la suma', () => {
        expect(calcularCadena("1-2-3")).toBe(6);
    });

    it('debe manejar un delimitador personalizado y devolver la suma', () => {
        expect(calcularCadena("//[;]\n6;7;4")).toBe(17);
    });

    it('debe manejar delimitadores de varios caracteres', () => {
        expect(calcularCadena("//[***]\n1***2***3")).toBe(6);
    });
});

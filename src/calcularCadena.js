export function calcularCadena(cadena) {
    if (cadena === "") return 0;
    let delimitadores = [',', '-']; 
    let numeros = cadena;
  
    const regex = new RegExp(`[${delimitadores.join('')}]`);
  
    let listaNumeros = numeros.split(regex).map(Number);  
    return listaNumeros.reduce((acc, num) => acc + num, 0);
  }
  
  

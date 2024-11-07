export function calcularCadena(cadena) {
    if (cadena === "") return 0;
    let delimitadores = [',', '-']; 
    let numeros = cadena;
  
    if (cadena.startsWith("//")) {
      const singleDelimMatch = cadena.match(/^\/\/\[(.*?)\]\n/);
      if (singleDelimMatch) {
        delimitadores = [singleDelimMatch[1]]; 
        numeros = cadena.slice(singleDelimMatch[0].length);
      }
  
      const multiDelimMatch = cadena.match(/^\/\/\[(.*?)\]\n/);
      if (multiDelimMatch) {
        delimitadores = multiDelimMatch[1].split('][').map(delim => delim.replace('[', '').replace(']', ''));
        numeros = cadena.slice(multiDelimMatch[0].length);
      }
    }
  
    const regex = new RegExp(`[${delimitadores.join('')}]`);
  
    let listaNumeros = numeros.split(regex).map(Number);
    listaNumeros = listaNumeros.filter(num => num <= 1000);
  
    return listaNumeros.reduce((acc, num) => acc + num, 0);
  }
  
  

import { calcularCadena } from "./calcularCadena";

const inputCadena = document.querySelector("#input-cadena");
const form = document.querySelector("#sumar-form");
const resultadoDiv = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = inputCadena.value;
  resultadoDiv.innerHTML = "<p>" + calcularCadena(cadena) + "</p>";
});

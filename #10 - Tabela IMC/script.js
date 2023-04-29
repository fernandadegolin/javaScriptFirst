const resultado = document.querySelector("#dados");
const imc = document.querySelector(".imc");
const nivel = document.querySelector(".nivel");

const tabelaIMC = [
  "Menos do que 18,5",
  "Entre 18,5 e 24,9",
  "Entre 25 e 29,9",
  "Entre 30 e 34,9",
  "Entre 35 e 39,9",
  "Mais do que 40",
];

const nivelImc = [
  "Abaixo do peso",
  "Peso normal",
  "Sobrepeso",
  "Obesidade grau 1",
  "Obesidade grau 2",
  "Obesidade grau 3",
];

for (let e of tabelaIMC) {
  const label = `<p>${e}</p>`;
  imc.innerHTML += label;
}
for (let e of nivelImc) {
  const label = `<p>${e}</p>`;
  nivel.innerHTML += label;
}

function getNivelImc(imc) {
  if (imc >= 39.9) return nivelImc[5];
  if (imc >= 34.9) return nivelImc[4];
  if (imc >= 29.9) return nivelImc[3];
  if (imc >= 24.9) return nivelImc[2];
  if (imc >= 18.5) return nivelImc[1];
  if (imc < 18.5) return nivelImc[0];
}

function calcular() {
  const inputPeso = document.querySelector("#peso");
  const inputAltura = document.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  const imc = (peso / altura ** 2).toFixed(1);
  const nivelImc = getNivelImc(imc);

  const label = `Seu IMC é <strong>${imc}</strong> e o seu resultado <strong>${nivelImc}</strong>`;
  const isValido = !peso || !altura ? "Valor Invalido" : label;

  resultado.innerHTML = "";

  const paragrafo = document.createElement("p");
  paragrafo.classList.add("resultado");
  paragrafo.innerHTML = isValido;

  resultado.appendChild(paragrafo);

  inputPeso.value = "";
  inputAltura.value = "";
}

// #1
function highNumber(x, y) {
  return x >= y ? x : y;
}

// console.log(highNumber(8, 6));

// #2
const isLandscape = (largura, altura) =>
  largura > altura ? "É paisagem" : "É retrato";

// console.log(isLandscape(1280, 720));

// #3
function fizzBuzz(number) {
  if (typeof number !== "number") return `${number} - Não é um número`;
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number;
}

for (let i = 0; i <= 30; i++) {
  console.log(i, fizzBuzz(i));
}

console.log(fizzBuzz("fernanda"));

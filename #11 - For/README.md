# FOR

## Clássico

Geralmente com iteráveis (array ou string)
```
const people = ["fernanda", "degolin"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//RESULTADO
fernanda
degolin
```
## In

Retorna index ou keys (string, array ou objetos)
```
const people = {
  name: "fernanda",
  lastname: "degolin",
};

for (let i in people) {
  console.log(people[i]);
}

//RESULTADO
fernanda
degolin
```

## Of

Retorna valor em si (iteráveis, array ou string)
```
const people = ["fernanda", "degolin"];

for (let i of people) {
  console.log(i);
}

//RESULTADO
fernanda
degolin
```

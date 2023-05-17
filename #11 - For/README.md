# FOR

## Clássico

Geralmente com iteráveis (array ou string)

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
fernanda;
degolin;
```

## Of

Retorna valor em si (iteráveis, array ou string)

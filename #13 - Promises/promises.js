function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function promises(mensagem, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== "string") reject("DEU ERRO");

    setTimeout(() => {
      resolve(mensagem);
    }, tempo);
  });
}

promises(199, 1000)
  .then((resultado) => {
    console.log(resultado); // Aqui você acessa o valor resolvido da promessa
  })
  .catch((error) => {
    console.error(error); // Lida com possíveis erros de rejeição da promessa
  });

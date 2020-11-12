var primeiraOlimpiada = 1896;

var anoAtual= parseInt(prompt("Em que ano estamos?"));

// Condicao
while(primeiraOlimpiada <= anoAtual) {
  document.write('Em ' + primeiraOlimpiada + " tivemos Olimpíadas!" + '<br>');
  primeiraOlimpiada = primeiraOlimpiada + 4
}

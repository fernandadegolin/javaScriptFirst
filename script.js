var primeiraOlimpiada = 1896;

var anoAtual= parseInt(prompt("Em que ano estamos?"));

var total = (anoAtual-primeiraOlimpiada)/4

    document.write('Temos o total de ' + total.toFixed(0) + ' Olimpíadas até aqui! <br><br>')


// condicao
while(primeiraOlimpiada <= anoAtual) {
  document.write('Em ' + primeiraOlimpiada + " tivemos Olimpíadas!" + '<br>');
  primeiraOlimpiada = primeiraOlimpiada + 4
}

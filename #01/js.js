function sortear ()
{
 var numeroMagico = Math.round(Math.random()*10)
console.log(numeroMagico)
 var numeroCerto = prompt('Mande seu número de sorte') == numeroMagico

 
 //condicao do resultado
 if(numeroCerto) {
   paragrafoResultado.innerHTML = ('Você Ganhou, PARABENS!')
 }
  
 if(!numeroCerto) {
   paragrafoResultado.innerHTML= ("Poxa, não foi dessa vez")
 }
}
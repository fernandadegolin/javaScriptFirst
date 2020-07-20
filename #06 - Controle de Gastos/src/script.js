let valorSaldo = 20;

function pegarSaldo(){
    let texto = document.querySelector('.valor');
    texto.innerHTML =`R$${valorSaldo}`;

    if(valorSaldo.indexOf('-')!== -1){

    } else{
        
    }
}

pegarSaldo();
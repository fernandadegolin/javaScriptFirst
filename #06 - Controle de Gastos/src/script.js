//let valor = localStorage.getItem('saldo');
//localStorage.setItem('saldo', 2);

let valorSaldo = 0;

function pegarSaldo() {
    let texto = document.querySelector('.valor');
    texto.innerHTML = `R$${valorSaldo}`;

    validaCor(texto);
}

pegarSaldo();

function validaCor(texto){
    if (String(valorSaldo).indexOf('-') !== -1) {
        texto.style.color = 'red';

    } else {
        texto.style.color = 'green';
    }
}

function atualizarSaldo(type){

    if(type === 'diminuir'){

        let valor = document.querySelector('#despesa').value;
        valor === '' || valor === null ? valor = 0 : true; //Validação do Campo Númerico (Operaçao Ternaria)

        valorSaldo = parseInt(valorSaldo) - parseInt(valor);

        pegarSaldo();

        document.querySelector('#despesa').value = '';

    } else if (type === 'adicionar'){
        let valor = document.querySelector('#receita').value;
        valor === '' || valor === null ? valor = 0 : true; //Validação do Campo Númerico (Operaçao Ternaria)

        valorSaldo = parseInt(valorSaldo) + parseInt(valor);

        pegarSaldo();
        document.querySelector('#receita').value = '';


    } else{


    }

}



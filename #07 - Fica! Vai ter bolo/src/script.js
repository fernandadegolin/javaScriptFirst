/* Testando EVENTOS */

let a = document.getElementById('area');

function clicar(){
    a.innerText = 'Gosto do seu clique!'
    a.style.background = "var(--box)"
}

function entrar(){
    a.innerHTML = "Oi Sumido!"
    a.style.background="#618C8C";
}

function sair(){
    a.innerHTML = "Fica vai ter bolo!"
    a.style.background= "#72A68E";
    a.style.color="var(--paragraph)";
}


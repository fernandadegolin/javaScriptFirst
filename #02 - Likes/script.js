var quantidadeLikes = 0

function adicionarLike() {

  quantidadeLikes = 1 + quantidadeLikes

  //condição 01 opção
  if (quantidadeLikes == 1) {

    likes = botao.innerHTML = quantidadeLikes + ' Like'
  }
  
  if (quantidadeLikes > 1) {
    
    likes = botao.innerHTML = quantidadeLikes + ' Likes'
  }

}

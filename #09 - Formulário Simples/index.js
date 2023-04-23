function enviar() {
  const form = document.querySelector(".formulario");
  form.style.display = "inline-grid";

  const dados = document.getElementById("dados");

  let infos = [];

  function getDados(evento) {
    evento.preventDefault();

    const nome = document.querySelector(".nome").value;
    const sobrenome = document.querySelector(".sobrenome").value;
    const ano = document.querySelector(".ano").value;

    infos.push({
      nome,
      sobrenome,
      ano,
    });

    const label = `<p>${nome} | ${sobrenome} | ${ano}</p>`;
    dados.innerHTML += label;
  }

  form.addEventListener("submit", getDados);
}

enviar();

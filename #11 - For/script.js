const phrases = [
  {
    tag: "h4",
    text: "Fernanda Degolin",
  },
  {
    tag: "span",
    text: "Atriz e Desenvolvedora Frontend",
  },
  {
    tag: "p",
    text: "Trabalha na Rede Globo, uma das maiores emissoras de televisão do Brasil. Além disso, ela também é membro da Alura Stars, um grupo de profissionais que ajudam pessoas a transformarem suas vidas por meio da educação e da tecnologia. Em 2023, esteve envolvida na produção teatral FALA COMIGO, que fez parte da programação do Festival de Teatro de Curitiba, um dos maiores festivais de teatro do Brasil",
  },
];

const lines = document.querySelector(".lines");

for (let i = 0; i < phrases.length; i++) {
  const { tag, text } = phrases[i];
  let creatTag = document.createElement(tag);

  const creatLines = lines.appendChild(creatTag);
  creatLines.innerHTML = text;
}
const footer = document.querySelector("footer");
footer.innerHTML = "build JavaScrip 🖤";

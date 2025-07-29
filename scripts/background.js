const imagens = [
  "assets/images/bg13.png",
  "assets/images/bg14.png"
];

let index = 0;

// Função que troca o fundo do body
function trocarFundo() {
  const proximaImagem = imagens[index];

  // Pré-carrega a imagem antes de aplicar
  const img = new Image();
  img.src = proximaImagem;

  img.onload = () => {
    document.body.style.backgroundImage = `url('${proximaImagem}')`;
    index = (index + 1) % imagens.length;
  };
}

// Começa com a primeira imagem
trocarFundo();

// Troca a cada 6 segundos
setInterval(trocarFundo, 6000);

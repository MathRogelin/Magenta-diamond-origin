// window.addEventListener("DOMContentLoaded", () => {
//   const imagens = [
//     "../assets/images/bg13.png",
//     "../assets/images/bg14.png"
//   ];

//   let index = 0;

//   function trocarFundo() {
//     const proximaImagem = imagens[index];
//     const img = new Image();

//     img.onload = () => {
//       document.body.style.backgroundImage = `url('${proximaImagem}')`;
//       index = (index + 1) % imagens.length;
//     };

//     img.onerror = () => {
//       console.error(`Erro ao carregar imagem: ${proximaImagem}`);
//     };

//     img.src = proximaImagem;
//   }

//   trocarFundo(); // inicia com a primeira imagem
//   setInterval(trocarFundo, 10000); // troca a cada 6 segundos
// });

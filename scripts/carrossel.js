const btnLeft = document.querySelector(".btns_imgs #left")
const btnRight = document.querySelector(".btns_imgs #right")
const painel = document.querySelector(".apresentation_spoilers .painel_spoilers_imgs .painel")

const img = [
    "../assets/images/alien.png",
    "../assets/images/alien 2.png",
    "../assets/images/alien 3.png",
    "../assets/images/alien 4.png"
]

let contador = 0

btnRight.addEventListener("click", () => {
    contador++;
    if (contador >= img.length) {
        contador = 0; // volta para o começo (efeito de looping)
    }
    painel.style.backgroundImage = `url("${img[contador]}")`;
});

btnLeft.addEventListener("click", () => {
    contador--;
    if (contador < 0) {
        contador = img.length - 1; // volta para a última imagem
    }
    painel.style.backgroundImage = `url("${img[contador]}")`;
});

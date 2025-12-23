console.log("sistema de notificação ligado...")

const x = document.getElementById("btn_X")
const sistema = document.querySelector(".notification")

if(x){
    console.log("ativo")
}

x.addEventListener("click", ()=>{
    sistema.style.display = "none"
})
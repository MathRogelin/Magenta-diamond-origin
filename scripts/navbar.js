// selecionar objetos
const navbar = document.querySelector("#navbar")
const icon = document.querySelector("#menu-icon")
const linksNav = document.querySelectorAll("header nav ul li a")
// abrir e fechar navbar
function navbarEstado(){
    navbar.addEventListener("change", ()=>{
        if(navbar.checked){
            console.log("Open menu...(change class)")
            icon.classList.replace("fa-bars", "fa-x");
        }else{
            console.log("Close menu...(change class)")
            icon.classList.replace("fa-x", "fa-bars");
        }
    })
}

// ancoras
function ancoras(){
    linksNav.forEach((link, i)=>{
        // debug
        console.log(`${i + 1}: `, link)
        // evento de click fecha a nav
        link.addEventListener("click", (e)=>{
            // evitar recarregar a página
            // e.preventDefault()
            navbar.checked = false
            navbar.dispatchEvent( new Event("change"))
        })
    })
}

function verificarNavbar(){
    /* Ideia do chat */
    // fechar navbar se clicar fora
    document.addEventListener("click", (e) => {
        // variavel com parâmetro e elementos da navbar, label e header
        const isClickInsideNavbar = navbar.contains(e.target) || icon.contains(e.target) || e.target.closest("header nav")
        // se NÃO clicou dentro da navbar e o menu está aberto, então fecha
        if (!isClickInsideNavbar && navbar.checked) {
            navbar.checked = false
            navbar.dispatchEvent(new Event("change"))
            // debug
            console.log("Clicou fora da navbar")
        }
    })
}

// chama funções
navbarEstado()
ancoras()
verificarNavbar()



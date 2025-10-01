// selecionar objetos
const navbar = document.querySelector("#navbar")
const header = document.querySelector("header")
const linksNav = document.querySelectorAll("navLinks a")

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

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) { // passou de 50px
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})
ancoras()



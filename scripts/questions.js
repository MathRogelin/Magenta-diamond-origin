const questions = [
    "Diego, você já mencionou que nem todas as Diamonds são criações suas, então caso algum dos outros colaboradores da AU quiserem fazer uma comic sobre sua respectiva Diamond, isso seria possível?",
    "Por que a personagem Z parece tão fria no início? Ela mudou muito…",
    "Como funcionam os poderes nesse universo? Eles nascem com as pessoas ou são adquiridos?",
    "Se o personagem Q não tivesse se sacrificado, o final seria diferente?",
    "A história da AU acontece antes ou depois do universo original?",
    "Aquele sonho do personagem principal era só um delírio ou uma premonição?",
    "O casal A e B vai ficar junto no final?",
    "Por que o visual da personagem L mudou tanto no redesign?",
    "O personagem M é baseado em alguém real?   "
]

const answers = [
    "",
]

document.addEventListener("DOMContentLoaded", ()=>{
    const cardQuestions = document.querySelector(".questions .card .text_questionOrAnswers p")
    const cardAnswers = document.querySelector(".answers .card .text_questionOrAnswers p")

    if (cardAnswers && cardQuestions) {
        console.log("Found")

       function atualizarCartoes() {
            cardQuestions.innerText = questions[index]
            cardAnswers.innerText = answers[index]

            index++

            if (index >= questions.length) {
                index = 0 // volta para o início
            }
        }

        atualizarCartoes() // exibe o primeiro logo ao carregar

        setInterval(atualizarCartoes, 10000) // troca a cada 20 segundos


       setInterval(()=>{

       }, 20000) // 20 segundos

    }else{
        console.log( "Not Found")
        cardAnswers.innerText = `:<`
        cardQuestions.innerText = `:<`
    }
})
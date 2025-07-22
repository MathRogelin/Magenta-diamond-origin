const questions = [
    "É verdade que o personagem X já conhecia o Y antes dos eventos principais?",
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
    "Essa é uma ótima teoria — eles se cruzaram brevemente quando eram crianças, mas só um deles se lembra disso conscientemente…",
    "Ela passou por uma perda importante antes da história começar. Mostrar essa armadura emocional era essencial para o arco dela.",
    "Nascem com elas, mas ficam dormentes até um 'evento de ativação', que varia conforme a linhagem. Essa mecânica é explorada na Parte 2!",
    "Com certeza. O destino do grupo inteiro teria sido alterado. Mas o Q fez isso por escolha, e não se arrependeu.",
    "Ela é paralela — os eventos são os mesmos até certo ponto, mas divergem completamente após o Capítulo 3.",
    "Você está quente. Algumas partes foram delírios… mas uma cena específica ainda vai se repetir no futuro",
    "Hmmm... posso dizer que eles terão a chance de escolher. Mas nem tudo depende só deles.",
    "Porque ela passou por um recomeço interno. O novo visual representa a forma como ela se vê agora.",
    "Ele tem traços inspirados em pessoas próximas — especialmente a coragem e a teimosia. Mas o M é 100% do universo da AU."
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
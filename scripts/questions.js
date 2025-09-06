document.addEventListener("DOMContentLoaded", () => {
  // alert("Website under development (v 1.0.0)! To watch, click on the posters!")
  const questions = [
    "Por que você publica os capítulos em inglês, em vez de português (BR)?",
    "Você vai lançar episódios engraçados como 'O trauma da Peach', Diego? Ou está focando mais na trama?",
    "Hi Diego, em outra pergunta respondeu que a palavra de The Pearl é a palavra final e não tem questionamentos. Minha dúvida é: o surgimento da Magenta fora da Torre de Criação fez a Peach lembrar das visões da Bi-Color anteriormente e se questionar um pouco? Já que ela mesma falou ser algo impossível de acontecer, ou ainda é cética em relação a isso que não viu?!",
    "Diego, você acredita que as pessoas realmente conseguem entender o que você quer passar com cada capítulo? Ou acredita que algumas coisas ainda passam despercebidas???",
    "Ah então por exemplo especificamente a Angel Aura da série seria uma Rainbow Gem na AU, mas nem todas as Angel Auras são Rainbow Gems, basicamente? Tem algum motivo específico para o tipo de Gem como um todo não ser exclusivamente Rainbow Gem na AU? Ja que até onde eu sei Angel Auras na vida real são um tipo de Rainbow Quartz não são?"
  ];

  const answers = [
    "Porque meus seguidores também são de outros países, e como o inglês é uma língua internacional, é mais fácil para todos traduzirem.",
    "Sim, mais ou menos. Haverá algumas cenas engraçadas, mas não no mesmo tom da Temporada 1B. Como a Temporada 2A será mais pesada, não prometo que alguns capítulos sejam tão divertidos.",
    "Ela até poderia se questionar, mas ainda sim não poderia ir contra a palavra da The Pearl. Como dito antes, Peach acredita que Bi-Color confundiu a Magenta com as Peacocks.",
    "Eu sei que há partes que o público não consegue entender, até porque não é uma animação e acaba ficando confuso para algumas cenas, por isso eu aprecio que utilizem a imaginação, teorizem, revisitem os capítulos anteriores... Por mais que sejam curtos, eles são chaves para capítulos maiores e melhores, eles têm uma importância e explicam o que vai acontecer no futuro. Às vezes é complicado de entender, mas uma hora a explicação aparece, e se ainda houver dúvidas sobre algo específico na história é só enviar uma ask. Claro que eu não vou poder responder todas, contudo eu seleciono as que parecem ser mais importantes e curiosas aos fãs.",
    "Exatamente, mas para ser uma Rainbow Gem, ela precisa obter todas as cores ou possuir o branco puro / ser criada pela Rainbow. As comuns podem ser feitas pelas outras Diamonds."
  ];

  const cardQuestions = document.querySelector(".questions .card .text_questionOrAnswers p");
  const cardAnswers = document.querySelector(".answers .card .text_questionOrAnswers p");

  if (cardAnswers && cardQuestions) {
    console.log("Found");
    let index = 0;

    function atualizarCartoes() {
      cardQuestions.innerText = questions[index];
      cardAnswers.innerText = answers[index];

      index++;
      if (index >= questions.length) index = 0;
    }

    atualizarCartoes(); // mostra a primeira logo ao carregar
    setInterval(atualizarCartoes, 20000); // troca a cada 10s
  } else {
    console.log("Not Found");
  }
});

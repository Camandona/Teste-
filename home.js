const Text = [
    "Hoje é um dia muito especial..... sabe por quê???",
    "Porque há uns anos atrás alguém importante para mim nasceu<3 (Tá brega mesmo, não ligo)",
    "Uma dica... ele ama um certo ouriço azul, e também gosta bastante de um cantor que tem o mesmo nome que ele,",
    "pode soar um pouco egoísta (brincadeira), mas na verdade ele é a pessoa mais gentil e altruísta que eu conheço :)",
    "Eu não falo muito, mas espero que ele saiba o quanto ele e a sua amizade significam para mim. Mais do que palavras podem expressar e mais do que eu cosigo explicar nessa carta digital.",
    "A verdade é que você me faz extremamente feliz. Com seu jeito, com suas palavras e piadas.",
    "Hoje é bem mais do que apenas uma data, é um marco da pessoa que eu mais gosto.",
    "Não sei o que o futuro nos aguarda, só espero que estejamos nele. Seja em memórias doces ou conversas bobas.",
    "O que eu estou tentando dizer é: eu amo muito nossa amizade, e sempre estarei aqui para o que você precisar. Não importa quanto tempo passe, pode me chamar que eu estarei lá.",
    "Feliz Aniversário! Ou, Feliz Dia Do Vitor!!!!!!",
    "Sim, essa mensagem é para o Vitor, se você não é ele, trate de desler."
];

let lineIndex = 0;
let charIndex = 0;
const speed = 100;
let typing = true;

const box = document.getElementsByClassName ('Box') [0];
const text = document.getElementsByClassName ('birthdayText') [0];
let timeout;

function typewriterReveal () {
    let currentText = Text[lineIndex];

    if (charIndex < currentText.length) {
        text.innerText += currentText.charAt(charIndex);
        charIndex++;

        timeout = setTimeout(typewriterReveal, speed);
    } else {
        typing = false; }
}


if (box)
    box.addEventListener('click', function() {
        let currentText = Text[lineIndex];

        if (typing) {
            clearTimeout(timeout);
            text.innerText = currentText;
            charIndex = currentText.length;
            typing = false;
            return;
        } else{
            lineIndex++;
        }
        if (lineIndex < Text.length) { 
            text.innerText = "";
            charIndex = 0;
            typing = true;
            typewriterReveal ();
            }
        else {
            const btn = document.getElementById('btn');
            btn.style.display = "block";

            if (btn)
                btn.addEventListener('click', function() {
                    window.location.href = "end.html"; });
            }
})

typewriterReveal();
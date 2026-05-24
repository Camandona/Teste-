
const responses = [
    "Você parece feliz hoje... cotinue assim!",
    "Hmm... interessante!",
    "Eu também já pensei nisso uma vez.",
    "Isso foi fofo da sua parte.",
    "Você gosta mesmo de mim, né?",
    "Sonic aprova isso!",
    "Já tomou café da manhã hoje?",
    "É Vitor, não é? Você é bem divertido!",
    "Never gonna give you up..."
];

const input = document.getElementById("userInput");
const button = document.getElementById("sendBtn");
const charText = document.getElementById("charText");

const speed = 80;

let timeout;


function sonicTypewriter(message){
    charText.innerText = "";
    let charIndex = 0;
    function type(){
        if(charIndex < message.length){
            charText.innerText += message.charAt(charIndex);
            charIndex++;
            timeout = setTimeout(type, speed);
        }
    }

    type();
}

if (button){
    button.addEventListener("click", () => {
        const userMessage = input.value.trim();
        if(userMessage === "") return;
        const randomIndex = Math.floor(Math.random() * responses.length);
        const finalMessage = "Sonic diz: " + responses[randomIndex];
        
        clearTimeout(timeout);

        sonicTypewriter(finalMessage);

        input.value = "";
}); }
let numeroRandom = Math.floor(Math.random() * 100 + 1);

const chances = document.querySelector(".chances");
const resultados = document.querySelector(".resultados");
const maisMenos = document.querySelector(".maisMenos");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checagem() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        chances.textContent = "Tentativas anteriores: "
    }
    chances.textContent = `${chances.textContent} ${userGuess}`;
    if (userGuess === numeroRandom) {
        resultados.textContent = "Parabéns você acertou!!";
        maisMenos.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        resultados.textContent = "Fim de jogo, recarregue a página para tentar novamente.";
        maisMenos.textContent = "";
        setGameOver();
    } else {
        resultados.textContent = "Errou";
        if (userGuess < numeroRandom) {
            maisMenos.textContent = "Seu número está baixo";
        } else if (userGuess > numeroRandom) {
            maisMenos.textContent = "Seu número está alto";
        }
    } 


  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checagem);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
}
























/* document.getElementById("enviar").onclick = function(){
    let x = document.getElementById("inputUsuario").value;

    if (x == numeroRandom){
        alert("Parabéns você acertou em: " + tentativas + " Tentativas ");
    } else if (x > numeroRandom){
        tentativas++;
        alert("O seu número está alto");
    } else {
        tentativas++;
        alert("O seu número está baixo")
    }

}




document.getElementById("enviar").onclick = function(){
let x = document.getElementById("inputUsuario").value;
const chances = 10;

for (var i = 1; i < 10; i++) {
    if (x == numeroRandom) {
        alert("Good job você acertou em: " + chances + " Tentativas");
        break;
    } if (x > numeroRandom) {
        alert("Missed high nm");
        chances++;
        break;
    } if ( i===10 ) {
        alert
    }else {
        alert("Missed low nm");
        chances++;
    } break;
}
} */

/* else if (chances == 10){
    alert("Fim de jogo"); */
    
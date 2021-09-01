'use strict';
// variables globales
const choose = document.querySelector(".js-choose");
const check = document.querySelector(".js-check");
const clue = document.querySelector(".js-clue");
const tryOn = document.querySelector(".js-try");
const randomNumber = getRandomNumber();
const count = 0;
// funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
}

function getNumber() {

    if (choose > randomNumber) {
        clue.innerHTML="Demasiado alto";
    } else if (choose < randomNumber) {
        clue.innerHTML="Demasiado bajo";

    } else if (choose === randomNumber) {
        clue.innerHTML="Has ganado campenona!!!";

    } else {
        clue.innerHTML="El número debe estar entre 1 y 100";

    }
}

function countClick (){
    count += 1;
}

function handleBtn() {
        console.log("Mi número aleatorio es " + randomNumber);
}

 // eventos
check.addEventListener("click", handleBtn);
choose.addEventListener("change", getNumber)
'use strict'
// variables globales
const userOption = document.querySelector(".js_useroption");
const button = document.querySelector(".js_btn");
const clue = document.querySelector(".js_clue");
const tryOn = document.querySelector(".js_try");
const randomNumber = getRandomNumber(100);
let count = 0;

// funciones

document.querySelector('.js_form').addEventListener('submit', (ev) => {ev.preventDefault();});

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function paintText(message){
    clue.innerHTML = message;
}


 function getNumber() {
    
    const userNumber = parseInt(userOption.value);
    console.log(userNumber);

    if  (userNumber < randomNumber /*&& userNumber >= 0*/) {
        paintText ('Demasiado bajo');

     } else if (userNumber > randomNumber && userNumber <= 100) {
        paintText ('Demasiado alto');

      } else if (userNumber === randomNumber) {
        paintText('Has ganado campenona!!!');
      
    }else if (userNumber > 101) {
        paintText('El número debe estar entre 1 y 100');

     } 

    }

function countClick (){
    count++;
    tryOn.innerHTML= `Número de intentos: ${count}`;
  }

function handlebutton() {
    console.log('Mi numero aleatorio es ' + randomNumber);
}

function handleUser (event) {
    handlebutton();
    getNumber();
    countClick();
}

  // eventos
 button.addEventListener("click", handleUser); 
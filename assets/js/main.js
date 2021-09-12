'use strict';
// variables globales
const userOption = document.querySelector(".js_useroption");
const button = document.querySelector(".js_btn");
const clue = document.querySelector(".js_clue");
const tryOn = document.querySelector(".js_try");
const randomNumber = getRandomNumber(100);
let count = 0;

// funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

 function getNumber() {
    
    const userNumber = parseInt(userOption.value);
    console.log(userNumber);

    if  (userNumber < randomNumber /*&& userNumber >= 0*/) {
        clue.innerHTML= 'Demasiado bajo';

     } else if (userNumber > randomNumber /*&& userNumber <= 100*/) {
         clue.innerHTML= 'Demasiado alto';

      } else if (userNumber === randomNumber) {
        clue.innerHTML='Has ganado campenona!!!';
      
    }else if (userNumber > 101) {
          clue.innerHTML= 'El número debe estar entre 1 y 100';

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
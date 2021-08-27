// // Turning prompt function on VS Code

const prompt = require('prompt-sync')();

// // Creating a global var for user input

var userInput = prompt('Por favor, digite um número: ');

// // Function to validating user input accepting only numbers

function checkPrompt(){
    while (!/^[0-9]+$/.test(userInput)) {
        console.log("O que você digitou não é um número!");
        userInput = prompt('Por favor, digite um número: ');
    } 
}

// // Calling function

checkPrompt();

// // Validating user input

console.log(userInput);
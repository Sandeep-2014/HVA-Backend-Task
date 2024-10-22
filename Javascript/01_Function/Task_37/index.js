// Higher Order Function :- Function which takes another function as an argument is called HOF.

// Callback Function :- Function which get passed as an argument to another function is called CBF.


// this is an example of callback function 
// const input = require('readline-sync')

// function greeting(name) {
//     console.log('Hello ' + name);
// }

// function processUserInput(a) {
//     let name = input.question('Please enter your name: ');
//     a(name)
// }

// console.log(processUserInput(greeting));


// 1. :- Define Higher Order Function:

function higherOrderFunction(num, callback){
    callback(num)
    
}

// 2. :- Define Callback Function and Call Higher Order Function:

function callbackFunction(num){
    console.log(num);
    
}

higherOrderFunction(5, callbackFunction)

// callback = function callbackFunction(num){console.log(num)}



// 3. :- Call Higher Order Function with a Function Expression as Callback:


let functionExpression = function(number){
    console.log(number);
}

higherOrderFunction(10, functionExpression)


// 4. :- Callback to Log Square of the Number:

let numberSquare = function square(num){
    let squareOfNumber = num*num
    console.log(squareOfNumber);    
}

higherOrderFunction(4, numberSquare)


// 5. :- Callback to Log Sum of Two Numbers:

function newHigherOrderFunction(num1, num2, callback){
    callback(num1, num2)
}

let sumOfNumbers = function sum(number1, number2){
    total = number1 + number2
    console.log(total);
    
}

newHigherOrderFunction(3, 7, sumOfNumbers)
// a. Define and Initialize the Array:
let temperatures = [-3, 14, 22, 5, -10]

// b. Iterate and Log Using forEach():
// this is using function exression :-
temperatures.forEach(function(num){
    // console.log(num);
})

// this using arrow function :-
// temperatures.forEach((num) => console.log(num));

// this using function expression :-
temperatures.forEach(function(num){
    // console.log((num* 9/5) + 32);
})

// same thing using function expression :-

// temperatures.forEach((num) => console.log((num* 9/5) + 32));



// c. Iterate and Create a New Modified Array Using map():
// by using function expression :-
let temperaturesInFahrenheit = temperatures.map(function(num){
    return (num*9/5 + 32)
})

// by using arrow function :-
temperaturesInFahrenheit = temperatures.map((num) => ((num*9/5) + 32))
// console.log(temperaturesInFahrenheit);



// d. Iterate and Create a New Filtered Array Using filter():
// by using function expression :-
let belowFreezing = temperatures.filter(function(num){
    return num < 0
})

// by using arrow function :-
belowFreezing = temperatures.filter((num) => num < 0)
// console.log(belowFreezing);


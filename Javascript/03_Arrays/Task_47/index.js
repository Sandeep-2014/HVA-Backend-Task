// a. Define and Initialize the Array:
let fruits = ["apple", "banana", "cherry", "date"]

// b. Iterate and Log Using forEach():-
// by using function expression :-
fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase());
})



// by using arrow function :-
// fruits.forEach((fruit)=> console.log(fruit.toUpperCase()))



// c. Calculate Total Characters Using forEach() :-
let totalCharacters = 0;

fruits.forEach(function(num){
    totalCharacters += num.length
})

// console.log(totalCharacters);


// d. Iterate and Create a New Modified Array Using map() :-
let reversedFruits = fruits.map(function(num){
    num = num.split('').reverse().join('')
    return num
})


reversedFruits = fruits.map((num) => {
    num = num.split('').reverse().join('')
    // return num
})

// console.log(reversedFruits);


// e. Iterate and Create a New Filtered Array Using filter():
let longFruits = fruits.filter(function(fruit){
    // return fruit.length > 5
})

longFruits = fruits.filter((fruit) => {
    // return fruit.length > 5
})

// console.log(longFruits);



// f. Create a New Filtered and Modified Array using filter() and map():
// in this task first I have to search that in given array elements if 'a' letter is present then we have to return only that  element by using filter and then after that we have to return that array elements in uppercase by using map.

let aFruitsUpper = fruits.filter(function(fruit){
    if (fruit.includes('a') == true){
        return fruit
    }
}).map(function(fruit1){
    return fruit1.toUpperCase()
})

// console.log(aFruitsUpper);



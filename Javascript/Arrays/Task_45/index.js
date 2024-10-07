// a. Define and Initialize the Array:
let numbers = [1, 2, 3, 4, 5]

// b. Iterate and Log Using forEach():
numbers.forEach( function(element) {
    // console.log(element);
})

numbers.forEach( function(element){
    // console.log((element*2));
})

// c. Iterate and Create a New Modified Array Using map():-

let squaredNumbers = numbers.map( function(num) {
    return num**2
})

// console.log(squaredNumbers);

// same thing using arrow function as callback function :-

squaredNumbers = numbers.map((num) => num**2)

// console.log(squaredNumbers);


// squaredNumbers = numbers.map((nums)=> {
//     if (nums > 1){
//         return(nums);   
//     }
// })

// console.log(squaredNumbers)

// map me agar humne koi condition lagai hai aur vo condtion satisfy ho rhi hai to return karta hai vo same number lekin agar vo condtion satisfy nahi hoti hai to us jagah pr yeh undefined store kar deta hai end me puri array de deta hai jitni iski lenght hai lekin filter me esa nahi hota hai agar yahi same chiz hum filter use karke karte hai to agar condition satisfy karti hai to sirf vahi value return karta hai.


// d. Iterate and Create a New Filtered Array Using filter():-

let evenNumbers = numbers.filter( function(num){
    return num % 2 == 0
} )

// evenNumbers = numbers.filter((num) => num % 2 == 0)

console.log(evenNumbers);

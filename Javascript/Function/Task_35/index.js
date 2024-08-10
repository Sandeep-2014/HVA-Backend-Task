
// 1. :- Greet Function:

function greet(name){
    // return console.log(`Hello, ${name}!`);
    return (`Hello ${name}`);
}

// greet("Sandeep Kumar")
console.log(greet("Sandeep Kumar"));


// 2. :- GreetDefault Function:

function greetDefault(name = "Guest"){
    return (`Hello, ${name}!`);
}

console.log(greetDefault());

console.log(greetDefault("Hulululu"));



// 3. :- Rewrite Greet as a Function Expression:

let greetFunction = function greet(name){
    return (`Hello, ${name}!`);
}

console.log(greetFunction("Ravi"));




// 4. :- Rewrite Greet as an Arrow Function:

let greetArrow = (name) => {
    return (`Hello, ${name}!`);
}

console.log(greetArrow("Deepak"));





// Define and Log the colors Array:

let colors = ["red", "green", "blue"]
// console.log(colors[0]);


// b. Modify and Add color elements:

colors[1] = "yellow";
// console.log(colors[1]);

colors[3] = "sky-blue"
// console.log(colors[3]);


// Iterate using Loops over the colors Array:

// for loop :-
for(let i = 0; i< colors.length; i ++){
    // console.log(colors[i]);    
}

// While loop :- 

let i = 0;
while(i < colors.length){
    // console.log(colors[i]);
    i++
}

// for of loop :-

for(let color of colors){
    // console.log(color);
}

// d. Check Array Properties:

// +++++++++++++++++++++++++++ push method :- +++++++++++++++++++++++++++++

colors.push("Black")
// console.log(colors);

// ++++++++++++++++++++++++++++ pop method :-++++++++++++++++++++++++++++++

colors.pop()
// console.log(colors);


// +++++++++++++++++++++++++++ indexOf method :- +++++++++++++++++++++++++++

console.log(colors.indexOf("blue"));

// f. Add and Iterate Over Properties:

colors.push({owner: "Sandeep Kumar"})
console.log(colors);




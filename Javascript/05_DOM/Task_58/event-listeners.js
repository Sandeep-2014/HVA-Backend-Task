// b. Create a Button with a Click Event Listener:

const btn = document.getElementsByTagName('button')
// console.log(btn);
// is samay btn pr add directely add eventLisner nahi lag sakta kyoki as a output yeh HTMLCollection deta hai aur jb hum ise getElementsByTagName we access karte hai to HTMLCollection deta hai aur HTMLCollection pr directly addEventListener nahi laga sakte hai.
// agar hume is pr addEventListner lagana hai to is hum loop through is button pr addEventListener laga sakte hai
// for(let i = 0; i<btn.length; i++){
//     btn[i].addEventListener("click", function(){
//         console.log("Button click event executed");
//     });
// }



// c. Create a <div> with a Mouseover Event Listener:
// jab hum element id through access karte hai tab tab ye HTMLCollection nai deta hai aur hum dirrectly element ko target karke us pr addEventListener laga skate hai
const div = document.getElementById('div1')
// div.addEventListener('mouseover', function(){
//     console.log("Mouseover event on div executed");
// });


// Create an Input Element with an Input Event Listener:
const inputEle = document.getElementById('input1')

// The global variable created from an HTML element’s id doesn’t actually appear in your JavaScript code as a traditional var, let, or const declaration. Instead, the browser (typically in the global window object) creates it dynamically at runtime, so you won’t see it directly in your code.


input1.addEventListener("input", function (event) {
    console.log("Input event executed");
    // this will give a object related inputEvent
    console.log(event);
    // it will return every letter in console that we type in input field :- for exaple i have typed 'sandeep' so it will give output :- s, a, n, d, e, e, p like that
    console.log(event.data);
    // but this line of code will give the text we have entered :- for example 'sandeep' so it will give as output :- s, sa, san, sand, sande, sandee, sandeep.
    console.log(input1.value);
    // console.log('');
    
});

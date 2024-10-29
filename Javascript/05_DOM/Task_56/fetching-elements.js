// b. Fetch Elements by ID:
let myDiv = document.getElementById('myDiv')
console.log(myDiv);

// c. Fetch Elements by Class:

let myClass = document.getElementsByClassName('myClass')
console.log(myClass);


// d. Fetch Elements by Tag Name:

let p = document.getElementsByTagName('p')
console.log(p);


// e. Fetch Elements Using Query Selector All:
let allSpan = document.querySelectorAll('span')
console.log(allSpan);


// f. Fetch Elements Using Query Selector:
let firstSpan = document.querySelector('span')
console.log(firstSpan);

let elementContent = firstSpan.textContent
console.log(elementContent);




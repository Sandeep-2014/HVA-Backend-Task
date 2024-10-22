// a. Define the Array of People:

let people = [{name: "Sandeep Kumar", age: 21}, {name: "Deepak", age: 21}, {name: "Shikhar", age: 21}, {name: "Vishal Rathore", age: 21}, {name: "Ravi", age: 21}, {name: "Hululu", age: 19}]


// b.  Define the calculateAverageAge Function Using forEach:

// Define a function called calculateAverageAge that takes one parameter: people (the array of person objects).
// Inside the function, initialize a variable to hold the sum of all ages.
// Use the forEach method to iterate over the people array and accumulate the sum of their ages.
// Calculate the average age by dividing the total sum by the number of people in the array.
// Return the average age.


function calculateAverageAge(people){
    sum = 0
    people.forEach(function(element){
        sum += element.age
    });

    ageAverage = sum/people.length;
    return ageAverage
}


// c. Call the calculateAverageAge Function:

// Call the calculateAverageAge function with the people array as an argument.
// Log the result to the console.


console.log(calculateAverageAge(people));




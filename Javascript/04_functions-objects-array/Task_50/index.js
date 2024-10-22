// Shopping Cart

// a. Define the Array of Cart Items:

// Define an array called cart.
// Populate the array with several objects, each representing an item in the shopping cart with properties such as name, price, and quantity.

let cart = [
    {name: "Wireless Mouse", price: 1999, quantity: 2},
    {name: "Bluetooth Headphones", price: 3750, quantity: 2},
    {name: "USB-C Charging Cable", price: 999,  quantity: 3},
    {name: "Running Shoes", price: 5499, quantity: 3},
    {name: "Fitness Tracker", price: 2999, quantity: 2},
    {name: "Yoga Mat", price: 1599, quantity: 2},
    {name: "Portable Phone Charger", price: 1999, quantity: 4}
];
  

// b. Define the calculateTotalPrice Function Using forEach:

// Define a function called calculateTotalPrice that takes one parameter: cart (the array of item objects).
// Inside the function, initialize a variable to hold the total price.
// Use the forEach method to iterate over the cart array.
// For each item, calculate the total price by multiplying the item's price and quantity, and add it to the total price variable.
// Return the total price.

function calculateTotalPrice(cart){
    totalPrice = 0;
    cart.forEach(function(element){
        totalItemPrice = element.price*element.quantity
        totalPrice += totalItemPrice
    })
    return totalPrice
}

// c. Call the calculateTotalPrice Function:

// Call the calculateTotalPrice function with the cart array as an argument.
// Log the result to the console.

console.log(calculateTotalPrice(cart));

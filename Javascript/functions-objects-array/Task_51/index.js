// Manipulating Product Data


// a. Define the Array of Products:

// Define a variable named products.
// Assign it an array containing several objects, each representing a product with properties such as id, name, price, and category.

const Products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 25000, category: "Electronics" },
    { id: 3, name: "Smartwatch", price: 8000, category: "Wearables" },
    { id: 4, name: "Banana", price: 5, category: "Food" },
    { id: 5, name: "Bread", price: 10, category: "Food" },
    { id: 6, name: "chips", price: 10, category: "Food" },
    { id: 7, name: "Jacket", price: 2500, category: "Clothing" },
    { id: 8, name: "Shoes", price: 3000, category: "Clothing" }
];


// b. Define the displayProducts Function:

// Create a new function called displayProducts that takes an array as an argument.
// Inside the function, use the forEach method to iterate over the array.
// Log each product in the format: ProductName - $Price (e.g., "Banana - $1.99").

function displayProducts(array){
    array.forEach(function(element){
        // console.log(`${element.name} - $${element.price}`);
    })
}

// displayProducts(Products)


// c. Calculate and Display Products with Tax:

// Assume a tax rate of 10%. Use the map method to create a new array called productsWithTax that includes each product's id, name, category, and a new priceWithTax which is th e original price plus the tax.
// Call the displayProducts function to display the productsWithTax array.

let productsWithTax = Products.map(function(element){
    priceWithTax = (element.price * 10)/100
    // element.price = element.price + priceWithTax
    // return element
    return {
        id: element.id,
        name: element.name,
        price: element.price,
        category: element.category
    }
})

// console.log(productsWithTax);
// displayProducts(Products)


// d. Filter and Display Food Products:

// Use the filter method to create a new array called foodProducts that contains only the products from the category "Food".
// Call the displayProducts function to display the foodProducts array.


let foodProducts = Products.filter(function(element){
    if( element.category === "Food"){
        return element
    } 
})

// console.log(foodProducts);



// e. Find Affordable Products:

// Use the filter method to find products with a price under $10. Store the filtered results in a variable called affordableProducts.
// Use the map method on affordableProducts to return a string for each product that includes the name and price (e.g., "Banana - $1.99"). Store these strings in an array called affordableProductsStrings.
// Log the affordableProductsStrings array to the console.


let affordableProducts = Products.filter(function(element){
    if(element.price <= 10){
        return element
    }
})

// console.log(affordableProducts);

let affordableProductsStrings = affordableProducts.map(function(element){
    return `${element.name} - $${element.price}`
})

// console.log(affordableProductsStrings);



// e. Calculate Total Price:

// Initialize a variable totalPrice to 0.
// Sum up the prices of all products and update totalPrice.
// Log totalPrice after the loop.

let totalPrice = 0;

// for(let i of Products){
//     totalPrice += i.price
// }


Products.forEach(function(element){
    totalPrice += element["price"]
})

// let totl = Products.map(function(element){
//     totalPrice += element["price"]
//     console.log(totalPrice);
// })

// let total = Products.filter(function(element){
//     totalPrice += element["price"]
//     console.log(totalPrice);
// })

console.log(totalPrice);








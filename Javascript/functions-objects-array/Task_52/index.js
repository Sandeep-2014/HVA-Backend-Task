// a. Define the Array of Inventory Items:

const inventory = [{ id: 1, name: "Laptop", price: 50000, quantity: 10, category: "Electronics", description: "15-inch laptop with 8GB RAM and 256GB SSD" }, { id: 2, name: "Smartphone", price: 20000, quantity: 25, category: "Electronics", description: "5.5-inch display, 64GB storage, 12MP camera" }, { id: 3, name: "Headphones", price: 3000, quantity: 50, category: "Accessories", description: "Wireless headphones with noise cancellation" }, { id: 4, name: "Backpack", price: 1500, quantity: 20, category: "Fashion", description: "Water-resistant backpack with multiple compartments" }, { id: 5, name: "Desk Chair", price: 7000, quantity: 15, category: "Furniture", description: "Ergonomic office chair with adjustable height" }];


// b. Create the Product Class:

class product {
    constructor(id, name, price, quantity, category, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
        this.description = description;
    }

}

// c. Define the displayProducts Function:
function displayProducts() {
    inventory.forEach(function (element) {
        console.log(`${element.name} - ${element.price} - ${element.quantity}`);
    })
}

// displayProducts()


// Define the addProduct Function:
function addProduct(id, name, price, quantity, category, description) {
    const newProduct = new product(id, name, price, quantity, category, description)
    inventory.push(newProduct)
}

addProduct(1, "laptop", 60000, 100, "Electronics", "A high-performance laptop for gaming and work")

// console.log(inventory);


// e.Define the updateProduct Function:
// in find method we can pass three parameter same map,filter like element, index, arr these three parameter we can enter
function updateProduct(id, quant) {
    let update = inventory.find(function (element) {
        return element.id === id
    });
    if(update){
        update.quantity = quant
    }else{
        console.log(`match not found`);
    }
}

// console.log(updateProduct(1, 60));
// updateProduct(1, 60)
// console.log(inventory);


function updateProductWithMap(id, quant){
    inventory.map(function(element){
        if(element.id === id){
            element.quantity = quant
        }
    });
}
// how can I update my original array that is opdating in updateObj

// console.log(updateProductWithMap(1, 50));
updateProductWithMap(1, 50)
console.log(inventory);



// f. Define the removeProduct Function:
function removeProduct(id){
    let removedObj = inventory.filter(function(element, index){
        if(element.id === id){
           return inventory.splice(index, 1)
        }
    })
    return removedObj
}
// it will remove that object that have id = 1 and return it.
// console.log(removeProduct(1));


// console.log(inventory);


// a. Define the Array of Inventory Items:
let inventory = [{id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 399, quantity: 12, genre: "Classic", publishedYear: 1925, publisher: "Scribner"}, {id: 2, title: "1984", author: "George Orwell", price: 299, quantity: 8, genre: "Dystopian", publishedYear: 1949, publisher: "Secker & Warburg"}, {id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 350, quantity: 5, genre: "Historical Fiction", publishedYear: 1960, publisher: "J.B. Lippincott & Co."}, {id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 450, quantity: 7, genre: "Literary Fiction", publishedYear: 1951, publisher: "Little, Brown and Company"}, {id: 5, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", price: 499, quantity: 10, genre: "Fantasy", publishedYear: 1997, publisher: "Bloomsbury"}];


// Create the Book Class:

class Book{
    constructor(id, title, author, price, quantity, genre, publishedYear, publisher){
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
        this.genre = genre;
        this.publishedYear = publishedYear;
        this.publisher = publisher;
    }
}

// c. Define the displayBooks Function:
function displayBooks(){
    inventory.forEach(function(elemnet){
        console.log(`${elemnet.title} - ${elemnet.author}(${elemnet.publishedYear})`);
    })
}

// displayBooks()

// d. Define the addBook Function:
function addBook(id, title, author, price, quantity, genre, publishedYear, publisher){
    const newBook = new Book(id, title, author, price, quantity, genre, publishedYear, publisher)
    inventory.push(newBook)
}
addBook(1, "The Hobbit", "J.R.R. Tolkien", 399, 15, "Fantasy", 1937, "George Allen & Unwin")
// addBook(5, "The Hobbit", "J.R.R. Tolkien", 399, 15, "Fantasy", 1937, "George Allen & Unwin")
// console.log(inventory);

// e. Define the updateBook Function:
function updateBook(id, quantity){
    let findId = inventory.find(function(elemnet){
        return elemnet.id === id
    });
    
    if(findId){
        findId.quantity = quantity
    }else{
        console.log(`Match not found`);
    }
}

// updateBook(1, 60)
// console.log(inventory);

function updateBookWithMap(id, quantity){
    inventory.map(function(element){
        if(element.id === id){
            element.quantity = quantity
        }
    })
}

// updateBook(2, 350);
// console.log(inventory);


// f. Define the removeBook Function:

function removeBook(id){
    let removeBook = inventory.filter(function(element, index){
        if(element.id === id){
            return inventory.splice(index, 1)
        }
    })
    return removeBook
}
console.log(removeBook(1));
console.log(inventory);

// console.log(removeBook(5));
// console.log(inventory);

// jo humne maualy array create kar rakha hai usme agar hum 2 same id vale object bna dete hai to aur usme filter ke through hum splice karte hai to vo sir pehli methching vali return kar deta hai
// lekin vahi jab me manually koi ek object add karta hai hu given array me aur tab me us id se math hone vale element ko karta hu to to manually vali object me se ek vo splice ho jati hai aur jo class se object add kiya hai vo bhi ho jati kyu




class Book{
    constructor(title, author, publisher, year, genre){
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this. year = year;
        this.genre = genre;
    }

    describe = function(){
        return `${this.title} - ${this.author}(${this.year})`
    }

    displayGenre = function(){
        return `Genre: ${this.genre}`
    }
}


// c. Create and Log book Objects:

let classicBook = new Book("Pride and Prejudice", "Jane Austen", "T. Egerton", 1813, "Classic")
// console.log(classicBook);

let sciFiBook = new Book("Dune", "Frank Herbert", "Chilton Books", 1965, "Science Fiction")
// console.log(sciFiBook);



// d. Call Methods on book Objects:

console.log(classicBook.describe());
console.log(classicBook.displayGenre());

console.log(sciFiBook.describe());
console.log(sciFiBook.displayGenre());






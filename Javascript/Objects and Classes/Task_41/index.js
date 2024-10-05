// a. Define and Populate the student Object:

let student = {
    name: "Sandeep Kumar",
    email: "sandeep23@navgurukul.org",
    age: 21
}

// console.log(student);

// b. Update the student Object:
student.age = 10
// or we can update it like this :-
// student["age"] = 10
// console.log(student);

// c. Add Method and Nested Object to student:

// -> This method :-
student["greet"] = function() {console.log(`Hello, ${this.name}`);},
// student.greet();

// -> This is Nested Object to students :-
student["address"] = {country: "India", city: "Delhi", pin_code: 110091}
// console.log(student.address.country);
student["address"]["pin_code"] = 110092 
// console.log(student.address);

// d. Create and Populate the friend Object 

let friend = {
    freind_name: "Deepak Rajput",
    email: "Dpk07@gmail.com",
    age: 21,
    address: {country: "India", city: "Dharamshala", pin_code: 176057},
    greet: function(){console.log(`Hello, ${this.freind_name}`)}
}

// friend.greet()
// console.log(friend);


// e. Create and Populate the topper Object:

let topper = {
    topper_name: "Shikhar Shukla",
    email: "shukla24@gmail.com",
    age: 21,
    address: {country: "India", city: "Kanpur", pin_code: 20801},
    greet: function(){console.log(`Congratulations, ${this.topper_name}`)}
}

// topper.greet()
// console.log(topper);


// f. Define and Use the Student Class:

class Student{
    constructor(name, email, age, country, city, pin_code){
        this.ful_name = name;
        this.UserEmail = email;
        this.UserAge = age;

        this.address = {
            UserCountry : country,
            UserCity : city,
            pin_code : pin_code
        }
    }

    // greet method :- 
    greet = function(){
        return (`Welcome ${this.ful_name}`);
    }

    // getFullAddress method :- 
    getFullAddress = function(){
        return `${this.address.UserCountry}, ${this.address.UserCity} - ${this.address.pin_code}`
    }
}


// Create and Log Student Objects:

let me = new Student("Sandeep Kumar", "sandeep@gmail.com", 21, "India", "Delhi", 110091)
let MyFreind = new Student("Deepak Rajput", "dpk07@gmail.com", 21, "India", "Himachal", 171003)
let AnotherStudent = new Student("Ravi", "ravi123@gmail.com", 21, "India", "Ghaziabad", 10000)

// console.log(me);
// console.log(MyFreind);
// console.log(AnotherStudent);



// Call the greet Method and getFullAddress Method on Student Objects:

console.log(me.greet());
console.log(MyFreind.greet());
console.log(AnotherStudent.greet());

console.log(me.getFullAddress());
console.log(MyFreind.getFullAddress());
console.log(AnotherStudent.getFullAddress());




















// we can access and modify the the obects first one is DOT Operator(.)
// console.log(student.name);
// and second one is Sqare Bracket Notation ([])
// console.log(student["name"]);

// Adding a new property using square brackets
// student["Year"] = 2024;

// console.log((student));











class Employee{
    constructor(name, email, age, department, position, salary){
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }

    greet = function(){
        return `Hello, I am ${this.name}, ${this.position}`
    }

    displaySalary = function(){
        return `Salary: $${this.salary}`
    }
}


// c. Create and Log employee Objects:

let newEmployee = new Employee("Shikhar Shukla", "shikhar@gmail.com", 21, "Backend Department", "Software Developer", 50000)
// console.log(newEmployee);

let manager = new Employee("Manav", "manav12@gamail.com", 28, "Backend Department", "Manager", 100000)
// console.log(manager);


// d. Call Methods on employee Objects:

console.log(newEmployee.greet());
console.log(newEmployee.displaySalary());

console.log(manager.greet());
console.log(manager.displaySalary());






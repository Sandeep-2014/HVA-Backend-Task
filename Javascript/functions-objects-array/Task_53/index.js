// a. Define the Array of Expenses:
const expenses = [{id: 1, name: 'Groceries', amount: 2500, date: '2024-10-01', category: 'Food', notes: 'Weekly groceries at the supermarket'}, {id: 2, name: 'Electricity Bill', amount: 1200, date: '2024-10-05', category: 'Utilities', notes: 'Monthly electricity bill'}, {id: 3, name: 'Internet Bill', amount: 800, date: '2024-10-08', category: 'Utilities', notes: 'Monthly internet subscription'}, {id: 4, name: 'Dinner at Restaurant', amount: 1500, date: '2024-10-10', category: 'Entertainment', notes: 'Dinner with friends'}, {id: 5, name: 'New Shoes', amount: 3000, date: '2024-10-15', category: 'Shopping', notes: 'Purchased new running shoes'}];


// b. Create the Expense Class:
class Expense{
    constructor(id, name, amount, date, category, notes){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.category = category;
        this.notes = notes;
    }
}

// b. Define the displayExpenses Function:
function displayExpenses(arr){
    arr.forEach(function(element){
        console.log(`${element.name} - $${element.amount}(${element.date})`);
    })
}


displayExpenses(expenses)


// c. Define the addExpense Function:
function addExpense(id, name, amount, date, category, notes){
    const newExpense = new Expense(id, name, amount, date, category, notes)
    expenses.push(newExpense)
}

addExpense(6, "Gym Mebership", 1800, "2024-10-20", "Fitness", "Monthly gym membership fee" );
// console.log(expenses);


// e. Define the updateExpense Function:
function updateExpense(id, updateAmount){
    let findId = expenses.find(function(element){
        return element.id === id
    });

    if(findId){
        findId.amount = updateAmount
    }else{
        console.log(`Match not found`);
    }
}

// updateExpense(1, 20000)
// console.log(expenses);


function updateExpenseWithMap(id, updateAmount){
    expenses.map(function(element){
        if(element.id === id){
            element.amount = updateAmount
        }
    })
}

// updateExpenseWithMap(1, 24000)
// console.log(expenses);


// f. Define the removeExpense Function:
function removeExpense(id){
    let removeElement = expenses.filter(function(element, index){
        if(element.id === id){
            return expenses.splice(index, 1)
        }
    })
    return removeElement
}

console.log(`removed object from expese array is :- `,removeExpense(3));

console.log(`this is the updated array of expenses:- `, expenses);









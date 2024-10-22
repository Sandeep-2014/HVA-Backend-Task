// a. Define the Array of Tasks:
let tasks = [{id: 1, description: "Complete JavaScript tutorial", dueDate: "2024-10-25", status: "in progress", priority: "high"}, {id: 2, description: "Submit project proposal", dueDate: "2024-10-28", status: "pending", priority: "medium"}, {id: 3, description: "Attend team meeting", dueDate: "2024-10-23", status: "completed", priority: "low"}, {id: 4, description: "Update portfolio website", dueDate: "2024-11-01", status: "pending", priority: "high"}, {id: 5, description: "Pay utility bills", dueDate: "2024-10-24", status: "in progress", priority: "medium"}];

// b. Create the Task Class:
class Task{
    constructor(id, description, dueDate, status, priority){
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.priority = priority;
    }
}

// c. Define the displayTasks Function:
function displayTasks(){
    tasks.forEach(function(element){
        console.log(`${element.description} - ${element.dueDate}(${element.status})`);
    })
}

// displayTasks()

// d. Define the addTask Function:
function addTask(id, description, dueDate, status, priority){
    let newTask = new Task(id, description, dueDate, status, priority)
    tasks.push(newTask)
}

addTask(6, "Buy groceries", "2024-10-26", "pending", "low")
// console.log(tasks);


// e. Define the updateTask Function:
function updateTask(id, status){
    let findTask = tasks.find(function(element){
        return element.id === id
    })

    if(findTask){
        findTask.status = status
    }else{
        console.log(`Match not found`);
    }
}

// updateTask(2, "completed")
// console.log(tasks);

function updateTaskWithMap(id, status){
    tasks.map(function(element){
        if(element.id === id){
            element.status = status
        }
    })
}

// updateTask(2, "completed")
// console.log(tasks);


// f. Define the removeTask Function:


function removeTask(id){
    let removeTask = tasks.filter(function(element, index){
        if(element.id === id){
            return tasks.splice(index, 1)
        }
    })
    return removeTask
}
// console.log(removeTask(6));
// console.log(tasks);



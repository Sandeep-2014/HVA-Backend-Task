// Path Module
// Parse a file path: Write a script that parses the path of 'message.txt' (from 1) and logs the directory, base, extension, and name. 
// Join paths: Write a script that joins the current directory with public and index.html to form a complete path. Log this path to the console.


const path = require('path')
const filePath = '/home/ravi/Desktop/HVA-Backend-Task/Back-end Task/Task_70/message.txt'

let directory = path.dirname(filePath)
// output is :- /home/ravi/Desktop/HVA-Backend-Task/Back-end Task/Task_70/message.txt
console.log(directory);

let base = path.basename(filePath)
// Output is :- message.txt
console.log(base);

let extension = path.extname(filePath)
// output is :- .txt
console.log(extension);

let fileName = path.basename(filePath, extension)
// Output is :- message
console.log(fileName);


// Task 2

let currentDir = __dirname
// console.log(currentDir);
let joinPath = path.join(currentDir, 'public', 'index.html')
console.log(joinPath);
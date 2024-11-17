// File System

// a. Create a file: Write a script that creates a new file named 'message.txt' and writes some text into it.
// b. Read from file: Write a script that reads the content of 'message.txt' and logs it to the console.
// c. Append to a file: Write a script that appends some text to 'message.txt'.
// d. Delete a file: Write a script that deletes 'message.txt'

const fs = require('fs')    

// a task :-

// we can create a new file by using writeFileSyn with fs module it will create a file with the name that we will give and text we are giving to write in this file will be written when we run the file.
// this will behave like synchronously 
// fs.writeFileSync('./message.txt', 'this is synchronously bahaviour file')

// there is one more way to create file with some text of file
// this will behave like asynchronously in this we have to pass callback function in as third parameter for error handling.
// using this for creating file we can also handle the error if we get while writing the file.
// fs.writeFile('./message1.txt', 'this is asynchronously bahaviour file', (err) => {
//     if(err){
//         console.error('Error writing to file', err)
//     }else{
//         console.log('File written successfully');
//     }
// })


// b task :- 

// Read from file: Write a script that reads the content of 'message.txt' and logs it to the console.
// for reading the file there is also two way to read the file first synchronously and asunchronously.
// this below example is synchrounously behaviour. if we are reading the file through this so we will have to store it in varioble then we can see the output 
// const result = fs.readFileSync('./message.txt', 'utf-8')
// console.log(result);



fs.readFile('./message1.txt', 'utf-8', (err, res) => {
    if(err){
        // console.error('Error: ', err);
    }else{
        // console.log(res);
    }
})



// fs.appendFileSync('./message.txt', `\nI am apending the text through "appendFileSync"`)

// fs.appendFile('./message1.txt','\nI am apending the text through "appendFile"', (err) => {
//     if(err){
//         console.error('Error got while appending text', err)
//     }else{
//         console.log('text append successfully');   
//     }
// })

// fs.unlink('message1.txt', (err) => {
//     if(err){
//         console.error('Error got while deleting the file', err)
//     }else{
//         console.log('File deleted successfully');
//     }
// })

// fs.unlinkSync('message.txt')
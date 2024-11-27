// Combined Task
// Create a public directory with an index.html  file. Update the server to serve this file when the root URL is accessed. 


// console.log(require);
// console.log('this is line break');
// console.log(exports);
// console.log('this is line break');
// console.log(module);
// console.log('this is line break');
// console.log(__filename);
// console.log('this is line break');
// console.log(__dirname);


const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    if (req.url == '/'){
        fs.readFile('./index.html', (err, data) => {
            if(err){
                res.end(err)
            }else{
                res.end(data)
            }
        })
    }
})

myServer.listen(8000, () => console.log('Server Started'))


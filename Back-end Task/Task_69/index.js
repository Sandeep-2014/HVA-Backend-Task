// HTTP Server
// Create a Basic Server: Create an HTTP server. The server should respond with some text when accessed at the root URL (/).
// Handle Different Routes: Update the server to handle two additional routes: '/about' and '/contact'. These routes should respond with some text.
// Path Module


const http = require('http')

const myServer = http.createServer( (req, res) => {
    console.log(req.url);
    
    switch(req.url){
        case '/' :
            res.end('This is Home page')
            break;
        case '/about' :
            res.end('This is about Page')
            break;
        case '/contact' :
            res.end('This is contact page')
            break;
        default:
            res.end('404 Not Found')
    }

} )

myServer.listen(8001, () => console.log('Server Started'))
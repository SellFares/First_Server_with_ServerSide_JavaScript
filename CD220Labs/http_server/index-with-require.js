// Import the HTTP module from Node.js.
const http = require('http');

// Import the 'today' module using const today = require('./today');. This assumes that there is a module named ‘today’ exporting a function getDate.
const today = require('./today');

// Define the request listener function that handles incoming HTTP requests. In this case, the function sets the status code to 200 (OK) and sends the response "Hello, World! The date today is {current date}" using the getDate function from the 'today' module.
const requestListener = function (req, res) {
  res.writeHead(200);   // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module
    // old method
    // res.end(`Hello, World! The date today is ${today.getDate()}`);
    // new method
    const dateVal = today.getDate();

    // Determine the appropriate greeting based on the current time
    let greeting = "It is still not morning";
    if ( dateVal.getHours() > 6 && dateVal.getHours() < 12 ){
        greeting = "Good morning!";
    } else if (dateVal.getHours() >= 12 && dateVal.getHours() < 18) {
        greeting = "Good afternoon!";
    } else if (dateVal.getHours() >= 18 && dateVal.getHours() < 21) {
        greeting = "Good evening!";
    } else if (dateVal.getHours() >= 21 && dateVal.getHours() < 24) {
        greeting = "Good night!";
    }

    // Send the response with the appropriate greeting
    res.end(`Hello,${greeting}`);
  
}

// Define the port number as 8080 using const port = 8080;.
const port = 8080;

// Create an HTTP server using http.createServer(requestListener);, where requestListener is the defined request listener function.
const server = http.createServer(requestListener);

// Start the server and listen on the specified port using server.listen(port);. Also, log a message indicating that the server is listening on the specified port.
console.log('server listening on port: ' + port);
server.listen(port);
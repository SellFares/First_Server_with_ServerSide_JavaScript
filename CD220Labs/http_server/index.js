const http = require('http');
//  Import the HTTP module from Node.js.

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}
// Define a request listener function that handles incoming HTTP requests. In this case, the function sets the status code to 200 (OK) and sends the response "Hello, World!".

const port = 8080;
// Define the port number as 8080 using const port = 8080;

const server = http.createServer(requestListener);
// Create an HTTP server using http.createServer(requestListener);, where requestListener is the defined request listener function.
console.log('server listening on port: ' + port);
server.listen(8080);
// Start the server and listen on the specified port using server.listen(port);. Also, log a message indicating that the server is listening on the specified port.
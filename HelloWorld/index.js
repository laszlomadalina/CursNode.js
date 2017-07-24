"use strict";

//required module
var mHttp = require("http");

// variables
var iPort = 8081;

//create Http Server
var oServer = mHttp.createServer(function(req, res){
console.log("Request received");

// Content Type: text/plain
res.writeHead(200, {'Content-Type': 'text/plain'});
// Send the response body as "Hello World"
res.end('Hello World\n');

console.log("Response sent!");
});
oServer.listen(iPort);

//Console will print the server info
console.log('Server running at http://127.0.0.1:' + iPort + '/'); 
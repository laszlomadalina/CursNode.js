var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
})

app.post('/', function (req, res) {
  res.send('No POST method available!');
})

app.get('/helloworld', function (req, res) {
  res.send('Hello World !!! 2');
})
 
app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/'); 
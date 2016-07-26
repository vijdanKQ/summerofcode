var port = 8885;
var express = require('express');
var app = require('express')();
var bodyParser = require('body-parser');

var DATA = [];
app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
 res.send('Hello World! ');
});

app.get('/getTodo', function (req, res){
   res.send(DATA);
});

app.post('/setTodo', function (req,res){
   var userJson = req.body;
   DATA = userJson;
   console.log(userJson);
});

app.listen(port, function () {
 console.log('Example app listening on port ' + port);
});
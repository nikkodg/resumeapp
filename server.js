var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db mongojs('resumeapp', ['resumeapp']);

app.use(express.static(__dirname + "/public"));

app.get('/resumeapp', function (req, res){
    console.log("I recieved a Get Request");
    

db.resumeapp.find(function(err, docs){
    console.log(docs);
    res.json(docs);
})
});

app.listen(8080);
console.log("Server running on port 8080");
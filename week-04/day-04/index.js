'use strict';

var express = require("express");
var bodyParser = require('body-parser');
var db = require('./database');

var app = express();
var jsonParser = bodyParser.json();

//app.use(express.static(path.join(__dirname, 'public')));
app.use("/", express.static("public"));

app.get("/", function(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/hello", function(req, res){
    db.createDB();
    res.send("hello world");
});

app.get("/posts", function(req, res){
    db.showData(function(data){
        res.send({"posts":data});
    });  
});

app.put("/posts/:id/upvote", function(req, res){
    let id = req.params.id;
    db.upVote(id, function(data){
        res.send(data);
    });
});

app.put("/posts/:id/downvote", function(req, res){
    let id = req.params.id;
    
    db.downVote(id, function(data){
        res.send(data);
    });
});

app.delete("/posts/:id", function(req, res){
    let id = req.params.id;
    
    db.deletePost(id, function(data){
        res.send(data);
    });
});

app.put("/posts/:id", jsonParser, function(req, res){
    let id = req.params.id;

    var body = {
        "title" : req.body.title,
        "href" : req.body.href
    };
    
    db.modifyPost(id, body, function(data){
        res.send(data);
    });
});

app.post("/posts", jsonParser, function(req, res){
    var body = {
        "title" : req.body.title,
        "href" : req.body.href
    };
    console.log(req.headers);
    db.createPost(body, req.headers.username, function(data){
        res.send(data);
    });
});
app.listen(8080);
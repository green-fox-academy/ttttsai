'use strict';

var express = require("express");

var bodyParser = require('body-parser')
var app = express();

// create application/json parser
var jsonParser = bodyParser.json()

app.use("/assets", express.static("assets"));

app.get("/", function(req, res){
     res.sendFile(__dirname + "/index.html");
});

app.get("/doubling", function(req, res){
    if(req.query.input){
        res.send({
            "received":parseInt(req.query.input),
            "result":req.query.input * 2
        });
    }else{
        res.send({
            "error": "Please provide an input!"
        });
    }

});

app.get("/greeter", function(req, res){
    if(req.query.name && req.query.title){
        res.send({
            "welcome_message": "Oh, hi there "+ req.query.name + ", my dear "+ req.query.title + "!"
        });
    } else if(!req.query.name){
        res.send({
            "error": "Please provide a name!"
        });
    } else if(!req.query.title){
        res.send({
            "error": "Please provide a title!"
        });
    } 
});

app.get("/appenda/:str", function(req, res){
    if(req.params.str){
        res.send({
            "appended": req.params.str+"a"
        });
    }
});

app.post("/dountil/:what", jsonParser, function(req, res){
    let what = req.params.what;
    let until = parseInt(req.body.until);
    if(what === "sum"){
        let sum = 0;
        for(var i = 1; i <= until; i++){
            sum += i;
        }
        res.send({
            "result": sum
        });
    } else if(what === "factor"){
        let factor = 1;
        for(var i = 1; i <= until; i++){
            factor *= i;
        }
        res.send({
            "result": factor
        });
    } else if(until === undefined){
        res.send({
            "error": "Please provide a number!"
        });
    }

});

app.post("/arrays", jsonParser, function(req, res){
    let what = req.body.what;
    let numbers = req.body.numbers;
    if(what === "sum"){
        let sum = 0;
        for(var i = 0; i < numbers.length; i++){
            sum += numbers[i];
        }
        res.send({
            "result": sum
        });
    } else if(what === "multiply"){
        let factor = 1;
        for(var i = 0; i < numbers.length; i++){
            factor *= numbers[i];
        }
        res.send({
            "result": factor
        });
    } else if(what === "double"){
        let arr = [];
        for(var i = 0; i < numbers.length; i++){
            arr.push(numbers[i] * 2);
        }
        res.send({
            "result": arr
        });
    } else {
        res.send({
            "error": "Please provide what to do with the numbers!"
        });
    }

});

app.post("/sith", jsonParser, function(req, res){
    let text = req.body.text;  
    if(text && text.length > 0){
        let textsArr = text.split(" ");
        let sith_text = "";

        function returnCaptialLoc(str){
            let loc = -1;
            for(let i = 0; i < str.length; i++){
                if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
                    loc = i;
                    break;
                }
            }
            return loc;
        }
        function capitalizeLoc(str, loc){
            return str.substr(0,loc) + str[loc].toUpperCase() + str.substr(loc+1);
        }
        function notCapitalizeLoc(str, loc){
            return str.substr(0,loc) + str[loc].toLowerCase() + str.substr(loc+1);
        }

        for(let i = 0; i < textsArr.length; i += 2){
            if(i+1 !== textsArr.length){
                //end of position
                if(textsArr[i].indexOf(".") > -1){
                    sith_text += textsArr[i] + " Arrgh. ";// + textsArr[i+1] + " ";
                    i--;
                }else if (textsArr[i+1].indexOf(".") > -1){
                    sith_text += textsArr[i] + " " + textsArr[i+1] + " Arrgh. ";
                }else {
                    let firstLoc = returnCaptialLoc(textsArr[i]);
                    let secLoc = returnCaptialLoc(textsArr[i+1]);
                    if(firstLoc > -1){
                        textsArr[i+1] = capitalizeLoc(textsArr[i+1], firstLoc);
                        textsArr[i] = notCapitalizeLoc(textsArr[i], firstLoc);
                        
                    }else if(secLoc > -1){
                        textsArr[i] = capitalizeLoc(textsArr[i], secLoc);
                        textsArr[i+1] = notCapitalizeLoc(textsArr[i+1], secLoc);
                    }
                    sith_text += textsArr[i+1] + " " + textsArr[i] + " ";
                }
                
            }else{
                
                sith_text += textsArr[i] + " Arrgh. ";
            }
        }
        res.send({
            "sith_text": sith_text
        });

    }else{
        res.send({
            "error": "Feed me some text you have to, padawan young you are. Hmmm."
        });
    }

});

app.listen(8080);
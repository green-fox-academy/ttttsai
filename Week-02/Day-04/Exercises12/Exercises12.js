'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// The frist columns should be automatically as wide as the longest key

var ingredients = [
	{ 'vodka': 1, 'needs_cooling': true },
	{ 'coffee_liqueur': 0, 'needs_cooling': true },
	{ 'fresh_cream': 1, 'needs_cooling': true },
	{ 'captain_morgan_rum': 2, 'needs_cooling': true },
	{ 'mint_leaves': 0, 'needs_cooling': false },
	{ 'sugar': 100, 'needs_cooling': false },
	{ 'lime juice': 10, 'needs_cooling': true },
	{ 'soda': 100, 'needs_cooling': true }
];

var COLUMN1NAME = "Ingredient";
var COLUMN2NAME = "Needs cooling";
var COLUMN3NAME = "In stock";

function compareLength(str1, str2){
    return str1.length < str2.length;
}

function printSpecialLine(firstColLength){
    var line = "+-" + "-".repeat(firstColLength) + "-+-" + "-".repeat(COLUMN2NAME.length) + "-+-" + "-".repeat(COLUMN3NAME.length) + "-+";
    console.log(line);
}

function printEachLine(col1, col2, col3, col1Len){
    var line = "| " + col1 + " ".repeat(col1Len-col1.length) + " | ";
    if(typeof col2 === "boolean"){
        line += ((col2 ? "Yes" : "No ") +  " ".repeat(COLUMN2NAME.length - 3));
    } else {
        line += COLUMN2NAME;
    }
    line += " | ";
    if(typeof col3 === "string"){
        line += COLUMN3NAME;
    } else {
        if(col3 === 0){
            line += "-" + " ".repeat(COLUMN3NAME.length - 1);
        }else {
            line += col3 + " ".repeat(COLUMN3NAME.length - (col3+"").length);
        }      
    }
    line += " |";
    
    console.log(line);
}

function printTable(arr){
    //to find the longest key first;
    var allKeys = [];
    arr.forEach(function(value, index, element){
        var keys = Object.keys(value);
        //keys.filter(isNeedCooling);
        allKeys.push(keys[0]);
    });
    allKeys.sort(compareLength);
    
    var longestKeyLen = allKeys[0].length;
    //cal the total length
    var totalLen = 2 + longestKeyLen + 3 + COLUMN2NAME.length + 3 + COLUMN3NAME.length + 2;
    //Then begin to print table :)
    
    //1.print title
    printSpecialLine(longestKeyLen);
    printEachLine(COLUMN1NAME, COLUMN2NAME, COLUMN3NAME, longestKeyLen);
    printSpecialLine(longestKeyLen);

    //2.print body
    for(var i = 0; i < arr.length; i++){
        var keysInEach = Object.keys(arr[i]);
        printEachLine(keysInEach[0], arr[i][keysInEach[1]], arr[i][keysInEach[0]], longestKeyLen);
    }

    //3.print the end
    printSpecialLine(longestKeyLen);   
}

printTable(ingredients);
'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk";

todoText = "My todo:\n" + todoText;
todoText += "\n - Download games";
todoText += "\n     - Diablo";

console.log(todoText);
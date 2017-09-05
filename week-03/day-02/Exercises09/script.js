'use strict';

var btnClicked = 0;
var timePass5Sec = false;

function checkState() {
    var p = document.querySelector("p");
    if(btnClicked >= 3 && timePass5Sec){
        p.innerText = "5 seconds elapsed and clicked 3 times";
    }
}
window.onload = function() {
    var btn = document.querySelector("button");
    var p = document.querySelector("p");

    setTimeout(function(){
        timePass5Sec = true;
        checkState();
    }, 5000);
    

    btn.addEventListener("click", function(){
        btnClicked++;
        checkState();
    });

}
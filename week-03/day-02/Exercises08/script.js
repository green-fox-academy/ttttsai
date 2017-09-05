'use strict';

window.onload = function(){
    var btn = document.querySelector("button");
    var p = document.querySelector("p");

    btn.addEventListener("click", function(){
        setTimeout(function(){
            p.innerText = "2 seconds elapsed";
        }, 2000);
    });
}
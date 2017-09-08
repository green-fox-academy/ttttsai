'use strict';

// let localStorage = window.localStorage;

window.onload = function(){
    renderHeader();
    let btn = document.querySelector(".submitBtn");
    btn.addEventListener("click", function(){
        let users = LocalStorage.getItem("users");
        let inputUserName = document.querySelector("input").value;
        if(users.indexOf(inputUserName) > -1){
            LocalStorage.setItem("currentUser", inputUserName);
            window.location.replace("./index.html");
        } else {
            alert("Not a valid username!");
        }
    });
}
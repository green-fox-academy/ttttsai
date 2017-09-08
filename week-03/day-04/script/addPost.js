'use strict';

const DOMAIN = "https://time-radish.glitch.me";
let xhr = new XMLHttpRequest();
let urlInput;
let titleInput;
let optionsInput;
let submitBtn;

function submitData() {
    if(titleInput.value.length === 0){
        alert("PLEASE INPUT TITLE");
    } else {
        xhr.open("POST", DOMAIN + "/posts");
        xhr.setRequestHeader("Accept","application/json");
        xhr.setRequestHeader("Content-Type","application/json");
        if(LocalStorage.currentUser.length > 0 && !optionsInput.checked){
            xhr.setRequestHeader("Username", LocalStorage.currentUser);
        }
        let postData = {
            "title": titleInput.value,
            "href": urlInput.value
        };

        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
              window.location.replace("./index.html");
            }
        };

        xhr.send(JSON.stringify(postData));

    }
}

window.onload = function() {
    renderHeader();

    urlInput = document.querySelectorAll("input")[0];
    titleInput = document.querySelector("textarea");
    optionsInput = document.querySelectorAll("input")[1];
    submitBtn = document.querySelector(".submitBtn");
    

    submitBtn.addEventListener("click", function(){
        submitData();
    });

}
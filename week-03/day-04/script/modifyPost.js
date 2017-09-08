'use strict';

const HOST_NAME = "https://time-radish.glitch.me";
const SessionStorage = window.sessionStorage;
let inputElement;
let textareaElement;
let headerIDElement;
let submitBtn;

function updatePost(){
    let postData = {
        "title": textareaElement.value,
        "href": inputElement.value
    };
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", HOST_NAME + "/posts/"+SessionStorage.getItem("id"));

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            window.location.replace("./index.html");
        }
    }
    xhr.send(JSON.stringify(postData));

}

window.onload = function(){
    renderHeader();
    
    inputElement = document.querySelector("input");
    textareaElement = document.querySelector("textarea");
    headerIDElement = document.querySelector("a");
    submitBtn = document.querySelector(".submitBtn");

    inputElement.value = SessionStorage.getItem("href");
    textareaElement.value = SessionStorage.getItem("title");
    headerIDElement.innerText += SessionStorage.getItem("id");

    submitBtn.addEventListener("click", function(){
        updatePost();
    });
}
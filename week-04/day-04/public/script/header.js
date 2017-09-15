'use strict';

let header;
let LocalStorage = window.localStorage;
localStorage.setItem("users", "Jessie admin");

function renderHeader(){
    header = document.querySelector("header");

    let mainPageBtn = document.createElement("button");
    let createPageBtn = document.createElement("button");
    let loginBtn = document.createElement("button");
    
    mainPageBtn.innerText = "MAIN";
    mainPageBtn.addEventListener("click", function(){
        window.location.replace("./index.html");
    });
    createPageBtn.innerText = "CREATE NEW POST";
    createPageBtn.addEventListener("click", function(){
        window.location.replace("./addPost.html");
    });
    if(LocalStorage.getItem("currentUser") && LocalStorage.getItem("currentUser").length !== 0){
        loginBtn.innerText = "LOGGED IN AS <" + LocalStorage.getItem("currentUser") + ">";
    }else {
        loginBtn.innerText = "LOGIN »";
    }
    
    loginBtn.style.float = "right";
    loginBtn.addEventListener("click", function(event){
        let targetText = event.target.innerText;
        if(targetText.indexOf("LOGIN »") > -1){
            window.location.replace("./login.html");
        }else{
            localStorage.setItem("currentUser", "");
            window.location.reload();
        }
        
    });

    header.appendChild(mainPageBtn);
    header.appendChild(createPageBtn);
    header.appendChild(loginBtn);

}

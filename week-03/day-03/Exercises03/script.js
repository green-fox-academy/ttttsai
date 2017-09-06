'use strict';

const DOMAIN = "https://wakeful-vision.glitch.me";
let xhr = new XMLHttpRequest();

function getData(){
  let xhr = new XMLHttpRequest();
  let div = document.querySelector("div");
  div.innerHTML = "";
  xhr.open("GET", DOMAIN + "/api/messages");
  xhr.onreadystatechange = function (){
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let data = JSON.parse(xhr.response);
      console.log(data);
      for(let i = 0; i < data.messages.length; i++){
        let p = document.createElement("p");
        p.innerText = "name is: " + data.messages[i].name
                            + " message is: " +  data.messages[i].message;
        div.appendChild(p);
        
      }
    }

  }
  xhr.send(null);
}

function postData(){
  let postUserName = document.querySelectorAll("input")[0].value;
  let postMessage = document.querySelectorAll("input")[1].value;
  let postData = {
    "name": postUserName,
    "message": postMessage
  };  
  let xhr = new XMLHttpRequest();
  xhr.open("POST", DOMAIN + "/api/messages");
  xhr.setRequestHeader("content-type","application/json");
  
  xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
      console.log(xhr.status);
      getData();
    }
  }
  xhr.send(JSON.stringify(postData));

}



window.onload = function() {
  getData();
}
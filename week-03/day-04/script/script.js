'use strict';

const HOST_NAME = "https://time-radish.glitch.me";
const SessionStorage = window.sessionStorage;

function createXMLHttpRequest(method, url){
    let xhr = new XMLHttpRequest();
    xhr.open(method, HOST_NAME + url);
    return xhr;
}

function modifyPost(event, value){
    SessionStorage.setItem("href", value.href);
    SessionStorage.setItem("id", value.id);
    SessionStorage.setItem("title", value.title);

    window.location.replace("./modifyPost.html");
}

function removePost(event){
    let target = event.target;
    let id = target.getAttribute("data-id");
    let xhr = createXMLHttpRequest("DELETE", "/posts/" + id);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            getData();
        }
    }

    xhr.send(null);

}

function upVoteSuccess(target, returnData){
    target.src = "./upvoted.png";
    let p = target.parentElement.getElementsByTagName("p")[0];
    let downImg = target.parentElement.getElementsByTagName("img")[1];
    downImg.src = "./downvote.png";
    p.innerText = returnData.score;
}
function downVoteSuccess(target, returnData){
    target.src = "./downvoted.png";
    let p = target.parentElement.getElementsByTagName("p")[0];
    let upImg = target.parentElement.getElementsByTagName("img")[0];
    upImg.src = "./upvote.png";
    p.innerText = returnData.score;
}

function upVote(event){
    let target = event.target;
    let id = target.getAttribute("data-id");
    let xhr = createXMLHttpRequest("PUT", "/posts/"+ id + "/upvote");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            console.log(JSON.parse(xhr.response));
            upVoteSuccess(target, JSON.parse(xhr.response));
        }
    };

    xhr.send(null);
}

function downVote(event){
    let target = event.target;
    let id = target.getAttribute("data-id");
    let xhr = createXMLHttpRequest("PUT", "/posts/"+ id + "/downvote");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            console.log(JSON.parse(xhr.response));
            downVoteSuccess(target, JSON.parse(xhr.response));
        }
    };

    xhr.send(null);
}

function createEachMessageScoreDive(value){
    let div = document.createElement("div");
    
    let imgUP = document.createElement("img");
    imgUP.src = "./upvote.png";
    imgUP.setAttribute("data-id", value.id);
    imgUP.addEventListener("click", function(event){
        upVote(event);
    });
    div.appendChild(imgUP);

    let p = document.createElement("p");
    p.innerText = value.score;
    div.appendChild(p);

    let imgDOWN= document.createElement("img");
    imgDOWN.src = "./downvote.png";
    imgDOWN.setAttribute("data-id", value.id);
    imgDOWN.addEventListener("click", function(event){
        downVote(event);
    });
    div.appendChild(imgDOWN);

    return div;
}

function timeSince(date) {
    
    var seconds = Math.floor((new Date() - date) / 1000);
    
    var interval = Math.floor(seconds / 31536000);
    
      if (interval > 1) {
        return interval + " years";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        return interval + " months";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        return interval + " days";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        return interval + " hours";
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        return interval + " minutes";
      }
      return Math.floor(seconds) + " seconds";
}

function createEachMessageContentDive(value){
    let div = document.createElement("div");

    let a = document.createElement("a");
    a.href = value.href;
    a.innerText = value.title;
    div.appendChild(a);

    let p = document.createElement("p");
    let date = new Date(value.timestamp);
    let owner = "anonymous" ;
    if(value.owner !== undefined && value.owner !== null){
        owner = value.owner;
    }
    p.innerText = "Submitted " + timeSince(date) + " ago by " + owner;
    div.appendChild(p);

    let btnModify = document.createElement("button");
    let btnRemove = document.createElement("button");

    btnModify.innerText = "modify";
    btnModify.addEventListener("click",function(event){
        modifyPost(event, this);
    }.bind(value));
    btnRemove.innerText = "remove";
    btnRemove.setAttribute("data-id", value.id);
    btnRemove.addEventListener("click", function(event){
        removePost(event);
    });

    div.appendChild(btnModify);
    div.appendChild(btnRemove);
    
    return div;
}

function updateData2Page(data){
    let list = document.querySelector("ul");
    list.innerHTML = "";
    for(let i = 0; i < data.length; i++){
        let li = document.createElement("li");

        let messageIDDiv = document.createElement("div");
        messageIDDiv.innerText = i+1;
        messageIDDiv.classList.add("messageID");
        li.appendChild(messageIDDiv);

        let messageScoreDiv = createEachMessageScoreDive(data[i]);
        messageScoreDiv.classList.add("messageScore");
        li.appendChild(messageScoreDiv);

        let messageContentDiv = createEachMessageContentDive(data[i]);
        messageContentDiv.classList.add("message");
        li.appendChild(messageContentDiv);

        list.appendChild(li);
    }
}

function getData(){
    let xhr = createXMLHttpRequest("GET", "/posts");
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            console.log(JSON.parse(xhr.response));
            updateData2Page(JSON.parse(xhr.response).posts.reverse());
        }
    }
    xhr.send(null);
}

window.onload = function(){
    renderHeader();
    getData();
    setInterval("getData()", 10000);
}
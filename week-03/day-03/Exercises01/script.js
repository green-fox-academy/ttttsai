'use strict';

const API_KEY = "dec8af6d403b4ca387e024c625cf3b8f";
const URL = "http://api.giphy.com/v1/gifs/";
let data;

function searchFromAPI() {
  let input = document.querySelector("input").value;
  let xhr = new XMLHttpRequest();
  let url = URL + "search?q=" + input + "&api_key=" + API_KEY + "&limit=16";
  let thumbs = document.querySelector(".thumbs");
  thumbs.innerHTML = "";
  xhr.open("GET", url);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
      data = JSON.parse(xhr.response);
      console.log(data);
      updateData2Website();
    }
  };
  xhr.send(null);
}

function hover(imgData){
  return function(){
    
  };
}

function createFunction(imgData){
  return function (){
    let showArea = document.querySelector(".showDetailArea");
    let children = showArea.children;
    if(children.length > 0){
      if(children[0].getAttribute("data-id") === imgData.id){
        children[0].src = imgData.images.original_still.url;
      } else {
        children[0].src = imgData.images.original.url;
        children[0].setAttribute("data-id", imgData.id);
      }
    } else {
      let newGIF = document.createElement("img");
      let imgSrc = imgData.images.original.url;
      newGIF.src = imgSrc;
      newGIF.setAttribute("data-id", imgData.id);
      showArea.appendChild(newGIF);
    }
    
    //showArea.innerHTML = newGIF;
  };
}

function updateData2Website(){
  let thumbs = document.querySelector(".thumbs");
  let imgData = data.data;
  for(let i = 0; i < imgData.length; i++){
    let img = document.createElement("img");
    let imgSrc = imgData[i].images.fixed_height_small_still.url;
    let imgGIFSrc = imgData[i].images.fixed_height_small.url;
    img.src = imgSrc;
    img.setAttribute("data-gif", imgGIFSrc);
    img.setAttribute("data-static", imgSrc);
    //onmouseover="hover(this);" onmouseout="unhover(this);
    img.addEventListener("mouseover", function(event){
      let target = event.target;
      target.src = target.getAttribute("data-gif");
    });
    img.addEventListener("mouseout", function(event){
      let target = event.target;
      target.src = target.getAttribute("data-static");
    });
    img.classList.add("thumbnail");
    img.addEventListener("click", createFunction(imgData[i]));
    thumbs.appendChild(img);
  }
}

// function showAnimatedGIF(){
//   let showArea = document.querySelector(".showDetailArea");
//   let newGIF = document.createElement("img");
//   let imgSrc = this.images.original.url;
//   newGIF.src = imgSrc;
//   showArea.appendChild(newGIF);
// }


window.onload = function() {

}
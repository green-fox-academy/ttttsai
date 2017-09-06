'use strict';
//"https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10"

let PAGE = 3;
let xhr = new XMLHttpRequest();

let NEXT;
let PREVIOUS;
let FIRST;
let LAST;

function returnUrl(page){
  return "https://www.anapioficeandfire.com/api/characters?page=" + page 
          + "&pageSize=10";
}

function go2PreviousPage(){
  if(PREVIOUS.length > 0){
    xhr.open("GET", PREVIOUS);
    xhr.send(null);
  } 
}

function go2NextPage(){
  if(NEXT.length > 0){
    xhr.open("GET", NEXT);
    xhr.send(null);
  } 
}

function go2FirstPage(){
  if(FIRST.length > 0){
    xhr.open("GET", FIRST);
    xhr.send(null);
  } 
}

function go2LastPage(){
  if(LAST.length > 0){
    xhr.open("GET", LAST);
    xhr.send(null);
  } 
}

function resetValue(){
  NEXT = "";
  PREVIOUS = "";
  FIRST = "";
  LAST = "";
}

function writeCharacters2Page(data){
  let characterList = "";
  let p = document.querySelector("p");
  for(let i = 0; i < data.length; i++){
    if(data[i].name.length === 0){
      characterList += "EMPTY_NAME" + (i+1);
    }
    characterList += data[i].name + " ";
  }
  p.innerText = characterList;

}

function handleHeaderData(){
  let headers = xhr.getResponseHeader("link").split(",");
  resetValue();
  for(let i = 0; i < headers.length; i++) {
    let url = headers[i].split(";")[0];
    url = url.trim();
    url = url.substring(1, url.length-1);
    if(headers[i].indexOf("next") > -1){
      NEXT = url;
    } else if(headers[i].indexOf("prev") > -1){
      PREVIOUS = url;
    } else if (headers[i].indexOf("first") > -1){
      FIRST = url;
    } else {
      LAST = url;
    }
  }
  console.log(headers);
}

window.onload = function() {
  let p = document.querySelector("p");
  resetValue();
  xhr.open("GET", returnUrl(PAGE));
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
      handleHeaderData();
      writeCharacters2Page(JSON.parse(xhr.response));
    }
  }
  xhr.send(null);
}
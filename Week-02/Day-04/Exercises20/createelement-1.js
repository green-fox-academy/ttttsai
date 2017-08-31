window.onload = function(){
    // Add an item that says 'The Green Fox' to the asteroid list.
    // Add an item that says 'The Lamplighter' to the asteroid list.
    // Add a heading saying 'I can add elements to the DOM!' to the .container.
    // Add an image, any image, to the container.
    var ulList = document.getElementsByTagName("ul")[0];
    var newLi1 = document.createElement("li");
    var newLi2 = document.createElement("li");
    newLi1.innerText = "The Green Fox";
    newLi2.innerText = "The Lamplighter";
    ulList.appendChild(newLi1);
    ulList.appendChild(newLi2);

    var container = document.getElementsByClassName("container")[0];
    var newHeading = document.createElement("h1");
    var newImg = document.createElement("img");
    newHeading.innerText = "I can add elements to the DOM!";
    newImg.setAttribute("src", "https://static.wixstatic.com/media/f4461b_83457ca5dd844c71a760d36e6583d0ff.png/v1/fill/w_168,h_168,al_c,usm_0.66_1.00_0.01/f4461b_83457ca5dd844c71a760d36e6583d0ff.png");
    container.appendChild(newHeading);
    container.appendChild(newImg);
    
};

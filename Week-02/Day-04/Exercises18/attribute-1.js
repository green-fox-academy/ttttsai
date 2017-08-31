window.onload = function(){
    // Write the image's url to the console.
    // Replace the image with a picture of yourself.
    // Make the link point to the Green Fox Academy website.
    // Disable the second button.
    // Replace its text with 'Don't click me!'.
    var img = document.getElementsByTagName('img')[0];
    console.log(img.getAttribute("src"));
    img.setAttribute("src", "http://img4.imgtn.bdimg.com/it/u=3414314445,2472119867&fm=26&gp=0.jpg");

    var a = document.getElementsByTagName('a')[0];
    a.setAttribute("href","http://www.greenfoxacademy.com/");

    var secondBtn = document.getElementsByClassName("this-one")[0];
    secondBtn.setAttribute("disabled", true);

    secondBtn.innerText = "Don't click me!";
};

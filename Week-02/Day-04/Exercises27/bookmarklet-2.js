window.onload = function(){
  // Create a script that replaces every h1 headline's content
  // with 'Green Fox Academy Conquers the World'.
  // Create a bookmarklet that does that on any website.
  var allImg = document.querySelectorAll('img');
  for(var i = 0; i < allImg.length; i++){

    allImg[i].setAttribute("src", " http://bit.ly/lpgreenfox");
  }
  
};



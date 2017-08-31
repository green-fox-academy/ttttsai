window.onload = function(){
  // Create a script that replaces every h1 headline's content
  // with 'Green Fox Academy Conquers the World'.
  // Create a bookmarklet that does that on any website.
  var allH1 = document.querySelectorAll('h1');
  for(var i = 0; i < allH1.length; i++){
    allH1[i].innerText = 'Green Fox Academy Conquers the World';
  }
  
};


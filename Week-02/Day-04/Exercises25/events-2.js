window.onload = function(){
  // On the click of the button,
  // Count the items in the list
  // And display the result in the result element.
  var btn = document.querySelector('button');
  var li = document.querySelector('ul').querySelectorAll('li');
  var p = document.querySelector('p');

  btn.addEventListener('click', function(){
    p.innerText = li.length;
  }, false);

  
};

window.onload = function(){
    // Remove the king from the list.
    // Add list items that have the following text contents:
    // ['apple', 'bubble', 'cat', 'green fox']
    var orgLi = document.querySelector('li');
    var list = document.querySelector('ul');
    list.removeChild(orgLi);

    var newLiText = ['apple', 'bubble', 'cat', 'green fox'];
    for(var i = 0; i < newLiText.length; i++){
        var newLi = document.createElement('li');
        newLi.innerText = newLiText[i];
        list.appendChild(newLi);
    }
    
    
};

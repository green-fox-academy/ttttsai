window.onload = function(){
    // Remove the king from the list.
    // Add 3 list items saying 'The Fox' to the list.
    var orgLi = document.querySelector('li');
    var list = document.querySelector('ul');
    list.removeChild(orgLi);

    var newLi1 = document.createElement('li');
    var newLi2 = document.createElement('li');
    var newLi3 = document.createElement('li');
    newLi1.innerText = 'The Fox';
    newLi2.innerText = 'The Fox';
    newLi3.innerText = 'The Fox';

    list.appendChild(newLi1);
    list.appendChild(newLi2);
    list.appendChild(newLi3);
    
};

window.onload = function(){
    //fill every paragraph with the last one's content.
    var pElement = document.getElementsByTagName('p');
    for(var i = 1; i < pElement.length; i++){
        pElement[i].innerText += pElement[i-1].innerText;
    }
};

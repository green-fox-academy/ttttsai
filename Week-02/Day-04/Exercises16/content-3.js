window.onload = function(){
    var allPTag = document.getElementsByTagName('p');
    allPTag[1].innerText = allPTag[0].innerText;
    allPTag[2].innerHTML = allPTag[0].innerHTML;
};

window.onload = function(){
    //document.getElementsByTagName('li')[0].innerText = 'apple'
    var text = ['apple', 'banana', 'cat', 'dog'];
    var li = document.getElementsByTagName('li');
    for(var i = 0; i < text.length; i++){
        li[i].innerText = text[i];
   }
};

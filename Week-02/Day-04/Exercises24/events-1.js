window.onload = function(){
    //Turn the party on and off by clicking the button.
    var btn = document.querySelector('button');
    var div = document.querySelector('div');

    btn.addEventListener('click', function(){
      div.classList.toggle('party');
    }, false);
};

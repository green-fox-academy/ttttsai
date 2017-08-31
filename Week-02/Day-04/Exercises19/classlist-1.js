window.onload = function(){
    // Does the third p have a cat class?
    // If so, alert 'YEAH CAT!'
    // If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
    // If the first p has an 'apple' class, replace cat's content with 'dog'
    // Make apple red
    // Make balloon less balloon-like
    var p = document.getElementsByTagName('p');
    if(p[2].getAttribute("class").indexOf("cat") > -1){
        alert("YEAH CAT!");
    }
    if(p[3].getAttribute("class") && p[3].getAttribute("class").indexOf("dolphin") > -1){
        p[0].innerText = "pear";
    }
    if(p[0].getAttribute("class").indexOf("apple") > -1){
        p[2].innerText = "dog";
    }
};

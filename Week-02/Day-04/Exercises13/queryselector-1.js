window.onload=function(){
    // 1. store the element that says 'The King' in the 'king' variable.
    // console.log it.

    var king = document.getElementById("b325");
    console.log(king);

    // 2. store the element that contains the text 'The Conceited Man'
    // in the 'conceited' variable.
    // show the result in an 'alert' window.

    var conceited = document.getElementsByClassName("asteroid b326");
    alert(conceited[0]);
    // 3. store 'The Businessman' and 'The Lamplighter'
    // in the 'businessLamp' variable.
    // console.log each of them.
    var businessLamp = [];
    var doms1 = document.getElementsByClassName("asteroid big");
    for(var i = 0; i < doms1.length; i++){
        businessLamp[i] = doms1[i].innerText;
    }
    console.log(businessLamp);
    // 4. store 'The King' and 'The Conceited Man'
    // in the 'conceitedKing' variable.
    // alert them one by one.
    var conceitedKing = [];
    var doms2 = document.getElementsByTagName("section")[0].getElementsByClassName("asteroid");
    for(var i = 0; i < doms2.length; i++){
        conceitedKing[i] = doms2[i].innerText;
    }
    alert(conceitedKing[0]);
    alert(conceitedKing[1]);

    // 5. store 'The King', 'The Conceited Man' and 'The Lamplighter'
    // in the 'noBusiness' variable.
    // console.log each of them.
    var noBusiness = [];
    var doms3 = document.getElementsByTagName("div");
    for(var i = 0; i < doms3.length; i++){
        noBusiness[i] = doms3[i].innerText;
    }
    console.log(noBusiness);
    // 6. store 'The Businessman' in the 'allBizniss' variable.
    // show the result in an 'alert' window.
    var allBizniss = document.getElementsByTagName("p")[0].innerText;
    alert(allBizniss);
};




var imgLibray = [{
    "hint" : "Hongkong picture 1",
    "title" : "Hongkong1 title",
    "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "src" : "hongkong1.jpg" 
}, {
    "hint" : "Hongkong picture 2",
    "title" : "Hongkong2 title",
    "content" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    "src" : "hongkong2.jpg" 
}, {
    "hint" : "Hongkong picture 3",
    "title" : "Hongkong3 title",
    "content" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    "src" : "hongkong3.jpg" 
}, {
    "hint" : "Hongkong picture 4",
    "title" : "Hongkong4 title",
    "content" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    "src" : "hongkong4.jpg" 
}, {
    "hint" : "Hongkong picture 5",
    "title" : "Hongkong5 title",
    "content" : "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    "src" : "hongkong5.jpg" 
}, {
    "hint" : "Hongkong picture 6",
    "title" : "Hongkong6 title",
    "content" : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum",
    "src" : "hongkong6.jpg" 
}, {
    "hint" : "Hongkong picture 7",
    "title" : "Hongkong7 title",
    "content" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    "src" : "hongkong7.jpg" 
}, {
    "hint" : "Hongkong picture 8",
    "title" : "Hongkong8 title",
    "content" : "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero",
    "src" : "hongkong8.jpg" 
}];

var CURRENTPHOTO = 0;

function getLibray(){
    return imgLibray;
}

function toggleFocusClass(){
    // remove "focus" class if "focus" class exists
    // add "focus" class if have no "focus" class 
    document.querySelectorAll("li")[CURRENTPHOTO].querySelector("button").classList.toggle("focus");
}

function onClickThumbBtn(){
    toggleFocusClass();
    CURRENTPHOTO = Number(this.getAttribute("location"));
    toggleFocusClass();
    changePhotoAndContent();
}

function changePhotoAndContent(){
    var photoViewer = document.querySelector("img");
    var contentTitle = document.querySelector("h1");
    var content = document.querySelector("p");
    var libray = getLibray(); 

    photoViewer.setAttribute("src", libray[CURRENTPHOTO].src);
    contentTitle.innerText = libray[CURRENTPHOTO].title;
    content.innerText = libray[CURRENTPHOTO].content;
}

function arrowClick(key){
    var libray = getLibray();
    toggleFocusClass();
    if((this.classList && this.classList.contains("arrowLeft")) || (key && key === 37)){
        CURRENTPHOTO = CURRENTPHOTO === 0 ? libray.length - 1 : CURRENTPHOTO - 1;
    } else if((this.classList && this.classList.contains("arrowRight")) || (key && key === 39)){
        CURRENTPHOTO = CURRENTPHOTO === libray.length - 1 ? 0 : CURRENTPHOTO + 1;
    }
    
    toggleFocusClass();
    changePhotoAndContent();
}

window.onload = function(){
    //get data first;
    var libray = getLibray();
    //get the viewer
    var photoViewer = document.querySelector("img");
    //get the thumbnails
    var thumbsList = document.querySelector("ul");
    //get the left arrow
    var leftArrowBtn = document.querySelector(".arrowLeft");
    //get the right arrow
    var rightArrowBtn = document.querySelector(".arrowRight");

    //1.show the first photo picture 
    changePhotoAndContent();

    //2.Automaticlly add the thumbnailsList
    for(var i = 0; i < libray.length; i++){
        var thumb = document.createElement("li");
        var btn = document.createElement("button");
        
        btn.setAttribute("title", libray[i].hint);
        btn.style.backgroundImage = "url('"+ libray[i].src + "')";
        btn.classList.add("thumb");
        btn.setAttribute("location", i);

        i === 0 ? btn.classList.add("focus") : "" ;

        thumb.appendChild(btn);
        //add click function to thumbnail button
        btn.addEventListener("click", onClickThumbBtn);
        thumbsList.appendChild(thumb);
    }

    //3.add click function to arrow btn;
    leftArrowBtn.addEventListener('click', arrowClick);
    rightArrowBtn.addEventListener('click', arrowClick);

    document.addEventListener('keydown', function(event){    
        var key = event.which;                
            switch(key) {
                case 37:
                    arrowClick(key);
                    break;
                case 39:
                  // Key right.
                    arrowClick(key);
                    break;
            }   
      });
};
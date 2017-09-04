'use strict';
function updateData(people){
    $('.selected').attr('data-text', people);
}
function ElevatorView(maxFloor, maxPeople){
    this.position = 1;
    this.direction = "up";
    this.peopleIn = 0;
    this.maxPeople = maxPeople;
    this.maxFloor = maxFloor;
    this.addPeople = function(){
        if(this.maxPeople > this.peopleIn){
            this.peopleIn++;
            updateData(this.peopleIn);
        }

    };
    this.removePeople = function(){
        if(this.peopleIn > 0){
            this.peopleIn--;
            updateData(this.peopleIn);
        }
    };
    this.up = function(){
        // var nowPosition = DocumentFragment.querySelector();
        if(this.position < this.maxFloor){
            var nowPosition = document.querySelector(".elevator"+this.position);
            nowPosition.classList.toggle("selected");
            this.position++;
            var nextPosition = document.querySelector(".elevator"+this.position);
            nextPosition.classList.toggle("selected");
            updateData(this.peopleIn);
        }
    };
    this.down = function(){
        if(this.position > 1){
            var nowPosition = document.querySelector(".elevator"+this.position);
            nowPosition.classList.toggle("selected");
            this.position--;
            var nextPosition = document.querySelector(".elevator"+this.position);
            nextPosition.classList.toggle("selected");
            updateData(this.peopleIn);
        }
    };
    this.drawElevator = function(){
        var view = document.querySelector(".elevator");
        for(var i = 0; i < this.maxFloor; i++){
            var floor = document.createElement("div");
            floor.classList.add("elevator" + (this.maxFloor-i));
            if(this.position === (this.maxFloor - i)){
                floor.classList.add("selected");
            }
            view.appendChild(floor);
        }
        updateData(this.peopleIn);
    };
}
window.onload = function(){
    var maxFloor = 10;
    var maxPeople = 15;

    var elevator = new ElevatorView(maxFloor, maxPeople);
    elevator.drawElevator();

    //by default  floor 1   no people

    var upBtn = document.querySelector(".upBtn");
    upBtn.addEventListener("click", function(){
        elevator.up();
    });

    var downBtn = document.querySelector(".downBtn");
    downBtn.addEventListener("click", function(){
        elevator.down();
    });

    var addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", function(){
        elevator.addPeople();
    });

    var removeBtn = document.querySelector(".removeBtn");
    removeBtn.addEventListener("click", function(){
        elevator.removePeople();
    });
};


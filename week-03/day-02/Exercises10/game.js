// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy production rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

var createCandyBtn = document.querySelector(".create-candies");
var buyLollypopsBtn = document.querySelector(".buy-lollypops");
var candyMachine = document.querySelector(".candy-machine");

function CandyStore(candies, lollipop){
    this.candies = candies || 0;
    this.lollipop = lollipop || 0;
    this.generateRate = this.lollipop / 10;
    this.createCandy = function(num){
        this.candies += num || 1;
        this.updateCandyLollipopState2Page();
    };
    this.buyLollipop = function(){
        if(this.candies >= 100){
            this.candies -= 100;
            this.lollipop++;
            this.updateRate();
            this.updateCandyLollipopState2Page();
        } else {
            console.log("You have no enough candies to buy lollipop");
        }
    };
    this.updateRate = function(){
        this.generateRate = this.lollipop / 10;
    };
    this.updateCandyLollipopState2Page = function(){      
        var candiesState = document.querySelector(".candies");
        var lollipopState = document.querySelector(".lollypops");
        var rateState = document.querySelector(".speed");
        candiesState.innerText = this.candies;
        rateState.innerText = this.generateRate;
        lollipopState.innerText = "🍭".repeat(this.lollipop);
    };
    this.generateCandyPerSecond = function(){
        this.candies += this.generateRate;
        this.updateCandyLollipopState2Page();
    };
}


var candyStore = new CandyStore(0, 5);

candyStore.updateCandyLollipopState2Page();

createCandyBtn.addEventListener("click", function(){
    candyStore.createCandy();
});
buyLollypopsBtn.addEventListener("click", function(){
    candyStore.buyLollipop();
});
candyMachine.addEventListener("click", function(){
    candyStore.generateRate *= 10;
    this.updateCandyLollipopState2Page();
});
setInterval(function(){
    candyStore.generateCandyPerSecond();
}, 1000);
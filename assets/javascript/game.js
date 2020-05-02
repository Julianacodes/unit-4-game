// 1) WE need to set a random number

var wins = 0;
var losses = 0;
var score = 0
var mathRandom=""
var randomNumber = document.querySelector(".randomNumber")
var htmlWins = document.querySelector(".wins")
var htmlLosses = document.querySelector(".losses")
var buttondDiv = document.querySelector(".buttons")
var crystal1 = document.querySelector(".button1")
var crystal2 = document.querySelector(".button2")
var crystal3 = document.querySelector(".button3")
var crystal4 = document.querySelector(".button4")
var scoreText= document.querySelector(".scoretext")
var userScore =document.querySelector(".userscore")




function start(){
    mathRandom = Math.floor(Math.random() * 50) + 40;
    score = 0
    crystal1.setAttribute("value", Math.floor(Math.random() * 11));
    crystal2.setAttribute("value", Math.floor(Math.random() * 11));
    crystal3.setAttribute("value", Math.floor(Math.random() * 11));
    crystal4.setAttribute("value", Math.floor(Math.random() * 11));


    renderWinsAndLosses()

    
}
start()

function renderWinsAndLosses(){
    htmlLosses.innerHTML = "Losses : " + losses
    htmlWins.innerHTML = "Wins : " + wins
    randomNumber.innerHTML = "" + mathRandom
    scoreText.innerHTML= " Your Score So Far : "
    userScore.innerHTML = "" + score

}

buttondDiv.addEventListener("click", function (event) {
    var buttonValue = parseInt(event.target.getAttribute("value"))
    score = score + buttonValue
  
   
    console.log(score);
    if (score === mathRandom) {
        wins++;
        start()
    } else  if (score >mathRandom) {
      losses++;
        start()
    }
    
    
    renderWinsAndLosses()

})







// 3) Click event listener to each crystal to get the value and to the score

//4) If the value and the score equals the random number generated, it will be added to the wins, and restart game 



//5) Else, if the value of the score is more than the random number generated, it will be added to the loses, and restart the game 




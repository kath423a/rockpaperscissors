//Eventlistener som sætter spillet i gang når siden er loadet
window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    start();
}


function start() {
    console.log("start");
    getUserSelection();
}

function getUserSelection() {

    // User clicks on either rock, paper or scissors
    document.querySelector(".rock").addEventListener("click", userChoice );
    document.querySelector(".paper").addEventListener("click", userChoice);
    document.querySelector(".scissors").addEventListener("click", userChoice);
}


function userChoice() {
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    myRandom = Math.floor(Math.random() * 3 + 1);
    console.log(myRandom);

    if (this.classList.contains("rock")) {
        document.querySelector("#player1").addEventListener("animationend", function () {
          document.querySelector("#player1").classList.remove("shake");
          document.querySelector("#player1").classList.remove("paper");
          document.querySelector("#player1").classList.remove("scissors");
          document.querySelector("#player1").classList.remove("rock");
          document.querySelector("#player1").classList.add("rock");
        });
      } else if (this.classList.contains("paper")) {
        document.querySelector("#player1").addEventListener("animationend", function () {
          document.querySelector("#player1").classList.remove("shake");
          document.querySelector("#player1").classList.remove("paper");
          document.querySelector("#player1").classList.remove("scissors");
          document.querySelector("#player1").classList.remove("rock");
          document.querySelector("#player1").classList.add("paper");
        });
      } else if (this.classList.contains("scissors")) {
        document.querySelector("#player1").addEventListener("animationend", function () {
          document.querySelector("#player1").classList.remove("shake");
          document.querySelector("#player1").classList.remove("paper");
          document.querySelector("#player1").classList.remove("scissors");
          document.querySelector("#player1").classList.remove("rock");
          document.querySelector("#player1").classList.add("scissors");
        });

    }

    makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
    // Computer picks between rock, paper, scissors (random)
    if (myRandom == "1") {
        document.querySelector("#player2").addEventListener("animationend", function () {
          document.querySelector("#player2").classList.remove("shake");
          document.querySelector("#player2").classList.remove("paper");
          document.querySelector("#player2").classList.remove("scissors");
          document.querySelector("#player2").classList.remove("rock");
          document.querySelector("#player2").classList.add("rock");
        });
      } else if (myRandom == "2") {
        document.querySelector("#player2").addEventListener("animationend", function () {
          document.querySelector("#player2").classList.remove("shake");
          document.querySelector("#player2").classList.remove("paper");
          document.querySelector("#player2").classList.remove("scissors");
          document.querySelector("#player2").classList.remove("rock");
          document.querySelector("#player2").classList.add("paper");
        });
      } else if (myRandom == "3") {
        document.querySelector("#player2").addEventListener("animationend", function () {
          document.querySelector("#player2").classList.remove("shake");
          document.querySelector("#player2").classList.remove("paper");
          document.querySelector("#player2").classList.remove("scissors");
          document.querySelector("#player2").classList.remove("rock");
          document.querySelector("#player2").classList.add("scissors");
        });
      }
  
   
    showAnimations();
}


function showAnimations() {

    // Show animations when user clicks and computer picks random 
    // Make the animation "shake"
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");


    determineWinner();
}

function determineWinner(){

    // if player win
    showWin();

    // if player loses
    showLoser();

    // if it's a tie
    showDraw();
}

function showWin() {
    console.log("Show Win");
    // show winner"
}

function showLoser() {
    console.log("Show Loser");
    // Show loser 
}

function showDraw() {
    console.log("Show draw");
    // Show draw
}
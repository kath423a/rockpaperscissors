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
    document.querySelector(".rock").addEventListener("click", makeRandomComputerChoice);
    document.querySelector(".paper").addEventListener("click", makeRandomComputerChoice);
    document.querySelector(".scissors").addEventListener("click", makeRandomComputerChoice);
}


function makeRandomComputerChoice() {
    // Computer picks between rock, paper, scissors (random)
    myRandom = Math.floor(Math.random() * 3 + 1);
        console.log(myRandom);

    //document.querySelector(".win").classList.add("hidden");
    //document.querySelector(".lose").classList.add("hidden");
    //document.querySelector(".draw").classList.add("hidden");
  
    

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
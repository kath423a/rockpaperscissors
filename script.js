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

let myRandomNr;

function makeRandomComputerChoice() {
    // Computer picks between rock, paper, scissors (random)

    // I don't know how to start here:OOOO

    myRandomNr = Math.floor(Math.random() * 3) + 1;

    if (myRandomNr == 1) {

    }

  

    showAnimations();
}



function showAnimations() {

    // Show animations when user clicks and computer picks random 


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
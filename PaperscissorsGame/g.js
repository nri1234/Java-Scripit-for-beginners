'use strict';
var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");
var PlayerName = window.prompt('What is your name ?');
var name = PlayerName;

function getComputerChoice() {
    var choices = ['r', 'p', 's'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter){
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
    
}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = name + ' chosen ' + convertToWord(userChoice) + ' and ' + ' Computer chosen ' + convertToWord(computerChoice) + ', You won! ';
}
function lose(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = name + ' chosen ' + convertToWord(userChoice) + ' and ' + ' Computer chosen ' + convertToWord(computerChoice) + ', You lost! ';
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = name + ' chosen ' + convertToWord(userChoice) + ' and ' + ' Computer chosen ' + convertToWord(computerChoice) + ', Its a draw! ';
}



function game(userChoice) {
    var computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rp":
            case "pr":
            case "sp":
            win(userChoice, computerChoice);
            break
            case "rp":
            case "ps":
            case "sr":
            lose(userChoice, computerChoice);
            break
            case "rr":
            case "pp":
            case "ss":
            draw(userChoice, computerChoice);
            break;    draw()
    }
}
game();


function main(){
    rock_div.addEventListener('click', function (){
        game("r");
    })
    
    paper_div.addEventListener('click', function (){
        game("p");
     })   
    scissors_div.addEventListener('click', function (){
        game("s");
    })
}
main();


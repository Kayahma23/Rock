var generateComputerChoice = function() {
    var myArray = ["rock", "paper", "scissors"];
    var myNumber = Math.floor(Math.random() * 3);
    var computerChoice = myArray[myNumber];
    return computerChoice;
  
    
};
 var wins = 0 ;
var computerChoice;
var pickWinner = function(userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    var winner;
    if (userChoice === computerChoice) {
        winner = "DRAW";
    }
    else if (userChoice === "rock" && computerChoice === "scissors") {
        winner = "user";

    }
    else if (userChoice === "rock" && computerChoice === "paper") {
        winner = "computer";
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        winner = "user";
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        winner = "computer";
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        winner = "computer";
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        winner = "user";

}
    $("#winner").html(winner);
    $("#computerchoice").html(computerChoice);
    console.log(" winner: " + winner);
    };
    


$("#paper").click(function() {
    console.log("paper");
});

$("#rock").click(function() {
    console.log("rock");
});
$("#scissors").click(function() {
    console.log("scissors");
});


var userChoice = null;
var computerChoice = generateComputerChoice();

$(document).ready(function() {
    $("#rock").click(function() {
        userChoice= "rock";
        computerChoice = generateComputerChoice();
        pickWinner(userChoice, computerChoice);

    });
    $("#paper").click(function() {
         userChoice= "paper";
        computerChoice = generateComputerChoice();
        pickWinner(userChoice, computerChoice);
        
    });
    $("#scissors").click(function() {
         userChoice= "scissors";
        computerChoice = generateComputerChoice();
        pickWinner(userChoice, computerChoice);
    });
});
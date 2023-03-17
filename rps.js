let rock = "Rock";
let paper = "Paper";
let scissor = "Scissors";

// create a function getComputerChoice to randomly return Text
function getComputerChoice(){

    randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1){
        compChoice = rock
    } else if(randomNumber == 2){
        compChoice = paper
    }else if(randomNumber == 3){
        compChoice = scissor
    }
        
    console.log(compChoice)
    return compChoice;
}

getComputerChoice();
// create a function with two param playerSelection(case insensitive) 
// & computerSelection compare the two choices using boolean logic


// return "You Lose! X beats Y"
// create game () function to play a five round game use a for loop
// call playRound inside of game ()
// any needed helper functions? 

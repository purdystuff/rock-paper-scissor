let rock = "rock";
let paper = "paper";
let scissor = "scissors";

const regE = /^rock|paper|scissors$/

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
        
    return compChoice;
}

//create a prompt to collect player input
//use toLowerCase

function playerChoiceValidation(){
    playerChoice = prompt("Can you beat the computer?? \nPlease enter:\nRock\nPaper\nScissors")
    playerChoice = playerChoice.toLowerCase()
    regTest = regE.test(playerChoice)

    while(!regTest){
        if(!regTest){
            playerChoice = prompt("Please enter a valid entry:\nRock\nPaper\nScissors")
         }
        regTest = regE.test(playerChoice)
        console.log(regTest)
    }

    return playerChoice;
}

// create a function with two param playerSelection(case insensitive) 
// & computerSelection
// compare the two choices using boolean logic 
function getWinner(playerChoice, compChoice){
    compChoice = getComputerChoice();
    playerChoice = playerChoiceValidation();


    console.log(playerChoice)
    console.log(compChoice)
}

getWinner()

// return "You Lose! X beats Y"
// create game () function to play a five round game use a for loop
// call playRound inside of game ()
// any needed helper functions? 

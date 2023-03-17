const regE = /^rock|paper|scissors$/
let compWins = 0;
let playerWins = 0;
let numRounds = 0;


// create a function getComputerChoice to randomly return Text
function getComputerChoice(){

    randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1){
        compChoice = "rock"
    } else if(randomNumber == 2){
        compChoice = "paper"
    }else if(randomNumber == 3){
        compChoice = "scissor"
    }
        
    return compChoice;
}

//create a prompt to collect player input
//use toLowerCase

function playerChoiceValidation(){
    playerChoice = prompt("Can you beat the computer?? \n\nPlease enter:\nRock\nPaper\nScissors")
    playerChoice = playerChoice.toLowerCase()
    regTest = regE.test(playerChoice)

    while(!regTest){
        if(!regTest){
            playerChoice = prompt("Please submit a valid entry:\n\nRock\nPaper\nScissors")
         }
        regTest = regE.test(playerChoice)
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

    if(compChoice == playerChoice){
        alert("It's a tie\nPlease play again")
    }else if(compChoice == "rock"){
        if(playerChoice == "scissor"){
            compWins ++;
            alert("Computer Wins. Ha ha ha.\nTotal computer wins: " + compWins + "\nTotal player wins: " + playerWins);
        }else{
            playerWins ++;
            alert("Player One Wins. Gotcha you stupid bundle of processors and wires.\nTotal computer wins: " + compWins + "\nTotal player wins: " + playerWins);
        }
    }else if(compChoice == "paper"){
        if(playerChoice == "rock"){
            compWins ++;
            alert("Computer Wins. Ha ha ha.\nTotal computer wins: " + compWins + "\nTotal player wins: " + playerWins);
        }else{
            playerWins ++;
            alert("Player One Wins. Gotcha you stupid bundle of processors and wires.\nTotal computer wins: " + compWins + "\nTotal player wins: " + playerWins);
        }
    }else if(compChoice == "scissor"){
        if(playerChoice == "paper"){
            compWins ++;
            alert("Computer Wins. Ha ha ha.\nTotal computer wins: " + compWins + "\nTotal player wins: " + playerWins);
        }else{
            playerWins ++;
            alert("Player One Wins. Gotcha you stupid bundle of processors and wires.\nTotal computer wins: " + compWins + "\nTotal player wins: " + playerWins);
        }
    }

}

// create game () function to play a five round game use a for loop
function game(){
    numRounds = prompt("Please enter the number of rounds that you want to play.")
    numRounds = parseInt(numRounds);
  
    for(let i = 0; i < numRounds; i++){
        getWinner();

    }

    return numRounds;
}

//who is the overall winner
function overallWinner(){
    if (playerWins > compWins){
        alert("Player One Wins!! Congratulations!!\nPlayer One scored: " + playerWins + "\nThe computer scored: " + compWins)
    } else{
        alert("The Computer Wins. Ha ha." + "\nThe computer scored: " + compWins + "\nPlayer One scored: " + playerWins )
    }
}

game();
overallWinner();



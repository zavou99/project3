let playerScore = 0;
let computerScore = 0;

function computer_Play() 
{
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * 3)];
}
  
function user_Play() 
{
       let promptText = "Pick a weapon rock, paper, scissor";
       let userpick = prompt(promptText).trim().toLowerCase();
    while (userpick !== "rock" && userpick !== "paper" && userpick !== "scissor") 
        { 
            userpick = prompt("Error! Pick a weapon: rock, paper, scissor").trim().toLowerCase();
        }
        return userpick;
  }
  
  function play_game() 
  {
    const playerSelection = user_Play();
    const computerSelection = computer_Play();
    if (playerSelection === computerSelection) 
        {
        return "It's a TIE!";
        }   else if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore++;
                return "You lose! Paper beats Rock!";

        }   else if(playerSelection=== "rock" && computerSelection === "scissor") {
                playerScore++;
                return "You Won! Rock beats Scissors!";
        }
             else if (playerSelection === "scissor" && computerSelection === "rock") {
                computerScore++;
                return "You lose! Rock beats Scissors!";
        }    else if (playerSelection === "scissor" && computerSelection === "paper") {
                 playerScore++;
                 return "You Won! Scissors beats Paper!";
        }
             else if (playerSelection == "paper" && computerSelection === "scissor") {  
                 computerScore++;
                 return "You lose! Scissors beats Paper!";
        }    else {
             playerScore++;
             return "You Won! Paper beats Rock!";
         }
    }
  
 function five_rounds()
  {
      for (let i = 0; i < 5; i++)
       {
        console.log(play_game());
        computerScore;
        playerScore;
        console.log("ROUND:" , i+1);
       }
    

    if (computerScore > playerScore) 
    {
      return `Computer: ${computerScore} points\n Player: ${playerScore}`;
    } else if (computerScore < playerScore) {
      return `Computer: ${computerScore} points\n Player: ${playerScore}`;
    } else {
      return `Computer: ${computerScore} points\n Player: ${playerScore}`;
    }
  }
console.log(five_rounds());
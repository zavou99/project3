
function computerPlay() {
  const pick = ['rock', 'paper', 'scissors'];
  return pick[Math.floor(Math.random() * pick.length)];
}
function score_five() {
  for (let i = 0; i < 5; i++) 
  {
    const playerSelection = prompt("Please pick a weapon: 'Rock, Paper, Scissors'").toLowerCase();
    const computerSelection = computerPlay();
    console.log(play_game(playerSelection, computerSelection));
  }

}
function play_game(playerSelection, computerSelection) 
{
  if (playerSelection === computerSelection) {
     return `Tie!! You pick the same, points for no one!! `;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
     return "YOu Lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
     return "You Lose!! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
     return "You LOSe! Scissors beats Paper";
  } else {
     return `You Won!! Bravo ${computerSelection} beats ${playerSelection}`;
  }
}

score_five();

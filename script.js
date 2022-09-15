//================ Task 1 ==============================
// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

// If the player's dice roll is higher than the computer dice roll,
// console.log("PLAYER WINS")
// otherwise, log ("COMPUTER WINS")
// Use a ternary to check for the winner
// ----- After testing it, remove the console.log()
// leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
// FINALLY: return all three variables using an array
// return [VALUE1, VALUE2, VALUE3]
let playerDice;
let computerDice;
let winner;
// const array = [];

const rollDice = () => {
  playerDice = Math.floor(Math.random() * 6);
  computerDice = Math.floor(Math.random() * 6);
//   array.push(playerDice);
//   array.push(computerDice);
  //   console.log(playerDice);
//   console.log(computerDice);
};

// ============ Task 2 ==============================
// Let's update our UI (User Interface)
// Create a function (displayScore)
// Create a new a div displaying:
// Computer Score: , Player Score:  & the Winner:
// so there is a running record of game data.
// Append the new div to the parent div on the HTML.
const w = document.querySelector(`#w`);
const play = document.querySelector(`#play-game`)
const reset = document.querySelector(`#reset`)

function displayScore() {
  const div = document.createElement(`div`);
  div.textContent = `Computer Score: ${computerDice}, Player Score: ${playerDice}, Winner: ${winner}`;
  div.classList.add(`scoreboard`)
  w.append(div);
}

function randomColor(element) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    element.style.backgroundColor = bgColor
}

// Create a Reset Function (resetGame)
// REMOVE the div with the game score, leaving just the parent div
// creating a clean slate for a new set of games :)
function resetGame() {
  while (w.firstChild) {
    w.removeChild(w.firstChild);
    randomColor(reset)
  }
}

// ==== Final Step =====================
// Create a new function (playGame):
// Call the rollDice and the displayScore function inside this function
function playGame() {
  rollDice();

  for (i = 0; i < 10; i++) {
    rollDice();
    randomColor(play)
    if (playerDice > computerDice) {
      winner = `Player Wins!`;
      console.log("Player Wins!");
      break;
    } else if (computerDice > playerDice) {
      winner = `Computer Wins!`;
      console.log(`Computer Wins!`);
      break;
    } else {
      winner = `It's a Tie! Roll again!`;
      console.log(`Tie! Roll again!`);
      displayScore();
      continue
    }
  }
  displayScore();
}

// ========= Don't forget to add your events listeners
// Attach the (playGame) function to the play game button
// Attach the (resetGame) function to the reset button
const playBtn = document.querySelector("#play-game");
playBtn.addEventListener(`click`, playGame);
const resetBtn = document.querySelector(`#reset`);
resetBtn.addEventListener(`click`, resetGame);

// ===== Now let's host this game in GITHUB PAGES and style it !!!

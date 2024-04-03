#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber: number = Math.floor(Math.random() * 50 + 1);
let roundsPlayed: number = 5;

console.log(`Welcome to Guess the number Game.`);
console.log(
  `Here I think the number between 1 and 50 in ${roundsPlayed} rounds.`
);

async function askToGuess() {
  if (roundsPlayed > 0) {
    const answer = await inquirer.prompt([
      {
        type: "number",
        name: "guess",
        message: `Guess a number between 1 and 50 in ${roundsPlayed} rounds ->`,
      },
    ]);

    const guess = parseFloat(answer.guess);
      roundsPlayed--;
      checkGuess(guess)
  } else {
    console.log("You lost the number is ", randomNumber);
    process.exit();
  }
}

function checkGuess(guess: number) {
  if (guess === randomNumber) {
    console.log(
      "Congrats! the secret number is ",
      guess,
      " You got it in ",
      5 - roundsPlayed,
      " rounds."
    );
    process.exit(0);
  } else if (guess < randomNumber) {
    console.log("Too low!");
    askToGuess();
  } else if (guess > randomNumber) {
    console.log("Too high!");
    askToGuess();
  }
}

askToGuess();

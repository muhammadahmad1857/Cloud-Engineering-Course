#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let randomNumber;
let roundsPlayed;
let totalRounds;
let highScore = null;
async function startGame() {
    const startAnimation = chalkAnimation.rainbow("Welcome to Guess the Number Game.");
    startAnimation.start();
    setTimeout(async () => {
        startAnimation.stop();
        const difficulty = await chooseDifficulty();
        console.log(chalk.green(`You chose ${difficulty.range}!`));
        randomNumber = Math.floor(Math.random() * difficulty.range + 1);
        roundsPlayed = difficulty.rounds;
        totalRounds = difficulty.rounds;
        console.log(chalk.blue(`I have thought of a number between 1 and ${difficulty.range}. You have ${roundsPlayed} rounds to guess it.`));
        askToGuess();
    }, 3000);
}
async function chooseDifficulty() {
    const difficultyChoice = await inquirer.prompt([
        {
            type: "list",
            name: "difficulty",
            message: "Choose a difficulty level:",
            choices: [
                { name: "Easy (1-20, 7 rounds)", value: { range: 20, rounds: 7 } },
                { name: "Medium (1-50, 5 rounds)", value: { range: 50, rounds: 5 } },
                { name: "Hard (1-100, 3 rounds)", value: { range: 100, rounds: 3 } },
            ],
        },
    ]);
    console.log(difficultyChoice);
    return difficultyChoice.difficulty;
}
async function askToGuess() {
    if (roundsPlayed > 0) {
        const difficulty = await chooseDifficulty();
        const answer = await inquirer.prompt([
            {
                type: "number",
                name: "guess",
                message: chalk.yellow(`Guess a number between 1 and ${difficulty.range} in ${roundsPlayed} rounds ->`),
            },
        ]);
        const guess = parseFloat(answer.guess);
        roundsPlayed--;
        checkGuess(guess);
    }
    else {
        const endAnimation = chalkAnimation.pulse("You lost! The number was " + randomNumber);
        endAnimation.start();
        setTimeout(async () => {
            endAnimation.stop();
            await playAgain();
        }, 3000);
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        const congratsAnimation = chalkAnimation.karaoke(`Congrats! The secret number is ${guess}. You got it in ${totalRounds - roundsPlayed} rounds.`);
        congratsAnimation.start();
        setTimeout(async () => {
            congratsAnimation.stop();
            if (highScore === null || totalRounds - roundsPlayed < highScore) {
                highScore = totalRounds - roundsPlayed;
                console.log(chalk.green(`New high score: ${highScore} rounds!`));
            }
            await playAgain();
        }, 3000);
    }
    else {
        giveHint(guess);
        askToGuess();
    }
}
function giveHint(guess) {
    if (Math.abs(guess - randomNumber) <= 5) {
        console.log(chalk.cyan("Very close!"));
    }
    else if (guess < randomNumber) {
        console.log(chalk.red("Too low!"));
    }
    else {
        console.log(chalk.red("Too high!"));
    }
}
async function playAgain() {
    const playAgainChoice = await inquirer.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play again?",
        },
    ]);
    if (playAgainChoice.playAgain) {
        startGame();
    }
    else {
        console.log(chalk.blue("Thank you for playing!"));
        process.exit();
    }
}
startGame();

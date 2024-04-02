#! /usr/bin/env node
import inquirer from "inquirer";
const questions = [
    {
        type: "list",
        name: "q1",
        message: "What is the capital of Japan?",
        choices: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        correctAnswerIndex: 0,
    },
    {
        type: "list",
        name: "q2",
        message: "Who painted the Mona Lisa?",
        choices: [
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Vincent van Gogh",
            "Michelangelo",
        ],
        correctAnswerIndex: 0,
    },
    {
        type: "list",
        name: "q3",
        message: "What is the largest planet in our solar system?",
        choices: ["Jupiter", "Saturn", "Neptune", "Earth"],
        correctAnswerIndex: 0,
    },
    {
        type: "list",
        name: "q4",
        message: "Who invented the telephone?",
        choices: [
            "Alexander Graham Bell",
            "Thomas Edison",
            "Nikola Tesla",
            "Albert Einstein",
        ],
        correctAnswerIndex: 0,
    },
    {
        type: "list",
        name: "q5",
        message: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Fe", "Cu"],
        correctAnswerIndex: 0,
    },
    {
        type: "list",
        name: "q6",
        message: "Who wrote 'To Kill a Mockingbird'?",
        choices: [
            "Harper Lee",
            "J.K. Rowling",
            "Stephen King",
            "F. Scott Fitzgerald",
        ],
        correctAnswerIndex: 0,
    },
    {
        type: "list",
        name: "q7",
        message: "What is the tallest mammal on Earth?",
        choices: ["Giraffe", "Elephant", "Hippo", "Rhino"],
        correctAnswerIndex: 0,
    },
    {
        type: "list",
        name: "q8",
        message: "Which planet is known as the 'Red Planet'?",
        choices: ["Mars", "Venus", "Mercury", "Pluto"],
        correctAnswerIndex: 0,
    },
    {
        type: "list",
        name: "q9",
        message: "Who is known as the 'Father of Computer Science'?",
        choices: ["Alan Turing", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
        correctAnswerIndex: 0,
    },
    {
        type: "list",
        name: "q10",
        message: "Which country is famous for the Taj Mahal?",
        choices: ["India", "Egypt", "Turkey", "China"],
        correctAnswerIndex: 0,
    },
];
const quizAdministration = async () => {
    let score = 0;
    console.log("Welcome to the Quiz!");
    for (const questionObj of questions) {
        const userAnswer = await inquirer.prompt([questionObj]);
        const selectedChoice = userAnswer[questionObj.name]; // Accessing the selected choice using the name property
        if (selectedChoice === questionObj.choices[questionObj.correctAnswerIndex]) {
            console.log("Your answer is Correct! ");
            score++;
        }
        else {
            console.log("Your answer is Incorrect!");
        }
    }
    console.log(`Quiz completed! Your score: ${score} out of ${questions.length}`);
};
quizAdministration();

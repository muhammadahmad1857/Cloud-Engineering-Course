#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const basicOperations = {
    Addition: (a, b) => a + b,
    Subtraction: (a, b) => a - b,
    Multiplication: (a, b) => a * b,
    Division: (a, b) => a / b,
};
const scientificOperations = {
    Sine: (a) => Math.sin((a * Math.PI) / 180),
    Cosine: (a) => Math.cos((a * Math.PI) / 180),
    Tangent: (a) => Math.tan((a * Math.PI) / 180),
    Logarithm: (a) => Math.log10(a),
    "Square Root": (a) => Math.sqrt(a),
    Exponentiation: (a) => Math.exp(a),
    Power: (a, b) => Math.pow(a, b),
    Factorial: (a) => {
        if (a < 0)
            return NaN;
        if (a === 0 || a === 1)
            return 1;
        let result = 1;
        for (let i = 2; i <= a; i++) {
            result *= i;
        }
        return result;
    },
};
(async () => {
    // Display the welcome message
    console.log(chalk.green("Welcome to the scientific calculator console app."));
    while (true) {
        const { calculatorType } = await inquirer.prompt([
            {
                type: "list",
                name: "calculatorType",
                message: "Choose the type of calculator:",
                choices: ["Simple Calculator", "Scientific Calculator", "Exit"],
            },
        ]);
        if (calculatorType === "Exit") {
            // Add animated message for a stylish exit
            const exitMessage = chalkAnimation.rainbow("Exiting the program!");
            exitMessage.start();
            // After a brief delay, stop the animated message
            setTimeout(() => exitMessage.stop(), 1000);
            break;
        }
        let operations;
        if (calculatorType === "Simple Calculator") {
            operations = ["Addition", "Subtraction", "Multiplication", "Division", "Exit"];
        }
        else {
            operations = [
                "Sine",
                "Cosine",
                "Tangent",
                "Logarithm",
                "Square Root",
                "Exponentiation",
                "Power",
                "Factorial",
                "Exit",
            ];
        }
        const { operation } = await inquirer.prompt([
            {
                type: "list",
                name: "operation",
                message: "Choose an operation:",
                choices: operations,
            },
        ]);
        if (operation === "Exit") {
            // Add animated message for a stylish exit
            const exitMessage = chalkAnimation.rainbow("Exiting the program!");
            exitMessage.start();
            // After a brief delay, stop the animated message
            setTimeout(() => exitMessage.stop(), 1000);
            break;
        }
        if (operation in basicOperations) {
            const { num1, num2 } = await inquirer.prompt([
                {
                    type: "input",
                    name: "num1",
                    message: "Enter the first number:",
                    validate: (input) => !isNaN(parseFloat(input)) || "Please enter a valid number",
                },
                {
                    type: "input",
                    name: "num2",
                    message: "Enter the second number:",
                    validate: (input) => !isNaN(parseFloat(input)) || "Please enter a valid number",
                },
            ]);
            const result = basicOperations[operation](parseFloat(num1), parseFloat(num2));
            console.log(chalk.blue(`Result: ${result}`));
        }
        else if (operation in scientificOperations) {
            const questions = [
                {
                    type: "input",
                    name: "num1",
                    message: "Enter the number:",
                    validate: (input) => !isNaN(parseFloat(input)) || "Please enter a valid number",
                },
            ];
            if (operation === "Power") {
                questions.push({
                    type: "input",
                    name: "num2",
                    message: "Enter the exponent:",
                    validate: (input) => !isNaN(parseFloat(input)) || "Please enter a valid number",
                });
            }
            const answers = await inquirer.prompt(questions);
            const num1 = parseFloat(answers.num1);
            const num2 = answers.num2 ? parseFloat(answers.num2) : undefined;
            const result = scientificOperations[operation](num1, num2);
            console.log(chalk.blue(`Result: ${result}`));
        }
    }
})();

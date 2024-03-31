#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter first number:",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter second number:",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select one of the operators to perform action:",
    type: "list",
    name: "operator",
    choices: [
      { name: "Addition(+)", value: "+" },
      { name: "Subtraction(-)", value: "-" },
      { name: "Multiplication(*)", value: "*" },
      { name: "Division(/)", value: "/" },
    ],
    value: "operator",
  },
]);

let firstNumber: number = answer.firstNumber;
let secondNumber: number = answer.secondNumber;
let operator: string = answer.operator;
let result: number;
switch (operator) {
  case "+":
    console.log(
      `Result: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
    );
    break;
  case "-":
    console.log(
      `Result: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`
    );
    break;
  case "*":
    console.log(
      `Result: ${firstNumber} ${operator} ${secondNumber} = ${
        firstNumber * secondNumber
      }`
    );
    break;
  case "/":
    if (secondNumber == 0) {
      console.log("Error: Cannot divide by zero.");
    }
else{
    console.log(
      `Result: ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`
    );}
    break;
  default:
    console.log("Invalid operator selected.");
}

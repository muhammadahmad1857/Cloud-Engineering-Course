// // Example of promise
// // const promise: Promise<string> = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("This is done!");
// //   }, 3000);
// // });
// // Why we use promise
// // like we have to change the json file into pdf file
// // I have to get the data from database
// // Data display on screen, until the data don't be get we have to show loader
// // making a promise and promise accept a callback function
// const promise: Promise<string> = new Promise((fullFill, reject) => {
//   fullFill("Promise successfully executes");
// });
// // that's how the promise workd
// promise
//   .then((data: string) => {
//     console.log(data);
//   })
//   .catch((error: string) => {
//     console.log(error);
//   });
// // Our code is getting complex and complex because of the promises like in e-commerce apllication we have to check if it's fullfile then do this promise etc.
// // Asynchronous Functions(async/await)
// // syntax of async function using Function keyword(we have to add async keyword before "function" keyword)
// // async function functionName(): Promise<void> {
// //   // code
// // }
// // syntax of async function using arrow function(we have to add async after the assigning operator)
// // const functionName: Promise<void> = async () => {
// //   // code
// // }
// // async function always returns a promise
// const getData = async (): Promise<void> => {
//   // tryCatch
//   try {
//     const response = await fetch("https://dummyjson.com/products?limit=1");
//     // converting data to JSON format it may take some time that's why we are using await here
//     const data = await response.json();
//     console.log("Get Data:  Data: ", data);
//   } catch (error) {
//     // catch gives us a error message
//     console.log("Get Data: Error: ", error);
//   }
// };
// getData();
// // Inquirer for taking prompt from user we had to run this command in our terminal: `npm install inquirer` and see package detail at `https://npmjs.com/package/inquirer` if after name of the package at npm written "dt" then we had also to install it types beacuase it is maked in javascript  using command `npm install --save-dev @types/inquirer`. in this the --save-dev option is because of we only need this during developement stage
// Importing inquirer
import inquirer from "inquirer";
// Creating questions
// interface Questions {
//   age: number;
// }
// // we use await because user needs some time to answer the questions
// const questions: Questions = await inquirer.prompt([
//   {
//     // NAME OF THE KEY
//     name: "age",
//     // TYPE OF THE KEY
//     type: "number",
//     // MESSAGE TO BE DISPLAYED
//     message: "What is your age?  ",
//   },
// ]);
// console.log(questions); // inquirer returns us object
// making simple claculator using inquirer
// interface CalculatorQuestions {
//   num1: number;
//   operator: string;
//   num2: number;
// }
// const calculatorQuestions: CalculatorQuestions = await inquirer.prompt([
//   {
//     name: "num1",
//     type: "number",
//     message: "Enter first number:  ",
//   },
//   {
//     name: "num2",
//     type: "number",
//     message: "Enter second number:  ",
//   },
//   {
//     name: "operator",
//     type: "list",
//     message: "Select operator:  ",
//     choices: ["+", "-", "*", "/"],
//   },
// ]);
// let result: number = 0;
// const num1: number = calculatorQuestions.num1;
// const num2: number = calculatorQuestions.num2;
// const operator: string = calculatorQuestions.operator;
// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;
//     break;
//   default:
//     console.log("Invalid operator");
//     break;
// }
// console.log(
//   `The result of ${num1} ${operator} ${num2} is equal to  ${result}`
// );
// checking all types of inquirer
// Input
const inputQuestion = await inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your username?",
    },
]);
console.log("Example of input type", inputQuestion);
// Number
const numberQuestion = await inquirer.prompt([
    {
        type: "number",
        name: "age",
        message: "How old are you?",
    },
]);
console.log("Example of number type", numberQuestion);
// Confirm
const confirmQuestion = await inquirer.prompt([
    {
        type: "confirm",
        name: "confirm",
        message: "Do you confirm?",
    },
]);
console.log("Example of confirm type", confirmQuestion);
// List
const listQuestion = await inquirer.prompt([
    {
        type: "list",
        name: "color",
        message: "Pick a color:",
        choices: ["Red", "Green", "Blue"],
    },
]);
console.log("Example of list type", listQuestion);
// Rawlist
const rawlistQuestion = await inquirer.prompt([
    {
        type: "rawlist",
        name: "day",
        message: "Pick a day of the week:",
        choices: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
    },
]);
console.log("Example of rawlist type", rawlistQuestion);
// Expand
const expandQuestion = await inquirer.prompt([
    {
        type: "expand",
        name: "difficulty",
        message: "Select the difficulty level:",
        choices: [
            {
                key: "e",
                name: "Easy",
                value: "easy",
            },
            {
                key: "m",
                name: "Medium",
                value: "medium",
            },
            {
                key: "s",
                name: "Supreme",
                value: "supreme",
            },
        ],
    },
]);
console.log("Example of expand type", expandQuestion);
// Checkbox
const checkboxQuestion = await inquirer.prompt([
    {
        type: "checkbox",
        name: "fruits",
        message: "Select the fruits you like:",
        choices: ["Apple", "Banana", "Orange", "Grape"],
    },
]);
console.log("Example of checkbox type", checkboxQuestion);
// Password
const passwordQuestion = await inquirer.prompt([
    {
        type: "password",
        name: "password",
        message: "Enter your password:",
    },
]);
console.log("Example of password type", passwordQuestion);
// Editor
const editorQuestion = await inquirer.prompt([
    {
        type: "editor",
        name: "bio",
        message: "Write a short bio:",
    },
]);
console.log("Example of editor type", editorQuestion);

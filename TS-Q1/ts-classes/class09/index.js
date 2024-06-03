// MPM: For the answer, see Readme.md
// Chalk: We use chalk for styling the console output, such as adding colors and styles.
// Chalk installation: Run `npm install chalk` in your terminal to install the chalk library.
// And for the typing of chalk (TypeScript definitions): Run `npm install --save-dev @types/chalk` in your terminal.
// Importing chalk into your project
import chalk from "chalk";
// Using chalk to style console output with different colors
console.log(chalk.blue("Testing new color")); // Outputs text in blue color
console.log(chalk.red("Testing another color")); // Outputs text in red color
console.log(chalk.yellowBright("Testing yellow color")); // Outputs text in bright yellow color
// Difference between asynchronous and synchronous behavior: See Readme.md
// setTimeout: Executes a function after a specified delay (in milliseconds)
setTimeout(() => {
    console.log("Setting time"); // This message will be logged after 2 seconds
}, 2000);
// Now this code run first because we use setTimeout because the code run step-vy-step
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
// if we give the delay of 0 seconds still it runs an end because of the behaviour some videos link related to understanding setTimeOut is in README.md
setTimeout(() => {
    console.log("Setting time with 0ms"); // This message will be logged after 2 seconds
}, 0);
// Now this code run first because we use setTimeout because the code run step-vy-step
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
// setInterval: Executes a function repeatedly
const intervalId = setInterval(() => {
    console.log("It repeated until we don't clear the interval");
}, 100);
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Clearing the interval");
}, 500);
// it also work as while loop
let i = 0;
const interval = setInterval(() => {
    i += 1;
    console.log(`i in interval = ${i}`);
}, 100);
setTimeout(() => {
    clearInterval(interval);
    console.log("Clearing the interval");
}, 500);
// what if we 0 value delay
const intervals = setInterval(() => {
    i += 1;
    console.log(`i in interval = ${i}`);
    if (i === 10)
        clearInterval(intervals);
}, 0);
// basics of OOP: what is an  instance
class Person {
}
const person = new Person(); // here we create an instance of Person
person.name = "John";
console.log(person.name); // output: "John"
const person2 = new Person();
person2.name = "Doe";
console.log(person2.name); // output: "Doe"
// Promises: Promises are objects that represent the eventual completion (or failure) of an asynchronous operation, and their resulting value.
const promise = new Promise((resolve, reject) => {
    const success = true; // Simulate a successful or failed API call
    setTimeout(() => {
        if (success) {
            resolve("Data fetched successfully");
        }
        else {
            reject("Failed to fetch data");
        }
    }, 2000); // Simulate a 2-second delay
});
// Promise.then()
promise
    .then((data) => {
    console.log(data);
})
    .catch((error) => console.log(error));

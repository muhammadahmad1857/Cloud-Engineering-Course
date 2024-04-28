// switch...case
// Swicth case is also a conditional satement for other inquiries see readme.md
// we use break keyword after every case to stop the block of the previou case.
// basically we use break keyword to get out from the block we also use it in loop
// we only use switch statement when we have to check equality otherwise we use if...else.
let dayNumber = 6;
switch (dayNumber) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Not a valid day number");
        break;
}
// From month name print its month number and days in the specific month using switch case condiltional.
let monthName = "january";
switch (monthName) {
    case "january":
        console.log(`The month number of month '${monthName}' is 1 and there are 31 days in it.`);
        break;
    case "febraury":
        console.log(`The month number of month '${monthName}' is 2 and there are 28 days in it.`);
        break;
    case "march":
        console.log(`The month number of month '${monthName}' is 3 and there are 31 days in it.`);
        break;
    case "april":
        console.log(`The month number of month '${monthName}' is 4 and there are 30 days in it.`);
        break;
    case "may":
        console.log(` The month number of month '${monthName}' is 5 and there are 31 days in it.`);
        break;
    case "june":
        console.log(`The month number of month '${monthName}' is 6 and there are 30 days in it.`);
        break;
    case "july":
        console.log(`The month number of month '${monthName}' is 7 and there are 31 days in it.`);
        break;
    case "august":
        console.log(` The month number of month '${monthName}' is 8 and there are 31 days in it.`);
        break;
    case "september":
        console.log(`The month number of month '${monthName}' is 9 and there are 30 days in it.`);
        break;
    case "october":
        console.log(` The month number of month '${monthName}' is 10 and there are 31 days in it.`);
        break;
    case "november":
        console.log(`The month number of month '${monthName}' is 11 and there are 30 days in it.`);
        break;
    case "december":
        console.log(`The month number of month '${monthName}' is 12 and there are 31 days in it.`);
        break;
}
// using if...else in case and or operator in case
let monthName1 = "febraury";
let year = 2000;
let leapyear = (year % 4 === 0 && year % 100 === 0) || year % 400 === 0;
switch (monthName1) {
    case "january" ||
        "march" ||
        "may" ||
        "july" ||
        "august" ||
        "october" ||
        "december":
        console.log(`The month '${monthName1}' has 31 days in it.`);
        break;
    case "april" || "june" || "september" || "november":
        console.log(`The month '${monthName1}' has 30 days in it.`);
        break;
    case "febraury":
        if (leapyear) {
            console.log(`The month '${monthName1}' has 28 days in it.`);
        }
        else {
            console.log(`The month '${monthName1}' has 29 days in it.`);
        }
        break;
    default:
        console.log("Invalid month name");
}
/// functions.Syntax: function <functionName> (<param>){
// body
// }
function hello_world() {
    console.log("Hello world! from inside a function!");
}
console.log("Hello world!");
// Calling a function and we can call function multiple times
hello_world();
function add() {
    let num1 = 10;
    let num2 = 20;
    console.log(`After adding ${num1} in ${num2} the result is ${num1 + num2}`);
}
// calling function multiple times
add();
add();
add();
// parameters: parameters are like variables which value we take as arguments like add(10,20) it make our function more reusable
// the variables we take from function is called parameter and the values we give to function at time of calling it is called argunments
function minus(num1, num2) {
    console.log(`when we minus ${num1} from ${num2} the result is ${num2 - num1}`);
}
// calling function multiple times with different argument values
minus(10, 20);
minus(20, 30);
minus(30, 46);
// write a ts program to check that number is positive negative or zero using function
function classifyNumber(num) {
    if (num > 0) {
        console.log(`${num} is a positive number`);
    }
    else if (num < 0) {
        console.log(`${num} is a negative number`);
    }
    else {
        console.log(`${num} is equal to zero`);
    }
}
classifyNumber(10);
classifyNumber(-10);
classifyNumber(0);
function login(email, password) {
    console.log(email, password);
}
const val = () => {
    console.log("Welcome to arrow functions");
};
const sumWithReturn = (numb) => {
    var num1 = 10;
    return num1 + numb;
};
console.log(sumWithReturn(10));
var resp3 = sumWithReturn(10);
var resp4 = sumWithReturn(20);
let val1 = 10;
const data = () => {
    console.log("Hello World");
    if (val1 === 10) {
        val1++;
        data();
    }
};
data();
const _print = (value) => {
    console.log("VAlue inside functions", value);
};
const sum = (num1, num2) => {
    _print(num1 + num2);
    return num1 + num2;
};
var value2 = sum(10, 20);
console.log(value2);
export {};

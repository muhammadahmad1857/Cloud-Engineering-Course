// Using conditional statements

// 1.check if the number is:

// const num: number = 5; // the variable num is used for all methods related to check number

// - Even or Odd.

//  for dynaimc programming check if number is greater than 0
// if (num > 0) {
// check if the number is even
//   if (num % 2 === 0) {
//     console.log(`Number ${num} is a even number`);
//   } else {
//     console.log(`Number ${num} is a odd number`);
//   }
// } else {
//   console.log(`Number ${num} is neither odd nor even`);
// }

// - Positive, Negative, or Zero.
// check if the number is zero or
// if (num === 0) {
//   console.log(`Number ${num} is zero`);
// }
// // check if the number is positive
// else if (num > 0) {
//   console.log(`Number ${num} is positive`);
// }
// // print number is negative becuase if number niether zero or nor positive then it will be negative
// else {
//   console.log(`Number ${num} is negative`);
// }

// - Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.

// check if it is divisible by 2
// if (num % 2 == 0) {
//   console.log(`Number ${num} is divisible by 2 number`);
// }
// // check if it is divisible by 3
// else if (num % 3 == 0) {
//   console.log(`Number ${num} is divisible by 3 number`);
// } else {
//   console.log(`Number ${num} is neither divisible by 3 nor 2.`);
// }

// 2. Take the user age.
// - If the age is 18 or above:
// - Ask if they have a nationality of "Pakistani".
// -If yes, print "You are eligible to vote."
// -If no, print "Please obtain a valid ID to vote."

// const age: number = 20;
// const nationality: string = "Pakistani";
// // check if age is greater or equal than 18
// if (age >= 18) {
//   // nested if to check the user nationality is pakistani or not
//   if (nationality === "Pakistani") {
//     console.log("You are eligible to vote.");
//   } else {
//     console.log("Please obtain a valid ID to vote.");
//   }
// } else {
//   console.log("You are not elgible to vote.");
// }

// 3. Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above)

// const age: number = 13;
// if (age >= 0 && age <= 12) {
//   console.log("You are a child.");
// }

// else if (age >= 13 && age <= 19) {
//   console.log("You are a teenager.");
// }
// else if(age >= 20 && age <= 59){
//     console.log("You are an adult.");
// }
// else{
//     console.log("You are a senior citizen.");
// }

// 4. Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year.
// const monthNumber: number = 1;
// // checking if month number is equal to 1
// if (monthNumber === 1) {
//   console.log(`In month No. ${monthNumber} there are 31 days.`);
// }
// // checking if month number is equal to 2

// else if (monthNumber === 2) {
//   console.log(`In month No. ${monthNumber} there are 28 days.`);
// }
// // checking if month number is equal to 3
//  else if (monthNumber === 3) {
//   console.log(`In month No. ${monthNumber} there are 31 days.`);
// }
// // checking if month number is equal to 4
// else if (monthNumber === 4) {
//   console.log(`In month No. ${monthNumber} there are 30 days.`);
// }
// // checking if month number is equal to 5
// else if (monthNumber === 5) {
//   console.log(`In month No. ${monthNumber} there are 31 days.`);
// }
// // checking if month number is equal to 6
// else if (monthNumber === 6) {
//   console.log(`In month No. ${monthNumber} there are 30 days.`);
// }
// // checking if month number is equal to 7
// else if (monthNumber === 7) {
//   console.log(`In month No. ${monthNumber} there are 31 days.`);
// }
// // checking if month number is equal to 8
//  else if (monthNumber === 8) {
//   console.log(`In month No. ${monthNumber} there are 31 days.`);
// }
// // checking if month number is equal to 9
//  else if (monthNumber === 9) {
//   console.log(`In month No. ${monthNumber} there are 30 days.`);
// }
// // checking if month number is equal to 10
//  else if (monthNumber === 10) {
//   console.log(`In month No. ${monthNumber} there are 31 days.`);
// }
// // checking if month number is equal to 11
// else if (monthNumber === 11) {
//   console.log(`In month No. ${monthNumber} there are 30 days.`);
// }
// // checking if month number is equal to 12

// else if (monthNumber === 12) {
//   console.log(`In month No. ${monthNumber} there are 31 days.`);
// } else {
//   console.log(`Please add a valid month No. between 1-12`);
// }

// 5. Check if a year is a leap year or not.

// const year: number = 2020;

// if (year % 4 === 0) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

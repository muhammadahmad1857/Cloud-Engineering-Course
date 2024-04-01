// Using conditional statements
export {};
// 1.check if the number is:
// const num: number = 6; // the variable num is used for all methods related to check number
// // Check if the number is even, odd, or neither
// if (num > 0) {
//   if (num % 2 === 0) {
//     console.log(`Number ${num} is even.`);
//   } else {
//     console.log(`Number ${num} is odd.`);
//   }
// } else {
//   console.log(`Number ${num} is neither odd nor even.`);
// }
// Check if the number is positive, negative, or zero
// if (num > 0) {
//   console.log(`Number ${num} is positive.`);
// } else if (num < 0) {
//   console.log(`Number ${num} is negative.`);
// } else {
//   console.log(`Number ${num} is zero.`);
// }
// Check divisibility by 2 and 3
// if (num !== 0) {
//   if (num % 2 === 0 && num % 3 === 0) {
//     console.log(`Number ${num} is divisible by both 2 and 3.`);
//   } else if (num % 2 === 0) {
//     console.log(`Number ${num} is divisible by 2 only.`);
//   } else if (num % 3 === 0) {
//     console.log(`Number ${num} is divisible by 3 only.`);
//   } else {
//     console.log(`Number ${num} is neither divisible by 2 nor 3.`);
//   }
// } else {
//   console.log(`Zero(0) can't be divisible by any number.`);
// }
// 2. Take the user age.
// - If the age is 18 or above:
// - Ask if they have a nationality of "Pakistani".
// -If yes, print "You are eligible to vote."
// -If no, print "Please obtain a valid ID to vote."
// const ageVoting: number = 20;
// const nationalityVoting: string = "Pakistani";
// if (ageVoting >= 18) {
//   if (nationalityVoting === "Pakistani") {
//     console.log("You are eligible to vote.");
//   } else {
//     console.log("Please obtain a valid ID to vote.");
//   }
// } else {
//   console.log("You are not eligible to vote.");
// }
// 3. Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above)
// const age: number = 19;
// if (age >= 60) {
//   console.log("You are a senior citizen.");
// } else if (age >= 20) {
//   console.log("You are an adult.");
// } else if (age >= 13) {
//   console.log("You are a teenager.");
// } else {
//   console.log("You are a child.");
// }
// 4. Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year.
// const monthNumber: number = 13;
// if (
//   monthNumber === 1 ||
//   monthNumber === 3 ||
//   monthNumber === 5 ||
//   monthNumber === 7 ||
//   monthNumber === 8 ||
//   monthNumber === 10 ||
//   monthNumber === 12
// ) {
//   console.log(`In month No. ${monthNumber} there are 31 days.`);
// } else if (monthNumber === 2) {
//   console.log(`In month No. ${monthNumber} there are 28 days.`);
// } else if (
//   monthNumber === 4 ||
//   monthNumber === 6 ||
//   monthNumber === 9 ||
//   monthNumber === 11
// ) {
//   console.log(`In month No. ${monthNumber} there are 30 days.`);
// } else {
//   console.log(`The month number is inavlid\n please enter a month number between 1-12`);
// }
// 5. Check if a year is a leap year or not.
// const year: number = 1900;
// //  we add the line "&& (year % 100 !== 0 || year % 400 === 0)" because of some numbers are divisible by 4 but these are not leap years like 1900 is divisible by 4 but not by 400
// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

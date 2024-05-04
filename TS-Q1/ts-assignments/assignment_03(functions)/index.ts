// Using conditional statements, check if the number is:

// - Even or Odd.
// - Positive, Negative, or Zero.
// - Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.

let num: number = 8;
const checkIsPosNegOrZero = (numb: number) => {
  switch (true) {
    case numb > 0:
      console.log(`${numb} is a positive number.`);
      break;
    case numb < 0:
      console.log(`${numb} is a negative number.`);
      break;
    default:
      console.log(`${numb} is zero.`);
      break;
  }
};

const checkEvenOrOdd = (numb: number) => {
  switch (true) {
    case numb === 0:
      console.log(`${numb} is neither even nor odd.`);
      break;
    case numb % 2 === 0:
      console.log(`${numb} is an even number.`);
      break;
    default:
      console.log(`${numb} is an odd number.`);
      break;
  }
};

const checkDivisibility = (numb: number) => {
  switch (true) {
    case numb === 0:
      console.log(`${numb} is zero, so it's not divisible by any number.`);
      break;
    case numb % 2 === 0 && numb % 3 === 0:
      console.log(`${numb} is divisible by both 2 and 3.`);
      break;
    case numb % 2 === 0:
      console.log(`${numb} is divisible by 2.`);
      break;
    case numb % 3 === 0:
      console.log(`${numb} is divisible by 3.`);
      break;
    default:
      console.log(`${numb} is not divisible by both 2 and 3.`);
      break;
  }
};

checkDivisibility(num);
checkEvenOrOdd(num);
checkIsPosNegOrZero(num);

// - Take the user age.
// - If the age is 18 or above:
// - Ask if they have a nationality of "Pakistani".
//   - If yes, print "You are eligible to vote."
//   - If no, print "Please obtain a valid ID to vote."

const checkEligibleToVote = (age: number, nationality: string): void => {
  if (age >= 18) {
    if (nationality === "Pakistani") {
      console.log("You are eligible to vote.");
    } else {
      console.log("Please obtain a valid ID to vote.");
    }
  } else {
    console.log("You are not eligible to vote.");
  }
};

let ageToVote: number = 18;
let nationalityToVote: string = "Pakistani";

checkEligibleToVote(ageToVote, nationalityToVote);

// - Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above)

const checkAge = (age: number): void => {
  if (age >= 0) {
    if (age <= 12) {
      console.log("You are a child.");
    } else if (age <= 19) {
      console.log("You are a teenager.");
    } else if (age <= 59) {
      console.log("You are an adult.");
    } else {
      console.log("You are a senior citizen.");
    }
  } else {
    console.log("Please enter a valid age.");
  }
};

let age: number = 17;

checkAge(age);

// - Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year.

const checkDaysInMonth = (monthNo: number): void => {
  switch (monthNo) {
    case 1:
      console.log("The month January has 31 days");
      break;
    case 2:
      console.log("The month Febraury has 28 days");
      break;
    case 3:
      console.log("The month March has 31 days");
      break;
    case 4:
      console.log("The month April has 30 days");
      break;
    case 5:
      console.log("The month May has 31 days");
      break;
    case 6:
      console.log("The month June has 30 days");
      break;
    case 7:
      console.log("The month July has 31 days");
      break;
    case 8:
      console.log("The month August has 31 days");
      break;
    case 9:
      console.log("The month September has 30 days");
      break;
    case 10:
      console.log("The month October has 31 days");
      break;
    case 11:
      console.log("The month November has 30 days");
      break;
    case 12:
      console.log("The month December has 31 days");
      break;
    default:
      console.log("Please enter a valid month number between 1 and 12.");
      break;
  }
};

let monthNo: number = 7;

checkDaysInMonth(monthNo);

// - Check if a year is a leap year or not.

const checkLeapYear = (year: number): void => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
};

let year: number = 1900;

checkLeapYear(year);

// - Calculate your age based on the current year and your birth year.

const calculateAge = (birthYear: number, currentYear: number): void => {
  let age: number = currentYear - birthYear;
  console.log(`You are ${age} years old.`);
};

let birthYear: number = 2009;
let currentYear: number = new Date().getFullYear();
calculateAge(birthYear, currentYear);

// - Write a program that calculates the area of a rectangle using length and width variables.

const calculateArea = (length: number, width: number): void => {
  let area: number = length * width;
  console.log(
    `The area of the rectangle which has hieght of ${length}m and width of ${width}m, is ${area.toFixed(
      2
    )}m².`
  );
};

let l: number = 10;

let w: number = 20;

calculateArea(l, w);

// - Write a program that calculates the area of a circle.

const calculateAreaOfCircle = (r: number): void => {
  let area: number = Math.PI * r * r;
  console.log(
    `The area of the circle with the radius ${r}m, is ${area.toFixed(2)}m².`
  );
};

let radius: number = 10;

calculateAreaOfCircle(radius);

// - Write a program that calculates the area of the cube.

const calculateAreaOfCube = (side: number): void => {
  let area: number = side * side * side;
  console.log(
    `The area of the cube with each side of ${side}m, is ${area.toFixed(2)}m³.`
  );
};

let side: number = 10.9;

calculateAreaOfCube(side);

// - Create a program that converts a temperature from Fahrenheit to Celsius and vice versa

const convertTemperature = (temperature: number, unit: string): void => {
  switch (unit) {
    case "f":
      // Fahrenheit to Celsius conversion
      let celsius = ((temperature - 32) * 5) / 9;
      console.log(temperature + "°F is equal to " + celsius.toFixed(2) + "°C");
      break;
    case "c":
      // Celsius to Fahrenheit conversion
      let fahrenheit = (temperature * 9) / 5 + 32;
      console.log(
        temperature + "°C is equal to " + fahrenheit.toFixed(2) + "°F"
      );
      break;
    default:
      console.log(
        "Invalid unit. Please use 'F' for Fahrenheit or 'C' for Celsius."
      );
      break;
  }
};

convertTemperature(32, "F"); // Convert 32°F to Celsius
convertTemperature(100, "C"); // Convert 100°C to Fahrenheit

// - Convert a given number of seconds into minutes and seconds using variables

const convertSeconds = (seconds: number): void => {
  let minutes: number = Math.floor(seconds / 60);
  let remainingSeconds: number = seconds % 60;
  console.log(
    `${seconds} seconds is equal to ${minutes} minutes and ${remainingSeconds} seconds.`
  );
};

let seconds: number = 3608;

convertSeconds(seconds);

// - Write a program that calculates the percentage.

const calculatePercentage = (marks: number, totalMarks: number): void => {
  let percentage: number = (marks / totalMarks) * 100;
  console.log(
    `if the user obtain ${marks} out of ${totalMark} , The user will get ${percentage.toFixed(
      2
    )} percentage`
  );
};
let obtainedMarks: number = 1044;
let totalMark: number = 1100;

calculatePercentage(obtainedMarks, totalMark);

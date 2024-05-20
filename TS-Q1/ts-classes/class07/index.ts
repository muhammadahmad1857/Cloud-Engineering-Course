// Assignment Solution
// const addValueInArray = (arr: string[], index: number, value: string) => {
//   let newArr = arr.slice(0);
//   newArr.splice(index, 0, value);
//   return newArr;
// };

// const returnedValue = addValueInArray(["Abu Hurairah", "Naveed"], 1, "Azhar");
// console.log("🚀 ~ returnedValue:", returnedValue);

// let myName = "Ahmad";
// console.log(myName[0]);
// console.log(myName.slice(0));
// -----------------------------------------
// Functions Revision
// const addTwoValues = (num1: number, num2: number) => {
//   return num1 + num2; //xyz123
// };

// const functionAsParam = (
//   func: (num: number, num5: number) => number,
//   withMultiply: number
// ) => {
//   return func(20, 30) * withMultiply;
// };

// const ans = functionAsParam(addTwoValues, 10);
// console.log("🚀 ~ ans:", ans);

// const returnAValue = (val: string) => {
//   return val;
// };

// const concatString = (
//   returnAValue: (variable: string) => string,
//   concat: string
// ) => {
//   let returnedValue = returnAValue("Testing");
//   console.log("🚀 ~ concatString ~ returnedValue:", returnedValue + concat);
// };

// concatString(returnAValue, " my program");
// ---------------------------
// Loops
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] + 10);
// }

// let k = 0;
// do {
//   console.log("Testing");
//   k++;
// } while (k < 0);

// ---------------------------------
/* `Map`, `Filter`, and `Foreach`*/
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arrayMethod = (abc: number, index: number) => {
//   if ((index + abc) % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// let mapReturn = arr.map(arrayMethod);
// console.log("🚀 ~ mapReturn:", mapReturn);

// const names = ["Abu Hurairah", "Naveed", "Azhar", "Usman"];

// const namesUpdate = (nam: string, index: number) => {
//   if (nam === "Usman") {
//     return "M. Usman";
//   }
//   return nam;
// };

// const newNames = names.map(namesUpdate);
// console.log("🚀 ~ newNames:", newNames);

// let nums = [-1, 2, 3, -5, 4, -9, 8, -8, -8, -8];

// const customFunction = (val: number) => {
//   if (val < 0) {
//     console.log("Negative");
//     return "Negative";
//   } else {
//     console.log("Positive");
//     return "Positive";
//   }
// };

// const data = nums.map(customFunction);
// console.log("🚀 ~ data:", data);

// Map Loop...

// It is also a array method...
// Returns New Array...
// Do not Change Original Array...
// Do not work on empty array...
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Syntax...
let newNumbers: number[] = numbers.map(
  (element: number, index: number): number => {
    return element * index;
  }
);
console.log("newNumbers2", newNumbers);

// / Filter Loop...

// It is also a array method...
// Returns New Array...
// Do not Change Original Array...
// Do not work on empty array...
// Used to filter out array by applying conditions in call back function if condition is true then element will be added in new array...
let numbers2: number[] = [2, 4, 6, 8, 25, 24, 99, 56, 120, 23, 124];
// Syntax...

let newNumbers2: number[] = numbers2.filter((element: number) => {
  return element % 2 == 0;
});
console.log("newNumbers3", newNumbers2);

// For Each loop...

let numbers3: number [] = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9, 10];
// Applying ForEach array method Also we can say it a array loop because it is specified for array...
// Syntax...
numbers3.forEach((element: number , index: number , refArray: number []) => {
    // If we want to apply a function on each element of array...
    // We are to double each element of array...
    console.log(element * 2);
});
// It always returns undefined...

const names = [
  "Ali",
  "Usman",
  "Azhar",
  "Naveed",
  "Abu Hurairah",
  "Ramzan",
  "Rizwan",
  "Sultan",
  "Mahad",
  "Zain",
  "Imran",
];

const filteredNames = names.filter((name: string) => {
  if (name !== "Abu Hurairah") {
    return true;
  }
});
console.log("🚀 ~ filteredNames ~ filteredNames:", filteredNames);

// Assignment 05 (map, filter, forEach)

// - Write a program that uses filter to remove all negative numbers from an array of numbers

const integers: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10,
];

// Filter out negative numbers from the array

const positiveIntegers: number[] = integers.filter((num) => num >= 0);

console.log("Before removing negative integers:", integers);
console.log("After removing negative integers:", positiveIntegers);

// - Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

const numbers: number[] = [1, 2, 3, 4, 5];

// Create a new array with each number multiplied by 2

const doubledNumbers: number[] = numbers.map((num) => num * 2);

console.log("Original numbers:", numbers);
console.log("Numbers after being doubled:", doubledNumbers);

// - Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

const fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];

// Filter fruits with more than 5 characters

const longFruits: string[] = fruits.filter((fruit) => fruit.length > 5);

console.log("All fruits:", fruits);
console.log("Fruits with more than 5 characters:", longFruits);

// - Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

const nums: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers and then map to their squares

const evenSquares: number[] = nums
  .filter((numb) => numb % 2 === 0) // Even numbers are whole numbers that are divisible by 2, including 0 and negative even numbers. That's why we are not checking it it is greater than 0 or equals to 0. because both are even
  .map((evenNum) => evenNum * evenNum);

console.log("Original numbers:", nums);
console.log("Squares of even numbers:", evenSquares);

// - Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

const celsius: number[] = [0, 10, 20, 30, 40];

// Convert Celsius temperatures to Fahrenheit

const fahrenheit: number[] = celsius.map((temp) => (temp * 9) / 5 + 32);

console.log("Temperatures in Celsius:", celsius);
console.log("Temperatures in Fahrenheit:", fahrenheit);

// - Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

const values: number[] = [3, 6, 9, 12, 15, 18];

// Filter odd numbers and then map to their doubled values
const doubledOddnumbers: number[] = values
  .filter((value) => value % 2 !== 0)
  .map((oddNum) => oddNum * 2);

console.log("Original numbers:", values);
console.log("Doubled values of odd numbers:", doubledOddnumbers);

// - Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

const names: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
console.log("Original names:", names);

// Log each name with an exclamation mark at the end

names.forEach(name => console.log(name + "!"));

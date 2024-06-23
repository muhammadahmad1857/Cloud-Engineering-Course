# Class 04: Switch Statement and Functions in TypeScript

In this class, we will explore several important concepts in TypeScript and JavaScript, including switch statements, function declarations, function parameters, function arguments, arrow functions, the `return` keyword, and recursive functions.

## Topics Covered:

1. [Switch Statement](#switch-statement)

   - What is a switch statement
   - Why we use switch instead of if-else
   - Syntax
   - Examples
   - Use cases

2. [If-Else vs. Switch](#if-else-vs-switch)

   - When to use if-else
   - When to use switch

3. [Function Declaration](#function-declaration)

   - What is a function
   - What is function declaration
   - Syntax
   - Examples

4. [Function Parameters](#function-parameters)

   - What are function parameters
   - Syntax
   - Default parameters
   - Examples

5. [Function Arguments](#function-arguments)

   - What are arguments
   - How to call function with parameters
   - Differences between parameters and arguments
   - Examples

6. [Arrow Functions](#arrow-functions)

   - What is an arrow function
   - Why we use arrow functions instead of simple functions
   - Syntax
   - Benefits
   - Examples

7. [Return Keyword](#return-keyword)

   - What is the return keyword
   - Why is it used
   - Usage
   - Examples

8. [Recursive Functions](#recursive-functions)
   - What is a recursive function
   - Why is it used
   - Definition
   - Base case
   - Examples

## Summary

This class covers essential concepts in TypeScript and JavaScript programming, including switch statements for multi-case branching, function declarations for defining reusable code blocks, function parameters and arguments for passing data to functions, arrow functions for concise syntax and lexical scoping, the return keyword for exiting functions and returning values, and recursive functions for solving problems through self-referential algorithms.

By mastering these concepts, you will gain a deeper understanding of programming fundamentals and be better equipped to write efficient and maintainable code.

Now, let's delve deeper into each topic:

## Switch Statement

A switch statement is a control flow statement that allows a program to evaluate an expression and execute code blocks based on matching cases.

### What is a switch statement

A switch statement evaluates an expression and matches its value to a case label. It then executes the associated block of code.

### Why we use switch instead of if-else

Switch statements are used instead of if-else when there are multiple conditions based on a single value. Switch can be more readable and concise in such cases.

### Syntax:

```typescript
switch (expression) {
  case value1:
    // code block 1
    break;
  case value2:
    // code block 2
    break;
  default:
    // default code block
}
```

### Examples:

```typescript
let day: number = 3;
let dayName: string;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName); // Output: Wednesday
```

### Use Cases:

- Handling multiple conditions with different outcomes.
- Improving readability and maintainability of code.

## If-Else vs. Switch

Both if-else and switch statements are used for decision making, but they are suited to different scenarios.

### When to use if-else:

- When there are only a few conditions to check.
- When conditions are complex and not easily represented by a switch statement.
- When conditions involve non-constant expressions.

### When to use switch:

- When there are multiple possible conditions to evaluate against a single value.
- When conditions are simple and can be represented by constant expressions.
- When the code needs to be more readable and concise.

## Function Declaration

A function declaration defines a named function that can be reused throughout the code.

### What is a function

A function is a block of code designed to perform a particular task. It is executed when it is called or invoked.

### What is function declaration

A function declaration is a way to define a function with a specific name and body of code.

### Syntax:

```typescript
function functionName(parameters) {
  // code block
}
```

### Examples:

```typescript
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!
```

## Function Parameters

Function parameters are placeholders for values that are passed to a function when it is called.

### What are function parameters

Parameters are variables listed as a part of the function definition. They receive values (arguments) when the function is called.

### Syntax:

```typescript
function functionName(param1: type, param2: type) {
  // code block
}
```

### Default parameters:

```typescript
function greet(name: string = "World"): void {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, World!
```

### Examples:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(3, 5)); // Output: 8
```

## Function Arguments

Function arguments are the actual values passed to a function when it is called.

### What are arguments

Arguments are the actual values supplied to the function parameters when the function is invoked.

### How to call a function with parameters

You call a function with parameters by providing the arguments in the parentheses of the function call.

### Differences between parameters and arguments

- Parameters are defined in the function declaration.
- Arguments are provided when calling the function.

### Examples:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(3, 5)); // Output: 8
```

## Arrow Functions

Arrow functions provide a concise syntax for writing functions in JavaScript.

### What is an arrow function

An arrow function is a shorter syntax for writing function expressions. It uses the `=>` syntax.

### Why we use arrow functions instead of simple functions

Arrow functions offer shorter syntax and have lexical scoping of the `this` keyword, making them useful for callbacks and methods where the context needs to be preserved.

### Syntax:

```typescript
const functionName = (parameters) => {
  // code block
};
```

### Benefits:

- Shorter syntax.
- Lexical scoping (preserving the context of `this`).

### Examples:

```typescript
const greet = (name: string): void => {
  console.log(`Hello, ${name}!`);
};

greet("Jane"); // Output: Hello, Jane!
```

## Return Keyword

The return keyword is used to exit a function and return a value to its caller.

### What is the return keyword

The `return` keyword terminates the execution of a function and specifies a value to be returned to the function caller.

### Why is it used

The `return` keyword is used to send a value back to the caller and to exit a function.

### Usage:

- To return a value from a function.
- To exit a function prematurely.

### Examples:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(3, 5)); // Output: 8
```

## Recursive Functions

A recursive function is a function that calls itself until a base condition is met.

### What is a recursive function

A recursive function solves problems by breaking them down into smaller, similar sub-problems and calling itself.

### Why is it used

Recursive functions are used to solve problems that can be divided into smaller, similar problems. They are often used in algorithms such as sorting and searching.

### Definition:

- Recursive functions solve problems by breaking them down into smaller, similar sub-problems.

### Base case:

- A base case is a condition that stops the recursion.

### Examples:

```typescript
function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
```

By understanding and practicing these concepts, you will be better prepared to write efficient and effective TypeScript and JavaScript code.
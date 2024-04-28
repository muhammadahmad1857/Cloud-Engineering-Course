# Class 04 (PIAIC)

In this class, we will explore several important concepts in TypeScript and JavaScript, including switch statements, function declarations, function parameters, function arguments, arrow functions, the `return` keyword, and recursive functions.

## Topics Covered:

1. [Switch Statement](#switch-statement)

   - Syntax
   - Examples
   - Use cases

2. [If-Else vs. Switch](#if-else-vs-switch)

   - When to use if-else
   - When to use switch

3. [Function Declaration](#function-declaration)

   - Syntax
   - Examples

4. [Function Parameters](#function-parameters)

   - Syntax
   - Default parameters
   - Examples

5. [Function Arguments](#function-arguments)

   - Differences from parameters
   - Examples

6. [Arrow Functions](#arrow-functions)

   - Syntax
   - Benefits
   - Differences from regular functions
   - Examples

7. [Return Keyword](#return-keyword)

   - Usage
   - Examples

8. [Recursive Functions](#recursive-functions)
   - Definition
   - Base case
   - Examples

## Summary

This class covers essential concepts in TypeScript and JavaScript programming, including switch statements for multi-case branching, function declarations for defining reusable code blocks, function parameters and arguments for passing data to functions, arrow functions for concise syntax and lexical scoping, the return keyword for exiting functions and returning values, and recursive functions for solving problems through self-referential algorithms.

By mastering these concepts, you will gain a deeper understanding of programming fundamentals and be better equipped to write efficient and maintainable code.

Now, let's delve deeper into each topic:

## Switch Statement

A switch statement is a control flow statement that allows a program to evaluate an expression and execute code blocks based on matching cases.

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

## Function Arguments

Function arguments are the actual values passed to a function when it is called.

### Differences from parameters:

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

### Syntax:

```typescript
const functionName = (parameters) => {
  // code block
};
```

### Benefits:

- Shorter syntax.
- Lexical scoping (preserving the context of this).

### Examples:

```typescript
const greet = (name: string): void => {
  console.log(`Hello, ${name}!`);
};

greet("Jane"); // Output: Hello, Jane!
```

## Return Keyword

The return keyword is used to exit a function and return a value to its caller.

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

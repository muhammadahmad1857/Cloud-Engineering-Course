# Class 07: Loops and Array Methods

In this class, we will cover different types of loops in TypeScript and how to manipulate arrays using built-in methods. Specifically, we'll look at:

- [for Loop](#for-loop)
- [do-while Loop](#do-while-loop)
- [Differences Between while Loops and do-while Loops](#difference-between-do-while-loops-and-while-loops)
- [for...in Loop](#for-in-loop)
- [for...of Loop](#for-of-loop)

- [map Method](#map-method)
- [filter Method](#filter-method)
- [forEach Method](#foreach-method)
- [Differences Between map, forEach, and filter](#differences-between-map-foreach-and-filter)
- [Callback Function](#callback-function)
- [Differences Between Array Loops and Other Loops](#differences-between-array-loops-and-other-loops)
- [Function as a Parameter](#function-as-a-parameter)

## `for` Loop

The `for` loop is one of the most commonly used loops in TypeScript. It repeats a block of code a specified number of times.

### Syntax

```typescript
for (initialization; condition; increment) {
  // code block to be executed
}
```

### Example

```typescript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

The `for` loop is useful when you know the exact number of iterations needed. It consists of three parts: initialization, condition, and increment.

## `do-while` Loop

The `do-while` loop is similar to the `while` loop, but it guarantees that the loop body will be executed at least once.

### Syntax

```typescript
do {
  // code block to be executed
} while (condition);
```

### Example

```typescript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0, 1, 2, 3, 4
```

The `do-while` loop is useful when you want to ensure that the loop body executes at least once before the condition is checked.

## Difference between `do-while` loops and `while` loops

### `while` Loop

- **Syntax**: The `while` loop executes a block of code as long as the specified condition evaluates to `true`.
- **Execution**: The condition is evaluated before executing the loop body. If the condition is `false` initially, the loop body is never executed.
- **Example**:
  ```typescript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  // Output: 0, 1, 2, 3, 4
  ```
- **Usage**: `while` loops are useful when you want to execute a block of code repeatedly based on a condition that may change during execution.

### `do-while` Loop

- **Syntax**: The `do-while` loop executes a block of code once before checking if the condition is `true`, then it will repeat the loop as long as the condition evaluates to `true`.
- **Execution**: The loop body is executed at least once, regardless of whether the condition is `true` or `false`.
- **Example**:
  ```typescript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  // Output: 0, 1, 2, 3, 4
  ```
- **Usage**: `do-while` loops are useful when you want to ensure that the loop body is executed at least once, regardless of the condition.

### Key Differences

1. **Execution Guarantee**: In a `while` loop, the loop body may never execute if the initial condition is `false`. In a `do-while` loop, the loop body always executes at least once.
2. **Condition Check**: In a `while` loop, the condition is checked before the loop body executes. In a `do-while` loop, the condition is checked after the loop body executes.
3. **Initialization**: Typically, the loop variable is initialized before entering a `while` loop, while it is often initialized after entering a `do-while` loop.

Sure, let's continue from the `for...in` loop and cover the remaining topics:

---

## `for...in` Loop

The `for...in` loop iterates over all enumerable properties of an object. In TypeScript, it's commonly used to iterate over object keys.

### Syntax

```typescript
for (variable in object) {
  // code block to be executed
}
```

### Example

```typescript
const person = { name: "John", age: 30 };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output: name: John, age: 30
```

The `for...in` loop is useful when you need to iterate over the properties of an object, such as when working with key-value pairs.

## `for...of` Loop

The `for...of` loop iterates over iterable objects (arrays, strings, etc.) and is preferred over `for...in` for arrays in TypeScript.

### Syntax

```typescript
for (variable of iterable) {
  // code block to be executed
}
```

### Example

```typescript
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
// Output: red, green, blue
```

The `for...of` loop simplifies iteration over arrays and other iterable objects by directly accessing their values, rather than indices or keys.

## Differences Between `for...in` and `for...of` Loops

### `for...in` Loop

- **Purpose**: Iterates over enumerable properties of an object.
- **Usage**: Commonly used to iterate over object keys or properties.
- **Example**:

  ```typescript
  const person = { name: "John", age: 30 };

  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  // Output: name: John, age: 30
  ```

### `for...of` Loop

- **Purpose**: Iterates over iterable objects like arrays, strings, etc.
- **Usage**: Preferred for iterating over values of iterable objects.
- **Example**:

  ```typescript
  const colors = ["red", "green", "blue"];

  for (let color of colors) {
    console.log(color);
  }
  // Output: red, green, blue
  ```

### Key Differences

- **Iterable Type**: `for...in` loops over object properties, while `for...of` loops over iterable values.
- **Output**: `for...in` provides keys or properties, whereas `for...of` provides values directly.
- **Compatibility**: `for...of` is not compatible with objects directly and is used mainly with arrays and other iterables.

## Callback Function

A callback function is a function that is passed as an argument to another function, with the intention of being executed later. In the context of array methods like `map`, `forEach`, and `filter`, the callback function is applied to each element of the array.

For example, in the `map` method:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const squared: number[] = numbers.map((number) => number * number);
```

The arrow function `(number) => number * number` is a callback function. It defines the operation to be performed on each element of the `numbers` array.

## Differences Between Array Loops and Other Loops

### Traditional Loops (`for`, `do-while`)

Traditional loops like `for` and `do-while` are more flexible and can be used for a variety of tasks beyond just iterating over arrays. They require manual index management and can directly mutate variables outside the loop scope.

### Array Methods (`map`, `filter`, `forEach`)

Array methods like `map`, `filter`, and `forEach` provide a more functional approach to working with arrays. They promote immutability by returning new arrays without modifying the original. These methods align with functional programming paradigms, making code more predictable and easier to test.

### Example Comparison

#### Using `for` Loop

```typescript
const numbers = [1, 2, 3, 4, 5];
const squared = [];
for (let i = 0; i < numbers.length; i++) {
  squared.push(numbers[i] * numbers[i]);
}
console.log(squared);
// Output: [1, 4, 9, 16, 25]
```

#### Using `map`

```typescript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((number) => number * number);
console.log(squared);
// Output: [1, 4, 9, 16, 25]
```

## Function as a Parameter

In TypeScript, you can pass functions as parameters to other functions. This allows for greater flexibility and code reusability.

### Example

```typescript
// Define a function type for functions that take a number and return a number
type UnaryFunction = (x: number) => number;

// Function that takes another function as a parameter
const applyFunction = (func: UnaryFunction, value: number): number => {
  return func(value);
};

// Using an inline arrow function to square a number
const square: UnaryFunction = (x: number): number => x * x;

// Using the applyFunction with square function
const squareResult = applyFunction(square, 5);
console.log(squareResult); // Output: 25
```

In this example, the `applyFunction` function takes another function (`func`) and a value as parameters. It then applies the given function to the value and returns the result.

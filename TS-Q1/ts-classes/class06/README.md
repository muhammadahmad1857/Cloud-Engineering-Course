
# Class 06: Arrays and Loops - PIAIC

In this class, we studied the following topics:

1. [Arrays](#arrays)
2. [Why Use Arrays?](#why-use-arrays)
3. [Array Functions](#array-functions)
   - [push](#push)
   - [pop](#pop)
   - [shift](#shift)
   - [unshift](#unshift)
   - [splice](#splice)
   - [indexOf()](#indexof)
   - [lastIndexOf()](#lastindexof)
4. [While Loops](#while-loops)
5. [Why Use Loops?](#why-use-loops)

## Arrays

Arrays are a fundamental data structure in programming that allow you to store multiple values under a single variable name. Unlike simple variables that hold only one value at a time, arrays can contain multiple values, making them suitable for scenarios where you need to work with collections of data. For example, you can use an array to store a list of names, numbers, or any other type of data.

### Syntax:
```typescript
// Declaring an array
let numbers: number[] = [1, 2, 3, 4, 5];

// Accessing elements of an array
console.log(numbers[0]); // Output: 1
```

## Why Use Arrays?

Arrays offer several advantages over simple variables:
- **Grouping Data**: Arrays allow you to group related data together under one variable, making it easier to manage and manipulate large sets of data.
- **Iterating Over Elements**: With arrays, you can easily iterate over each element using loops, making it convenient to perform operations on each item in the collection.
- **Dynamic Size**: Arrays in most programming languages can dynamically grow or shrink in size, allowing you to add or remove elements as needed.
- **Efficient Access**: Arrays provide fast and efficient access to individual elements using their index, which represents their position in the array.

## Array Functions

Array functions are built-in methods that allow you to manipulate arrays in various ways. Here are some commonly used array functions:

### push

The `push` method adds one or more elements to the end of an array.

### Syntax:
```typescript
let fruits: string[] = ['apple', 'banana', 'orange'];
fruits.push('mango');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango']
```

### pop

The `pop` method removes the last element from an array and returns that element.

### Syntax:
```typescript
let fruits: string[] = ['apple', 'banana', 'orange'];
let removedFruit: string = fruits.pop();
console.log(removedFruit); // Output: orange
console.log(fruits); // Output: ['apple', 'banana']
```

### shift

The `shift` method removes the first element from an array and returns that element, shifting all subsequent elements to a lower index.

### Syntax:
```typescript
let fruits: string[] = ['apple', 'banana', 'orange'];
let removedFruit: string = fruits.shift();
console.log(removedFruit); // Output: apple
console.log(fruits); // Output: ['banana', 'orange']
```

### unshift

The `unshift` method adds one or more elements to the beginning of an array.

### Syntax:
```typescript
let fruits: string[] = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits); // Output: ['apple', 'banana', 'orange']
```

### splice

The `splice` method adds or removes elements from any position in an array.

### Syntax:
```typescript
let fruits: string[] = ['apple', 'orange', 'mango'];
// Removing 1 element from index 1
fruits.splice(1, 1);
console.log(fruits); // Output: ['apple', 'mango']
// Adding 'banana' and 'grape' at index 1
fruits.splice(1, 0, 'banana', 'grape');
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'mango']
```

### indexOf()

The `indexOf()` method returns the index of the first occurrence of a specified value in an array.

### Syntax:
```typescript
let fruits: string[] = ['apple', 'banana', 'orange', 'banana'];
console.log(fruits.indexOf('banana')); // Output: 1
```

### lastIndexOf()

The `lastIndexOf()` method returns the index of the last occurrence of a specified value in an array.

### Syntax:
```typescript
let fruits: string[] = ['apple', 'banana', 'orange', 'banana'];
console.log(fruits.lastIndexOf('banana')); // Output: 3
```

## While Loops

While loops are a control flow statement used to execute a block of code repeatedly as long as a specified condition is true. They are useful when you need to perform a task multiple times without knowing the exact number of iterations beforehand.

### Syntax:
```typescript
let count: number = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

## Why Use Loops?

Loops are essential in programming for several reasons:
- **Repetition**: Loops allow you to execute a block of code multiple times, reducing the need for redundant code.
- **Automation**: Loops automate repetitive tasks, such as iterating over arrays or processing large sets of data.
- **Dynamic Control**: Loops provide dynamic control flow based on changing conditions, allowing your program to adapt to different scenarios.

Understanding arrays and loops is fundamental in programming as they enable you to efficiently work with collections of data and automate repetitive tasks, making your code more versatile and scalable.

Feel free to explore the TypeScript code provided in this repository to understand how these concepts are implemented. You can run the code using a TypeScript compiler or an online TypeScript playground.

## Additional Resources:
- [MDN Web Docs: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs: while statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

Happy coding!

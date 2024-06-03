# Class 09 - Study Topics

## Overview

In today's class, we covered the following topics. Click on the links to navigate directly to each section:

1. [What is npm](#1-what-is-npm)
2. [What is chalk](#2-what-is-chalk)
3. [What is Asynchronous Behaviour?](#3-what-is-asynchronous-behaviour)
4. [What is Synchronous Behaviour?](#4-what-is-synchronous-behaviour)
5. [Difference between Asynchronous and Synchronous Behaviour](#5-difference-between-asynchronous-and-synchronous-behaviour)
6. [What are Event Loops](#6-what-are-event-loops)
7. [What is setTimeout](#7-what-is-settimeout)
8. [What is setInterval](#8-what-is-setinterval)
9. [What is clearInterval](#9-what-is-clearinterval)
10. [What is IntervalId](#10-what-is-intervalid)
11. [What is a Promise](#11-what-is-a-promise)
12. [Some Basics of Object-Oriented Programming (OOP)](#12-some-basics-of-object-oriented-programming-oop)
13. [Why We Use Object-Oriented Programming (OOP) Instead of Simple Objects](#13-why-we-use-object-oriented-programming-oop-instead-of-simple-objects)
14. [External Links](#external-links)

## Topics Covered in Today's Class

### 1. What is npm
**npm (Node Package Manager)** is a package manager for JavaScript, widely used for managing dependencies in Node.js projects. It allows developers to install, share, and manage libraries and tools.

For more details, visit the [npm documentation](https://www.npmjs.com/package/chalk?activeTab=readme).

### 2. What is chalk
**Chalk** is a library used for styling console output in Node.js. It allows developers to easily add colors and styles to their terminal strings.

**Installation:**
```sh
npm install chalk
```

**Usage:**
```javascript
const chalk = require('chalk');
console.log(chalk.blue('Hello, world!'));
```

For more details, visit the [Chalk documentation](https://www.npmjs.com/package/chalk?activeTab=readme).

### 3. What is Asynchronous Behaviour?
**Asynchronous behaviour** refers to the execution of operations independently of the main program flow, allowing the program to continue running while waiting for the operation to complete.

### 4. What is Synchronous Behaviour?
**Synchronous behaviour** refers to the execution of operations sequentially, where each operation waits for the previous one to complete before starting.

### 5. Difference between Asynchronous and Synchronous Behaviour
- **Asynchronous**: Operations run independently of the main program flow, enhancing performance and responsiveness.
- **Synchronous**: Operations run sequentially, often causing the program to wait and potentially reducing performance.

### 6. What are Event Loops
**Event loops** are mechanisms that manage the execution of asynchronous operations in JavaScript, handling events and callbacks.

For more details on how the event loop works, watch this [Event loop working video](https://www.youtube.com/watch?v=8aGhZQkoFbQ).

### 7. What is setTimeout
**setTimeout** is a function that executes a specified function after a set delay.

**Example:**
```javascript
setTimeout(() => {
  console.log('This message is displayed after 2 seconds');
}, 2000);
```

### 8. What is setInterval
**setInterval** is a function that repeatedly executes a specified function at set intervals.

**Example:**
```javascript
const intervalId = setInterval(() => {
  console.log('This message is displayed every 2 seconds');
}, 2000);
```

### 9. What is clearInterval
**clearInterval** is a function that stops the execution of a function set by setInterval.

**Example:**
```javascript
clearInterval(intervalId);
```

### 10. What is IntervalId
**IntervalId** is the identifier returned by setInterval, used to clear the interval with clearInterval.

**Example:**
```javascript
const intervalId = setInterval(() => {
  console.log('Running...');
}, 1000);

clearInterval(intervalId); // Stops the interval
```

### 11. What is a Promise
A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

**Example:**
```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve('Promise resolved successfully');
    } else {
      reject('Promise rejected');
    }
  }, 2000);
});

promise
  .then(message => console.log(message))
  .catch(error => console.error(error));
```

For more details, visit the [Promise documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### 12. Some Basics of Object-Oriented Programming (OOP)
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. Data is in the form of fields (often known as properties or attributes), and code is in the form of procedures (often known as methods).

### 13. Why We Use Object-Oriented Programming (OOP) Instead of Simple Objects
Object-Oriented Programming (OOP) is preferred over simple objects because it provides a clear structure for programs, making it easier to manage complexity through encapsulation, inheritance, and polymorphism. It promotes code reuse and modularity, leading to more maintainable and scalable software.

## External Links

1. [Promise detail](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2. [Chalk and npm detail](https://www.npmjs.com/package/chalk?activeTab=readme)
3. [Event loop working video](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
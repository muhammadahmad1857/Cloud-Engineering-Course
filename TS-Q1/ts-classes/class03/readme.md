# class03(PIAIC)

In this class we study the following contents:

1. [String Concatenation](#string-concatenation)

   - [Basic String Concatenation](#basic-string-concatenation)
   - [String with Number Concatenation](#string-with-number-concatenation)

2. [Comparison Operators](#comparison-operators)

   - [Equality Operator (`==`)](#equality-operator)
   - [Strict Equality Operator (`===`)](#strict-equality-operator)
   - [Inequality Operator (`!=`)](#inequality-operator)
   - [Strict Inequality Operator (`!==`)](#strict-inequality-operator)
   - [Greater Than Operator (`>`)](#greater-than-operator)
   - [Less Than Operator (`<`)](#less-than-operator)
   - [Greater Than or Equal To Operator (`>=`)](#greater-than-or-equal-to-operator)
   - [Less Than or Equal To Operator (`<=`)](#less-than-or-equal-to-operator)

3. [Logical Operators](#logical-operators)

   - [Logical AND (`&&`)](#logical-and)
   - [Logical OR (`||`)](#logical-or)
   - [Logical NOT (`!`)](#logical-not)

4. [Conditional Statements](#conditional-statements)
   - [If Statement](#if-statement)
   - [If-Else Statement](#if-else-statement)
   - [If-Else If-Else Statement](#if-else-if-else-statement)

## Summary

In this class, we explored fundamental concepts of TypeScript and JavaScript, including string concatenation, comparison operators, logical operators, and conditional statements. These concepts are essential for writing efficient and dynamic code. Understanding how to concatenate strings, compare values, perform logical operations, and execute code conditionally enables developers to create versatile applications capable of handling various scenarios effectively.

Now, let's delve deeper into each topic:

## String Concatenation

This guide provides examples and best practices for concatenating strings in TypeScript.

## Basic String Concatenation

To concatenate strings in TypeScript, you can use the `+` operator or the `concat()` method.

```typescript
const str1: string = "Hello";
const str2: string = "World";

// Using the + operator
const result1: string = str1 + ", " + str2;
console.log(result1); // Output: Hello, World
```

## String with Number Concatenation

When concatenating a string with a number using the `+` operator, TypeScript automatically converts the number to a string.

```typescript
const str: string = "The answer is: ";
const num: number = 42;

const result: string = str + num;

console.log(result); // Output: The answer is: 42
```

However, when using the `+` operator with a number and a string, TypeScript performs addition if both operands are numbers.

```typescript
const num1: number = 10;
const num2: number = 20;
const result: number = num1 + num2;

console.log(result); // Output: 30
```

## String with Multiple Numbers and String Concatenation

To concatenate a string with multiple numbers and strings, you can use the `+` operator or template literals.

```typescript
const str: string = "The values are: ";
const num1: number = 10;
const num2: number = 20;
const word: string = "twenty";

// Using the + operator
const result1: string = str + num1 + ", " + num2 + ", " + word;

// Using template literals
const result2: string = `${str}${num1}, ${num2}, ${word}`;

console.log(result1); // Output: The values are: 10, 20, twenty
console.log(result2); // Output: The values are: 10, 20, twenty
```

## Comparison Operators

In JavaScript, comparison operators are used to compare two values and return a boolean value (`true` or `false`) based on the comparison result. Here are the comparison operators in JavaScript along with their details:

1. ### Equality Operator (`==`):

   - Checks if two values are equal. It performs type coercion if the operands are of different types.
   - Example: `5 == '5'` returns `true`.

2. ### Strict Equality Operator (`===`):

   - Checks if two values are equal and of the same type. It does not perform type coercion.
   - Example: `5 === '5'` returns `false`.

3. ### Inequality Operator (`!=`):

   - Checks if two values are not equal. It performs type coercion if the operands are of different types.
   - Example: `5 != '5'` returns `false`.

4. ### Strict Inequality Operator (`!==`):

   - Checks if two values are not equal or not of the same type. It does not perform type coercion.
   - Example: `5 !== '5'` returns `true`.

5. ### Greater Than Operator (`>`):

   - Checks if the left operand is greater than the right operand.
   - Example: `5 > 3` returns `true`.

6. ### Less Than Operator (`<`):

   - Checks if the left operand is less than the right operand.
   - Example: `3 < 5` returns `true`.

7. ### Greater Than or Equal To Operator (`>=`):

   - Checks if the left operand is greater than or equal to the right operand.
   - Example: `5 >= 5` returns `true`.

8. ### Less Than or Equal To Operator (`<=`):

   - Checks if the left operand is less than or equal to the right operand.
   - Example: `3 <= 5` returns `true`.

These comparison operators are extensively used in conditional statements, loops, and other control flow constructs in JavaScript.

## Logical Operators

In JavaScript, logical operators are used to perform logical operations on Boolean values. Here are the logical operators along with their details:

1. ### Logical AND (`&&`):

   - Returns `true` if both operands are `true`, otherwise returns `false`.
   - Example: `true && true` returns `true`, `true && false` returns `false`.

2. ### Logical OR (`||`):

   - Returns `true` if at least one of the operands is `true`, otherwise returns `false`.
   - Example: `true || false` returns `true`, `false || false` returns `false`.

3. ### Logical NOT (`!`):
   - Returns the opposite of the operand's Boolean value. If the operand is `true`, `!` returns `false`; if the operand is `false`, `!` returns `true`.
   - Example: `!true` returns `false`, `!false` returns `true`.

These logical operators are often used to construct complex conditions in control flow statements, such as `if` statements and loops, or to perform conditional operations. They can also be used with non-Boolean values, where JavaScript performs type coercion to interpret values as Boolean.

## Conditional Statements

Conditional statements in JavaScript are used to execute different code blocks based on certain conditions. The main types of conditional statements in JavaScript are:

1.  ### If Statement:

    - The `if` statement executes a block of code if a specified condition is true.

    ```javascript
    if (condition) {
      // code to be executed if condition is true
    }
    ```

2.  ### If-Else Statement:

    - The `if-else` statement executes one block of code if a specified condition is true and another block of code if the condition is false.

    ```javascript
    if (condition) {
      // code to be executed if condition is true
    } else {
      // code to be executed if condition is false
    }
    ```

3.  ### If-Else-If-Else Statement:

    - The `if-else-if` statement allows you to check multiple conditions and execute different code blocks based on which condition evaluates to true first.

    ```javascript
    if (condition1) {
      // code to be executed if condition1 is true
    } else if (condition2) {
      // code to be executed if condition2 is true
    } else {
      // code to be executed if neither condition1 nor condition2 is true
    }
    ```

Conditional statements are fundamental in programming as they enable the execution of specific code blocks based on different conditions, allowing for more flexible and dynamic behavior in your programs.

## Conclusion

Understanding string concatenation, comparison operators, logical operators, and conditional statements are fundamental skills in TypeScript and JavaScript programming. By mastering these concepts, you can write more efficient and powerful code, create dynamic applications, and make informed decisions based on various conditions and data.

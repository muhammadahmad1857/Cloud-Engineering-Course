// Class03 code by PIAIC

import { log } from "console";

// const num1: number = 10;

// const num2: number = 20;

// const sum: number = num1 + num2;
// console.log(sum); // output:30 because the are numbers

// but when we use addition operator in string it concatenate them
// let firstName: string = "firstName";

// let lastName: string = "lastName";
// let fullName: string = firstName + " " + lastName;

// console.log(fullName); // output:firstName lastName

// If we give number as a string(in inverted commas) it also concatenate them

// let var1: string = "20";
// let var2: string = "24";
// let var3: string = var1 + var2;
// console.log(`The concatenation of ${var1} and ${var2} is ${var3}`);

// If we use add operator with string and number.
// let num: number = 20;
// let str: string = "24";
// let operations: string = num + str;
// console.log(operations); // output:2024 because when we concatenate the string with number it concatenate them because the number can't be add with string.

// let num1: number = 10;

// let num2: number = 10;

// let str1: string = "24";
// let sum1: number = num1 + num2;
// let sum2: string = num1 + num2 + str1;
// console.log(sum1); // output: 20 becuase 10 + 10 is 20
// console.log(sum2); // output: 2024 becuase 10 + 10 is 20 then we concatenate it with string "24"

// comparision operators
// In JavaScript, comparison operators are used to compare two values and return a boolean value (`true` or `false`) based on the comparison result. Here are the comparison operators in JavaScript along with their details:

// 1. **Equality (==)**:
//    - Checks if two values are equal. It performs type coercion if the operands are of different types.
//    - Example: `5 == '5'` returns `true`.

// 2. **Strict Equality (===)**:
//    - Checks if two values are equal and of the same type. It does not perform type coercion.
//    - Example: `5 === '5'` returns `false`.

// 3. **Inequality (!=)**:
//    - Checks if two values are not equal. It performs type coercion if the operands are of different types.
//    - Example: `5 != '5'` returns `false`.

// 4. **Strict Inequality (!==)**:
//    - Checks if two values are not equal or not of the same type. It does not perform type coercion.
//    - Example: `5 !== '5'` returns `true`.

// 5. **Greater Than (>)**:
//    - Checks if the left operand is greater than the right operand.
//    - Example: `5 > 3` returns `true`.

// 6. **Less Than (<)**:
//    - Checks if the left operand is less than the right operand.
//    - Example: `3 < 5` returns `true`.

// 7. **Greater Than or Equal To (>=)**:

//    - Checks if the left operand is greater than or equal to the right operand.
//    - Example: `5 >= 5` returns `true`.

// 8. **Less Than or Equal To (<=)**:

//    - Checks if the left operand is less than or equal to the right operand.
//    - Example: `3 <= 5` returns `true`.

// These comparison operators are extensively used in conditional statements, loops, and other control flow constructs in JavaScript.

// Equality operator(==)
// let num1: number = 23;
// let str1: string = "23";
// let checkEquality:boolean = num1 == str1  //   Checks if two values are equal. It performs type coercion if the operands are of different types.

// console.log(checkEquality); // output: true because there values are same

// strict equality operator(===)
// let num1: number = 23;
// let str1: string = "23";
// let checkEquality:boolean = num1 === str1 // Checks if two values are equal and of the same type. It does not perform type coercion.
// console.log(checkEquality); // output:false becuase both values are equal but not of same type

// let num1: number = 23;
// let num2: number = 23;
// let checkEquality: boolean = num1 === num2; // Checks if two values are equal and of the same type. It does not perform type coercion.
// console.log(checkEquality); // output:true because both are of same types an having same values.

// Inequality operator(!=)
// let num1: number = 24;

// let str1: string = "23";

// let checkInequality: boolean = num1 != str1; // Checks if two values are not equal. It performs type coercion if the operands are of different types.
// console.log(checkInequality); // output: true becuase the values are not same

// let num1: number = 24;

// let str1: string = "24";

// let checkInequality: boolean = num1 != str1; // Checks if two values are not equal. It performs type coercion if the operands are of different types.
// console.log(checkInequality); // output: false becuase the values are same

// strict inequality operator(!==)
// let num1: number = 24;

// let str1: string = "24";

// let checkInequality: boolean = num1 !== str1; // Checks if two values are not equal or not of the same type. It performs type coercion.
// console.log(checkInequality); // output: true because the values are same but not of the same type

// let num1: number = 24;

// let str2: number = 24;

// let checkInequality: boolean = num1 !== str2; // Checks if two values are not equal or not of the same type. It performs type coercion.
// console.log(checkInequality); // output: false because the values are same and of the same type

// Greater Than operator(>)
// let num1: number = 10;

// let num2: number = 20;

// let checkGreaterThan: boolean = num1 > num2; // Checks if the left operand is greater than the right operand.
// console.log(checkGreaterThan); // output: false because the num2 is greater than num1
// let num1: number = 10;

// let num2: number = 20;

// let checkGreaterThan: boolean = num2 > num1; // Checks if the left operand is greater than the right operand.
// console.log(checkGreaterThan); // output: true because the num2 is greater than num1

// Less Than operator(<)
// let num1: number = 10;
// let num2: number = 20;
// let checkLesserThan: boolean = num1 < num2;

// console.log(checkLesserThan); // output: true because the num1 is lesser than num2

// let num1: number = 10;
// let num2: number = 20;
// let checkLesserThan: boolean = num2 < num1; // Checks if the left operand is less than the right operand.

// console.log(checkLesserThan); // output: false because the num1 is lesser than num2

// Greater than or equal to (>=)
// Checks if the left operand is greater than or equal to the right operand.
// let num1 = 5;
// let num2 = 5;

// // Case: true
// let greaterOrEqualTrue = num1 >= num2;
// console.log(greaterOrEqualTrue); // Output: true (5 is equal to 5)

// // Case: false
// let greaterOrEqualFalse = num1 >= 10;
// console.log(greaterOrEqualFalse); // Output: false (5 is not greater than or equal to 10)

// // Less than or equal to (<=)
// // Checks if the left operand is lesser than or equal to the right operand.
// let num3 = 10;
// let num4 = 10;

// // Case: true
// let lessOrEqualTrue = num3 <= num4;
// console.log(lessOrEqualTrue); // Output: true (10 is equal to 10)

// // Case: false
// let lessOrEqualFalse = num3 <= 5;
// console.log(lessOrEqualFalse); // Output: false (10 is not less than or equal to 5)

// In JavaScript, logical operators are used to perform logical operations on Boolean values. Here are the logical operators along with their details:

// 1. **Logical AND (`&&`)**:
//    - Returns `true` if both operands are `true`, otherwise returns `false`.
//    - Example: `true && true` returns `true`, `true && false` returns `false`.

// 2. **Logical OR (`||`)**:
//    - Returns `true` if at least one of the operands is `true`, otherwise returns `false`.
//    - Example: `true || false` returns `true`, `false || false` returns `false`.

// 3. **Logical NOT (`!`)**:
//    - Returns the opposite of the operand's Boolean value. If the operand is `true`, `!` returns `false`; if the operand is `false`, `!` returns `true`.
//    - Example: `!true` returns `false`, `!false` returns `true`.

// These logical operators are often used to construct complex conditions in control flow statements, such as `if` statements and loops, or to perform conditional operations. They can also be used with non-Boolean values, where JavaScript performs type coercion to interpret values as Boolean.

// Logical AND (`&&`)
// let bool1: boolean = true;
// let bool2: boolean = false;
// let checkBothAreTrue: boolean = bool1 && bool2; // Returns `true` if both operands are `true`, otherwise returns `false`.
// console.log(checkBothAreTrue); // output:false because the both values are not true

// let bool1: boolean = true;
// let bool2: boolean = true;
// let checkBothAreTrue: boolean = bool1 && bool2; // Returns `true` if both operands are `true`, otherwise returns `false`.
// console.log(checkBothAreTrue); // output:true because the both values are true

// logical OR(`||`)

// let bool1: boolean = true;
// let bool2: boolean = false;
// let checkAtLeastOneIsTrue: boolean = bool1 || bool2; // Returns `true` if at least one of the operands is `true`, otherwise returns `false`.
// console.log(checkAtLeastOneIsTrue); // output:true because the at least one value is true

// let bool1: boolean = false;
// let bool2: boolean = false;
// let checkAtLeastOneIsTrue: boolean = bool1 || bool2; // Returns `true` if at least one of the operands is `true`, otherwise returns `false`.
// console.log(checkAtLeastOneIsTrue); // output:false because both values are false

// let bool1: boolean = true;
// let bool2: boolean = true;
// let checkAtLeastOneIsTrue: boolean = bool1 || bool2; // Returns `true` if at least one of the operands is `true`, otherwise returns `false`.
// console.log(checkAtLeastOneIsTrue); // output:true because both values are true

// Logical NOT (`!`)

// let bool1: boolean = true;
// let reverseResult: boolean = !bool1; // Returns the opposite of the operand's Boolean value. If the operand is `true`, `!` returns `false`; if the operand is `false`, `!` returns `true`.
// console.log(reverseResult); // output:false because the value is true

// let bool1: boolean = false;

// let reverseResult: boolean = !bool1; // Returns the opposite of the operand's Boolean value. If the operand is `true`, `!` returns `false`; if the operand is `false`, `!` returns `true`.
// console.log(reverseResult); // output:true because the value is false

// we can use complex logics in or operator
// let bool1: boolean = false;

// let reverseResult: boolean = !(bool1 && 10 > 20); // Returns the opposite of the operand's Boolean value. If the operand is `true`, `!` returns `false`; if the operand is `false`, `!` returns `true`.
// console.log(reverseResult); // output:true because the value is false

// conditional statements

// If statements
// The `if` statement executes a block of code if a specified condition is truewe can
// let age: number = 18;
// if (age >= 18) {
//   console.log("You are eligible to vote");
// }
// let percentage: number = 35;
// let marks: boolean = percentage >= 33;
// if (marks) {
//   console.log("Pass");
// }
// if (!marks) {
//   console.log("Fail");
// }

// else statement.
// Why we need to use else statement.
// the result of above if statements is acceptable but computer have to check condition many times that's why we use else statement

// let percentage: number = 35;
// let marks: boolean = percentage >= 33;
// if(marks){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

// If-Else-If-Else Statement:

// The `if-else-if` statement allows you to check multiple conditions and execute different code blocks based on which condition evaluates to true first.

// let studentName: string = "Ahmad";
// let totalMarks: number = 555;
// let obtainedMarks: number = 535;
// let percentage: number = parseFloat(
//   ((obtainedMarks / totalMarks) * 100).toFixed(2)
// );
// let grade: string = "";
// // it is used when our project is taking input from user. So,it is for dynamic program
// if (totalMarks < obtainedMarks) {
//   console.log("Invalid Input.");
// } else if (percentage >= 90 && percentage <= 100) {
//   grade = "A+";
// } else if (percentage >= 80 && percentage < 90) {
//   grade = "A";
// } else if (percentage >= 70 && percentage < 80) {
//   grade = "B";
// } else if (percentage >= 60 && percentage < 70) {
//   grade = "C";
// } else if (percentage >= 50 && percentage < 60) {
//   grade = "D";
// } else if (percentage >= 40 && percentage < 50) {
//   grade = "E";
// } else {
//   grade = "F";
// }

// console.log(
//   `Total marks: ${totalMarks} \n Student Name: ${studentName} \n Student Marks: ${obtainedMarks} \n Student Percentage: ${percentage} \n Student Grade: ${grade}`
// );

// Nested If Else
// let attendance: number = 80;
// let theoryMarks: number = 50;
// let practicalMarks: number = 48;
// if (attendance > 75) {
//   console.log("Attendance is OK");
//   if (theoryMarks >= 50) {
//     console.log("Pass in Theory.");
//   } else {
//     console.log("Fail in Theory.");
//   }
//   if (practicalMarks >= 50) {
//     console.log("Pass in practical");
//   } else {
//     console.log("Fail in practical");
//   }
// } else {
//   console.log("Attendance is less than required.");
// }

// let ATMPin: number = 1010;
// let ATMPinInput: number = 1234;

// if (ATMPinInput > 999 && ATMPinInput < 10000 && ATMPinInput === ATMPin) {
//   console.log("Valid");
// } else {
//   console.log("Invalid");
// }

// unit Management System

// The Unit Management System program calculates the total bill based on the number of units purchased, considering different tax rates for various unit ranges.

// Unit Price: 10 per unit
// The program applies the following tax rates based on the number of units purchased:

// If the number of units is 100 or less, a 5% tax is applied to the total bill.
// If the number of units is between 101 and 200 (inclusive), a 10% tax is applied.
// If the number of units is between 201 and 300 (inclusive), a 20% tax is applied.
// If the number of units is between 301 and 400 (inclusive), a 35% tax is applied.
// If the number of units is between 401 and 500 (inclusive), a 50% tax is applied.
// If the number of units is greater than 500, a 100% tax is applied.
// The program calculates the total bill by adding the unit price and the applicable tax amount. It then displays the total bill.

// let PriceOfEachUnit: number = 10;

// let numberOfUnits: number = 56;

// let taxAmount: number = 0;
// let totalBill: number = 0;

// if (numberOfUnits <= 100) {
//   taxAmount = parseFloat((numberOfUnits * 0.05).toFixed(2));
//   totalBill = parseFloat(
//     (numberOfUnits * PriceOfEachUnit + taxAmount).toFixed(2)
//   );
// } else if (numberOfUnits <= 200) {
//   taxAmount = parseFloat((numberOfUnits * 0.1).toFixed(2));
//   totalBill = parseFloat(
//     (numberOfUnits * PriceOfEachUnit + taxAmount).toFixed(2)
//   );
// } else if (numberOfUnits <= 300) {
//   taxAmount = parseFloat((numberOfUnits * 0.2).toFixed(2));
//   totalBill = parseFloat(
//     (numberOfUnits * PriceOfEachUnit + taxAmount).toFixed(2)
//   );
// } else if (numberOfUnits <= 400) {
//   taxAmount = parseFloat((numberOfUnits * 0.35).toFixed(2));
//   totalBill = parseFloat(
//     (numberOfUnits * PriceOfEachUnit + taxAmount).toFixed(2)
//   );
// } else if (numberOfUnits <= 500) {
//   taxAmount = parseFloat((numberOfUnits * 0.5).toFixed(2));
//   totalBill = parseFloat(
//     (numberOfUnits * PriceOfEachUnit + taxAmount).toFixed(2)
//   );
// } else {
//   taxAmount = parseFloat((numberOfUnits * 1).toFixed(2));
//   totalBill = parseFloat(
//     (numberOfUnits * PriceOfEachUnit + taxAmount).toFixed(2)
//   );
// }
// console.log(
//   `Price per unit: ${PriceOfEachUnit} \n Total units consumed: ${numberOfUnits} \n Total tax applied: ${taxAmount} \n Total bill: ${totalBill}`
// );

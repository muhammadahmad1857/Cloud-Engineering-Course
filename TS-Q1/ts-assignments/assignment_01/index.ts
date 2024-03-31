// //* Assignment Tasks

// //* Task 1: Calculate Age
// //* Calculate your age based on the current year and your birth year.

// let myBirthYear: number = 2009;
// let currentYear: number = new Date().getFullYear();
// let myAge: number = currentYear - myBirthYear;
// console.log(`I born in ${myBirthYear} and my age in ${myAge}`);

// //* Task 2: Area of a Rectangle

// //* Write a program that calculates the area of a rectangle using length and width variables.

// let length: number = 10;
// let width: number = 20;
// let areaOfRectangle: number = length * width;

// console.log(
//   `The area of a rectangle with the length of ${length}m and width of ${width}m is ${areaOfRectangle}m²`
// );

// //* Task 3: Area of a Circle
// //* Write a program that calculates the area of a circle.

// let radiusOfCircle: number = 20;

// let areaOfCircle: number = Math.round(Math.PI * radiusOfCircle ** 2); //  it is also be calculated as radiusOfCircle *  radiusOfCircle

// console.log(
//   `The area of a circle with the radius of ${radiusOfCircle}m is approxiamtely ${areaOfCircle}m²`
// );

// //* Task 4: Area of a Cube
// //* Write a program that calculates the area of a cube.

// let lengthOfCube: number = 10;

// let areaOfCube: number = lengthOfCube * lengthOfCube * lengthOfCube; // it is also be calculated as lengthOfCube ** 3

// console.log(
//   `The area of a cube with the length of ${lengthOfCube}m is approxiamtely ${areaOfCube}m³`
// );

// //* Task 5: Temperature Conversion
// //* converting a temperature from Fahrenheit to Celsius
// //* Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.

// // making a temperature variable.
// let temperature: number = 32;
// let celsius: number = ((temperature - 32) * 5) / 9; // converting temperature to celsius.
// let fahrenheit: number = (temperature * 9) / 5 + 32; // converting temperature to fahrenheit.
// console.log(
//   `The temperature ${temperature}° in celsius is ${celsius}° and in fahrenheit is ${fahrenheit}°`
// );
// // or Task 5: Temperature conversion, also be done as following
// //! When you uncomment this task you can face an error of same name
// let fahrenheit: number = 32;
// let celsius: number = ((fahrenheit - 32) * 5) / 9;
// console.log(
//   `Hence, when we convert the temperature from ${fahrenheit}°F to Celsius. It is equal to ${celsius}°C`
// );

// //* Converting Celsius to Fahrenheit

// let celsius: number = 32;
// let fahrenheit: number = (celsius * 9) / 5 + 32;
// console.log(
//   `Hence, when we convert the temperature from ${celsius}°C to Fahrenheit. It is equal to ${fahrenheit}°F`
// );

// //*Task 6: Convert Seconds
// //* Convert a given number of seconds into minutes and seconds using variables.

// const totalSeconds: number = 124;
// const minutes: number = Math.floor(totalSeconds / 60);
// const seconds: number = totalSeconds % 60;

// console.log(
//   `In ${totalSeconds}s there are ${minutes} minutes and ${seconds} seconds`
// );

//*Task 7: Calculate Percentage
//* Write a program that calculates the percentage.

// let marks: number = 59;
// let totalMark: number = 80;
// let percentage: number = Math.round((marks / totalMark) * 100);
// console.log(
//   `if the user obtain ${marks} out of ${totalMark} , The user will get ${percentage} percentage`
// );

// //*Task 8: Increment and Decrement Operator
// //* Explore various scenarios involving the increment and decrement operators.

// //*  Q1: let a = 2;
// //*  let b = ++a * 2;
// //*  b?
// Ans:
//let's calculate the value of b:
// Given a = 2 initially:

// Pre-increment a: a becomes 3.
// Multiply the pre-incremented a by 2: 3 * 2 = 6.
// So, the value of b is 6.

// //* Q2:let x = 5;
// //* let y = x-- + 2;
// //* y?
// Ans:
// let's calculate the value ofy
// Given x = 5 initially:
// Use the current value of x (5) in the addition: 5 + 2 = 7.
// Post-decrement x: x becomes 4.If it used in another operation than x value is 4
// So, the value of y is 7

// //* Q3:
// //* let x = 3;
// //* let y = ++x + x++ + ++x;
// //* y?
// Ans:
// let's calculate the value of y
// Given x = 3 initially:

// Pre-increment x: x becomes 4.
// Use the current value of x (4) in the first addition: 4 + 4 = 8.
// Post-increment x: x becomes 5.
// Pre-increment x: x becomes 6.
// Use the current value of x (5) in the second addition: 8 + 6 = 13.
// So, the value of y is 13.

// //* Q4:
// //* let m = 2;
// //* let n = ++m * m++ * --m;
// //* n?

// let's calculate the value of n:

// Given m = 2 initially:

// Pre-increment m: m becomes 3.
// Post-increment m: Use the current value of m (3) in the multiplication: 3 * 3 = 9. Then, increment m by 1, so m becomes 4.
// Pre-decrement m: m becomes 3. Use the current value of m (3) in the multiplication: 9*3 = 27.

// So, the value of n is 27.

// //* Q5:
// //* let a = 3;
// //* let b = 5;
// //* let result = ++a + b-- - a++ + --b;
// //* result?
// Ans:
// let's calculate the value of result:

// Given a = 3 and b = 5 initially:

// Pre-increment a: a becomes 4.
// Use the current value of a (4) in the addition: 4 + 5 = 9. So, because of the post decrement the value of b becomes 4
// Post-decrement b: Use the current value of b (4) in the subtraction: 9 - 4 = 5.
// Post-increment a: Use the current value of a (4) in the addition: 4 + 4 = 8. Then, increment a by 1, so a becomes 5.
// Pre-decrement b: b becomes 3.
// So, the value of result is 8.

// //* Q6:

// //* let m = 2;
// //* let n = 4;
// //* let p = m++ + ++n - --m + n--;
// //* m?,n?,p?
// Ans.
// Increment m after its current value (2) is used in the expression: m becomes 3.
// Pre-increment n: n becomes 5. Use the incremented value of n (5) in the expression.
// Pre-decrement m: m becomes 2. Use the decremented value of m (2) in the expression.
// Post-decrement n after its current value (5) is used in the expression: n becomes 4.
// Now, let's calculate p step by step:

// Step 1: m++ uses the current value of m (2) in the expression: 2 +. Then, m becomes 3.
// Step 2: ++n first increments n by 1: 5. Then, the incremented value of n (5) is used in the expression: 2 + 5 -.
// Step 3: --m first decrements m by 1: 2. Then, the decremented value of m (2) is used in the expression: 2 + 5 - 2 +.
// Step 4: n-- uses the current value of n (5) in the expression: 2 + 5 - 2 + 5. Then, n becomes 4.

// So, p = 2 + 5 - 2 + 5 = 10.

// Therefore, the final values are:

// m = 2
// n = 4
// p = 10

// //* Q7:

// //* let a = 5;
// //* let b = 3;
// //* let c = 2;
// //* let d = 7;
// //* let result = (++a * (b-- + c)) / --d;
// //* a?, b?, c?, d? ,result?
// Ans.

// Increment a before using its current value in the expression: a becomes 6.
// Calculate the expression (b-- + c):
// b is post-decremented after its current value is used, so it remains 3.
// c is 2.
// b-- + c equals 3 + 2 = 5.
// Multiply ++a by (b-- + c): 6 * 5 = 30.
// Post-decrement b: b becomes 2.
// Pre-decrement d: d becomes 6.
// Divide the multiplied result by --d: 30 / 6 = 5.
// So, the calculated values are:

// a = 6
// b = 2
// c = 2
// d = 6
// result = 5
// //* Q8:

// //* let m = 2;
// //* let n = 3;
// //* let o = 4;
// //* let result = (m++ * (--n + m)) / (o-- - n);
// //* m?, o?, n?, result?
// Ans:
// m++ uses the current value of m (2) in the expression and then increments m by 1: 2 *. So, m becomes 3.
// --n first decrements n by 1: 3 - 1 = 2. Then, the decremented value of n (2) is used in the addition with m (which is now 3): 2 + 3 = 5.
// Multiply the result of m++ by (--n + m): 2 * 5 = 10.
// Subtract the current value of o (4) from n (which is now 2): 4 - 2 = 2. now decrement o by 1: 3
// Divide the result of (m++ * (--n + m)) by (o-- - n): 10 / 2 = 5.
// So, the calculated values are:

// m = 3
// n = 2
// o = 3
// result = 5

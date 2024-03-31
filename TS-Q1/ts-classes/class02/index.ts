// // variables wiht "var" keyword
// var a = "Ahmad";
// var b = 9;

// console.log(`variable a before redeclaring ${a}`);
// console.log(`variable b before redeclaring ${b}`);

// var a = 8; // it raise error but the code run because js doesn't focus on typing. I changed the type of variable from string to number
// var b = "9"; // it also raise error but the code run because js doesn't focus on typing. I changed the type of variable from number to string

// console.log(`variable a after redeclaring ${a}`);
// console.log(`variable b after redeclaring ${b}`);

// // variables wiht "let" keyword
// let a = "Ahmad"; // with let keyword we cannot redeclare the variable
// let b = 9; // with let keyword we cannot redeclare the variable

// console.log(`variable a before reassigning ${a}`);
// console.log(`variable b before reassigning ${b}`);

// a = 8; // it raise error but the code run because js doesn't focus on typing. I changed the type of variable from string to number
// b = "9"; // it also raise error but the code run because js doesn't focus on typing. I changed the type of variable from number to string

// console.log(`variable a after reassigning ${a}`);
// console.log(`variable b after reassigning ${b}`);

// // variables wiht "const" keyword
// const a = "Ahmad"; // with const keyword we cannot redeclare or reassign the variable
// const b = 9; // with const keyword we cannot redeclare or reassign the variable

// console.log(`variable a before reassigning ${a}`);
// console.log(`variable b before reassigning ${b}`);

// a = 8; // it raise error  the code doesn't run because js doesn't focus on typing.
// b = "9"; // it also raise error the code doesn't run because we cannot reassign or reddeclare const variable.

// console.log(`variable a after reassigning ${a}`);
// console.log(`variable b after reassigning ${b}`);

// variables with type annotations
var a: number = 10;
var b: number = 20;
var c: number = 30;
var _name: string = "Ahmad";
console.log(_name, "a =", a, "b =", b, "c =", c);

// Arithmetic Operators
// +(plus), -(minus), *(multiply), /(divide), %(modulus or remainder)
console.log(`sum of 10 and 290  is ${10 + 290}`);
var sum = 10 + 20 + 30 + 40; // output:100
var diff = sum - 30; // output: 100 -30 = 70
var product = 4 * 3; // output: 12
var div = 40 / 20; // output: 2
console.log(`10 + 20 + 30 + 40 = ${sum}`);
console.log(`${sum} - 30 = ${diff}`);
console.log(`4 * 3 = ${product}`);
console.log(`40 / 20 = ${div}`);
var remaining = 13 % 7; // output: 6
console.log(`13 % 7 = ${remaining}`);
// Exponent Operator
// **
var cube = 27 ** (1 / 3);
console.log("the value of cube is " + cube);
// Increment && Decrement operators
var val1 = 10;
val1 = val1 + 1;
var val2 = val1++; //10,11
val2 = val1;
val1 = val1 + 1;
var val3 = ++val1; //11
// val1 = val1 +1
// val3 = val1
// where val1 = 10
var sum = val1 + ++val3 + val2++;
// 12  +11 + 13
console.log(`sum of ${val1} + ${val2} + ${val3} = ${sum}`);
//34,35,30
var a = 15;
var b = 10;
var result1 = --a + ++a - --b + b;
// 14+15 -9+9 = 29
console.log(result1);
// template literals
var userName = "Ahmad";
var result2 = `muhammad ${userName}`;
console.log(`full username is ${result2}`);

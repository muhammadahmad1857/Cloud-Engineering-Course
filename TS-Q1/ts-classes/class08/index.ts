// let vowels: string[] = ["a", "e", "i", "o", "u"];
// let numbers: number[] = [1, 2, 3, 4, 5];
// const customFunc = (value: string, index: number): void => {
//   console.log(`${index}. value: ${value}`);
//   console.log("numbers array elem", numbers[index]);
//   console.log(`after concatenating both values: '${value + numbers[index]}'`);
//   //   `accessing another array of numbers which has same length as alphabets using the index`;
// };

// let forEachLoop: void = vowels.forEach(customFunc); // it reutrn undefined

// console.log(`forEach returns ${forEachLoop}`);

// onjects

// why we need objects:  See Readme.md for detail but in short it is use to store the identity
// where the object should be used: See readme.md for details in short it is used when we have to create a post etc..

// if we use variables then how can i how many students are there?
let aliName: string = "students";
let aliAge: number = 12;
let isMarriage: boolean = false;

// if we use arrays then how can i KNOW what is the name of student,class etc.?

let studentArr: any[] = ["ali", 12, false];

// how to create an object

// let identity = {
// key: value,
// key: false // we can give infinite key-pair values
// }

// Example

let student = {
  name: "ali",
  age: 12,
  isMarriage: false,
};

console.log(student); // give the whole object

// there are two methods to access a property
// 1. dot notation
// 2. Square bracket notation
// difference between dot notation and square bracket notation : see Readme.md for details but in short array notation is used to access a property using a variable also but we don't be able to do the same work with dot notaion

// how to access a particular property using dot notation
// synatx: idenity.key
console.log(`accessing a name property from an object ${student.name}`); // give the value of a particular property name which is "ali"

// nested object
let car = {
  model: "Camre",
  color: "red",
  year: 2020,
  price: 100000,
  isNew: true,

  company: "Toyota",
  registration: {
    number: 123456789,
    date: "2020-01-01",
    place: "Karachi",
    isRegistered: true,
  },
};

console.log(car); // give the whole object

// accessing car color property using square brackets notation
// syntax: identity["key"] or we can give a vatiable inside square brackets using a varible like identity[variable]

console.log(`accessing car color property ${car["color"]}`); // give the value of a particular property name which is "red"

let register = "registration";
console.log(`accessing car color property `,car[register]); // give the value of a particular property name which is an object

// // console is also an object
// console.log(console); // give the whole object

// how to add a property we can also add property using dot and square bracket notation
// syntax:  identity.newKey = value or identity[newKey] = value


student.emailAddress = "user@example.com";
student["address"]= "street No. 7 example"
console.log(student); // the new property emailAddress added in it with it's value

// accessing a nested property

console.log(car.registration.number); // give the value of a particular property name which is 123456789
console.log(car["registration"]["number"]); // give the value of a particular property name which is 123456789
console.log(car["registration"].number); // give the value of a particular property name which is 123456789

console.log(car.registration["number"]); // give the value of a particular property name which is 123456789
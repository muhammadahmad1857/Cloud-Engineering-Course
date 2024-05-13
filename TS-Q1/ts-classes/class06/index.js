// // class06
// // Difference between var,let and const
// var age: number = 20; // global scope variables...
// let name: string = "Ahmad"; // global variable with let keyWord
// {
//   var age1: number = 30; // block scope variables... but if we made it with var it is accessable outside also
//   let _name: string = "Ahmad"; // block scope variables... but if we made it with let keyword it is not accessable outside..
// }
// console.log(age);
// console.log("age inside block scope using var", age1);
// console.log(name);
// console.log("name inside block scope using let keyword", _name); // it throws error
// var age: number = 21;
// let name: string = "Ahmad";
// var age:number=21 // it can be redeclared because we made it with var keyword
// let name:string = "Ahmad" // it can't be redeclared because we made it with let keyword
//! Hoisting
// console.log(num1) // it print undefined because we can't define it yet but we define after with var keyword
// console.log(num)  // it throws error because we can't define it yet but we define after with let keyword
// var num1: number = 2;
// let num: number = 2;
// functional scope
// function hoisitng() {
//     if(true){
//   var num: number = 20;
// }
// console.log(`The variable is accessible outside of block-scope ${num}`)
// }
// console.log(num) // it throws error because we make it inside functional scope but if we use block scope then it doesn't throw error.
//* const variables
// it does not redeclare or we can't change it value because it is constant.
//? we always use let and const we use const when we want to don't want to change the value of variable
//! it throws error because we can't redeclare it
// const num1: number = 20;
// num1=2
// const num1:number = 30
// here we make three variables of names but if we have uncountable users how many variables should we make that's why we have tol known as array..
let name1 = "Ahmad";
let name2 = "Abu-Hurairah";
let name3 = "Naveed";
//* array
//! all array value stored in ram are next-to-each-other while the variables we use above  are stored in different places in ram
// let names: string[] = ["Ahmad", "Abu-Hurairah", "Naveed"];
// console.log(names);
//* indexes in arrays
let names1 = ["Alam", "Sheraz", "ahmad", "abdullah"];
//                          0       1       2           3
console.log(names1[0]); // we access a single value by giving index of the value in square brackets after array name.
// we can also uyse variables as index
let index = 2;
console.log(names1[index]);
// we also use function return value
const data = (index) => index;
console.log(names1[data(3)]);
// or we can also use it by saving it in an variable
let index1 = data(1);
console.log(names1[index1]);
// extract last value of the array
let lastIndex = names1.length; // we use length property to get the lenght of array
console.log(names1[lastIndex - 1]); // it will give me last index
// push an element in the last of the array
console.log("names array before adding an element ", names1);
names1.push("Irshad");
console.log("names array after adding an element ", names1);
// we push infinite values to the array and also push return he new length...
console.log("names array before adding an element ", names1);
let adding = names1.push("Jawad", "Moosa", "Abu-Hurairah"); // push function returns the length of the array...
console.log("names array after adding an element ", names1);
console.log(adding);
// delete last value of the array using pop() method
console.log("names array before deleting an element ", names1);
names1.pop(); // it does not take any argument
console.log("names array after deleting an element ", names1);
// pop returns us the value which is get deleted
console.log("names array before deleting an element ", names1);
let deleting = names1.pop(); // it does not take any argument
console.log(`pop return the element that get deleted which is '${deleting}'\nso the array will look like:-`);
console.log("\t\tnames array after deleting an element ", names1);
// adding first value of the array using unshift() method
console.log("names array before adding an element at first.", names1);
names1.unshift("Abubakar", "Anjum", "Hamna"); // it take infinite argument
console.log("names array after adding an element at first.", names1);
//unshift() methods return the length of the new array
console.log("names array before adding an element at first.", names1);
let adding1 = names1.unshift("Abubakar1");
console.log(`unshift also return thelenth of the new array which is '${adding1}'`);
console.log("names array after adding an element at first.", names1);
// shift() method deleted the first element in the array and it returns us the deleted value
console.log("names array before deleting an element at first.", names1);
let deleting1 = names1.shift(); // it does not take any argument
console.log(`shift return the element that get deleted which is '${deleting1}'\nso the array will look like:-`);
console.log("\t\tnames array after deleting an element at first.", names1);
let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.pop();
numbers.push(7);
numbers.push(7);
numbers.push(7);
numbers.shift();
numbers.push(7);
numbers.unshift(7 - 6);
numbers.unshift(7 - 6);
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.push(10);
console.log(numbers);
// splice method it will add or delete value from any index
// syntax array.splice(index, count, item1, ....., itemX)
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("before splice ", numbers1);
numbers1.splice(numbers1.length - 1, 0, 4, 2, 2, 922, 10);
console.log("after splice ", numbers1);
let newArray = ["Abu Hurairah", "Naveed", "Ali", "Adnan"];
newArray.splice(1, 0, "Adnan");
["Abu Hurairah", "Adnan", "Naveed", "Ali"];
newArray.splice(newArray.length, 0, "Waseem", "Bilal");
console.log("🚀 ~ newArray:", newArray);
newArray.splice(newArray.length / 2, 1, "`Waseem");
console.log("🚀 ~ Afterdeleting", newArray);
//* Todo List
let todoList = [
    "Wakeup",
    "walk for 30 mins",
    "lunct",
    "Dinner",
    "sleep",
];
//  Update "lunct" to "lunch with friend"
//* todoList.splice(2, 2, "lunch with friend");
//  Delete "Dinner"
//* todoList.splice(3, 1);
//  Add "Rest for 15 minutes" after "lunch with friend"
//* todoList.splice(3, 0, "Rest for 15 minutes");
// or do it all in the single way...
todoList.splice(2, 2, "lunch with friend", "Rest for 15 minutes");
console.log(todoList);
// DataTypes
// let newArr: string[] = [];
// tuple
// let tple: [string, number] = ["Abu Hurairah", 21];
// let tuple2: [...number[]] = [21, 48392, 74091283, 817234, 89742, 5849];
// Slicing
// let newArr: string[] = ["Abu Hurairah", "Naveed", "Ali", "Adnan", "Rauf"];
// let returnedArr = newArr.splice(0, 1);
// let returnedVal = newArr.pop();
// console.log("🚀 ~ returnedVal:", returnedVal);
// console.log("🚀 ~ returnedArr:", returnedArr);
// newArr[1] = "Rauf";
// let index = newArr.lastIndexOf("Rauf");
// console.log("🚀 ~ index:", index);
// console.log(newArr);
// indexOf(),lastIndexOf()o
// Loops
let nums1 = [1, 3, 5, 7, 9, 11, 13];
let nums2 = [2, 4, 6, 8, 10, 12, 14];
let result = [];
let i = 0;
while (i < nums2.length) {
    let sum = nums1[i] + nums2[i];
    result.push(sum);
    i++;
}
console.log(result);
while (i < nums2.length) {
    result.push(nums1[i]);
    result.push(nums2[i]);
    i++;
}
export {};

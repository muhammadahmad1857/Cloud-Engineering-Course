import data from "./data.json" assert { type: "json" }; // see what is JSON in readme.md
console.log(data);
let vals = ["a", "b", "c"];
const customarray = ["Abc", 10, "BCD"];
// const data: person = {
//   name: "Muhammad Ahmad",
// //   run: (val) => val.length,
// };
let person1 = {
    name: "Muhammad Ahmad",
    age: 21,
};
let person2 = {
    name: "Naveed Sarwar",
    age: 28,
    designation: "CEO Techloset",
};
// person1 = person2;
// console.log(person1);
// const data = await fetch("https://dummyjson.com/products");
// const resp = await data.json();
// console.log(resp);
// ---------------------------
// OOPs (Object Oriented Programming)
// class Human {
//   name: string = "";
//   age: number = 0;
//   constructor(_name: string, _age: number) {
//     this.name = _name;
//     this.age = _age;
//   }
// }
// const human = new Human();
// console.log(human, "Before updation");
// human.name = "Muhammad Ahmad";
// human.age = 21;
// console.log(human);
// const human2 = new Human();
// human2.name = "Naveed Sarwar";
// human2.age = 21;
class Human {
    name = "";
    age = 0;
    password = "test";
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        this.password = "Parameter value";
    }
    get Password() {
        return this.password;
    }
    set updatepass(pass) {
        this.password = pass;
    }
}

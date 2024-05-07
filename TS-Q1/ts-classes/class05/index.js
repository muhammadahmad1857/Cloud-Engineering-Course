// This code run from top to bottom
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// This code run at specific time(when we call function)
// if we have only one functionso if we not give name to it. then it run but if we have multiple function then we have to give thier different identity...
// function printer(): void {
//   console.log(4);
// }
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// printer();
// let value: string = "hello";
// let value2: string = value.toUpperCase();
// console.log(value2);
// console.log(value.toUpperCase());
function calculatePercenage() {
    let obtainedMarks = 1170;
    let totalMarks = 1200;
    console.log(`If user obtain ${obtainedMarks} out of ${totalMarks} then it's percentage is ${((obtainedMarks / totalMarks) *
        100).toFixed(2)}%`);
}
calculatePercenage(); // same output in al function
calculatePercenage(); // same output in al function
calculatePercenage(); // same output in al function
calculatePercenage(); // same output in al function
function calculatePercentageWithParam(obtainedMarks, totalMarks) {
    console.log(`If user obtain ${obtainedMarks} out of ${totalMarks} then it's percentage is ${((obtainedMarks / totalMarks) *
        100).toFixed(2)}%`);
}
calculatePercentageWithParam(1077, 1100); //
calculatePercentageWithParam(678, 900);
calculatePercentageWithParam(645, 980);
calculatePercentageWithParam(780, 800);
function respGen(percentage) {
    if (percentage >= 50) {
        return "Pass" + " " + percentage + "%";
    }
    return "Fail" + percentage;
}
// var resp = respGen(percentageCalculatorWithParameters(50, 250));
// var resp2 = respGen(percentageCalculatorWithParameters(180, 250));
// console.log("🚀 ~ resp:", resp);
// console.log("🚀 ~ resp2:", resp2);
// function nationalityChk(nationality: string) {
//   if (nationality.trim().toLowerCase() === "pakistani") {
//     return true;
//   }
//   return false;
// }
// function chkAge(age: number) {
//   if (age > 17) {
//     return true;
//   } else if (age > 0 && age < 18) {
//     return false;
//   }
//   return false;
// }
// function chkConditions(age: number, nationality: string) {
//   if (age > 17 && nationality === "pakistani") {
//     return true;
//   }
//   return false;
// }
// function chkValidity() {
//   if (chkAge(21) && nationalityChk("PakistaNi")) {
//     console.log("You can cast vote");
//   } else {
//     console.log("You can't cast vote.");
//   }
// }
// chkValidity();
// !IMP: function syntax with return type
// function functionName():returnType{
//   return value
// }
// function testing(): void {
//   console.log("Abu Hurairah");
// }
// !Arrow Functions
const arrFunc = () => {
    console.log("Arrow Function");
};
const arrFunctWithParameters = (val) => {
    console.log("Val", val);
};
const arrFunctionWithReturn = (val) => {
    return val;
};
var _value = arrFunctionWithReturn("Testing");
console.log("🚀 ~ value:", arrFunctionWithReturn("Testing"));
// !Lambda Functions
const product = (num1) => num1;
const sum = (num1) => {
    return num1 + 10;
};
console.log("Sum is ", sum(10));
const userName = (firstName, lastName) => firstName + " " + lastName;
console.log(userName("Abu", "Hurairah"));
// optional parameter
const userNameWithOptionalParameters = (firstName, lastName) => {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
};
console.log(userNameWithOptionalParameters("Naveed", "Sarwar"));
console.log(userNameWithOptionalParameters("Naveed")); // with the optional parameter(?) it doesn't throw error if we don't give optional one
// default parameters
const userNameWithDefaultParameters = (firstName, lastName = "Sarwar") => {
    return firstName + " " + lastName;
};
console.log(userNameWithDefaultParameters("Naveed", "Hurairah")); // here I give lastname so it's override to default value
console.log(userNameWithDefaultParameters("Naveed")); // i don't give any value to lastName now it willtake default value
export {};

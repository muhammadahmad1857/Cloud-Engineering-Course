// Named exports: Exporting constants and functions
export const myName = "Ahmad Jawad";
export const teacherName = "Abu Hurairah";
export const friendName = "Ahmad";
export const sum = () => 10 + 20;
// Exporting an object 'class1' with properties and methods
export const class1 = {
    name: "Batch 60",
    strength: 150,
    sum: (num1) => {
        console.log(num1 + 10);
    },
};
// Default export: Exporting an array as the default export
const myName2 = ["Ahmad Jawad", "Naveed Sarwar"];
export default myName2;

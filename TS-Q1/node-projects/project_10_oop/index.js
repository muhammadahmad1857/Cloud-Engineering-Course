#! /usr/bin/env node
import inquirer from "inquirer";
class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer === "engaging") {
            this.personality = "Extrovert";
        }
        else if (answer === "activities") {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a mystery!";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    name;
    constructor() {
        super(); // Call the constructor of the base class
        this.name = ""; // This is the name property
    }
}
const personality = await inquirer.prompt([
    {
        type: "list",
        name: "personality",
        message: "Which statement best describes your social preferences?",
        choices: [
            { name: "You enjoy engaging with others", value: "engaging" },
            {
                name: "You prefer solitary activities",
                value: "activities",
            },
        ],
    },
]);
const myPerson = new Person();
myPerson.askQuestion(personality.personality);
console.log(`You are an ${myPerson.getPersonality()} person.`);
const nameAnswer = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is your name?",
});
const myStudent = new Student();
myStudent.askQuestion(personality.personality); // Set personality based on user's choice
myStudent.name = nameAnswer.name; // Setting the name property
console.log(`Your Name is ${myStudent.name} and your personality type is ${myStudent.getPersonality()}`);

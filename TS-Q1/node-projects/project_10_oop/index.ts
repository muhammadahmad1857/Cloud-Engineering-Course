#! /usr/bin/env node
import inquirer, { Answers, InputQuestion } from "inquirer";

class Person {
  personality: string;
  constructor() {
    this.personality = "Mystery";
  }
  askQuestion(answer: string): void {
    if (answer === "engaging") {
      this.personality = "Extrovert";
    } else if (answer === "activities") {
      this.personality = "Introvert";
    } else {
      this.personality = "You are still a mystery!";
    }
  }
  getPersonality(): string {
    return this.personality;
  }
}

class Student extends Person {
  name: string;
  constructor() {
    super(); // Call the constructor of the base class
    this.name = ""; // This is the name property
  }
}

const personality: { personality: string } = await inquirer.prompt([
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

const myPerson: Person = new Person();
myPerson.askQuestion(personality.personality);
console.log(`You are an ${myPerson.getPersonality()} person.`);

const nameAnswer: { name: string } = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "What is your name?",
});

const myStudent: Student = new Student();
myStudent.askQuestion(personality.personality); // Set personality based on user's choice
myStudent.name = nameAnswer.name; // Setting the name property
console.log(
  `Your Name is ${
    myStudent.name
  } and your personality type is ${myStudent.getPersonality()}`
);

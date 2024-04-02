#! /usr/bin/env node
import inquirer from "inquirer";
class StudentManagementSystem {
    students;
    constructor() {
        this.students = {};
    }
    async createStudent() {
        const { name } = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter student name:",
            },
        ]);
        const studentID = Math.floor(10000 + Math.random() * 90000).toString();
        this.students[studentID] = { name, courses: {}, balance: 0 };
        console.log(`Student ${name} created with ID: ${studentID}`);
        await this.showMenu();
    }
    async enrollStudent() {
        if (Object.keys(this.students).length === 0) {
            console.log("No students found.");
            await this.showMenu();
            return;
        }
        const { studentID } = await inquirer.prompt([
            {
                type: "input",
                name: "studentID",
                message: "Enter student ID to enroll:",
            },
        ]);
        if (this.students[studentID]) {
            const student = this.students[studentID];
            const courses = Object.keys(student.courses);
            const availableCourses = [
                "Maths",
                "Science",
                "History",
                "Geography",
            ].filter((course) => !courses.includes(course));
            if (availableCourses.length === 0) {
                console.log("Student already enrolled in all available courses.");
                await this.showMenu();
                return;
            }
            const { selectedCourse } = await inquirer.prompt([
                {
                    type: "list",
                    name: "selectedCourse",
                    message: "Select a course to enroll:",
                    choices: availableCourses,
                },
            ]);
            student.courses[selectedCourse] = false; // Set fee payment status for the newly enrolled course
            console.log(`${student.name} enrolled in ${selectedCourse}`);
        }
        else {
            console.log("Student not found.");
        }
        await this.showMenu();
    }
    async addBalance() {
        if (Object.keys(this.students).length === 0) {
            console.log("No students found.");
            await this.showMenu();
            return;
        }
        const { studentID } = await inquirer.prompt([
            {
                type: "input",
                name: "studentID",
                message: "Enter student ID to add balance:",
            },
        ]);
        if (this.students[studentID]) {
            const { amount } = await inquirer.prompt([
                {
                    type: "number",
                    name: "amount",
                    message: "Enter the amount you want to add:",
                },
            ]);
            this.students[studentID].balance += amount;
            console.log(`${this.students[studentID].name} added $${amount} to their balance.`);
        }
        else {
            console.log("Student not found.");
        }
        await this.showMenu();
    }
    async payTuition() {
        const { studentID } = await inquirer.prompt([
            {
                type: "input",
                name: "studentID",
                message: "Enter student ID to pay tuition:",
            },
        ]);
        if (this.students[studentID]) {
            const student = this.students[studentID];
            const courses = Object.keys(student.courses).filter((course) => !student.courses[course]);
            if (courses.length === 0) {
                console.log("No pending tuition fees for this student.");
                await this.showMenu();
                return;
            }
            const { selectedCourse } = await inquirer.prompt([
                {
                    type: "list",
                    name: "selectedCourse",
                    message: "Select a course to pay tuition:",
                    choices: courses,
                },
            ]);
            const amount = 3000; // Fixed amount for tuition fee
            if (student.balance >= amount) {
                student.balance -= amount;
                student.courses[selectedCourse] = true; // Update fee payment status for the selected course
                console.log(`Payment of $${amount} received for ${student.name} (${selectedCourse}). Remaining balance: $${student.balance}`);
            }
            else {
                console.log("Insufficient balance to pay tuition fee. First add balance by selecting add balance.");
            }
        }
        else {
            console.log("Student not found.");
        }
        await this.showMenu();
    }
    async viewStatus() {
        if (Object.keys(this.students).length === 0) {
            console.log("No students found.");
            await this.showMenu();
            return;
        }
        const { studentID } = await inquirer.prompt([
            {
                type: "input",
                name: "studentID",
                message: "Enter student ID to view status:",
            },
        ]);
        if (this.students[studentID]) {
            const student = this.students[studentID];
            console.log(`Name: ${student.name}`);
            console.log(`Student ID: ${studentID}`);
            console.log(`Courses Enrolled: ${Object.keys(student.courses).join(", ")}`);
            console.log(`Balance: $${student.balance}`);
            console.log("Fee paid for each course:");
            Object.keys(student.courses).forEach((course) => {
                console.log(`- ${course}: ${student.courses[course] ? "Paid" : "Pending"}`);
            });
        }
        else {
            console.log("Student not found.");
        }
        await this.showMenu();
    }
    async showMenu() {
        console.log("\nMenu:");
        const { option } = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Select an option:",
                choices: [
                    "Create Student",
                    "Enroll Student",
                    "Add Balance",
                    "Pay Tution",
                    "View Student Status",
                    "Exit",
                ],
            },
        ]);
        switch (option) {
            case "Create Student":
                await this.createStudent();
                break;
            case "Enroll Student":
                await this.enrollStudent();
                break;
            case "Add Balance":
                await this.addBalance();
                break;
            case "Pay Tution":
                await this.payTuition();
                break;
            case "View Student Status":
                await this.viewStatus();
                break;
            case "Exit":
                process.exit();
            default:
                console.log("Invalid option.");
                await this.showMenu();
        }
    }
    async start() {
        console.log("Welcome to Student Management System");
        await this.showMenu();
    }
}
const system = new StudentManagementSystem();
system.start();

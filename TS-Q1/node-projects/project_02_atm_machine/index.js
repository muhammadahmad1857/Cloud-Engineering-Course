#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let users = [
    {
        name: "Ahmad Jawad",
        pin: 1234,
        balance: 100000,
        id: 9876,
    },
    {
        name: "Abu Hurairah",
        pin: 4321,
        balance: 100000,
        id: 6789,
    },
    {
        name: "Naveed",
        pin: 5678,
        balance: 100000,
        id: 8765,
    },
    {
        name: "Abdul Wahaj",
        pin: 9876,
        balance: 100000,
        id: 2345,
    },
];
// Initialize random balances for users
for (let user of users) {
    user.balance = Math.floor(Math.random() * (20000 - 1000 + 1) + 1000);
}
const transactions = [];
const withdrawMoney = (amount, user) => {
    if (amount > user.balance) {
        console.log(chalk.red("Insufficient balance"));
    }
    else {
        user.balance -= amount;
        console.log(chalk.green(`You withdrew Rs. ${amount} and your remaining balance is Rs. ${user.balance}`));
        transactions.push({
            type: "withdrawal",
            amount: amount,
            date: new Date().toLocaleString("en-US", { hour12: true }),
            balance: user.balance,
        });
    }
};
const depositMoney = (amount, user) => {
    if (!amount) {
        console.log(chalk.red("Please add an amount."));
    }
    else {
        user.balance += amount;
        console.log(chalk.green(`You deposited Rs. ${amount} and your balance is Rs. ${user.balance}`));
        transactions.push({
            type: "deposit",
            amount: amount,
            date: new Date().toLocaleString("en-US", { hour12: true }),
            balance: user.balance,
        });
    }
};
const checkBalance = (user) => {
    console.log(chalk.blue(`Your current balance is Rs. ${user.balance}`));
};
const makeTransaction = (amount, receiverId, user) => {
    let receiver = users.find((r) => r.id === receiverId);
    if (receiver) {
        if (amount > user.balance) {
            console.log(chalk.red("Insufficient funds."));
        }
        else {
            user.balance -= amount;
            receiver.balance += amount;
            transactions.push({
                type: "transaction sent",
                amount: amount,
                date: new Date().toLocaleString("en-US", { hour12: true }),
                balance: user.balance,
            });
            console.log(chalk.green(`Transaction successful. Remaining balance: Rs. ${user.balance}`));
            console.log(chalk.green(`Rs. ${amount} transferred to user with ID ${receiverId}`));
        }
    }
    else {
        console.log(chalk.red("Invalid receiver ID"));
    }
};
const changePin = (newPin, user) => {
    if (String(newPin).length === 4) {
        if (newPin === user.pin) {
            console.log(chalk.red("This is your last pin."));
        }
        else {
            user.pin = newPin;
            console.log(chalk.green("Your pin is updated!"));
        }
    }
    else {
        console.log(chalk.red("Your pin length must be equal to 4"));
    }
};
const viewTransaction = () => {
    if (transactions.length === 0) {
        console.log(chalk.yellow("\nNo transactions available."));
    }
    else {
        console.log(chalk.yellow("\nTransaction History:"));
        transactions.forEach((transaction, index) => {
            console.log(`${index + 1}. ${transaction.type} of Rs. ${transaction.amount} on ${transaction.date} and your updated balance is Rs. ${transaction.balance}`);
        });
    }
};
const mainMenu = async (user) => {
    const choices = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Please select an option",
            choices: [
                { name: "Deposit Money", value: "deposit" },
                { name: "Withdraw Money", value: "withdraw" },
                { name: "Check Balance", value: "checkBalance" },
                { name: "Make Transaction", value: "makeTransaction" },
                { name: "View Transaction", value: "viewTransaction" },
                { name: "Update your pin", value: "updatePin" },
                { name: "Exit", value: "exit" },
            ],
        },
    ]);
    switch (choices.option) {
        case "deposit":
            const depositAmount = await inquirer.prompt({
                type: "number",
                name: "amount",
                message: "How much would you like to deposit?",
            });
            depositMoney(depositAmount.amount, user);
            break;
        case "withdraw":
            const withdrawAmount = await inquirer.prompt({
                type: "number",
                name: "amount",
                message: "How much would you like to withdraw?",
            });
            withdrawMoney(withdrawAmount.amount, user);
            break;
        case "checkBalance":
            checkBalance(user);
            break;
        case "makeTransaction":
            const transactionDetail = await inquirer.prompt([
                {
                    type: "number",
                    name: "receiverId",
                    message: "What is the ID of the user you would like to send the money to?",
                },
                {
                    type: "number",
                    name: "amount",
                    message: "How much money would you like to send?",
                },
            ]);
            makeTransaction(transactionDetail.amount, transactionDetail.receiverId, user);
            break;
        case "viewTransaction":
            viewTransaction();
            break;
        case "updatePin":
            const { oldPin } = await inquirer.prompt({
                type: "number",
                name: "oldPin",
                message: "Please enter your old pin: ",
            });
            if (oldPin === user.pin) {
                const newPin = await inquirer.prompt({
                    type: "number",
                    name: "newPin",
                    message: "Please enter your new pin: ",
                });
                changePin(newPin.newPin, user);
            }
            else {
                console.log(chalk.red("Invalid pin."));
                console.log(chalk.blue("You are exiting ATM..."));
                process.exit();
            }
            break;
        case "exit":
            console.log(chalk.blue("Thank you for using the ATM"));
            process.exit();
        default:
            console.log(chalk.red("Please select a valid option"));
            break;
    }
    await mainMenu(user); // Call the menu again for continuous interaction
};
const login = async () => {
    const loginQuestions = await inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: "Please enter your user name: ",
            validate: (input) => input.length > 2 ? true : "Please enter your user name",
        },
        {
            type: "password",
            name: "userPin",
            message: "Please enter your PIN number: ",
            mask: "*",
            validate: (input) => String(input).length === 4 ? true : "Your pin must be 4 characters",
        },
    ]);
    const userPin = Number(loginQuestions.userPin);
    const userName = loginQuestions.userName;
    const userLoggedIn = users.find((user) => user.name.toLowerCase().trim() === userName.toLowerCase().trim() &&
        user.pin === userPin);
    if (userLoggedIn) {
        console.log(chalk.green(`Welcome back ${userLoggedIn.name}`));
        console.log(chalk.blue("Please select an option"));
        await mainMenu(userLoggedIn);
    }
    else {
        console.log(chalk.red("Your ID or PIN is invalid."));
    }
};
login();

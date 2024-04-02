#! /usr/bin/env node
import inquirer from "inquirer";

let balance: number = Math.floor(Math.random() * (20000 - 1000 + 1) + 1000);

let id: number = 1234;
let pin: number = 4321;

interface Transaction {
  type: string;
  amount: number;
  date: string;
  balance: number;
}

const transactions: Transaction[] = [];

const withdrawMoney = (amount: number) => {
  if (amount > balance) {
    console.log("Insufficient balance");
  } else {
    balance -= amount;
    console.log(
      `You withdraw $${amount} and your remaining balance is $${balance}`
    );
    transactions.push({
      type: "withdrawal",
      amount: amount,
      date: new Date().toLocaleString("en-US", { hour12: true }),
      balance: balance,
    });
  }
};
const depositMoney = (amount: number) => {
  if (!amount) {
    console.log("Please add an amount.");
  } else {
    balance += amount;
    console.log(`You deposit $${amount} and your balance is $${balance}`);
    transactions.push({
      type: "Deposit",
      amount: amount,
      date: new Date().toLocaleString("en-US", { hour12: true }),
      balance: balance,
    });
  }
};
const checkBalance = () => {
  console.log(`Your current balance is $${balance}`);
};
const makeTransaction = (amount: number, receiverId: number) => {
  if (String(receiverId).length === 4) {
    if (amount > balance) {
      console.log("Insufficient funds.");
    } else {
      balance -= amount;

      transactions.push({
        type: "Transaction Sent",
        amount: amount,
        date: new Date().toLocaleString("en-US", { hour12: true }),
        balance: balance,
      });
      console.log(`Transaction successful. Remaining balance: $${balance}`);
      console.log(`$${amount} transferred to user with ID ${receiverId}`);
    }
  } else {
    console.log("Invalid recieverId\nId must have 4 characters");
  }
};

const changePin = (newPin: number) => {
  if (String(newPin).length === 4) {
    if (newPin === pin) {
      console.log("This is yout last pin.");
    } else {
      console.log("Your pin is updated!");
      pin = newPin;
    }
  } else {
    console.log("Your pin length must be equal to 4");
  }
};
const viewTransaction = () => {
  console.log("\nTransaction History:");
  transactions.forEach((transaction: Transaction, index: number) => {
    console.log(
      `${index + 1}. ${transaction.type} of $${transaction.amount} on ${
        transaction.date
      } and your updated balance is $${transaction.balance}`
    );
  });
};

const startAtm = async () => {
  console.log("Welcome to the ATM");
  console.log(`your current balance is: ${balance}`);

  console.log("Please select an option");
  while (true) {
    const choices = await inquirer.prompt([
      {
        type: "list",
        name: "option",
        message: "Please select an option",
        choices: [
          {
            name: "Deposit Money",
            value: "deposit",
          },
          {
            name: "Withdraw Money",
            value: "withdraw",
          },
          {
            name: "Check Balance",
            value: "checkBalance",
          },
          {
            name: "Make Transaction",
            value: "makeTransaction",
          },
          {
            name: "View Transaction",
            value: "viewTransaction",
          },
          {
            name: "Update your pin",
            value: "updatePin",
          },
          {
            name: "Exit",
            value: "exit",
          },
        ],
      },
    ]);

    switch (choices.option) {
      case "deposit":
        const amount = await inquirer.prompt({
          type: "number",
          name: "amount",
          message: "How much would you like to deposit?  ",
        });
        depositMoney(amount.amount);
        break;
      case "withdraw":
        const amount2 = await inquirer.prompt({
          type: "number",
          name: "amount",
          message: "How much would you like to withdraw?  ",
        });
        withdrawMoney(amount2.amount);
        break;
      case "checkBalance":
        checkBalance();
        break;
      case "makeTransaction":
        const transactionDetail = await inquirer.prompt([
          {
            type: "number",
            name: "receiverId",
            message:
              "What is the ID of the user you would like to send the money to?  ",
          },
          {
            type: "number",
            name: "amount",
            message: "How much money would you like to send?  ",
          },
        ]);
        makeTransaction(transactionDetail.amount, transactionDetail.receiverId);
        break;
      case "viewTransaction":
        viewTransaction();
        break;
      case "updatePin":
        const { oldPin } = await inquirer.prompt({
          type: "number",
          name: "oldPin",
          message: "Please enter your old pin.  ",
        });
        if (oldPin === pin) {
          const newPin = await inquirer.prompt({
            type: "number",
            name: "newPin",
            message: "Please enter your new pin.  ",
          });
          changePin(newPin.newPin);
        } else {
          console.log(`Invalid pin.`);
          console.log(`You are exiting atm...`);
          process.exit();
        }

        break;

      case "exit":
        console.log("Thank you for using the ATM");
        process.exit();
      default:
        console.log("Please select a valid option");
        break;
    }
  }
};

const loginQuestions = await inquirer.prompt([
  {
    type: "number",
    name: "userId",
    message: "Please enter user ID.  ",
  },
  {
    type: "number",
    name: "userPin",
    message: "Please enter your PIN number.  ",
  },
]);
const userPin: number = loginQuestions.userPin;
const userId: number = loginQuestions.userId;

if (userId === id && userPin === pin) {
  console.log("Login successful");
  startAtm();
} else {
  console.log("Your id or pin is invalid.");
}

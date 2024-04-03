#! /usr/bin/env node
import inquirer from "inquirer";
interface BankAccountType {
  Debit(d: number): string;
  Credit(d: number): string;
}

class BankAccount implements BankAccountType {
  accountBalance: number;

  constructor() {
    this.accountBalance = 100;
  }

  Credit(amount: number): string {
    let statement: string = "Somehting Went Wrong!";
    if (amount > 0) {
      this.accountBalance += amount;
      if (amount > 100) {
        this.accountBalance -= 1;
      }
      statement = `Your account has been credited successfully! and now your balance is ${this.accountBalance}`;
    }
    return statement;
  }

  Debit(amount: number): string {
    let statement: string = "Something Went Wrong!";
    if (amount > 0) {
      if (this.accountBalance >= amount) {
        this.accountBalance -= amount;
        statement = `Transaction Successful! Now account balance is ${this.accountBalance}`;
      } else {
        statement = "Sorry, you have insufficient balance.";
      }
    }
    return statement;
  }
}

class Customer {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  mobileNumber: string;
  bankAccount: BankAccount;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.gender = "";
    this.age = 0;
    this.mobileNumber = "";
    this.bankAccount = new BankAccount();
  }

  async getCustomerInfo() {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter your first name:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter your last name:",
      },
      {
        type: "list",
        name: "gender",
        message: "Enter your gender:",
        choices: ["Male", "Female", "Rather Not Say"],
      },
      {
        type: "number",
        name: "age",
        message: "Enter your age(must greater than 18.):",
        validate: function (value:string) {
          const valid = !isNaN(parseFloat(value)) && parseFloat(value) >= 18;
          return (
            valid || "Please enter your age and age must be greater than 18"
          );
        },
      },
      {
        type: "input",
        name: "mobileNumber",
        message: "Enter your mobile number:",
      },
    ]);

    this.firstName = answers.firstName;
    this.lastName = answers.lastName;
    this.gender = answers.gender;
    this.age = answers.age;
    this.mobileNumber = answers.mobileNumber;
  }

  customerInfo(): string {
    return `
    Name: ${this.firstName} ${this.lastName}
    Age: ${this.age}
    Gender: ${this.gender}
    Mobile Number: ${this.mobileNumber}
    Account Balance: ${this.bankAccount.accountBalance}
    `;
  }

  async performTransaction() {
    const transactionType = await inquirer.prompt({
      type: "list",
      name: "transactionType",
      message: "Choose transaction type:",
      choices: ["Debit", "Credit", "Exit"],
    });

    if (transactionType.transactionType === "Exit") {
      console.log("Exiting program...");
      process.exit(0);
    }

    const amountAnswer = await inquirer.prompt({
      type: "number",
      name: "amount",
      message: `Enter amount to ${transactionType.transactionType}:`,
      validate: function (value:string) {
        const valid = !isNaN(parseFloat(value));
        return valid || "Please enter a valid number";
      },
    });

    const amount = amountAnswer.amount;
    if (isNaN(amount)) {
      console.log("Invalid amount. Please enter a number.");
      return;
    }

    if (transactionType.transactionType === "Debit") {
      console.log(this.bankAccount.Debit(amount));
    } else if (transactionType.transactionType === "Credit") {
      console.log(this.bankAccount.Credit(amount));
    }
  }
}

const customer = new Customer();
await customer.getCustomerInfo();
console.log(customer.customerInfo());

while (true) {
  await customer.performTransaction();
}

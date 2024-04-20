#! /usr/bin/env node
import inquirer from "inquirer";
const currencies = {
    USD: 1.0,
    PKR: 277.69,
    INR: 79,
    EURO: 7.24,
    SAR: 3.75,
};
const currencyConverter = (from, to, amount) => {
    if (from === to) {
        console.log(`
      Conversion Result:
      ${amount.toFixed(2)} ${from} is equal to ${amount.toFixed(2)} ${to} because the currencies are the same.
    `);
    }
    else if (currencies[from] !== undefined && currencies[to] !== undefined) {
        const baseAmount = amount / currencies[from];
        const conversionResult = baseAmount * currencies[to];
        console.log(`
      1 ${from} is equal to ${currencies[to].toFixed(2)} ${to}
      Conversion Result:
      ${amount.toFixed(2)} ${from} is equal to ${conversionResult.toFixed(2)} ${to}
    `);
    }
    else {
        console.error("Conversion rates not found for the provided currencies.");
    }
};
const questions = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Select the currency you want to convert from:",
        choices: ["PKR", "EURO", "USD", "INR", "SAR"],
    },
    {
        type: "list",
        name: "to",
        message: "Select the currency you want to convert to:",
        choices: ["PKR", "EURO", "USD", "INR", "SAR"],
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount you want to convert:",
    },
]);
const { from, to, amount } = questions;
currencyConverter(from, to, amount);

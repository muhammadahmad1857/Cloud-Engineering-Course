#! /usr/bin/env node
import inquirer from "inquirer";
console.log("=========Welcome to the word counter application================");
const word_counter = (para) => {
    let counted_words = para.trim().split(/\s+/); // Split the trimmed paragraph into words by one or more whitespace characters.
    let charactersIncludingSpace = para.length;
    let charactersExcludingSpace = counted_words.join("").length;
    let totalSpaces = charactersIncludingSpace - charactersExcludingSpace;
    console.log(`total words in paragraph: ${counted_words.length}`);
    console.log(`total characters in paragraph including spaces: ${charactersIncludingSpace}`);
    console.log(`total characters in paragraph excluding spaces: ${charactersExcludingSpace}`);
    console.log(`total spaces in paragraph: ${totalSpaces}`);
};
let answer = await inquirer.prompt([
    {
        type: "input",
        name: "paragraph",
        message: "Enter the paragraph you want to count -> ",
    },
]);
word_counter(answer.paragraph);

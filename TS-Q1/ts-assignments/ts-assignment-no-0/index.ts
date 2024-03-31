// // Exercise
// // 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.
// // Done

// // 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,would you like to learn some Python today?”
// let personName: string = "Eric";
// console.log(`Hello ${personName},would you like to learn some Python today?`);

// // 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// // We already have a variable with the person name so we use that variable.
// console.log(
//   `Person name: ${personName} in lowercase = ${personName.toLowerCase()}`
// );
// console.log(
//   `Person name: ${personName} in upperCase = ${personName.toUpperCase()}`
// );
// console.log(
//   `Person name: ${personName} in TitleCase = ${personName.replace(
//     /\b\w/g,
//     (char) => char.toUpperCase()
//   )}`
// );

// // 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// // following, including the quotation marks:
// // Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// console.log(
//   `Steve Jobs once said, \"The only way to do great work is to love what you do.\"`
// );

// // 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let author: string = "Steve Jobs";

// console.log(
//   `${author} once said, \"The only way to do great work is to love what you do.\"`
// );

// // 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// // character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// const personNameWithWhitespace = "\t\n   John Doe   \t\n";

// console.log("Name with whitespace:", personNameWithWhitespace);

// // Strip the whitespace from the name
// const strippedName = personNameWithWhitespace.trim();

// console.log("Stripped name:", strippedName);

// // 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// console.log(
//   `Number eight with addition and the numbers are ${5} and ${3} = ${5 + 3}`
// );
// console.log(
//   `Number eight with subtraction and the numbers are ${11} and ${3} = ${11 - 3}`
// );
// console.log(
//   `Number eight with Multiplication and the numbers are ${2} and ${4} = ${
//     2 * 4
//   }`
// );
// console.log(
//   `Number eight with Division and the numbers are ${64} and ${8} = ${64 / 8}`
// );

// // 8. You should create four lines that look like this:

// // _____________________________________________

// // console.log(5 + 3)

// // _____________________________________________

// // Your output should simply be four lines with the number 8 appearing once on each line.

// console.log(5 + 3);
// console.log(10 - 2);
// console.log(2 * 4);
// console.log(16 / 2);

// // 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

// const favNumber: number = 10;

// console.log(
//   `This message is revealing my favourite number which is ${favNumber}`
// );

// // 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// // because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// // describing what the program does.

// // This variable print the sum of 8
// const sum = 4 + 4;
// // This line print the answer of varaible sum which we amke above
// console.log(sum);

// // 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// // creating an array of friend's names.
// const friendNames: string[] = ["Abu Bakara", "Sheraz", "Arqam", "Haris"];

// // Printing each person's name by accessing each element in the list, one at a time

// for (let i: number = 0; i < friendNames.length; i++) {
//   // print each friend name
//   console.log(friendNames[i]);
// }
// // it will also have same output:
// // for (let i of friendNames) {
// //   console.log(i);
// // }

// // 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// // should be the same, but each message should be personalized with the person’s name.

// for (let i: number = 0; i < friendNames.length; i++) {
//   // print each friend name
//   console.log(`Hello ${friendNames[i]}, How are you?`);
// }

// // 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// // to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// const transportationModes: string[] = ["MotorCycle", "Car", "Truck", "Cycle"];

// for (let i: number = 0; i < transportationModes.length; i++) {
//   console.log(`I would like to own a ${transportationModes[i]}.`);
// }

// // 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// // invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// const guests: string[] = ["Umair", "Ali", "Saira", "Ahmad"];

// for (let i: number = 0; i < guests.length; i++) {
//   console.log(`I would like to invite ${guests[i]} to dinner.`);
// }

// // 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// // • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// // • Print a second set of invitation messages, one for each person who is still in your list.

// const guestCantMakeIt: string = "Umair"; // guest which can't make to dinner
// console.log(
//   `Due to unfortunate circumstances, ${guestCantMakeIt} can't make it to dinner.`
// );
// const newGuest: string = "Moosa"; // new guest which I invite.
// const i: number = guests.indexOf(guestCantMakeIt); // Getting index of guest who can't make it
// guests[i] = newGuest; // updating guest list

// for (let i: number = 0; i < guests.length; i++) {
//   console.log(`I would like to invite ${guests[i]} to dinner `);
// } // iterating over each element of the guest list and print that I would invite these guests

// // 16. More Guests: You just found a bigger dinner table, so now more space is
// // available. Think of three more guests to invite to dinner.

// // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// // • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array.
// // • Use append() to add one new guest to the end of your list.
// // • Print a new set of invitation messages, one for each person in your list.

// console.log("I am informing to all people that I found a bigger table.");

// guests.unshift("Zara"); // add a new guest to the start of the array
// guests.splice(guests.length / 2, 0, "Awais"); // add a new guest to the middle of the array
// guests.push("Saad"); // add a new guest to the end of the array

// for (let i: number = 0; i < guests.length; i++) {
//   console.log(`I would like to invite ${guests[i]} to dinner `);
// } // iterating over each element of the guest list and print that I would invite these guests

// // 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// // a message to that person letting them know you’re sorry you can’t invite them to dinner.

// // • Print a message to each of the two people still on your list, letting them know they’re still invited.

// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// console.log(
//   "Unfortunately,My bigger table can't be arrive at dinner time. So, I can only invite two guests "
// ); // informing people that table cant't be available at time

// while (guests.length > 2) {
//   const removedGuest = guests.pop();
//   console.log(`Sorry, ${removedGuest}, I'm unable to invite you to dinner.`);
// } // telling guests that I am unable to invite you

// guests.forEach((guest) => {
//   console.log(`${guest},You are still invited to the dinner `);
// }); // Telling guests that you are still invited.

// // Remove the last two names from the list
// guests.pop();
// guests.pop();

// // Print the updated guest list
// console.log("Updated guest list:");
// console.log(guests);

// // Check if the list is empty
// if (guests.length === 0) {
//   console.log("The guest list is empty.");
// } else {
//   console.log("The guest list is not empty.");
// }

// // 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// // • Store the locations in a array. Make sure the array is not in alphabetical order.

// // • Print your array in its original order.

// // • Print your array in alphabetical order without modifying the actual list.

// // • Show that your array is still in its original order by printing it.

// // • Print your array in reverse alphabetical order without changing the order of the original list.

// // • Show that your array is still in its original order by printing it again.

// // • Reverse the order of your list. Print the array to show that its
// // order has changed.

// // • Reverse the order of your list again. Print the list to show it’s back to its original order.

// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// const places: string[] = [
//   "Istanbul",
//   "Mecca",
//   "Madina",
//   "Paris",
//   "Maldives",
//   "Dubai",
// ]; // Array of places i would like to visit and I ensure that it is not in alphabetical order

// // Check if the array is not in alphabetical order
// let isNotAlphabetical = false;
// for (let i = 0; i < places.length - 1; i++) {
//   if (places[i].localeCompare(places[i + 1])) {
//     isNotAlphabetical = true;
//     break;
//   }
// }

// if (isNotAlphabetical) {
//   console.log("The array is not in alphabetical order.");
// } else {
//   console.log("The array is in alphabetical order.");
// }

// // printing array in original order
// console.log("Array in original order:", places);

// // printing array in alphabetical order without modifying the actual list

// const sortedPlaces: string[] = places.slice().sort(); // copying list by slice and sorting it in alphabetical order without changing the original array
// console.log("Array in alphabetical order:", sortedPlaces); // printing array in alphabetical order
// console.log("Original array is still in original order:", places); // printing original array in original order

// // printing array in reverse alphabetical order without changing the order of the original list

// sortedPlaces.reverse(); // reversing the result of alphabetical ordered list
// console.log("Array in reverse alphabetical order:", sortedPlaces); // printing the list in reverse alphabetical order
// console.log("Original array is still in original order:", places); // printing the original array in original order

// // reversing the order of the list and informing that it's order has been change and reversing the order again to restore the original list

// // Reverse the order of the list
// places.reverse();

// // Print the array to show that its order has changed
// console.log("Array with reversed order:");
// console.log(places);

// // Reverse the order of the list again to restore it to its original order
// places.reverse();

// // Print the list to show it’s back to its original order
// console.log("Array with original order restored:");
// console.log(places);

// // sorting the order of the list in alphabetical order and informing that it's order has been change and sorting the result in reverse alphabetical order again to restore the original list.

// // sorting the order of the list alphabetically
// places.sort();

// // Print the array to show that its order has changed
// console.log("Array with alphabetical order:");
// console.log(places);

// // Reverse the order of the list again to restore it to its original order
// places.sort().reverse();

// // Print the list to show it’s back to its original order
// console.log("Array with revrse alphabetical order restored:");
// console.log(places);

// // 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// console.log(`I am inviting ${guests.length} people to dinner.`);

// // 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// const programming_languages = ["JavaScript", "Python", "C#", "C++", "Java"];
// console.log("list of programming languages:", programming_languages);

// // 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// interface fruitType {
//   name: string;
//   price: number;
//   color: string;
// }
// const fruits: fruitType[] = [
//   {
//     name: "Apple",
//     price: 100,
//     color: "Red",
//   },
//   {
//     name: "Orange",
//     price: 200,
//     color: "Orange",
//   },
//   {
//     name: "Pear",
//     price: 300,
//     color: "Yellow",
//   },
//   {
//     name: "Grapes",
//     price: 400,
//     color: "Green",
//   },
// ];

// console.log("Object of fruits: ", fruits);

// // 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// const countries: string[] = [
//   "Saudi Arabia",
//   "Brazil",
//   "Canada",
//   "India",
//   "pakistan",
// ];

// // Attempt to access an index that is out of bounds to intentionally cause an error
// // console.log(countries[10]); // Intentionally accessing an index that doesn't exist.

// // 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// // let car = 'subaru';

// // console.log("Is car == 'subaru'? I predict True.")

// // console.log(car == 'subaru')

// // • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// // • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// let num: number = 10;

// // Test 1: Is num equal to 10? (True)
// console.log("Is num == 10? I predict True.");
// console.log(num == 10);

// // Test 2: Is num equal to 5? (False)
// console.log("Is num == 5? I predict False.");
// console.log(num == 5);

// // Test 3: Is num not equal to 15? (True)
// console.log("Is num != 15? I predict True.");
// console.log(num != 15);

// // Test 4: Is num not equal to 10? (False)
// console.log("Is num != 10? I predict False.");
// console.log(num != 10);

// // Test 5: Is num greater than 5? (True)
// console.log("Is num > 5? I predict True.");
// console.log(num > 5);

// // Test 6: Is num less than 3? (False)
// console.log("Is num < 3? I predict False.");
// console.log(num < 3);

// // Test 7: Is num greater than or equal to 10? (True)
// console.log("Is num >= 10? I predict True.");
// console.log(num >= 10);

// // Test 8: Is num less than or equal to 8? (False)
// console.log("Is num <= 8? I predict False.");
// console.log(num <= 8);

// // Test 9: Is num between 5 and 15? (True)
// console.log("Is num between 5 and 15? I predict True.");
// console.log(num > 5 && num < 15);

// // Test 10: Is num divisible by 2? (True)
// console.log("Is num divisible by 2? I predict True.");
// console.log(num % 2 === 0);

// // 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// // • Tests for equality and inequality with strings

// // • Tests using the lower case function

// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// // • Tests using "and" and "or" operators

// // • Test whether an item is in a array

// // • Test whether an item is not in a array

// // Tests for equality and inequality with strings
// let name: string = "Alice";

// // Test 1: Is name equal to 'Alice'? (True)
// console.log("Is name == 'Alice'? I predict True.");
// console.log(name == "Alice");

// // Test 2: Is name  equal to 'Bob'? (False)
// console.log("Is name == 'Bob'? I predict False.");
// console.log(name == "Bob");

// // Tests using the lower case function
// let text: string = "HELLO";

// // Test 3: Is text lowercase 'hello'? (true)
// console.log("Is text.toLowerCase() == 'hello'? I predict True.");
// console.log(text.toLowerCase() == "hello");

// // Test 4: Is text lowercase 'Hello'? (false)
// console.log("Is text.toLowerCase() == 'Hello'? I predict False.");
// console.log(text.toLowerCase() == "Hello");

// // Numerical tests
// let number: number = 10;

// // Test 5: Is number equal to 10? (True)
// console.log("Is number == 10? I predict True.");
// console.log(number == 10);

// // Test 6: Is number greater than 15 and smaller than 20? (false)
// console.log("Is number > 15 and number < 20? I predict false.");
// console.log(number > 15 && number < 20);

// // Tests using "and" and "or" operators
// let x: number = 10;
// let y: number = 20;

// // Test 7: Is x greater than 5 and y less than 15? (True)
// console.log("Is x > 5 and y < 15? I predict True.");
// console.log(x > 5 && y > 15);

// // Test 8: Is x greater than 15 or y less than 15? (false)
// console.log("Is x > 15 or y < 15? I predict False.");
// console.log(x > 15 || y < 15);

// // Test whether an item is in an array
// let fruit: string[] = ["apple", "banana", "orange"];

// // Test 9: Is 'banana' in the fruit array? (true)
// console.log("Is 'banana' in the fruit array? I predict true.");
// console.log(fruit.includes("banana"));

// // Test whether an item is not in an array
// // Test 10: Is 'grape'  in the fruits array? (False)
// console.log("Is 'grape' not in the fruits array? I predict False.");
// console.log(fruit.includes("grape"));

// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)

// // Passing version

// var alien_color:string = "green";

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// }

// // Failing version

// var alien_color:string = "red";

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// }

// // 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// // • Write one version of this program that runs the if block and another that runs the else block.

// //version of a program that run if block
// var alien_color:string = "green"; // alien_color

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// } else {
//   console.log("You just earned 10 points!");
// }

// //version of a program that run else block
// var alien_color:string = "red"; // alien_color

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// } else {
//   console.log("You just earned 10 points!");
// }

// // 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// // • If the alien is green, print a message that the player earned 5 points.

// // • If the alien is yellow, print a message that the player earned 10 points.

// // • If the alien is red, print a message that the player earned 15 points.

// // • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// //version in which alien color is green which run if block
// var alien_color:string = "green"; // alien_color

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// } else if (alien_color == "yellow") {
//   console.log("You just earned 10 points!");
// } else {
//   console.log("You just earned 15 points!");
// }

// //version in which alien color is yellow which run else if block
// var alien_color:string = "yellow"; // alien_color

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// } else if (alien_color == "yellow") {
//   console.log("You just earned 10 points!");
// } else {
//   console.log("You just earned 15 points!");
// }

// //version in which alien color is red which run else block
// var alien_color:string = "red"; // alien_color

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// } else if (alien_color == "yellow") {
//   console.log("You just earned 10 points!");
// } else {
//   console.log("You just earned 15 points!");
// }

// // 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// // • If the person is less than 2 years old, print a message that the person is a baby.

// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// // • If the person is age 65 or older, print a message that the person is an elder.
// let age: number = 10;
// if (age < 2 && age > 0) {
//   console.log("You are a baby");
// } else if (age >= 2 && age < 4) {
//   console.log("You are a toddler");
// } else if (age >= 4 && age < 13) {
//   console.log("You are a kid");
// } else if (age >= 13 && age < 20) {
//   console.log("You are a teenager");
// }
// else if(age >= 20 && age < 65){
//   console.log("You are an adult");
// }
// else{
//   console.log("You are an elder");
// }

// // 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// // • Make a array of your three favorite fruits and call it favorite_fruits.

// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// // Making an array of favourite fruits
// const favorite_fruits: string[] = ["apple", "banana", "mango"];

// // Check if a certain fruit is in the array
// if (favorite_fruits.includes("banana")) {
//   console.log("You really like bananas!");
// }

// if (favorite_fruits.includes("apple")) {
//   console.log("You really like apples!");
// }

// if (favorite_fruits.includes("mango")) {
//   console.log("You really like mangoes!");
// }

// if (favorite_fruits.includes("strawberry")) {
//   console.log("You really like strawberries!");
// }

// if (favorite_fruits.includes("orange")) {
//   console.log("You really like oranges!");
// }

// // 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// // Making an array of usernames

// const usernames: string[] = ["Eric", "John", "Jane", "admin", "Harry", "Steve"];

// // Loop through the array

// for (let i = 0; i < usernames.length; i++) {
//   if (usernames[i] === "admin") {
//     console.log("Hello admin, would you like to see a status report?");
//   } else {
//     console.log("Hello " + usernames[i] + ", thank you for logging in again.");
//   }
// }

// // 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// // • If the list is empty, print the message We need to find some users!

// // • Remove all of the usernames from your array, and make sure the correct message is printed.

// usernames.length = 0; // Removing all usernames from the array

// if (usernames.length === 0) {
//   console.log("We need to find some users!");
// }

// // 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// // • Make a list of five or more usernames called current_users.

// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// // • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// // • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// const current_users: string[] = [
//   "eric",
//   "john",
//   "jane",
//   "admin",
//   "harry",
//   "steve",
// ];

// const new_users: string[] = ["AhMAD", "eric", "moosa", "awais", "ali", "JOHN"];

// for (let i: number = 0; i < new_users.length; i++) {
//   if (current_users.includes(new_users[i].tolowerCase())) {
//     console.log("That username has already been used.\n please select a new username");
//   } else {
//     console.log("That username is available.");
//   }
// }

// // 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// // • Store the numbers 1 through 9 in a array.

// // • Loop through the array.

// // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// // Store the numbers 1 through 9 in an array
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Loop through the array
// for (let i: number = 0; i < numbers.length; i++) {
//   let number: number = numbers[i];
//   let ordinal: string = "";

//   // Determine the proper ordinal ending for each number
//   if (number === 1) {
//     ordinal = "st";
//   } else if (number === 2) {
//     ordinal = "nd";
//   } else if (number === 3) {
//     ordinal = "rd";
//   } else {
//     ordinal = "th";
//   }

//   // Print the result with the proper ordinal ending
//   console.log(`${number}${ordinal}`);
// }

// // 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// // pizza names in a array, and then use a for loop to print the name of each pizza.

// // • Modify your for loop to print a sentence using the name of the pizza
// // instead of printing just the name of the pizza. For each pizza you should
// // have one line of output containing a simple statement like I like pepperoni
// // pizza.

// // • Add a line at the end of your program, outside the for loop, that states
// // how much you like pizza. The output should consist of three or more lines
// // about the kinds of pizza you like and then an additional sentence, such as
// // I really love pizza!

// // Making an array of pizza names
// const pizzaNames: string[] = [
//   "behari kebab",
//   "chicken tikka",
//   "pepperoni",
//   "fajita",
// ];

// // iterating over elements of array pizzaNames
// for (let i: number = 0; i < pizzaNames.length; i++) {
//   let pizzaName: string = pizzaNames[i];
//   console.log(`I like the ${pizzaName} pizza.`);
// }

// // Additional lines about pizza
// console.log("How much you like pizza?");

// console.log("My favorite pizza toppings are pepperoni, mushrooms, and olives.");
// console.log(
//   "I enjoy trying different types of pizza from various restaurants."
// );
// console.log("Pizza is one of my go-to comfort foods.");
// console.log("I really love pizza!");

// // 35. Animals: Think of at least three different animals that have a common characteristic.
// // Store the names of these animals in a list, and then use a for loop to
// // print out the name of each animal.
// // • Modify your program to print a statement about each animal, such as
// // A dog would make a great pet.
// // • Add a line at the end of your program stating what these animals have in
// // common. You could print a sentence such as Any of these animals would
// // make a great pet!

// // Making an array of animals

// // Store the names of animals in a list
// const animals: string[] = ["Dog", "Cat", "Rabbit"];

// // Print the name of each animal using a for loop
// console.log("Names of animals:");
// for (let i = 0; i < animals.length; i++) {
//   console.log(`${i + 1}. ${animals[i]}`);
// }

// // Print a statement about each animal
// console.log("\nStatements about each animal:");
// for (let i = 0; i < animals.length; i++) {
//   let animal = animals[i];
//   console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }

// // Print a statement about what these animals have in common
// console.log("\nCommon characteristic:");
// console.log("Any of these animals would make a great pet!");

// // 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// function make_shirt(size: number, text: string) {
//   console.log(`A t-shirt of size "${size}" having text "${text}" on it.`);
// }
// const size: number = 10;
// const text: string = "My Shirt";
// make_shirt(size, text); // calling a function

// // 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// function make_shirt(size:string = "Large", text:string = "I love TypeScript") {
//   console.log(`A ${size} t-shirt with the message: "${text}".`);
// }

// make_shirt(); // Large shirt with default message
// make_shirt("Medium"); // Medium shirt with default message
// make_shirt("Small", "I love Python"); // Custom shirt with custom message

// // 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city: string, country: string = "Pakistan") {
//   console.log(`${city} in country of ${country}`);
// }

// describe_city("Karachi"); // with default country value

// describe_city("Lahore"); // with default country value

// describe_city("Mumbai", "India"); // with Custom country value

// // 39. City Names: Write a function called city_country() that takes in the name
// // of a city and its country. The function should return a string formatted like this:

// // "Lahore, Pakistan"

// // Call your function with at least three city-country pairs, and print the value
// // that’s returned.

// function city_country(city: string, country: string): string {
//   return `${city}, ${country}`;
// }

// console.log(city_country("Lahore", "Pakistan"));

// console.log(city_country("Mumbai", "India"));

// // 40. Album: Write a function called make_album() that builds a Object
// // describing a music album. The function should take in an artist name and an
// // album title, and it should return a Object containing these two pieces of
// // information. Use the function to make three dictionaries representing different
// // albums. Print each return value to show that Objects are storing the
// // album information correctly.
// // Add an optional parameter to make_album() that allows you to store the
// // number of tracks on an album. If the calling line includes a value for the number
// // of tracks, add that value to the album’s Object. Make at least one new
// // function call that includes the number of tracks on an album.

// // creating a type of object containing value artist and album_title
// interface albumType {
//   artist: string;
//   title: string;
//   number_of_tracks?: number;
// }
// // Function to create an album object
// function make_album(
//   artist_name: string,
//   album_title: string,
//   num_tracks: null | number = null
// ): albumType {
//   const album: albumType = {
//     artist: artist_name,
//     title: album_title,
//   };
//   if (num_tracks !== null) {
//     album["number_of_tracks"] = num_tracks;
//   }
//   return album;
// }

// // Create three dictionaries representing different albums
// let album1 = make_album("Luna Nova", "Ephemeral Echoes");
// let album2 = make_album("Aurora Borealis", "Serenity's Embrace", 12); // With number of tracks
// let album3 = make_album("Midnight Sonata", "Echoes of Silence");

// // Print each return value to show that objects are storing the album information correctly
// console.log(album1);
// console.log(album2);
// console.log(album3);

// // 41. Magicians: Make a array of magician’s names. Pass the array to a function
// // called show_magicians(), which prints the name of each magician in the array.
// // Define a function to show magicians
// function show_magicians(magicians: string[]): void {
//   for (let i = 0; i < magicians.length; i++) {
//     console.log(`${i + 1}. ${magicians[i]}`);
//   }
// }

// // 42. Great Magicians: Start with a copy of your program from Exercise 39.
// // Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// // Define a function to make magicians great
// function make_great(magicians: string[]): string[] {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = `the Great ${magicians[i]}`;
//   }
//   return magicians;
// }

// // Array of magician's names

// //  43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// // function make_great() with a copy of the array of magicians’ names. Because the
// // original array will be unchanged, return the new array and store it in a separate array.
// // Call show_magicians() with each array to show that you have one array of the original
// // names and one array with the Great added to each magician’s name.

// const magicians: string[] = [
//   "Harry Houdini",
//   "David Copperfield",
//   "Penn Jillette",
// ];
// const originalMagicians: string[] = magicians.slice(); // Create a copy of the original array
// const greatMagiciansArray: string[] = make_great(magicians.slice()); // Call make_great with a copy of the array

// console.log("Original Magicians:");
// show_magicians(originalMagicians);

// console.log("\nGreat Magicians:");
// show_magicians(greatMagiciansArray);
// // 44. Sandwiches: Write a function that accepts a array of items a person wants
// // on a sandwich. The function should have one parameter that collects as many
// // items as the function call provides, and it should print a summary of the sandwich
// // that is being ordered. Call the function three times, using a different number
// // of arguments each time.

// // Function to print a summary of the sandwich
// const makeSandwich = (...items: string[]) => {
//   console.log("Making a sandwich with the following items:");
//   for (let i:number = 0; i < items.length; i++) {
//     let item:string = items[i];
//     console.log("- " + item);
//   }
//   console.log("Sandwich is ready!\n");
// };

// // Call the function with different numbers of arguments
// makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
// makeSandwich("Turkey", "Swiss Cheese", "Mayonnaise");
// makeSandwich("Tuna", "Cucumber");

// // 45. Cars: Write a function that stores information about a car in a Object.
// // The function should always receive a manufacturer and a model name. It
// // should then accept an arbitrary number of keyword arguments. Call the function
// // with the required information and two other name-value pairs, such as a
// // color or an optional feature.
// // Print the Object that’s returned to make sure all the information was
// // stored correctly.

// // Function to store information about a car in an object
// type carType = {
//   manufacturer: string;
//   modelName: string;
//   [key: string]: any; // Allow additional properties of any type
// };

// const carInfo = (manufacturer:string, modelName:string, ...otherInfo:(string|number)[]):carType => {
//   const car:carType = {
//     manufacturer: manufacturer,
//     modelName: modelName
//   };

//   // Process additional key-value pairs
//   for (let i = 0; i < otherInfo.length; i += 2) {
//     car[otherInfo[i]] = otherInfo[i + 1];
//   }

//   return car;
// };

// // Call the function with required information and additional key-value pairs
// const myCar = carInfo("Toyota", "Camry", "color", "red", "year", 2022);

// // Print the object to ensure all information was stored correctly
// console.log(myCar);
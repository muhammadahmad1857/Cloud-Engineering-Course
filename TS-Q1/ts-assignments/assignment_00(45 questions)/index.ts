// // Exercise
// // 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.

// // Already Installed...

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,would you like to learn some Python today?”
// let personName: string = "Eric";
// console.log(`Hello ${personName},would you like to learn some Python today?`);

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// let person: string = "ahMad jawAd";
// console.log(`Person name: ${person} in lowercase = ${person.toLowerCase()}`);
// console.log(`Person name: ${person} in upperCase = ${person.toUpperCase()}`);
// console.log(
//   `Person name: ${person} in TitleCase = ${person.replace(/\b\w/g, (char) =>
//     char.toUpperCase()
//   )}`
// );

// // 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.

// console.log(
//   `Steve Jobs once said, "The only way to do great work is to love what you do."`
// ); // here we use template literals that's why we use both single and double quote init.

// // 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.

// let author: string = "Steve Jobs";

// console.log(
//   `${author} once said, \"The only way to do great work is to love what you do.\"`
// );

// // 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.

// const personNameWithWhitespace:string = "\t\n   John Doe   \t\n";

// console.log("Name with whitespace:", personNameWithWhitespace);

// // Strip the whitespace from the name using trim()
// const strippedName:string = personNameWithWhitespace.trim();

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

// // 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.

// // This variable print the sum of 8
// const sum:number = 4 + 4;
// // This line print the answer of varaible sum which we make above
// console.log(sum);

// // 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// // creating an array of friend's names.
// const friendNames: string[] = ["Abu Bakar", "Sheraz", "Arqam", "Haris"];

// // Printing each person's name by accessing each element in the list, one at a time

// for (let i: number = 0; i < friendNames.length; i++) {
//   // print each friend name
//   console.log(friendNames[i]);
// }

// // 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// for (let i: number = 0; i < friendNames.length; i++) {
//   // print each friend name
//   console.log(`Hello ${friendNames[i]}, How are you?`);
// }

// // 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// const transportationModes: string[] = ["MotorCycle", "Car", "Truck", "Cycle"];

// for (let i: number = 0; i < transportationModes.length; i++) {
//   console.log(`I would like to own a ${transportationModes[i]}.`);
// }

// // 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// // Invite initial guests to dinner
// const guests:string[] = ["Umair", "Ali", "Saira", "Ahmad"];
// console.log("Initial invitations:");
// guests.forEach((guest:string) => {
//   console.log(`I would like to invite ${guest} to dinner.`);
// });

// // 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// // One guest can't make it, so replace with a new guest
// const guestCantMakeIt:string = "Umair";
// console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to dinner.`);
// const newGuest:string = "Moosa";
// const indexToRemove:number = guests.indexOf(guestCantMakeIt);
// if (indexToRemove !== -1) {
//   guests.splice(indexToRemove, 1, newGuest);
// }
// console.log("\nUpdated invitations:");
// guests.forEach((guest:string) => {
//   console.log(`I would like to invite ${guest} to dinner.`);
// });

// // 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// // Inform about a bigger table and add more guests
// console.log("\nGood news! I found a bigger table.");
// guests.unshift("Zara"); // Add a new guest to the start of the array
// guests.splice(Math.floor(guests.length / 2), 0, "Awais"); // Add a new guest to the middle of the array
// guests.push("Saad"); // Add a new guest to the end of the array
// console.log("\nAdditional invitations:");
// guests.forEach((guest:string) => {
//   console.log(`I would like to invite ${guest} to dinner.`);
// });

// // 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// // Only two guests can be invited due to table issue
// console.log(
//   "\nUnfortunately, the bigger table won't arrive in time. I can only invite two guests."
// );
// while (guests.length > 2) {
//   const removedGuest:string = guests.pop();
//   console.log(`Sorry, ${removedGuest}, I'm unable to invite you to dinner.`);
// }
// guests.forEach((guest:string) => {
//   console.log(`${guest}, you are still invited to the dinner.`);
// });

// // Empty the guest list
// guests.length = 0;
// console.log("\nFinal guest list:");
// if (guests.length === 0) {
//   console.log("The guest list is empty.");
// } else {
//   console.log("The guest list is not empty.");
// }

// // 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// const places: string[] = [
//   "Istanbul",
//   "Mecca",
//   "Madina",
//   "Paris",
//   "Maldives",
//   "Dubai",
// ]; // Array of places i would like to visit and I ensure that it is not in alphabetical order

// // Check if the array is not in alphabetical order
// let isNotAlphabetical:boolean = false;
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

// const programming_languages:string[] = ["JavaScript", "Python", "C#", "C++", "Java"];
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
// console.log(countries[-1]); // Accessing index -1, which is not a valid index

// // 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru') // Prediction: True

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

// // 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following...

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

// // 25. Alien Colors #1: Imagine an alien was just shot down in a game.

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

// // version of a program that run if block
// var alien_color:string = "green"; // alien_color

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// } else {
//   console.log("You just earned 10 points!");
// }

// // version of a program that run else block

// var alien_color:string = "red"; // alien_color

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// } else {
//   console.log("You just earned 10 points!");
// }

// // 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// // version in which alien color is green which run if block
// var alien_color:string = "green"; // alien_color

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// } else if (alien_color == "yellow") {
//   console.log("You just earned 10 points!");
// } else {
//   console.log("You just earned 15 points!");
// }

// // version in which alien color is yellow which run else if block
// var alien_color:string = "yellow"; // alien_color

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// } else if (alien_color == "yellow") {
//   console.log("You just earned 10 points!");
// } else {
//   console.log("You just earned 15 points!");
// }

// // version in which alien color is red which run else block

// var alien_color:string = "red"; // alien_color

// if (alien_color == "green") {
//   console.log("You just earned 5 points!");
// } else if (alien_color == "yellow") {
//   console.log("You just earned 10 points!");
// } else {
//   console.log("You just earned 15 points!");
// }

// // 28. Stages of Life: Write an if-else chain that determines a person’s stage of life.

// let age: number = 16;

// if (age < 0) {
//   console.log("Age cannot be negative. Please provide a valid age.");
// } else if (age < 2) {
//   console.log("You are a baby");
// } else if (age < 4) {
//   console.log("You are a toddler");
// } else if (age < 13) {
//   console.log("You are a kid");
// } else if (age < 20) {
//   console.log("You are a teenager");
// } else if (age < 65) {
//   console.log("You are an adult");
// } else {
//   console.log("You are an elder");
// }

// // 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

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

// // 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user.

// for (let i = 0; i < usernames.length; i++) {
//   if (usernames[i] === "admin") {
//     console.log(`Hello ${usernames[i]}, would you like to see a status report?`);
//   } else {
//     console.log(`Hello ${usernames[i]}, Thanks for logging in again!`);
//   }
// }

// // 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// usernames.length = 0; // Removing all usernames from the array

// if (usernames.length === 0) {
//   console.log("We need to find some users!");
// }

// // 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// // Make a list of current users
// const currentUsers: string[] = [
//   "eRic",
//   "john",
//   "jane",
//   "admin",
//   "harry",
//   "steve",
// ];

// // Make a list of new users
// const newUsers: string[] = ["AhMAD", "eric", "moosa", "awais", "ali", "JOHN"];

// // // Loop through new users and check for uniqueness
// for (let i: number = 0; i < newUsers.length; i++) {
//   const isExistingUser = currentUsers.some(
//     (currentUser) => currentUser.toLowerCase() === newUsers[i].toLowerCase()
//   );

//   if (isExistingUser) {
//     console.log(
//       `The username "${newUsers[i]}" has already been used. Please select a new username.`
//     );
//   } else {
//     console.log(`The username "${newUsers[i]}" is available.`);
//   }
// }

// // 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd or 3rd Most ordinal numbers end in th, except 1, 2, and 3.

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

// // 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

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

// // 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.

// function make_shirt(size: string, text: string) {
//   console.log(`A t-shirt of size "${size}" having text "${text}" on it.`);
// }
// const size: string = "medium";
// const text: string = "My Shirt";
// make_shirt(size, text); // calling a function

// // 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.

// function make_shirt(size:string = "Large", text:string = "I love TypeScript") {
//   console.log(`A ${size} t-shirt with the message: "${text}".`);
// }

// make_shirt(); // Large shirt with default message
// make_shirt("Medium"); // Medium shirt with default message
// make_shirt("Small", "I love Python"); // Custom shirt with custom message

// // 38. Cities: Write a function called describe_city() that accepts the name of a city and its country.

// const describe_city = (city: string, country: string = "Pakistan"): void => {
//   console.log(`${city} in country of ${country}`);
// };

// describe_city("Karachi"); // with default country value

// describe_city("Lahore"); // with default country value

// describe_city("Mumbai", "India"); // with Custom country value

// // 39. City Names: Write a function called city_country() that takes in the name of a city and its country.

// // Call your function with at least three city-country pairs, and print the value
// // that’s returned.

// function city_country(city: string, country: string): string {
//   return `${city}, ${country}`;
// }

// console.log(city_country("Lahore", "Pakistan"));

// console.log(city_country("Mumbai", "India"));
// console.log(city_country("Mecca", "Saudi Arabia"));

// // 40. Album: Write a function called make_album() that builds a Object describing a music album.

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

// // 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

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

// const magicians: string[] = [
//   "Harry Houdini",
//   "David Copperfield",
//   "Penn Jillette",
// ];

// console.log(make_great(magicians)); // checking that the list is modified or not.

// //  43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.

// // Create a copy of the original array
// const originalMagicians: string[] = magicians.slice();
// // Call make_great with a copy of the array
// const greatMagiciansArray: string[] = make_great(magicians.slice());

// console.log("Original Magicians:");
// show_magicians(originalMagicians);

// console.log("\nGreat Magicians:");
// show_magicians(greatMagiciansArray);

// // 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.

// // Function to print a summary of the sandwich
// const makeSandwich = (...items: string[]): void => {
//   console.log("Making a sandwich with the following items:");
//   for (let i: number = 0; i < items.length; i++) {
//     let item: string = items[i];
//     console.log(`- ${item}`);
//   }
//   console.log("\tSandwich is ready!\n");
// };

// // Call the function with different numbers of arguments
// makeSandwich("Ham", "Cheese", "Lettuce", "Tomato"); // 4 items
// makeSandwich("Turkey", "Swiss Cheese", "Mayonnaise"); // 3 items
// makeSandwich("Tuna", "Cucumber"); // 2 items

// // 45. Cars: Write a function that stores information about a car in a Object.

// // Function to store information about a car in an object
// type carType = {
//   manufacturer: string;
//   modelName: string;
//   [key: string]: any; // Allow additional properties of any type
// };

// const carInfo = (
//   manufacturer: string,
//   modelName: string,
//   ...otherInfo: (string | number)[]
// ): carType => {
//   const car: carType = {
//     manufacturer: manufacturer,
//     modelName: modelName,
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

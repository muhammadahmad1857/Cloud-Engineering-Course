
# Online Class: How to Take Input from Inquirer and Revision of Git, GitHub, and Asynchronous Behavior

1. [Asynchronous Behavior in JavaScript](#asynchronous-behavior-in-javascript)
2. [Inquirer](#inquirer)
3. [Git and GitHub](#git-and-github)
4. [Online Class Link](#online-class-link)
5. [Identifying TypeScript Definitions](#identifying-typescript-definitions)

---

## Asynchronous Behavior in JavaScript

### What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It provides a cleaner way to deal with asynchronous code.

### Syntax of Making an Async Function

#### Arrow Function

```javascript
const asyncFunction = async () => {
  // Your code here
};
```
````

#### Normal Function

```javascript
async function asyncFunction() {
  // Your code here
}
```

### Why Use Async/Await Instead of Promises?

Async/await provides a more readable and concise syntax for working with promises, making asynchronous code easier to understand and maintain.

### Why Use Try/Catch Instead of .then/.catch?

Using `try/catch` with async/await simplifies error handling in asynchronous code, improving readability and reducing nested callbacks.

---

## Inquirer

### What is Inquirer?

Inquirer is a library for creating interactive command-line interfaces in Node.js. It provides a set of prompts to collect user input.

### How to Install Inquirer

To install Inquirer, use npm:

```bash
npm install inquirer
```

### Difference Between `@types` and Normal Packages on npm

Packages with `@types` provide TypeScript type definitions for JavaScript libraries, facilitating type checking in TypeScript projects.

### How to Install Types for Inquirer

To install TypeScript types for Inquirer:

```bash
npm install @types/inquirer --save-dev
```

### Inquirer Practice

Explore various prompts supported by Inquirer:

1. **Input**

   - **Use Case:** Used to collect single-line input from the user. Example: Asking for a user's name.

2. **Number**

   - **Use Case:** Similar to `input`, but specifically for numeric input validation and parsing. Example: Getting the user's age.

3. **Confirm**

   - **Use Case:** Presents a yes/no question to the user. Example: Confirming an action before proceeding.

4. **List**

   - **Use Case:** Provides a list of options for the user to choose from using arrow keys. Example: Selecting a programming language from a predefined list.

5. **Raw List**

   - **Use Case:** Similar to `list`, but the user's selection is made by typing the index rather than using arrow keys. Example: Choosing an item from an array.

6. **Expand**

   - **Use Case:** Provides a more complex list where each choice can have a key to show additional information. Example: Choosing a setting with additional details displayed.

7. **Checkbox**

   - **Use Case:** Allows the user to select multiple options from a list. Example: Selecting multiple toppings for a pizza.

8. **Password**

   - **Use Case:** Masked input to collect sensitive information like passwords. Example: Asking the user to set a password.

9. **Editor**
   - **Use Case:** Opens the default editor defined by `$VISUAL` or `$EDITOR` environment variables. Useful for collecting longer text input. Example: Capturing user input for a detailed description or message.

### Created a Simple Calculator in Inquirer

Demonstrate creating a basic calculator using Inquirer prompts to perform arithmetic operations.

---

## Git and GitHub

### What is .gitignore?

A `.gitignore` file specifies files and directories Git should ignore. It's used to exclude unnecessary files, such as dependencies (`node_modules`), build artifacts, and local configuration files.

### Why We Add `node_modules` in .gitignore

The `node_modules` directory contains all dependencies installed via npm. It's typically large and can be regenerated using `npm install`, so it's excluded from version control to keep repositories clean and avoid unnecessary uploads.

### Why Push Code on GitHub

GitHub is a popular platform for hosting Git repositories, providing collaboration features such as pull requests, issues, and project boards. Pushing code to GitHub makes it accessible to collaborators and ensures version control and backup.

### How to Push Code on GitHub

To push code to a GitHub repository:

1. Initialize a Git repository locally.
2. Add and commit changes using Git commands (`git add .`, `git commit -m "Commit message"`).
3. Link your local repository to a GitHub repository (`git remote add origin <repository_url>`).
4. Push changes to GitHub (`git push -u origin master` or `git push` for subsequent pushes).

### How to Delete a Repository on GitHub

Deleting a repository on GitHub can be done through the following steps:

1. **Navigate to Repository Settings:**

   - Go to the repository page on GitHub.
   - Click on the "Settings" tab near the top-right of the repository page.

2. **Scroll Down to Danger Zone:**

   - Scroll down to the "Danger Zone" section at the bottom of the settings page.

3. **Delete Repository:**

   - Click on the "Delete this repository" link.
   - Confirm the action by entering your repository name.
   - Click on the "I understand the consequences, delete this repository" button.

   Note: This action cannot be undone. Deleting a repository permanently removes all associated commits, branches, releases, and settings from GitHub.

---

## Online Class Link

Watch the online class on YouTube: [How to Take Input from Inquirer and Revision of Git, GitHub, and Asynchronous Behavior](https://www.youtube.com/watch?v=6B1599iDOHY)

---

## Identifying TypeScript Definitions

To determine whether a package on npm has TypeScript type definitions (`@types`) available or if it is a normal package without TypeScript definitions, you can follow these steps:

1. **Search on npmjs.com**

   - Visit [npmjs.com](https://www.npmjs.com/) and search for the package name.
   - Look for a section labeled `@types/package-name` in the search results.
     - If `@types/package-name` is listed, TypeScript type definitions are available for this package.
     - If only `package-name` is listed, it means there are no specific TypeScript type definitions published under `@types` for this package.

2. **Check Package README or Documentation**

   - Visit the GitHub repository or official documentation for the package.
   - Look for any mentions or documentation sections related to TypeScript support or type definitions.
     - Packages with TypeScript support often mention `@types` or provide instructions for TypeScript users.
     - Packages without TypeScript support may not mention `@types` or TypeScript at all in their documentation.

3. **Inspect Package Files**

   - If you have already installed the package locally:
     - Navigate to `node_modules/package-name` directory.
     - Look for a `index.d.ts` file or similar TypeScript declaration files within the package.
       - Presence of such files indicates that the package may have internal TypeScript definitions.
       - Absence of these files doesn't necessarily mean the package lacks TypeScript support but suggests that external `@types` definitions might be necessary.

4. **Use TypeScript with `@types`**
   - Install TypeScript (`typescript`) globally or as a project dependency:
     ```bash
     npm install -g typescript
     # or
     npm install typescript --save-dev
     ```
   - Install `@types` for the package:
     ```bash
     npm install @types/package-name --save-dev
     ```
   - If TypeScript compilation succeeds without errors, the package is likely compatible with TypeScript.

By following these steps, you can determine whether a package on npm has TypeScript type definitions (`@types`) available or if it is a normal package without TypeScript definitions, helping you choose the right approach for integrating TypeScript into your projects effectively.

---

![TypeScript(TS)](chalk.png)

![JavaScript(DS)](inquirer.png)

This README.md provides an overview of topics covered in the online class, linking to detailed explanations and examples for each topic.

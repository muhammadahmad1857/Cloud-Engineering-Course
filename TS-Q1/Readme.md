# TypeScript Quarter 1 - PIAIC

Welcome to the TypeScript repository organized by This repository contains resources, assignments, and examples related to TypeScript classes for students enrolled in PIAIC's courses.

# Installation and Verification Guide

## Node.js Installation:

- Visit the [Node.js website](https://nodejs.org).
- Click on the LTS version for stability.
- Follow the installation instructions provided for your operating system.

## Check Node.js Version:

- Open Command Prompt (Cmd).
- Type `node -v` and press Enter.

## VS Code Installation:

- Navigate to the [VS Code website](https://code.visualstudio.com/).
- Download the installer using the provided button.
- Install VS Code by following the installation wizard.

## Check VS Code Version:

- Open Command Prompt (Cmd).
- Type `code -v` and press Enter.

## Installing TypeScript

To install TypeScript, follow these steps:

### For Windows Users:

1. Open Command Prompt (Cmd).
2. Type the following command and press Enter:

```bash
 npm install -g typescript
```

### For Mac/Linux Users:

1. Open Terminal.
2. Type the following command and press Enter:

```bash
 sudo npm i -g typescript
```

### What This Command Does:

- `npm install -g typescript`: This command installs TypeScript globally on your system, allowing you to use it from any directory.

### Note:

- For Mac/Linux users, the `sudo` command is used to execute the installation with administrative privileges.
- Make sure you have Node.js and npm (Node Package Manager) installed on your system before running these commands.

By following these steps, you'll have TypeScript installed and ready to use on your machine.

## Verify TypeScript Installation and Version:

- Type `tsc -v` in the command prompt and press Enter.

Make sure you have administrative privileges for installing global packages like TypeScript.

### Versions:

- Node.js Version: 20.11.1
- VS Code Version: 1.87.2
- TypeScript Version: 5.4.2

Ensure your system meets the minimum requirements for each software.

## Changing Terminal from PowerShell to Command Prompt (Cmd) in VS Code

### Using Command Palette:

#### For Windows Users:

1. Open Visual Studio Code.

2. Press `Ctrl + Shift + P` to open the command palette.

3. Type "Terminal: Select Default Profile" and select it from the list.

4. Choose "Command Prompt" or "Command Prompt (Cmd)" from the options provided.

5. Your terminal will switch to Command Prompt as the default.

Now, whenever you open a new terminal in Visual Studio Code, it will default to Command Prompt instead of PowerShell.

#### For Mac/Linux Users:

1. Open Visual Studio Code.

2. Press `Ctrl + Shift + P` to open the command palette.

3. Type "Terminal: Select Default Profile" and select it from the list.

4. Choose "Command Prompt" or "Command Prompt (Cmd)" from the options provided.

5. Your terminal will switch to Command Prompt as the default.

Now, whenever you open a new terminal in Visual Studio Code, it will default to Command Prompt instead of the default shell for your system.

### Using UI:

#### For Windows Users:

1. Open Visual Studio Code.

2. Click on the terminal tab at the top menu.

3. Near the top right corner of the terminal, click on the dropdown arrow.

4. Select "Select Default Shell" from the dropdown menu.

5. Choose "Command Prompt" or "Command Prompt (Cmd)" from the list.

6. Your terminal will switch to Command Prompt as the default.

Now, whenever you open a new terminal in Visual Studio Code, it will default to Command Prompt instead of PowerShell.

#### For Mac/Linux Users:

1. Open Visual Studio Code.

2. Click on the terminal tab at the top menu.

3. Near the top right corner of the terminal, click on the dropdown arrow.

4. Select "Select Default Shell" from the dropdown menu.

5. Choose "Command Prompt" or "Command Prompt (Cmd)" from the list.

6. Your terminal will switch to Command Prompt as the default.

Now, whenever you open a new terminal in Visual Studio Code, it will default to Command Prompt instead of the default shell for your system.

# TypeScript Setup and Compilation Guide

This guide outlines the steps to set up and compile TypeScript files for development.

## Initializing Configuration

To set up project-specific settings for the TypeScript compiler, you can use the following command to create a `tsconfig.json` file:

```bash
npm init tsc --init
```

## Compiling TypeScript Files

To compile TypeScript files (.ts) into JavaScript files (.js), use the tsc command followed by the filename of the TypeScript file you want to compile. Additionally, you can use the -w flag to enable watching for changes and automatic recompilation.

Example:

```bash
tsc filename.ts -w
```

## Running the Compiled Code

Once you've compiled your TypeScript code into JavaScript, you can run the JavaScript file using node.

Example:

```bash
node filename.js
```

Alternatively, you can combine compilation and running the code using the following command:

```bash
tsc filename.ts && node filename.js
```

## Using Nodemon for Development

For development purposes, you can utilize nodemon, a tool that automatically restarts your Node.js application whenever there are changes in the TypeScript files. This saves you time from manually recompiling and restarting the application.

```bash
nodemon node filename.js
```

# Updating Configuration Files

If you need to update the configuration files `tsconfig.json` and `package.json` for your TypeScript project, you can follow these steps:

## Updating tsconfig.json

1. **Change Target to ES2022:**
   Update the `target` option in `tsconfig.json` to specify ES2022 as the target ECMAScript version.

   Example:

   ```json
   {
     "compilerOptions": {
       "target": "ES2022", ///at line 14
       ...
     },
    ...
   }
   ```

1. **Change Module to NodeNext:**
   Change the module option to specify NextNode as the module system.

Example:

```json
{
  "compilerOptions": {
    ...
    "module": "NodeNext", // at line 28
    ...
  },
  ...
}
```

2. **Update Module Resolution:**
   Comment out the moduleResolution option and change its value to NodeNext.

Example:

```json
{
  "compilerOptions": {
    ...
    // "moduleResolution": "Node",  // Commented out
    "moduleResolution": "NodeNext", // at line 30
    ...
  },
  ...
}
```

## Updating package.json

1. **Add Type Module:**
   After the "main" field in package.json, add a "type" field with the value "module" to indicate that your project uses ECMAScript modules.

Example:

```json
{
  "name": "your-package-name",
  "version": "1.0.0",
  "description": "Your package description",
  "main": "index.js",
  "type": "module",  // Added line
  "scripts": {
    ...
  },
  ...
}
```

This guide provides a solid foundation for getting started with TypeScript development.

# Publishing Your Project on npm

To publish your project on npm, follow these steps:

## Update Main File

1. **Add Shebang Line (`#! /usr/bin/env node`):**
   In your main file (`index.ts`), add a shebang line at the top to make it executable as a command-line interface (CLI).

   Example:

   ```typescript
   #! /usr/bin/env node

   // Your TypeScript code here
   ```

## Update package.json

**Update package.json Configuration:**

1. Update the **package.json** file to specify the necessary configuration for npm publishing.

Example:

```json
{
  "name": "m-simple-calculator",
  "version": "1.0.1",
  "description": "A simple Calculator with TypeScript, Node.js, and Inquirer",
  "main": "index.js",
  "bin": "index.js",   // Add this line
  "type": "module",
  ...
}


```

## Login to npm:

1. If you haven't already have an account, create an account on npmjs.com. Then, in your terminal, run the following command to log in to npm:

```bash
npm login
```

Follow the prompts and enter your npm username, password, and email address or press enter to go on browser directly

## Publish Your Package

1. Ensure that your name is unique.
2. **Compile Your TypeScript Code:**
   Before publishing, make sure to compile your TypeScript code into JavaScript using the TypeScript compiler (tsc).

Example:

```bash
tsc

```

or run

```bash
tsc filename.ts
```

3. **Publish Your Package:**
   After compiling your code, navigate to the folder where your package.json is located. Then, run the following command to publish your package to npm:

```bash
npm publish
```

## Check Your Package on npmjs.com:

4. After publishing, you can check your package on npmjs.com. Log in to your npm account on the website and navigate to your profile. Click on the "Packages" dropdown to view your published package. You can click on your package to see its details.

That's it! Your package is now published on npm and can be installed and used by others.

## My other repositories for node_projects and other assignments are as follows:

1. [Node projects](https://github.com/ahmedjawad1857/node_projects)
2. [TypeScript assignments](https://github.com/ahmedjawad1857/ts-assignments)

Thanks for seeing myrepositories.

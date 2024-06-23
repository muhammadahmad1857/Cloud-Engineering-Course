# Class01: Setting Up TypeScript

## Table of Contents

- [Course Curriculum](#course-curriculum)
- [TypeScript Course](#typescript-course)
- [TypeScript Setup and Workflow](#typescript-setup-and-workflow)
- [Installation and Verification Guide](#installation-and-verification-guide)
  - [Node.js Installation](#nodejs-installation)
  - [Check Node.js Version](#check-nodejs-version)
  - [VS Code Installation](#vs-code-installation)
  - [Check VS Code Version](#check-vs-code-version)
  - [Changing Terminal from PowerShell to Command Prompt (Cmd) in VS Code](#changing-terminal-from-powershell-to-command-prompt-cmd-in-vs-code)
  - [Installing TypeScript](#installing-typescript)
  - [Verify TypeScript Installation and Version](#verify-typescript-installation-and-version)
  - [Initialization](#initialization)
  - [Compiling TypeScript to JavaScript](#compiling-typescript-to-javascript)
  - [Running the Code](#running-the-code)
  - [Automatic Compilation and Execution](#automatic-compilation-and-execution)
- [Conclusion](#conclusion)

# Course Curriculum

This course covers a diverse range of topics across five quarters:

## Quarter 1: TypeScript

- Introduction to TypeScript
- Basic syntax and data types
- Functions and classes
- Advanced TypeScript features
- Practical applications and projects

## Quarter 2: Next.js (UI/UX)

- Introduction to Next.js framework
- Building user interfaces with Next.js
- Enhancing user experience with Next.js features
- Styling and responsive design
- Real-world projects and case studies

## Quarter 3: Python

- Introduction to Python programming language
- Basic syntax and data structures
- Object-oriented programming in Python
- Python for data analysis and manipulation
- Practical Python applications and projects

## Quarter 4: Generative AI

- Fundamentals of Generative AI
- Generative Adversarial Networks (GANs)
- Variational Autoencoders (VAEs)
- Applications of Generative AI in art, design, and beyond
- Hands-on projects and experimentation with Generative AI models

## Quarter 5: Cloud AI Engineering

- Introduction to Cloud AI services
- Deployment of AI models on cloud platforms
- Scalability and performance optimization techniques
- Cloud-based AI solutions for various domains
- Capstone project involving the integration of AI with cloud technologies

This curriculum offers a comprehensive exploration of key technologies and concepts, providing students with a well-rounded understanding and practical skills in TypeScript, Next.js, Python, Generative AI, and Cloud AI Engineering.

# TypeScript Course

# TypeScript Setup and Workflow

This guide outlines the setup and workflow for working with TypeScript in a project.

# Installation and Verification Guide

## Node.js Installation

- Visit the [Node.js website](https://nodejs.org).
- Click on the LTS version for stability.
- Follow the installation instructions provided for your operating system.

## Check Node.js Version

- Open Command Prompt (Cmd).
- Type `node -v` and press Enter.

## VS Code Installation

- Navigate to the [VS Code website](https://code.visualstudio.com/).
- Download the installer using the provided button.
- Install VS Code by following the installation wizard.

## Check VS Code Version

- Open Command Prompt (Cmd).
- Type `code -v` and press Enter.

## Changing Terminal from PowerShell to Command Prompt (Cmd) in VS Code

### Using Command Palette

#### For Windows Users

1. Open Visual Studio Code.
2. Press `Ctrl + Shift + P` to open the command palette.
3. Type "Terminal: Select Default Profile" and select it from the list.
4. Choose "Command Prompt" or "Command Prompt (Cmd)" from the options provided.
5. Your terminal will switch to Command Prompt as the default.

#### For Mac/Linux Users

1. Open Visual Studio Code.
2. Press `Ctrl + Shift + P` to open the command palette.
3. Type "Terminal: Select Default Profile" and select it from the list.
4. Choose "Command Prompt" or "Command Prompt (Cmd)" from the options provided.
5. Your terminal will switch to Command Prompt as the default.

### Using UI

#### For Windows Users

1. Open Visual Studio Code.
2. Click on the terminal tab at the top menu.
3. Near the top right corner of the terminal, click on the dropdown arrow.
4. Select "Select Default Shell" from the dropdown menu.
5. Choose "Command Prompt" or "Command Prompt (Cmd)" from the list.
6. Your terminal will switch to Command Prompt as the default.

#### For Mac/Linux Users

1. Open Visual Studio Code.
2. Click on the terminal tab at the top menu.
3. Near the top right corner of the terminal, click on the dropdown arrow.
4. Select "Select Default Shell" from the dropdown menu.
5. Choose "Command Prompt" or "Command Prompt (Cmd)" from the list.
6. Your terminal will switch to Command Prompt as the default.

## Installing TypeScript

To install TypeScript, follow these steps:

### For Windows Users

1. Open Command Prompt (Cmd).
2. Type the following command and press Enter:

   - [npm install -g typescript](https://docs.npmjs.com/cli/v7/commands/npm-install)

### For Mac/Linux Users

1. Open Terminal.
2. Type the following command and press Enter:

   - [sudo npm i -g typescript](https://docs.npmjs.com/cli/v7/commands/npm-install)

### What This Command Does

- `npm install -g typescript`: This command installs TypeScript globally on your system, allowing you to use it from any directory.

### Note

- For Mac/Linux users, the `sudo` command is used to execute the installation with administrative privileges.
- Make sure you have Node.js and npm (Node Package Manager) installed on your system before running these commands.

By following these steps, you'll have TypeScript installed and ready to use on your machine.

## Verify TypeScript Installation and Version

- Type `tsc -v` in the command prompt and press Enter.

Make sure you have administrative privileges for installing global packages like TypeScript.

### Versions

- Node.js Version: 20.11.1
- VS Code Version: 1.87.2
- TypeScript Version: 5.4.2

Ensure your system meets the minimum requirements for each software.

## Initialization

1. Run the following command to initialize the TypeScript environment:
   `tsc --init`

2. Create an npm package by running:
   `npm init`

## Compiling TypeScript to JavaScript

To compile TypeScript files into JavaScript:

1. Run the TypeScript compiler with the filename:
   `tsc 'fileName.ts'`

2. This command generates the corresponding JavaScript file.

## Running the Code

To execute the JavaScript code and view the output:

1. Run the following command:
   `node filename.js`

2. This executes the JavaScript file.

## Automatic Compilation and Execution

To avoid manual compilation and execution every time:

1. Use the watch mode in TypeScript compiler to automatically compile the code when changes occur:
   `tsc 'filename.ts' -w`
   or simply
   `tsc -w`

2. Utilize nodemon to automatically run the code when changes occur:
   `nodemon node filename.js`

3. With these commands, changes to the TypeScript files will trigger automatic compilation, and nodemon will restart the script whenever changes are detected.

# Conclusion

Following these steps streamlines the TypeScript development process, allowing for easier compilation and execution of code while minimizing manual intervention.

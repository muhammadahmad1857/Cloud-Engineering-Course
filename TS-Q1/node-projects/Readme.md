# Node Projects

Welcome to the `node_projects` folder! This folder contains various Node.js projects that you're working on or have completed. Each project may have its own subdirectory containing its source code, dependencies, and documentation.

## Purpose

The purpose of this folder is to organize and manage all Node.js projects. Whether you're experimenting with new ideas, learning new concepts, or building production-ready applications, this folder serves as a centralized location for all your Node.js projects.

## My other repostories links are as follows:

1. [Typescript assignments](https://github.com/ahmedjawad1857/ts-assignments)
2. [TypeScript classes by PIAIC](https://github.com/ahmedjawad1857/ts-classes-PIAIC)

Thanks for seeing my repositories.

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

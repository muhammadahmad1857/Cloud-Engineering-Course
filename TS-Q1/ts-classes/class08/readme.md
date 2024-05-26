# Class 08: Understanding Objects and Modules in TypeScript

In this class, we delve into the following topics:

- [What are Objects](#what-are-objects)
- [Why Objects are Needed](#why-objects-are-needed)
- [Where Objects Should be Used](#where-objects-should-be-used)
- [Difference Between Dot and Square Bracket Notation](#difference-between-dot-and-square-bracket-notation)
- [How to Add a Property in an Object](#how-to-add-a-property-in-an-object)
- [How to Get a Property from an Object](#how-to-get-a-property-from-an-object)
- [Nested Objects](#nested-objects)
- [How to Add or Get Property from Nested Objects](#how-to-add-or-get-property-from-nested-objects)
- [What are Modules](#what-are-modules)
- [What is Export](#what-is-export)
- [What is Import](#what-is-import)
- [The `as` Keyword in Import](#the-as-keyword-in-import)
- [Difference Between Export and Import](#difference-between-export-and-import)
- [Difference Between Export Default and Named Export](#difference-between-export-default-and-named-export)
- [Difference Between Curly Braces Import and Simple Import](#difference-between-curly-braces-import-and-simple-import)
- [TypeScript Configuration to Use Import/Export](#typescript-configuration-to-use-importexport)

## What are Objects

Objects in TypeScript are collections of related data and functionality. They are composed of properties and methods, which are key-value pairs. Objects allow us to group related information together, making our code more modular and easier to manage.

Example:

```typescript
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
```

Here, `person` is an object with properties `name` and `age`, and a method `greet`.

## Why Objects are Needed

Objects are essential in TypeScript for several reasons:

- **Organize data:** Group related data together for better structure. For example, an object representing a user can include properties like `name`, `age`, and `email`.
- **Modularity:** Create reusable code blocks. Methods within objects can be reused across different parts of an application.
- **Encapsulation:** Protect and manage state within an application. Objects can encapsulate state and behavior, providing a clear interface for interaction.
- **Inheritance:** Share behavior across multiple objects using prototypes or classes, enabling code reuse and reduction of redundancy.

## Where Objects Should be Used

Objects should be used when:

- **Modeling real-world entities:** For example, a `Car` object can have properties like `make`, `model`, and `year`.
- **Storing and manipulating complex data:** Objects can store structured data like configuration settings or user profiles.
- **Encapsulating related data and functions:** Grouping related properties and methods in an object helps in maintaining a clean and modular codebase.
- **Working with structured data:** JSON data can be easily mapped to JavaScript objects for manipulation.

## Difference Between Dot and Square Bracket Notation

- **Dot Notation:**

  - Simplest and most common way to access properties.
  - Cannot be used if the property name is a variable or contains special characters.

  Example:

  ```typescript
  let obj = { name: "Alice" };
  console.log(obj.name); // Alice
  ```

- **Square Bracket Notation:**

  - Allows access to properties using variables or strings.
  - Useful for dynamic property names or properties with special characters.

  Example:

  ```typescript
  let obj = { name: "Alice" };
  console.log(obj["name"]); // Alice

  let property = "name";
  console.log(obj[property]); // Alice
  ```

## How to Add a Property in an Object

### Using Dot Notation

```typescript
let obj: { [key: string]: any } = {};
obj.newProperty = "value";
```

### Using Bracket Notation

```typescript
let obj: { [key: string]: any } = {};
obj["newProperty"] = "value";
```

## How to Get a Property from an Object

### Using Dot Notation

```typescript
let value = obj.propertyName;
```

### Using Bracket Notation

```typescript
let value = obj["propertyName"];
```

## Nested Objects

Nested objects are objects within objects. They allow for the creation of more complex data structures.

Example:

```typescript
let nestedObj = {
  outerProperty: {
    innerProperty: "value",
  },
};
```

## How to Add or Get Property from Nested Objects

### Adding a Property

```typescript
nestedObj.outerProperty.newInnerProperty = "newValue";
```

### Getting a Property

```typescript
let value = nestedObj.outerProperty.innerProperty;
```

## What are Modules

Modules are reusable pieces of code that can be imported and exported between different files. They help in organizing and maintaining code, especially in large applications. Modules ensure that different parts of your code are isolated and maintain a clean namespace.

## What is Export

Exporting is the process of making variables, functions, or objects available for import in other modules.

### Example

```typescript
// module.ts
export const myVariable = "value";
export function myFunction() {
  // function code
}
```

## What is Import

Importing is the process of bringing variables, functions, or objects from another module into the current scope.

### Example

```typescript
// main.ts
import { myVariable, myFunction } from "./module.js";
```

## The `as` Keyword in Import

The `as` keyword is used to rename imports for better readability or to avoid naming conflicts.

### Example

```typescript
import { myVariable as newVariableName } from "./module.js";
```

## Difference Between Export and Import

- **Export:** Makes code available to other modules.
- **Import:** Brings code from other modules into the current module.

## Difference Between Export Default and Named Export

- **Export Default:** Used to export a single value from a module. It can be a function, class, object, etc. Only one default export per module is allowed.

  ```typescript
  export default function () {
    /* function code */
  }
  ```

- **Named Export:** Used to export multiple values from a module. Multiple named exports are allowed in a module.
  ```typescript
  export const myVariable = "value";
  export function myFunction() {
    /* function code */
  }
  ```

## Difference Between Curly Braces Import and Simple Import

- **Curly Braces Import:** Used for named exports.
  ```typescript
  import { myVariable, myFunction } from "./module.js";
  ```
- **Simple Import:** Used for default exports.
  ```typescript
  import myDefaultFunction from "./module.js";
  ```

# TypeScript Configuration to Use Import/Export

To properly work with modules in TypeScript, certain changes are required in the `package.json` and `tsconfig.json` files.

## Updating Configuration Files

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

By understanding these concepts and configurations, you can better organize and manage your TypeScript code, leading to more maintainable and scalable applications.

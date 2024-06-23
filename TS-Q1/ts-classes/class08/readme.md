# Class 08: Understanding Objects and Modules in TypeScript

Welcome to Class 08 of TypeScript where we explore fundamental concepts related to objects and modules. Below, you'll find detailed explanations and examples covering various aspects of TypeScript objects and modules.

## Table of Contents

- [What are Objects](#what-are-objects)
- [Why Objects are Needed](#why-objects-are-needed)
- [Where Objects Should be Used](#where-objects-should-be-used)
- [Difference Between Dot and Square Bracket Notation](#difference-between-dot-and-square-bracket-notation)
- [How to Add a Property in an Object](#how-to-add-a-property-in-an-object)
- [How to Get a Property from an Object](#how-to-get-a-property-from-an-object)
- [How to Delete a Property from an Object](#how-to-delete-a-property-from-an-object)
- [How to Update a Property from an Object](#how-to-update-a-property-from-an-object)
- [Nested Objects](#nested-objects)
- [How to Add a Property in a Nested Object](#how-to-add-a-property-in-a-nested-object)
- [How to Get a Property from a Nested Object](#how-to-get-a-property-from-a-nested-object)
- [How to Delete a Property from a Nested Object](#how-to-delete-a-property-from-a-nested-object)
- [How to Update a Property from a Nested Object](#how-to-update-a-property-from-a-nested-object)
- [What are Modules](#what-are-modules)
- [What is Export](#what-is-export)
- [What is Import](#what-is-import)
- [The `as` Keyword in Import](#the-as-keyword-in-import)
- [Difference Between Export and Import](#difference-between-export-and-import)
- [Difference Between Export Default and Named Export](#difference-between-export-default-and-named-export)
- [Difference Between Curly Braces Import and Simple Import](#difference-between-curly-braces-import-and-simple-import)
- [TypeScript Configuration to Use Import/Export](#typescript-configuration-to-use-importexport)

## What are Objects

Objects in TypeScript are fundamental data structures that allow us to encapsulate related data and functionality into a single unit. They consist of properties (data) and methods (functions) which operate on that data.

### Why Objects are Needed

Objects are essential in TypeScript for several reasons:

- **Organize Data:** Group related information together for better structure and readability.
- **Modularity:** Encapsulate reusable code blocks, promoting code reuse and maintainability.
- **Encapsulation:** Protect and manage the state of an application, controlling access to properties and methods.
- **Inheritance:** Facilitate code reuse through inheritance, sharing properties and methods between objects.

### Where Objects Should be Used

Objects are suitable for various scenarios:

- **Modeling Real-World Entities:** Represent entities like users, products, or cars with their respective properties (e.g., name, age, model).
- **Storing and Manipulating Data:** Manage structured data such as configurations, user profiles, or any complex data structure.
- **Encapsulating Functionality:** Group related methods and properties, ensuring cohesive and organized codebases.
- **Working with JSON Data:** Easily map JSON data to TypeScript objects for manipulation and data transformation.

### Difference Between Dot and Square Bracket Notation

- **Dot Notation:**

  - Directly accesses object properties using the property name.
  - Cannot use dynamic property names or names containing special characters.

  Example:

```typescript
let obj = { name: "Alice" };
console.log(obj.name); // Output: Alice
```

- **Square Bracket Notation:**

  - Accesses object properties dynamically using a string or variable containing the property name.
  - Useful for dynamic property access or names with special characters.

  Example:

```typescript
let obj = { name: "Alice" };
let propertyName = "name";
console.log(obj[propertyName]); // Output: Alice
```

## How to Add a Property in an Object

### Using Dot Notation

To add a property using dot notation:

```typescript
let obj: { [key: string]: any } = {};
obj.newProperty = "value";
```

### Using Bracket Notation

To add a property using bracket notation:

```typescript
let obj: { [key: string]: any } = {};
obj["newProperty"] = "value";
```

## How to Get a Property from an Object

### Using Dot Notation

To get a property using dot notation:

```typescript
let value = obj.propertyName;
```

### Using Bracket Notation

To get a property using bracket notation:

```typescript
let value = obj["propertyName"];
```

## How to Delete a Property from an Object

### Using Dot Notation

To delete a property using dot notation:

```typescript
delete obj.propertyName;
```

Certainly! Let's continue from where we left off:

### How to Delete a Property from an Object

#### Using Dot Notation

To delete a property from an object using dot notation:

```typescript
delete obj.propertyName;
```

#### Using Bracket Notation

To delete a property from an object using bracket notation:

```typescript
delete obj["propertyName"];
```

### How to Update a Property from an Object

#### Using Dot Notation

To update a property in an object using dot notation:

```typescript
obj.propertyName = newValue;
```

#### Using Bracket Notation

To update a property in an object using bracket notation:

```typescript
obj["propertyName"] = newValue;
```

### Nested Objects

Nested objects are objects that are properties of other objects, enabling the creation of complex data structures.

### How to Add a Property in a Nested Object

#### Using Dot Notation

To add a property in a nested object using dot notation:

```typescript
nestedObj.outerProperty.newInnerProperty = "newValue";
```

#### Using Bracket Notation

To add a property in a nested object using bracket notation:

```typescript
nestedObj["outerProperty"]["newInnerProperty"] = "newValue";
```

### How to Get a Property from a Nested Object

#### Using Dot Notation

To get a property from a nested object using dot notation:

```typescript
let value = nestedObj.outerProperty.innerProperty;
```

#### Using Bracket Notation

To get a property from a nested object using bracket notation:

```typescript
let value = nestedObj["outerProperty"]["innerProperty"];
```

### How to Delete a Property from a Nested Object

#### Using Dot Notation

To delete a property from a nested object using dot notation:

```typescript
delete nestedObj.outerProperty.innerProperty;
```

#### Using Bracket Notation

To delete a property from a nested object using bracket notation:

```typescript
delete nestedObj["outerProperty"]["innerProperty"];
```

### How to Update a Property from a Nested Object

#### Using Dot Notation

To update a property in a nested object using dot notation:

```typescript
nestedObj.outerProperty.innerProperty = newValue;
```

#### Using Bracket Notation

To update a property in a nested object using bracket notation:

```typescript
nestedObj["outerProperty"]["innerProperty"] = newValue;
```

Certainly! Let's continue from the topic of modules:

## What are Modules

Modules in TypeScript are essential for organizing code into reusable, independent units. They help in managing dependencies and promoting encapsulation. Modules allow you to define private and public parts of your code, enhancing maintainability and readability.

### Key Features of Modules:

- **Encapsulation:** Modules encapsulate code, making it easier to manage and reducing namespace pollution.
- **Reusability:** Code defined in modules can be reused across different parts of an application or even in different projects.
- **Dependency Management:** Modules define explicit dependencies, making it clear which parts of the code rely on other parts.
- **Scope Control:** Modules provide scope isolation, allowing you to define private and public members that are accessible only within the module or externally as needed.

## What is Export

Exporting in TypeScript allows you to make functions, variables, classes, or even types available for use in other modules. It essentially exposes the defined entities from the module so that they can be imported and used in other parts of the application.

### Example of Exporting:

```typescript
// module.ts
export const myVariable = "value";

export function myFunction() {
  // function code
}

export class MyClass {
  // class code
}
```

In this example:

- `myVariable`, `myFunction`, and `MyClass` are exported from `module.ts`.
- They can be imported into other modules using TypeScript's import syntax.

## What is Import

Importing in TypeScript allows you to bring functionalities (variables, functions, classes, etc.) from other modules into the current module. This makes it possible to use those functionalities as if they were defined locally within the importing module.

### Example of Importing:

```typescript
// main.ts
import { myVariable, myFunction, MyClass } from "./module";

// Now you can use myVariable, myFunction, and MyClass here
```

In this example:

- `myVariable`, `myFunction`, and `MyClass` are imported from the `module.ts` module.
- They can be used in `main.ts` as if they were defined within `main.ts`.

## The `as` Keyword in Import

The `as` keyword in TypeScript import statements allows you to rename imported bindings to different names. This can be useful for improving code readability or avoiding naming conflicts when importing multiple entities from different modules.

### Example of Using `as` Keyword:

```typescript
import { myFunction as renamedFunction } from "./module";

// Now you can use renamedFunction instead of myFunction
```

In this example:

- `myFunction` from `module.ts` is imported and renamed as `renamedFunction`.
- You can now use `renamedFunction` in your code instead of `myFunction`.

## Difference Between Export and Import

- **Export:** Makes functionalities (variables, functions, classes) available for use in other modules by exposing them.
- **Import:** Brings functionalities from other modules into the current module for use within that module.

## Difference Between Export Default and Named Export

- **Export Default:** Used to export a single value (function, class, object, etc.) as the default export of a module. There can only be one default export per module.

  Example:

  ```typescript
  // module.ts
  export default function myDefaultFunction() {
    // function code
  }
  ```

- **Named Export:** Used to export multiple values (variables, functions, classes, etc.) from a module by explicitly naming each export.

  Example:

  ```typescript
  // module.ts
  export const myVariable = "value";

  export function myFunction() {
    // function code
  }
  ```

## Difference Between Curly Braces Import and Simple Import

- **Curly Braces Import:** Used for importing named exports from a module. You specify the exact names of the exports you want to import within curly braces `{}`.

  Example:

  ```typescript
  // main.ts
  import { myVariable, myFunction } from "./module";
  ```

- **Simple Import:** Used for importing the default export from a module. There is no need for curly braces when importing the default export.

  Example:

  ```typescript
  // main.ts
  import myDefaultFunction from "./module";
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


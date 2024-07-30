# Class 11: JSON and OOPS concepts

## Table of Contents

1. [JSON (JavaScript Object Notation)](#json-javascript-object-notation)
2. [ENUM](#enum)
3. [Custom Types](#custom-types)
4. [Type Aliases](#type-aliases)
5. [Interface Aliases](#interface-aliases)
6. [Union Types](#union-types)
7. [Intersection Types](#intersection-types)
8. [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
9. [Class](#class)
10. [Access Modifiers](#access-modifiers)
    - [Private](#private)
    - [Public](#public)
    - [Static](#static)
11. [Inheritance](#inheritance)
12. [Abstraction](#abstraction)
13. [Encapsulation](#encapsulation)
14. [Polymorphism](#polymorphism)
15. [Set/Get Methods](#setget-methods)

## JSON (JavaScript Object Notation)

**JSON** stands for JavaScript Object Notation. It is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is commonly used for transmitting data between a server and a web application or between different parts of a program.

### Why Use JSON

- **Interoperability**: JSON is supported by many programming languages and can be used to exchange data between different systems.
- **Readability**: JSON's structure is straightforward, making it easy to read and understand.
- **Efficiency**: JSON is more compact and faster to parse compared to other data formats like XML.

### Is JSON Only Used with JS/TS?

No, JSON is not exclusive to JavaScript or TypeScript. It is used with a variety of programming languages, including Python, Java, C#, Ruby, and many more. Most modern programming languages have libraries or built-in support for handling JSON data.

### How to Import JSON

In TypeScript, you can import JSON data using the `import` statement with an assertion:

```typescript
import data from "./data.json" assert { type: "json" };
console.log(data);
```

Ensure that your TypeScript configuration (`tsconfig.json`) includes `"resolveJsonModule": true` to support JSON imports.

## ENUM

An **enum** (short for enumeration) is a special type that represents a collection of named constants. Enums are a way to give more meaningful names to a set of numeric or string values.

### Benefits of ENUM

- **Improved Readability**: Named constants make the code more readable and self-explanatory.
- **Maintainability**: Centralizes the definition of constants in one place, making it easier to manage and update.
- **Type Safety**: Enums ensure that variables are assigned only predefined values.

### Example

```typescript
enum UserRole {
  Student = "Student",
  Teacher = "Teacher",
  Head = "Head",
}
```

## Custom Types

**Custom types** in TypeScript allow you to define your own types to describe the shape of data or the behavior of variables. This helps in creating more complex and expressive type definitions.

### Example

```typescript
type Alphabets = string[]; // Array of strings
```

## Type Aliases

**Type aliases** provide a way to create a new name for any type, including primitive types, object types, and more. Type aliases help simplify complex type definitions and improve code readability.

### Example

```typescript
type StringOrNumber = string | number; // Union type alias
```

## Interface Aliases

**Interfaces** are used to define the shape of objects. They specify which properties and methods an object should have. Although there isn't a concept of "interface aliases," interfaces themselves are used for this purpose.

### Example

```typescript
interface Person {
  name: string;
  age: number;
}
```

## Union Types

**Union types** allow a variable to hold values of different types. They are defined using the `|` operator.

### Example

```typescript
type StringOrNumber = string | number;
```

## Intersection Types

**Intersection types** combine multiple types into one. An object of an intersection type must satisfy all the combined types. This is useful when you want to create a type that combines multiple behaviors or properties.

### Example

```typescript
type Person = { name: string; age: number };
type Address = { street: string; city: string };
type PersonWithAddress = Person & Address;
```

## Object-Oriented Programming (OOP)

**Object-Oriented Programming (OOP)** is a programming paradigm that uses objects and classes to model real-world entities. OOP emphasizes the organization of code into reusable and modular units.

### Key Principles

- **Encapsulation**: Bundling data and methods into a single unit (class) and restricting access to some components.
- **Abstraction**: Hiding complex implementation details and exposing only the necessary features.
- **Inheritance**: Creating new classes based on existing classes, allowing for code reuse and hierarchy.
- **Polymorphism**: Using a single interface to represent different underlying forms (data types).

## Class

A **class** is a blueprint for creating objects. It defines properties and methods that the objects created from the class will have.

### Example

```typescript
class Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

## Access Modifiers

### Private

The **`private`** keyword restricts access to class members to within the class itself. Private members cannot be accessed or modified from outside the class.

### Public

The **`public`** keyword (default) allows access to class members from anywhere. Public members can be accessed and modified from outside the class.

### Static

The **`static`** keyword defines class members that are shared among all instances of the class. Static members belong to the class itself rather than to instances of the class.

### Example

```typescript
class Human {
  static species: string = "Homo sapiens"; // Static member
  private password: string; // Private member

  constructor(name: string, age: number) {
    this.password = "Parameter value";
  }

  get Password(): string {
    return this.password;
  }

  set UpdatePassword(pass: string) {
    this.password = pass;
  }
}
```

## Inheritance

**Inheritance** is a mechanism where a new class (subclass) derives properties and methods from an existing class (superclass). It promotes code reuse and the creation of a class hierarchy.

### Example

```typescript
class Animal {
  makeSound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark");
  }
}
```

## Abstraction

**Abstraction** involves creating simplified models of complex systems by exposing only the essential features and hiding the implementation details. It helps manage complexity by focusing on the relevant aspects.

### Example

```typescript
abstract class Shape {
  abstract getArea(): number; // Abstract method
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

## Encapsulation

**Encapsulation** is the principle of bundling data (properties) and methods (functions) that operate on the data into a single unit (class). It restricts direct access to some of the object's components, which helps protect the object's integrity.

### Example

```typescript
class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value > 0) this._age = value; // Validation
  }
}
```

## Polymorphism

**Polymorphism** allows objects to be treated as instances of their parent class rather than their actual class. It enables a single interface to be used for different underlying forms (data types), allowing for method overriding and dynamic method binding.

### Example

```typescript
class Animal {
  makeSound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark");
  }
}

function printSound(animal: Animal) {
  animal.makeSound();
}

const myDog = new Dog();
printSound(myDog); // Bark
```

## Set/Get Methods

**Setters** and **getters** are special methods that provide controlled access to private properties. They allow you to define how a property is accessed and modified.

### Why Use Set/Get

- **Controlled Access**: Setters and getters provide a way to control how properties are accessed or modified, allowing for validation or transformation of data before setting or retrieving values.
- **Encapsulation**: They help maintain encapsulation by providing a controlled interface for interacting with private data.

### Example

```typescript
class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value > 0) this._age = value;
  }
}
```

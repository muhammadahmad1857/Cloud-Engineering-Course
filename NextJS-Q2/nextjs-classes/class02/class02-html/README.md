
# Basics of HTML, CSS, and JavaScript

## Table of Contents

- [Overview](#overview)
- [HTML Structure](#html-structure)
- [CSS Selectors](#css-selectors)
- [JavaScript Basics](#javascript-basics)
- [CSS Types](#css-types)
- [JavaScript Types](#javascript-types)
- [Differences and Notes](#differences-and-notes)

## Overview

This project demonstrates the basic usage of HTML, CSS, and JavaScript to create a simple webpage with various HTML elements and styling options. The example showcases different types of CSS selectors, JavaScript functionality, and the distinctions between inline, internal, and external CSS and JavaScript.

## HTML Structure

The HTML file includes:

- Various HTML heading tags (`h1` through `h6`)
- Examples of CSS selectors: tag name, id, class, and inline
- A button that triggers JavaScript to change the text content of an `h2` element

## CSS Selectors

- **Tag Name Selector**: Targets elements by their tag name. For example:
  ```css
  h1 {
    color: blue;
    background-color: black;
  }
  ```

This rule will apply to all `<h1>` elements.

- **ID Selector**: Targets a single element by its unique ID. For example:

  ```css
  #heading {
    font-size: 2em;
  }
  ```

  This rule applies only to the element with the ID `heading`.

- **Class Selector**: Targets elements by their class name. For example:
  ```css
  .heading1 {
    background: blue;
    color: aliceblue;
  }
  ```
  This rule applies to all elements with the class `heading1`.

## JavaScript Basics

- **`document.getElementById`**: Retrieves an element by its ID. For example:

  ```javascript
  const heading = document.getElementById("heading");
  ```

  This method returns the element with the specified ID.

- **`textContent`**: Gets or sets the text content of an element. For example:

  ```javascript
  heading.textContent = "New Text";
  ```

  This sets the text content of the `heading` element to "New Text".

- **`className`**: Gets or sets the value of the `class` attribute of an element. For example:

  ```javascript
  heading.className = "new-class";
  ```

  This changes the class of the `heading` element to "new-class".

- **`document`**: Represents the entire HTML document and provides methods to access and manipulate its elements.

## CSS Types

- **Inline CSS**: Applied directly within an HTML element using the `style` attribute. Example:

  ```html
  <h3 style="background-color: red">Heading 3</h3>
  ```

  This method is useful for quick, one-off styles but can clutter HTML.

- **Internal CSS**: Defined within a `<style>` tag in the `<head>` section of the HTML document. Example:

  ```html
  <style>
    h1 {
      color: blue;
    }
  </style>
  ```

  Useful for styles specific to a single document, but can make the HTML file large.

- **External CSS**: Defined in a separate `.css` file and linked to the HTML document using the `<link>` tag. Example:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
  Preferred for larger projects to separate style from content and promote reuse across multiple pages.

## JavaScript Types

- **Internal JavaScript**: Included within the HTML document using the `<script>` tag. Example:

  ```html
  <script>
    function myFunction() {
      alert("Hello World!");
    }
  </script>
  ```

  Good for small scripts but can increase the size of the HTML file.

- **External JavaScript**: Placed in a separate `.js` file and linked to the HTML document using the `<script src="script.js"></script>` tag. Example:

```html
<script src="script.js"></script>
```

Preferred for larger scripts to keep HTML files clean and modular.

## Differences and Notes

- **Inline vs. Internal vs. External CSS**:

  - Inline CSS is useful for styling individual elements quickly but is not reusable and can clutter HTML.
  - Internal CSS is useful for single documents but can make the HTML file large and less manageable.
  - External CSS is ideal for larger projects, promoting separation of concerns, easier maintenance, and reuse.

- **Internal vs. External JavaScript**:

  - Internal JavaScript is suitable for small, document-specific scripts but can increase HTML file size.
  - External JavaScript is preferred for larger scripts, allowing for better organization, modularity, and reuse.

- **TypeScript Notes**:

  - TypeScript (TS) cannot be used directly within inline or internal JavaScript sections. TypeScript must be compiled into JavaScript before use in web pages.

- **Why Not Inline or Internal Code**:
  - Writing extensive code inline or using internal scripts can make HTML files large, harder to manage, and less reusable. External files help keep code organized, modular, and easier to maintain.

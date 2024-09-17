# Class 06: Understanding Components and Rendering Techniques in Next.js

## Table of Contents

1. [What is a Component](#what-is-a-component)
2. [Why Use Components](#why-use-components)
3. [Benefits of Components](#benefits-of-components)
4. [How to Make a Component in Next.js](#how-to-make-a-component-in-nextjs)
5. [Best Practices for Making a Component](#best-practices-for-making-a-component)
6. [How Should We Use Components](#how-should-we-use-components)
7. [What are Props](#what-are-props)
8. [Why Use Props](#why-use-props)
9. [How to Give Types to Props](#how-to-give-types-to-props)
10. [Ways of Giving Props](#ways-of-giving-props)
11. [What is CSR](#what-is-csr)
12. [What is SSR](#what-is-ssr)
13. [Benefits of CSR](#benefits-of-csr)
14. [Benefits of SSR](#benefits-of-ssr)
15. [Difference Between SSR and CSR](#difference-between-ssr-and-csr)
16. [What is onClick](#what-is-onclick)
17. [Why Does onClick Only Work on Client Side](#why-does-onclick-only-work-on-client-side)

## What is a Component

A component is a reusable piece of UI that encapsulates a part of the user interface. Components can range from simple elements like buttons to complex structures like entire pages.

## Why Use Components

Components help in creating a modular and maintainable codebase. They allow you to break down the UI into smaller, manageable pieces, making development and debugging easier.

## Benefits of Components

- **Reusability:** Components can be reused across different parts of the application.
- **Modularity:** Helps in separating concerns and organizing code efficiently.
- **Maintainability:** Easier to manage and update small pieces of code.
- **Testability:** Components can be tested in isolation, improving test accuracy.

## How to Make a Component in Next.js (Using App Router)

### 1. Create a Components Directory

In your Next.js project root, create a `components` directory to store your reusable components.

```
my-nextjs-project/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
├── components/
│   └── MyComponent.tsx
├── public/
├── styles/
├── ...
```

### 2. Create a Component File

Inside the `components` directory, create a file for your component. For instance, create `MyComponent.tsx` for a `MyComponent`.

### 3. Define Your Component

Define your component using a functional approach in `MyComponent.tsx`:

```tsx
// components/MyComponent.tsx
import React from "react";

interface MyComponentProps {
  message: string;
}

const MyComponent = ({ message }: MyComponentProps) => {
  return <div>{message}</div>;
};

export default MyComponent;
```

### 4. Use Your Component in App Router

To use your component, import it into a page or layout file. For example, in `app/page.tsx`:

```tsx
// app/page.tsx
import React from "react";
import MyComponent from "../components/MyComponent";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <MyComponent message="Hello from MyComponent!" />
    </div>
  );
};

export default HomePage;
```

### 5. Best Practices for Organizing Components

- **Component Directory:** Keep all reusable components in the `components` directory.
- **File Naming:** Use PascalCase for filenames (e.g., `MyComponent.tsx`).
- **Component Structure:** Prefer functional components and use TypeScript for type safety.
- **Component Usage:** Import and use components in pages or layout files as needed.

## How Should We Use Components

Components should be used to encapsulate UI logic and structure. They should be composed together to build more complex UIs, promoting reusability and modularity.

## What are Props

Props (short for properties) are a way of passing data from a parent component to a child component in React.

## Why Use Props

Props allow components to be dynamic and reusable by providing them with different values. They help in configuring and customizing components.

## How to Give Types to Props

In TypeScript, define types for props using an interface or type alias:

```tsx
interface MyComponentProps {
  message: string;
}

const MyComponent = ({ message }: MyComponentProps) => {
  return <div>{message}</div>;
};
```

## Ways of Giving Props

- **Directly:** Pass props directly to the component:

  ```tsx
  <MyComponent message="Hello" />
  ```

- **Spread Operator:** Use the spread operator to pass multiple props:

  ```tsx
  const props = { message: "Hello" };
  <MyComponent {...props} />;
  ```

## What is CSR

Client-Side Rendering (CSR) is a method where the rendering of web pages happens in the browser. The server sends a minimal HTML shell, and JavaScript handles the rest of the rendering.

## What is SSR

Server-Side Rendering (SSR) is a method where the server generates the full HTML for a page on each request. The client receives the fully rendered page, which can be faster and better for SEO.

## Benefits of CSR

- **Interactivity:** Provides a dynamic user experience with JavaScript handling updates.
- **Reduced Server Load:** The server sends less HTML, reducing server load.
- **Faster Page Transitions:** Smooth transitions as only data is fetched rather than whole pages.

## Benefits of SSR

- **Better SEO:** Fully rendered HTML is accessible to search engines.
- **Faster Initial Load:** Users see a fully rendered page faster.
- **Improved Performance:** Reduces the time to first meaningful paint.

## Difference Between SSR and CSR

- **Rendering Location:** SSR renders on the server, CSR on the client.
- **Initial Load:** SSR provides a fully rendered page initially, CSR requires JavaScript to render.
- **Performance:** SSR can be faster for the initial load, CSR can provide smoother user interactions.

## What is onClick

`onClick` is an event handler in React that is used to handle click events on elements such as buttons, links, and divs. When the user clicks on an element with an `onClick` handler, the associated function is executed.

### Example:

```tsx
const handleClick = () => {
  alert("Button clicked!");
};

return <button onClick={handleClick}>Click Me</button>;
```

## Why Does onClick Only Work on Client Side

`onClick` and other event handlers rely on JavaScript to function. Since JavaScript runs in the browser (client-side), these event handlers only work in a client-side environment. On the server side (SSR), JavaScript is not executed in the same way, so user interactions such as clicks are handled after the page has been sent to the client and JavaScript has been loaded. This is why `onClick` and similar event handlers only work on the client side.

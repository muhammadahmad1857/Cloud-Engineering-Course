
# React State Management Guide

## Table of Contents
- [What is useState](#what-is-usestate)
- [How to give type in useState](#how-to-give-type-in-usestate)
- [How to get the value from user input](#how-to-get-the-value-from-user-input)
- [How to handle form submissions](#how-to-handle-form-submissions)
- [How to get the previous value from useState](#how-to-get-the-previous-value-from-usestate)
- [Logic for CRUD Operations in State](#logic-for-crud-operations-in-state)
  - [Logic for Add Operation](#logic-for-add-operation)
  - [Logic for Update Operation](#logic-for-update-operation)
  - [Logic for Delete Operation](#logic-for-delete-operation)

## What is useState
`useState` is a React hook that enables you to add state to functional components. It provides a way to hold and update values that can change over time. When the state updates, the component re-renders, reflecting the new state.

Example:
```jsx
import React, { useState } from 'react';

const MyComponent = () => {
  const [items, setItems] = useState([]);
  // Component logic...
};
```

## How to Give Type in useState
When using TypeScript, you can specify the type of the state variable. This is beneficial for ensuring type safety when manipulating state.

Example:
```tsx
const [items, setItems] = useState<string[]>([]);
```
In this case, `items` will always be an array of strings.

## How to Get the Value from User Input
To capture user input in a controlled component, bind the input field to a state variable using the `onChange` event. This allows the component to maintain the current value of the input field.

Example:
```jsx
const [inputValue, setInputValue] = useState('');

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

return (
  <input type="text" value={inputValue} onChange={handleInputChange} />
);
```
In this example, `handleInputChange` updates `inputValue` each time the user types into the input field.

## How to Handle Form Submissions
When dealing with forms, it's common to prevent the default behavior of the form submission (which would cause a page reload). You can achieve this using `event.preventDefault()` in your submission handler.

Example:
```jsx
const handleSubmit = (event) => {
  event.preventDefault(); // Prevents the page from reloading
  addItem(); // Call your function to add the item
};

return (
  <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={handleInputChange} />
    <button type="submit">Add Item</button>
  </form>
);
```

## How to Get the Previous Value from useState
To access the previous value of a state variable when updating it, you can use the callback function provided by `setState`.

Example:
```jsx
const [count, setCount] = useState(0);

const increment = () => {
  setCount((prevCount) => prevCount + 1); // Increment the previous count
};
```

## Logic for CRUD Operations in State

### Logic for Add Operation
To add an item to your state, use the spread operator to create a new array that includes the new item. This approach ensures you do not mutate the existing state.

Example:
```jsx
const addItem = () => {
  if (inputValue.trim() === '') return; // Prevent adding empty items
  setItems((prevItems) => [...prevItems, inputValue]);
  setInputValue(''); // Clear input after adding
};
```

### Logic for Update Operation
To update an existing item, use the `map` method to create a new array with the updated value while preserving other items.

Example:
```jsx
const updateItem = (index, newValue) => {
  if (newValue.trim() === '') return; // Prevent empty updates
  setItems((prevItems) =>
    prevItems.map((item, i) => (i === index ? newValue : item))
  );
};
```

### Logic for Delete Operation
To delete an item, utilize the `filter` method to generate a new array that excludes the specified item.

Example:
```jsx
const deleteItem = (index) => {
  setItems((prevItems) => prevItems.filter((_, i) => i !== index));
};
```

## Complete Example
Here’s how all of this comes together in a functional component:

```jsx
import React, { useState } from 'react';

const ItemManager = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue('');
  };

  const updateItem = (index, newValue) => {
    if (newValue.trim() === '') return;
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? newValue : item))
    );
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => updateItem(index, prompt('Update item:', item))}>Update</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemManager;

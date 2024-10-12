
# Class08: Data Fetching from Server

### Table of Contents
1. [What is JSON and `.json()`](#what-is-json-and-json)
2. [What is the Fetch Method](#what-is-the-fetch-method)
3. [What is an API](#what-is-an-api)
4. [What is try/catch](#what-is-trycatch)
5. [Update Function Code](#update-function-code)
6. [CRUD Code](#crud-code)

---

## What is JSON and `.json()`

**JSON (JavaScript Object Notation)** is a lightweight data format for exchanging data between a server and a client. It is easy to read, write, and parse.

**`.json()`** is a method used in JavaScript to parse a response from JSON format into a JavaScript object. This is usually done after making an API request to convert the JSON string into usable JavaScript data.

### Example (with async/await):
```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();  // Parsing the JSON
  console.log(data);
}
```

## What is the Fetch Method

The **fetch** method is a modern way to make HTTP requests in JavaScript. It returns a Promise and is usually used with `async/await` for easier handling of asynchronous operations.

### Example (with async/await):
```javascript
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
```

## What is an API

An **API (Application Programming Interface)** allows two applications to communicate with each other. In web development, APIs usually expose endpoints that let you retrieve or send data between a client and a server.

APIs often work with HTTP and return data in formats like JSON or XML.

### Example of making an API request (with async/await):
```javascript
async function getApiData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## What is try/catch

The **try/catch** block is used to handle errors in JavaScript. It allows you to run code that might throw an error and catch that error, providing an opportunity to handle it gracefully.

### Example (with async/await):
```javascript
async function performTask() {
  try {
    let result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
```

## Update Function Code

In **Class08**, we studied the update function as part of CRUD operations. This function allows us to update data on the server.

### Example of an Update Function (with async/await):
```javascript
async function updateData(id, newData) {
  try {
    const response = await fetch(`https://api.example.com/data/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error('Failed to update data');
    }

    const updatedData = await response.json();
    console.log('Data updated:', updatedData);
  } catch (error) {
    console.error('Error updating data:', error);
  }
}
```

## CRUD Code

The CRUD operations (Create, Read, Update, Delete) are the basic operations for interacting with APIs or databases. Below is a link to the full CRUD code for reference:

[CRUD Code](https://github.com/muhammadahmad1857/Cloud-Engineering-Course/tree/main/NextJS-Q2/nextjs-classes/class07/app/crud)

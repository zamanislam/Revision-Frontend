// return type of async function

// The return type of an async function in JavaScript is always a Promise.

// Here's how it works:

// If the async function explicitly returns a value, the Promise resolves with that value.
// If the async function throws an error (or rejects), the Promise is rejected with that error.
// If no value is returned, the Promise resolves to undefined.

async function example() {
    return "Hello, world!";
  }
  
  example().then(console.log); // Logs: "Hello, world!"

  

  // await always go with async or alone may be

//   The await keyword in JavaScript must always be used inside an async function. If you try to use it outside of an async function, you'll get a syntax error.

// Why await Needs async
// The await keyword pauses the execution of an async function until the Promise it is waiting for is resolved or rejected.
// It doesn't work outside of async because JavaScript needs the async function's promise-based environment to manage this asynchronous behavior.

async function example() {
    const result = await Promise.resolve("Hello, world!");
    console.log(result); // Logs: "Hello, world!"
  }
  example();

  

//   d/f b/w session storage and local storage

// sessionStorage and localStorage are both part of the Web Storage API and are used to store data in the browser. However, they differ in terms of their lifetime and scope. Here's a detailed comparison:

// 1. Lifetime
// sessionStorage:

// Data is stored for the duration of the page session.
// It is cleared when the tab or browser window is closed.
// Does not persist across browser sessions or tabs.
// localStorage:

// Data persists even after the browser is closed and reopened.
// Remains stored until explicitly cleared (by JavaScript or the user).


// eg of NAN  0/0  1-'a'

//d/f b/w normal function and arrow function

// Syntax	function keyword	=> syntax
// this Binding	Dynamic, based on how it's called	Lexical, inherits from outer scope
// arguments Object	Available	Not available
// Constructor Usage	Can be used with new	Cannot be used as a constructor
// Return Statement	Explicit return needed (unless void)	Implicit return for single expressions
// Object Methods	Suitable for methods	Avoid due to this behavior


//optioanal chaining

// Optional Chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested properties, 
// methods, or array elements without worrying about encountering undefined or null. If a property, method,
//  or array does not exist, 
// the optional chaining operator short-circuits and returns undefined instead of throwing an error.

const user = {
    profile: {
      name: "John Doe",
    },
  };
  
  console.log(user.profile?.name); // "John Doe"
  console.log(user.profile?.age);  // undefined
  console.log(user.settings?.theme); // undefined (safe access, no error)
  

  //Clousures

//   Access Outer Variables: A closure allows an inner function to access variables from its outer function,
//    even after the outer function has executed.

// Encapsulation: Closures help create private variables and methods,
//  as the outer variables are only accessible to the inner function.

// Persistent State: Closures enable functions to retain their state between executions.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log(`Outer Variable: ${outerVariable}`);
      console.log(`Inner Variable: ${innerVariable}`);
    };
  }
  
  const closureFunc = outerFunction("outside");
  closureFunc("inside");
  // Logs:
  // Outer Variable: outside
  // Inner Variable: inside

  
  //function currying

//   Currying is a functional programming technique in JavaScript (and other languages)
//    where a function takes multiple arguments one at a time instead of all at once. 
//    It transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

// Key Characteristics:
// Function Transformation: A function with multiple arguments, like f(a, b, c), 
// is transformed into a sequence of nested functions: f(a)(b)(c).
// Partial Application: Currying allows you to create a new function by fixing some arguments of the original function.

function sum(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
  
  const curriedSum = sum(1)(2)(3); // 6
  console.log(curriedSum); // Logs: 6

  
  //Form Events

  // onSubmit,change, input, focus,select

  //mouse events

  //onClick, mouse over, mouseUP,mouseDown, 

  // d/f b/t axios and fetch

//   Axios and Fetch are both popular tools for making HTTP requests in JavaScript. 
//   While they serve the same purpose, there are some key differences in terms of functionality, ease of use, and flexibility.

// Feature	Axios	Fetch
// Library vs. Native	Axios is a third-party library. You need to install it separately.	Fetch is a built-in JavaScript API, so no installation is required.
// Browser Support	Axios supports older browsers (e.g., Internet Explorer 11).	Fetch is not supported by older browsers (e.g., Internet Explorer). Polyfills may be needed.
// Syntax (Request)	Uses a simpler, more concise syntax for making requests.	Uses a more verbose syntax, requiring handling of Response objects explicitly.
// Automatic JSON Parsing	Automatically parses JSON responses, so you don’t need to call .json() manually.	Requires calling .json() manually to parse the response.

// browser list in package . json

// In the package.json file, the "browserslist" field is used to specify which browsers you want to support for your project.
//  This configuration is essential for tools like Autoprefixer, Babel,
//  and ESLint to determine which browsers to target when transpiling, prefixing CSS, or checking code quality. 


// custom hook and normal hook

// Feature	Normal Hook	Custom Hook
// Definition	Built-in React hooks provided by React itself (e.g., useState, useEffect).	User-defined functions that use normal hooks to encapsulate and reuse logic across components.
// Purpose	Used to manage state, side effects, context, and more in functional components.	Allows you to encapsulate logic that can be reused across multiple components.



// index.js file in react 

// The index.js file in a React project typically serves as the entry point for the application.
//  It is responsible for rendering the root component (usually App.js)
//   into the DOM and establishing the root of the React application.

// In most React projects created with tools like Create React App, 
// this file is located in the src/ directory and contains the necessary code to set up React in your app.


//  Context Api

// The Context API in React is a feature that allows you to share data 
// across components without having to pass props manually at every level. 
// It is used to create a global state that can be accessed by any component in the component tree, 
// regardless of how deeply nested they are.

// Context is often used for global data like themes, authentication status, user preferences, etc.,
//  that many components need access to.

//  useState and useReducer are both React hooks used to manage state in functional components,
//  but they have some differences in how they manage the state
//  and the complexity of the state logic. Below are the similarities and differences between useState and useReducer:


// how to optimize react app

//useMemo, useCallback

//JSX
// JSX allows you to write HTML-like structures within JavaScript code,
//  making it easier to visualize and structure your UI components. 

// Why Babel is Important in React
// React uses JSX, a syntax extension that looks like HTML but is ultimately JavaScript. Browsers 
// can't natively interpret JSX, so Babel is used to transpile JSX and modern JavaScript into a format that is compatible 
// with older browsers (like Internet Explorer) and current JavaScript engines.


//React fragments

// In React, a Fragment is a component that allows you to group multiple elements without adding extra nodes to the DOM. 
// This is particularly useful when you need to return multiple elements from a component 
// but don't want to add an unnecessary wrapper element (like a <div> or <span>) to the DOM.
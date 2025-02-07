// features of react

//React is a popular JavaScript library for building user interfaces, particularly for single-page applications (SPAs). 

//1 Component-Based Architecture
// Reusable Components: React applications are built using
//  components, which are reusable and independent pieces of UI.

//2  Virtual DOM
// React uses a Virtual DOM to optimize updates to the actual DOM.

//3  Declarative Syntax
// React uses a declarative programming model, making it easier to describe
//  what the UI should look like at any given point.

//4  JSX (JavaScript XML)
// JSX allows developers to write HTML-like syntax directly in JavaScript.

//5 Unidirectional Data Flow
// Data flows in one direction (from parent to child components) using props.


// d/f b/w HTML and XML

// HTML (HyperText Markup Language) and XML (eXtensible Markup Language)
//  are both markup languages, but they serve different purposes and have distinct features

// HTML: Focuses on presentation and is used for building web pages.
// XML: Focuses on data and is used for data exchange between systems or applications.

// Babel
//Role of Babel: Babel converts JSX into plain JavaScript that browsers can execute.


// d/f b/w real and virtual dom
// Aspect	Real DOM	Virtual DOM
// What it is	The actual Document Object Model representation of the HTML structure 
// rendered in the browser.	A lightweight, in-memory representation of the Real DOM.
// Nature	Represents the actual UI components rendered on the screen.	Represents a virtual copy of the UI, used for efficient updates.
// Updates	Directly updates the DOM nodes, which can be resource-intensive.	Updates only the parts of the DOM that have changed.


//ES6 (ECMAScript 2015) is the 6th edition of the ECMAScript standard, which forms the basis for JavaScript

// 1 let, const
// 2 Arrow Func 

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Template Literals
const name1 = "John";
const greeting = `Hello, ${name1}! Welcome to ES6.`;
console.log(greeting); // Hello, John! Welcome to ES6.


// 4 . Destructuring Assignment

const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b); // 1, 2

const obj = { name: "Jane", age: 25 };
const { name, age } = obj;
console.log(name, age); // Jane, 25


// 5 Default Parameters
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // Hello, Guest!
console.log(greet("Alice")); // Hello, Alice!


// 6 Spread and Rest Operators
// Spread (...): Expands an array or object into individual elements.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]


//Rest (...): Collects arguments into an array.
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4)); // 10


// Types of Components
// Class Components
// Functional Components--- JS function is used which is simple and easy to use

//Node Js
// Node.js is a powerful, open-source, 
// cross-platform JavaScript runtime environment 
// that allows developers to run JavaScript code on the server side.
//  It is built on Google Chrome's V8 JavaScript engine and 
//  is widely used for building scalable, high-performance, and lightweight server-side applications.


// useState
// The useState Hook in React is used to manage state in functional components. It allows you to add local state to a functional component and dynamically
//  update the UI in response to changes in state.

// control and uncontrol components
// In React, controlled components and uncontrolled components are two ways to
//  handle form inputs and manage their state.

// Controlled Components
// A controlled component is a form element (e.g., input, textarea, select) 
// whose value is controlled by React state.

//Uncontrolled Components
// An uncontrolled component is a form element that maintains its own internal state. React does not control its value,
//  and you access the current value using a ref.

//Prop Drilling
// Prop Drilling refers to the process of passing data (via props) from a parent component to deeply nested child components, 
// even when intermediate components don't directly use that data. 

// React.strict mode
//  React.StrictMode is a wrapper component in React that helps
//  developers identify potential issues in an application during 
// development. It does not affect the production build but provides 
// additional checks and warnings in development to improve the quality of the code.

// 1 Identifies Unsafe Lifecycle Methods:
// 2 Detects Unexpected Side Effects:

// how to pass data in components

//Props are the most common way to pass data in React, enabling communication from parent to child components.
// State allows components to manage and pass their own data locally.
// Context API is used for sharing data globally across the application without the need for prop drilling.
// Refs provide a way to directly interact with a child component or DOM element when necessary.


//d/f b/w var, let, const in terms of hoisting

// In JavaScript, hoisting refers to the behavior where variable and function declarations are moved to 
// the top of their containing scope during the compile phase before code execution.

//Behavior	var	let	const
// Hoisted to the top	Yes, declaration is hoisted	Yes, declaration is hoisted	Yes, declaration is hoisted
// Initialization	Initialized with undefined	Not initialized (Temporal Dead Zone)	Not initialized (Temporal Dead Zone)
// Access Before Declaration	Returns undefined	Throws ReferenceError	Throws ReferenceError
// Re-declaration	Can be redeclared in the same scope	Cannot be redeclared in the same scope	Cannot be redeclared in the same scope
// Reassignment	Can be reassigned	Can be reassigned	Cannot be reassigned

//Infinite currying

// In infinite currying, the function can be called repeatedly, accumulating its arguments,
//  and it will only evaluate or return a result when you explicitly call
//  it in a way that stops the chain (for example, by calling it without an argument).

function multiply(a) {
    const product = (b) => {
      if (b === undefined) {
        return a; // If no argument is passed, return the accumulated result
      }
      a *= b;
      return product; // Return the function itself for further chaining
    };
    return product;
  }
  
  console.log(multiply(2)(3)(4)()); // Outputs: 24
  

  // d/f b/w null and undefined
  // undefined -- It is a primitive value automatically assigned to variables that have been declared but not yet assigned a value.
  //null --It is a special assignment value that represents the intentional absence of any object value.
// It is often used to indicate that a variable should have an object value, but it currently doesn't.
// Unlike undefined, null is explicitly set by the programmer.


//useMemo:
// Purpose: Memoizes the result of a computation to avoid recalculating it on every render.
//useCallback:
// 


//d/f b/w package.json file and packagelock.json file
//package.json
// Purpose: The package.json file is the main configuration file for a Node.js project.
//  It contains metadata about the project and its dependencies, scripts, and other settings.

// package-lock.json
// Purpose: The package-lock.json file is automatically generated when you install dependencies using npm (starting from npm v5).
//  It locks the dependency tree to ensure consistent installations across different environments.

//npm
//npm (Node Package Manager) is a powerful tool used for managing JavaScript packages
//  (libraries and dependencies) in a Node.js environment.
//  It plays several important roles in modern web development:

// Yes, React is a JavaScript library used for building user interfaces (UIs), primarily for single-page applications (SPAs). 
// It was developed by Facebook (now Meta) and is maintained by both Meta and a large community of developers.


//library and framework
// Yes, a framework can be considered a collection of libraries, but with a key distinction: while a library 
// provides specific functionality (that you can call and use when needed), a framework not only provides libraries
//  but also enforces a structure, guidelines, and rules for how an application should be built.



//Yes, Redux is primarily used for global state management in JavaScript applications, particularly in React apps, but 
// it can be used with any JavaScript framework or library.

//void element
//In HTML, a void element (also known as a self-closing tag or 
// empty element) is an element that does not have any content or closing tag. These elements are "void" because they don't have any text, children, or inner content. They only consist of an
//  opening tag and do not require a corresponding closing tag.

//eg <img/>,<input/>,<br>,<hr> 

//indicate character set used by document

// UTF-8: This is the most commonly used character encoding on the web. It supports
//  almost all characters from all human languages and is highly recommended for modern web development.
//ISO-8859-1 (also known as Latin-1): This is an older character 
// encoding primarily used for Western European languages.
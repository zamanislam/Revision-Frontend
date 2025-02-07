// 1. Cell Padding (padding):
// Cell padding is the space between the content of a table cell and its border.
//  It defines the amount of space inside each cell around the content.

<table style="border: 1px solid black;">
    <tr>
        <td style="padding: 10px;">Cell 1</td>
        <td style="padding: 20px;">Cell 2</td>
    </tr>
</table>
  

// 2. Cell Spacing (border-spacing):
// Cell spacing is the space between the cells in a table.
//  It controls the distance between the edges of adjacent cells.

{/* <table style="border-spacing: 10px;">
    <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
    </tr>
</table> */}

 // data list tag and select tag

 // In HTML, the <datalist> and <select> tags are used to provide options for the user to choose from. However, they are used in slightly different ways to create input fields with predefined options.

// 1. <datalist> Tag:
// The <datalist> tag is used to provide a list of options that can be
//  suggested to the user when they type into an <input> field.
//  Unlike the <select> element, which creates a dropdown that the 
// user must choose from, <datalist> allows users to either pick an option from the list or type their own input.

//marquee
//  The <marquee> tag in HTML was used to create scrolling or moving 
// text or images. However, it is deprecated in modern HTML (HTML5) and is not recommended for use in new projects, as it is no longer considered a standard or accessible way to create animations. It's been replaced by 
//  CSS animations, which offer more control and flexibility.

//The @keyframes rule is used to create a smooth animation effect.

//use of no-validate
//The novalidate attribute is used in HTML within the <form> tag to
//  disable the browser's default form validation. When this attribute is present, the form will not be validated when the user submits it, even if the form contains input elements with built-in
//  validation attributes (such as required, minlength, pattern, etc.).

// attribute selectors
//Attribute selectors in CSS provide a flexible way to target elements
//  based on their attributes, making it easier to apply styles without the need for adding extra classes or IDs. They allow for matching specific attribute values or patterns,
//  offering a more dynamic and semantic way to style elements.


//First class function
//Assigned to variables: Functions can be assigned to a variable, just like any other value.

const greet1 = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet1("Alice")); // Output: Hello, Alice!

// Passed as arguments: Functions can be passed as arguments to other functions.

function sayHello(fn, name) {
    return fn(name);
}
const greet = (name) => `Hello, ${name}!`;
console.log(sayHello(greet, "Bob")); // Output: Hello, Bob!

//HOF
//A Higher-Order Function (HOF) in JavaScript is a function that either:

// Takes one or more functions as arguments, or
// Returns a function as its result.

// eg;  map().filter(),reduce()


// 2. Custom Higher-Order Functions
// A function that returns another function:

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10


// React and Angular

//  React:

// Type: A JavaScript library focused on building user interfaces (UI).
// Flexibility: Developers have more freedom to choose tools and libraries.
// Built using JavaScript (ES6+), but often paired with JSX (JavaScript XML), a syntax extension for
//  writing HTML-like code in JavaScript.

//Angular
// Type: A full-fledged front-end framework for building web applications.
// Opinionated: Follows a structured and predefined way of development.
// Uses TypeScript, a superset of JavaScript with strong typing and additional features.


//Browser List
// A browser list is a configuration used in modern web development to specify the range of browsers and 
// their versions that a project should support. Tools like Babel, Autoprefixer, 
// and PostCSS use the browser list to determine which JavaScript or CSS transformations are required to ensure compatibility.

// last 2 Chrome versions
// last 2 Firefox versions
// last 2 Safari versions

//render method
// The render() method is a key concept in React, responsible for describing what the user interface (UI) should look like.
//  It is commonly used in React components to return the structure of the UI as JSX.

class MyComponent extends React.Component {
    render() {
        return <h1>Hello, World!</h1>;
    }
}


//Code Splitting
//Code splitting is a technique in web development used to optimize the loading of JavaScript by splitting the 
// code into smaller bundles. Instead of delivering a single large JavaScript file to the client, 
// the application delivers only the necessary parts of the code (or "chunks") based on the current route or
//  feature being used. This improves performance, especially for large applications.

// React provides built-in support for code splitting through "dynamic imports" and tools like "React.lazy' 
// and "React Suspense".


// Similarity and Differences Between useState and useReducer
// Both useState and useReducer are React hooks used for managing state in functional components.

// Differences
// Aspect	useState	useReducer
// Use Case	Simple state management with primitive or simple values.	Complex state management or state with multiple sub-values.

// HOC: A function that accepts a component and returns a new, enhanced component.

// Stateful and Stateless Components in React
// In React, components can be categorized into stateful and stateless based on whether they manage their own state or not

// Stateful Components
// Definition: Stateful components manage their own local state using hooks or class-based state.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


// Stateless Components
// Definition: Stateless components do not manage any state of their own. They rely entirely 
// on props to receive data and functions from parent components.

function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
  }
  
  // Usage:
  <Greeting name="Alice" />;

//   Handling Multipart/Form-Data in Web Applications
// multipart/form-data is a media type used for submitting form data containing files, images, or other large binary data, 
// alongside regular text fields. It's widely used in forms where file uploads are required.

// Key Differences Between <figure> and <img>
// Feature	<img>	<figure>
// Purpose	Embeds an image into the document.	Groups content (like images or videos) with a caption.

// <figcaption>: Defines a caption or description for the content inside the <figure> tag.

<figure>
  <img src="cat.jpg" alt="A cute cat"/>
  <figcaption>A cute cat sitting on the windowsill.</figcaption>
</figure>

// The <manifest> tag was used in HTML5 to specify the location of a web application's cache manifest file.
//  However, it has been deprecated and is no longer supported in modern browsers.

//!important
// In CSS, there is an !important property that allows you to give higher priority to a particular CSS rule.
//  When you apply !important to a CSS declaration, it overrides any other rule for that property,
//   regardless of the specificity of the selector.
//  This can be useful when you need to ensure that a particular style takes precedence.

// p {
//     color: red !important;
//   }
  
//   div {
//     color: blue;
//   }
  
//   <!-- Here, even though the div element is defined with a color blue, the p element will still have red as its color -->
  

// CSS Transition
// A CSS transition 
// allows you to change property values smoothly (over a given duration) from one state to another when an event occurs. 
// It enhances the user experience by providing a more interactive and polished appearance, such as hover effects, focus styles,
//  or animating changes in layout and design.

/* Initial state */
// div {
//     width: 100px;
//     height: 100px;
//     background-color: blue;
//     transition: width 0.5s ease, background-color 0.5s ease;
//   }
  
//   /* Hover state */
//   div:hover {
//     width: 200px;
//     background-color: red;
//   }
  

// CSS transform Property
// The transform property in CSS allows you to apply 2D and 3D transformations to an element. It can move, rotate, scale,
//  and skew elements without affecting the document flow, meaning other elements will not be affected by the transformations.

// transform: translate(50px, 100px);  /* Moves the element 50px right and 100px down */
// transform: translateX(50px);         /* Moves the element 50px to the right */
// transform: translateY(-30px);        /* Moves the element 30px up */

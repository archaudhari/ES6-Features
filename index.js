// ECMAScript 6 (ES6), also known as ECMAScript 2015, is the latest version of the ECMAScript standard and introduces many new features to the JavaScript programming language. Here are some of the most significant features introduced in ES6

// let and const: New ways of declaring variables that offer improved scoping rules and better control over their lifetimes.

const PI = 3.14; // Cannot be reassigned
let x = 10; // Can be reassigned
x = 20;

// Arrow Functions: A shorthand for writing anonymous functions, making code more concise and readable.

// Traditional Function
let multiply = function(a, b) {
  return a * b;
};

// Arrow Function
let multiply = (a, b) => a * b;

// Template Literals: A way of embedding expressions within string literals, making it easier to construct strings with dynamic content.

let name = 'John';
let message = `Hello, ${name}!`; // Output: "Hello, John!"

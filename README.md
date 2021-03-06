[![npm version](https://img.shields.io/badge/npm-v1.4.3-blue)](https://www.npmjs.com/package/javascript-stack)
[![license](https://img.shields.io/github/license/krishheii/javascript-stack)](LICENSE-MIT)

# Javascript Stack
![Cerebrum.js logo](https://miro.medium.com/max/700/1*6_eujPeBQhaOcmrKuwSM2A.png)

> Javascript-stack is a package used for implementing Stack Data Structure in Javascript.

## Description

This package is a javascript implementation of the dynamic data structure known as a stack.  It includes all functions for how a stack works, which includes basic stack functions like push, pop, peek and so on.

In live projects, the usage of stacks is very common because it has a lot of benefits due to feature  LIFO(Last in First Out) below are some practical applications of stack data structure.



-   In compilers sometimes function call required to be maintained this could be achieved by stack opertations.

-   We commonly use undo and redo options which could be done by stack easily.

-   In code editors opening and closing of the bracket also could be done using stack.

-   The forward and backward in the browser could be done by the stack.
- Reversing a word could also be done by stack



#### Environment:

- Node.js
- React.js

---

## Basic Usage

Install with npm :

```bash
npm i javascript-stack
```

Basic usage example below. _Note: it does not cover all the available
methods, rather just highlights the main functionality to get up and running
with this data structure. For a description of all the methods, see the
API section._

```javascript
const Stack = require("javascript-stack");
 
// Create new stack
const stackOne = new Stack();

// Pushing element to the stack
stackOne.push(10); 
stackOne.push(20);

// Getting top element
const topElement = stackOne.peek();

// Removing an element from stack
stackOne.pop();

// Prints all the element in the stack
const stackElements = stackOne.showStack();
```

## API

**Available methods for a stack instance:**

Method Name | Return  | Description
--- | --- | --- 
`push()` | No | Pushes an element to the top of the stack.
`pop()` | No | Removes the last element from the stack.
`peek()` | Yes | Returns the top element of the stack.
`showStack()` | Yes | Prints all the element in the stack.
`isEmpty()` | Yes | Return a boolean value whether the stack is empty or not.
`size()` | Yes | Return the total size of the stack.
`clear()` | No | Clear all the values in the stack.
`maximumElement()` | Yes | Return the maximum integer element in the stack.
`minimumElement()` | Yes | Return the minimum integer element in the stack.
`toArray()` | Yes | Converte the stack into an array.
`reverseStack()` | No | Reverse the stack data.
`search()` | Yes | Check whether value found in the stack.
`cumilativeSum()` | Yes | Return the total sum of the values in a stack.
`sortStackAsce()` | No | This function will sort the array in ascending order.
`sortStackDesc()` | No | This function will sort the array in descending order.


## Contributing
If you would like to contribute to this project, take a clone from the main branch and create a new branch, make your changes, and raise a pull request to the main branch by describing the changes. Our team will review the changes and merge them into the main branch. 

## License

MIT &copy; Krishnanunny H
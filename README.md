# Javascript Stack

Javascript-stack is a package used for implementing Stack Data Structure in Javascript.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/javascript-stack) to install Javascript-stack.

```bash
npm i javascript-stack
```

## Usage

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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

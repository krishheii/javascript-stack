const Stack = require("./index");

console.log("Test case started");

const stackOne = new Stack();

console.log("Sucessfully Stack Created");

stackOne.push(100);

if (stackOne.peek() !== 100) {
  throw new Error("Push operation failed");
} else {
  console.log("Sucessfully value pushed to the stack");
}

stackOne.push(200);
stackOne.push(300);
stackOne.pop();

if(stackOne.peek()!==200) {
    throw new Error("Pop operation failed");
} else {
    console.log("Sucessfully removed value from the stack");
}

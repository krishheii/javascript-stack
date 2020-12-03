/* 
  MIT License

  Copyright (c) 2020 Krishnanunny H

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
 */

const Stack = require("./index");
console.log("Test case started");
const stackOne = new Stack();
console.log("Sucessfully Stack Created");

// Stack push operation test case

stackOne.push(100);
if (stackOne.peek() !== 100) {
  throw new Error("Push operation failed");
} else {
  console.log("Sucessfully value pushed to the stack");
}

// Stack pop operation test case

stackOne.push(200);
stackOne.push(300);
stackOne.pop();
if (stackOne.peek() !== 200) {
  throw new Error("Pop operation failed");
} else {
  console.log("Sucessfully removed value from the stack");
}

// Stack maximumElement operation test case

stackOne.push(500);
stackOne.push(700);
if (stackOne.maximumElement() !== 700) {
  throw new Error("MaximumElement operation failed");
} else {
  console.log("Sucessfully found maximum element in the stack");
}

// Stack minimumElement operation test case

if (stackOne.minimumElement() !== 100) {
  throw new Error("MinimumElement operation failed");
} else {
  console.log("Sucessfully found minimum element in the stack");
}
stackOne.pop();
stackOne.pop();
stackOne.pop();
stackOne.pop();
stackOne.pop();
stackOne.pop();
if (!stackOne.isEmpty()) {
  throw new Error("isEmpty operation failed");
} else {
  console.log("isEmpty opertaion working sucessfully");
}

// Stack size operation test case

const stackTwo = new Stack();
stackTwo.push(200);
stackTwo.push(300);
if (stackTwo.size() !== 2) {
  throw new Error("Size operation failed");
} else {
  console.log("Size operation sucessfully working");
}

// Stack clear operation test case

stackTwo.clear();
if (stackTwo.size() === 0) {
  console.log("Clear operation sucessfully working");
} else {
  throw new Error("Clear operation failed");
}

// Stack toArray operation test case
const stackThree = new Stack();
stackThree.push("a");
stackThree.push("b");
stackThree.push("c");
const stackArr = stackThree.toArray();
if (stackArr[0] === "a" && stackArr[1] === "b") {
  console.log("toArray operation sucessfully working");
} else {
  throw new Error("toArray operation failed");
}

// Stack reverseStack operation test case
const stackFour = new Stack();
stackFour.push(1);
stackFour.push(2);
stackFour.push(3);
stackFour.reverseStack();
const stackReverseArr = stackFour.toArray();
if (
  stackReverseArr[0] === 3 &&
  stackReverseArr[1] === 2 &&
  stackReverseArr[2] === 1
) {
  console.log("reverseStack operation sucessfully working");
} else {
  throw new Error("reverseStack operation failed");
}

// Stack search operation test case
const found = stackFour.search(2);
if(found===true) {
  console.log("search operation sucessfully working");
} else {
  throw new Error("search operation failed");
}

// Stack cumilative sum operation test case
const stackFive = new Stack();
stackFive.push(10); 
stackFive.push(20);
stackFive.push(20);
stackFive.push(5);
const totalSum = stackFive.cumilativeSum();
if(totalSum===55) {
  console.log("cumilative sum operation sucessfully working");
} else {
  throw new Error("cumilative sum operation failed");
}

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

module.exports = class Stack {
  constructor() {
    this.mainStack = [];
    this.maxStack = [];
    this.minStack = [];
    this.maxStack.push(Number.MIN_VALUE);
    this.minStack.push(Number.MAX_VALUE);
  }

  peek() {
    return this.mainStack[this.mainStack.length - 1];
  }
  
  push(value) {
    if (value) {
      const maxSoFar = this.maxStack[this.maxStack.length - 1];
      const minSoFar = this.minStack[this.minStack.length - 1];
      this.mainStack.push(value);

      // Storing Maximum Stack
      if (value > maxSoFar) {
        this.maxStack.push(value);
      } else {
        this.maxStack.push(maxSoFar);
      }

      // Storing Minimum Stack
      if (value < minSoFar) {
        this.minStack.push(value);
      } else {
        this.minStack.push(minSoFar);
      }
    }
  }

  pop() {
    if (this.mainStack.length > 0) {
      this.mainStack.pop();
      this.maxStack.pop();
      this.minStack.pop();
    }
  }

  showStack() {
    let str = "";
    if (this.mainStack.length === 0) {
      return (str = "Empty Stack");
    }
    for (let item of this.mainStack) {
      str = str + " " + item;
    }
    return str;
  }

  isEmpty() {
    if (this.mainStack.length === 0) {
      return true;
    }
    return false;
  }

  maximumElement() {
    return this.maxStack[this.maxStack.length - 1];
  }

  minimumElement() {
    return this.minStack[this.minStack.length - 1];
  }

  size() {
    return this.mainStack.length;
  }

  clear() {
    this.mainStack = [];
    this.maxStack = [];
    this.minStack = [];
    this.maxStack.push(Number.MIN_VALUE);
    this.minStack.push(Number.MAX_VALUE);
  }

  toArray() {
    return this.mainStack;
  }

  reverseStack() {
    if(this.mainStack.length>0) {
      this.mainStack.reverse();
    }
  }

  search(value) {
    if(this.mainStack.length>0) {
      const found = this.mainStack.find(element => element === value);
      if(found) {
        return true;
      }
      return false;
    }
    return false;
  }

  cumilativeSum() {
    let sum = 0;
    for(let item of this.mainStack) {
      if(typeof item === "number") {
        sum += item;
      }
    }
    return sum;
  }

  sortStackAsce() {
    this.mainStack.sort((a, b) => a - b);
  }

  sortStackDesc() {
    this.mainStack.sort((a, b) => b - a);
  }

};

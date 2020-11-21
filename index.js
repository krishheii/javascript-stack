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

};

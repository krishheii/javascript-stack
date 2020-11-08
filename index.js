module.exports = class Stack {
  constructor() {
    this.mainStack = [];
  }
  peek() {
    return this.mainStack[this.mainStack.length - 1];
  }
  push(value) {
    if (value) {
      this.mainStack.push(value);
    }
  }
  pop() {
    if (this.mainStack.length > 0) {
      this.mainStack.pop();
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
}



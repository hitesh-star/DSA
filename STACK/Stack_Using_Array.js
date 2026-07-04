class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.length ? this.items.pop() : null;
  }

  peek() {
    return this.items.length ? this.items[this.items.length - 1] : null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack size:", stack.size());
console.log("Top element:", stack.peek());
console.log("Popped:", stack.pop());
console.log("Stack empty:", stack.isEmpty());
stack.print();

//implementing a stack data structure using an array

class Stack {
    constructor() {
      this.items = []
    }
  
    push(element) {
      this.items.push(element)
    }
  
    pop() {
      if (this.items.length === 0) return "Underflow"
      return this.items.pop()
    }
  
    peek() {
      return this.items[this.items.length - 1]
    }//this method returns the topmost element in the stack.
  
    isEmpty() {
      return this.items.length === 0
    }
    
    size() {
      return this.items.length
    }

    // printStack() {
    //   return this.items.join(" ")// returns all items as a single string with a space in between them.
    // }

    printStack() {
      return this.items.toString()// returns all items as a single string with a default comma in between them.
    }
 
  }
  
  const stack = new Stack()
  stack.push(10)
  stack.push(20)
  stack.push(30)
  console.log('stack size :'+ stack.size());
  console.log('items in the stack : '+stack.printStack());  
  console.log('is the stack empty :'+stack.isEmpty());
  console.log('top most item in the stack : '+stack.peek());
  stack.pop()
  console.log('items in the stack :'+stack.printStack()); 

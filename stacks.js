export const Stacks = () => {
    
  // #. Stacks

  console.log("Stacks");

  // #. functions of stack: push, pop, peek, length

  // #. 1- Palindrome with stack JS
  var letters = []; // this is stack

  var word = "malayalam";
  var reverseWord = "";

  // put letters of word inot stack
  for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  // pop off the stack in reverse order
  for (var i = 0; i < word.length; i++) {
    reverseWord += letters.pop();
  }

  if (reverseWord === word) {
    console.log(word + " is a palindrome");
  } else {
    console.log(word + " is not palindrome");
  }

  // #. Ceating a stack with JS
  var Stack = function () {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
    };

    // Removes and returns the value at the end of the stack
    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      }

      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result; // the poped item
    };

    this.size = function () {
      return this.count;
    };

    // Returns the value at the end of the stack
    this.peek = function () {
      return this.storage[this.count - 1];
    };
  };

  var myStack = new Stack();

  myStack.push(1);
  myStack.push(2);
  console.log(myStack.peek());
  console.log(myStack.pop());
  console.log(myStack.peek());

  myStack.push("Ruhaim");
  console.log(myStack.size());
  console.log(myStack.peek());
  console.log(myStack.pop());
  console.log(myStack.peek());
};

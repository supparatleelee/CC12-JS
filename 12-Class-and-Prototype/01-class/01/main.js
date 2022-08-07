// class = like a blueprint
class Calculator {
  // class properties
  value = 0;
  // class methods
  // constructor will always run
  constructor(value) {
    this.value = value; // || 0
  }
  // (value) is no the same as value above (this one belongs to constructor function && that one belongs to class properties)
  //this.value = this = class (properties) = value (this constructor function)
  sum() {}

  subtract() {}

  multiply() {}

  divide() {}

  show() {}
}

//
let result = new Calculator(10); // () -> constructor function
// result will be an object that automatically has those properties and methods in that class

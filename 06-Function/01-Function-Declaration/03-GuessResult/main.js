let message = "Welcome to Thailand";

function logMessage(message) {
  //let message == local variable
  message = "Hello everybody";
  console.log(message); // * // Hello everybody because variable in function is more prioritied.
}

logMessage(message);
console.log(message); // ** // Welcome to Thailand
//global viriable === local variable will not affect the global variable.
//but if we don't put message as a parameter of the function, it will use the global variable and reassign it within the function which change the global variable's value.

let name = "John";

function sayHi(input) {
  console.log(name); // *** // John -- look for global variable because there is no let name
  name = input; //reassign the global variable
}

sayHi();
console.log(name); // **** // undefined
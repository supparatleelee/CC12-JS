function sayHi(name) {
  let name = 'Guest';
  console.log(name); // *
}

sayHi('Jim');

//Error
// because in sayHi(name) is already declared
// so let name again inside the function will make it error.

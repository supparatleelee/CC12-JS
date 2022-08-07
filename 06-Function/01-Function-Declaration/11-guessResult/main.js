function sayHi(age) {
  if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * // error -> log function body
console.log(sayHi(10)); // ** // alert Hi kid // but not return = log = undefined

function sayHi(name) {
  if (name) {
    alert('Hi ' + name);
    return;
  } else {
    return 'Who are you';
  }
}
console.log(sayHi('John')); // *** // alert Hi, John // return undefined
console.log(sayHi()); // **** // log "Who are you"

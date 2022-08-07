let fruits = ['Apples', 'Pear', 'Orange'];
// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push('Banana');
// what's in fruits?
console.log(fruits.length); // *
//4
//.length is meant for human to read. so it starts with 1, not 0
// the concept is same as object ==== = is not reassign, but link to the same values
// #1
// function multiply(...nums) {
//   let result = 1;
//   for (let num of nums) {
//     result *= num;
//   }
//   return result;
// }

// #2
const multiply = (...nums) => nums.reduce((acc, item) => acc * item, 1);

console.log(multiply(1, 2, 3, 4));

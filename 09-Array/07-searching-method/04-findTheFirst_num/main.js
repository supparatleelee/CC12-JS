const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5

let result = nums.find(function (item, index, array) {
  return item < 0;
});

console.log(result);

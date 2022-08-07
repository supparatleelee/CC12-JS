const arr = [1, 2, 4];
const newArr = arr;

arr[0] = 3;
console.log(newArr[0]); // *
// [3, 2, 4] -> [0] = 3
// beacuse same address === same concept as Object in JS
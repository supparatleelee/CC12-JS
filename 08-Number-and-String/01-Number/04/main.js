function convertNum(num) {
  return Math.floor(num * 100).toFixed(2) / 100; //to convert the string to number datatype
}

console.log(convertNum(3.1289));
console.log(convertNum(10)); // mine hasn't shown the decimals yet?**

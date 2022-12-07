function doubleAndReturnArgs(arr, ...nums) {
  //clone array
  const newArr = [...arr];
  //*2 ...nums (this parameter stores inputs as an array) = use array method.
  const arrNums = nums.map((item) => item * 2);
  //put it together to newArr
  newArr.push(...arrNums); // put ... because I don't want it to send the value as an array.
  return newArr;
}

//inputs are divided into 1. array 2. nums = ...nums
doubleAndReturnArgs([1, 2, 3], 4, 4);
// expexted result: [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4);
// expexted result: [2, 20, 8]

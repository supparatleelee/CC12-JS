function doubleAndReturnArgs(arr, ...nums) {
  //clone array
  const newArr = [...arr];

  return newArr;
}

doubleAndReturnArgs([1, 2, 3], 4, 4);
// expexted result: [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4);
// expexted result: [2, 20, 8]
